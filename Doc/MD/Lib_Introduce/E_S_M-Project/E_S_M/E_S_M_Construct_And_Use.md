# 创建并使用E-S-M

***

庞杂系统中所有操作离不开Element对象的状态发生改变、Set对象对Element对象的追踪，以及Map对象对Element对象的操作。本文将指导如何使用这些对象。

***

## 全局Element

使用默认构造函数完成全局Element对象的构造，并向系统内核递交构造映射（含有构造函数的Map元素）来完成自定义全局Element的使用。因为默认构造函数只支持将参数初始化为： {0, nullptr}，想要自定义构造一般可以选择以下两种路线：

***

### 1. 静态构造

静态构造方法指在程序初始化以及加载动态库的时候调用构造函数完成构造，这些方法均是直接在代码中完成调用，不需要向系统内核递交构造映射。

“程序初始化时”指该静态构造方法将在内核正式运行前由内部代码调用，适用于对内核的重新架构，或者构造小项目测试等场景中使用。在小项目测试代码的场景中，不需要启动系统内核，只能使用静态构造方法。

“动态库装载时”指加载动态库时使用DllMain函数，自定义的构造函数将在DllMain中被调用，完成初始化。虽然是在加载动态库时被调用，但在该语境下，动态方法指递交到内核中执行的方法，因为DllMain并不需要直接递交到内核，所以不视为动态方法。

### 2. 动态构造

一般知识库在装载到系统时，会向系统提交其构造信息，由内核进行解释并执行。在这个过程中，通过编写脚本调用构造函数，在内核中执行，便是动态构造。

***

而在环境卸载时，需要按照构造方式执行对应的析构方式。自定义构造Element对象时，选择直接在程序中构造，就要在程序执行结束时主动调用对应的析构函数。对于静态库加载时构造的元素，则在静态库卸载时调用对应的析构函数完成卸载。对于动态构造的方法，在知识库卸载时，同样向系统提交其析构信息，由内核解释并执行。

全局Element元素在代码编写时，其运行逻辑类似于普通的全局变量，可以直接通过变量名进行访问。但是想要在系统解释任务时使用全局Element元素，则需要为其创造引用。但是需要注意，因为通过引用传递的连接是比弱引用更弱一些（仅拷贝临时的地址信息），一旦原本的Element元素被销毁或者重构，则必须通过指定的方法重新建立引用关系。

***

## 局部Element

在代码编写中，一般需要构造大量的局部Element对象来完成各种中间操作。在代码中调用Map方法时，就需要为其提供符合规范的局部Element。局部Element的生命周期在代码块中，需要在使用前调用构造方法进行初始化，结束时调用析构方法完成释放。

以下是三种常用的回收策略：

***

### 1. 简单结构的元素

对于简单结构的元素（指其只在KeySpace成员指针上申请内存空间），可以不显示调用析构函数，而是在代码块结束时自动调用默认的析构函数来完成内存释放。

示例：

```C++
Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);
```

这种写法等价于：

```C++
Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);

UIntElement.~Element();
```

```C++
Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);

ReleaseElementFunction(EmptyElement, UIntElement);
```

### 2. 复杂结构的元素

对于复杂结构的元素，其内部往往申请了多个内存空间，需要调用专门的析构函数来释放元素。这个时候需要在使用完成后显示的调用其对应的析构函数。

示例代码中使用元素环境检索器构造函数构造，并通过元素环境检索器析构函数完成释放。示例：

```C++
Element ESMElement;
NewElementEnvironemntSearcherFunction(EmptyElement, ESMElement);

ReleaseElementEnvironmentSearcherFunction(EmptyElement, ESMElement);
```

### 3. 引用元素

使用|=符号或者引用函数构造的元素，需要在程序结束时显示的解除引用。因为内核并不记录引用信息，所以需要手动释放以避免出现重复释放空间等内存问题。

示例代码中构造无符号整型元素，并为其创建引用元素。然后解除引用，并释放无符号整型元素。示例：

```C++
Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);

Element UIntQuote;
UIntQuote |= UIntElement;

ZeroElementFunction(EmptyElement, UIntQuote);
ReleaseElementFunction(EmptyElement, UIntElement);
```

***

## Set和Map的封装

在编写代码时，可以直接访问内部的Set和Map结构体。但是在系统内核中，任何方法都不接受Set、Map结构作为参数，想要操作这些结构体，必须提供与之对应的元素封装。例如将Set结构体封装为Set元素，所有Set元素属于Set集合，将Map结构体封装为Map元素，所有Map元素属于Map集合。

在庞杂项目实际开发中，几乎所有的方法都写成Map格式，涉及到Set、Map结构体的操作也都通过将其封装为元素完成。同时，提供宏GetSetElement()，以及宏GetMapElement()来辅助编写具体的操作代码。

### 封装Set和Map

对于Set和Map的封装本质上仍然可以看作是对Element的一种特殊构造，这种构造并不直接提供方法，用户可以自由编写方法。想在代码中使用这种封装，则需要满足静态构造的标准，而想要在内核中使用，则需要满足动态构造的标准。

但需要注意在释放时，分辨Set和Map结构体是否是全局变量。如果Set和Map结构体是全局变量，元素对其的封装实际上是一种引用，需要直接解除引用。建议将Set、Map的管理和对其进行元素封装的管理分开进行，以避免内存管理混乱。

另外，因为Set结构体需要指明参数，如何释放其参数需要引入额外的信息，所以不建议构造任何默认的ReleaseSet映射来进行释放操作。或者，构造接受释放参数映射的释放映射来完成释放。

提供封装相关的工具，可以在系统内核中完成一些高级操作。例如热编译映射的测试。

***

示例代码中构造一个默认的Set结构体和Map结构体，并分别使用元素SetElement和元素MapElement完成封装。同时，使用元素UIntSetElement封装集合UIntSet，使用元素NewUIntElementElement封装映射NewUInt（封装时注意包含头文件）。然后，按照对应的释放方法完成释放。

示例：

```C++
Set EmptySet;
Map EmptyMap;

Element SetElement(sizeof(Set), (char*)&EmptySet);
Element MapElement(sizeof(Map), (char*)&EmptyMap);

Element UIntSetElement(sizeof(Set), (char*)&UIntSet);
Element NewUIntElementElement(sizeof(Map), (char*)&NewUIntElement);

ZeroElementFunction(EmptyElement, SetElement);
ZeroElementFunction(EmptyElement, MapElement);
ZeroElementFunction(EmptyElement, UIntElement);
ZeroElementFunction(EmptyElement, NewUIntElementElement);
```
