# 元素环境接口标准

***

总元素环境检索器需要一个模块来提供一个元素的容器，可以在这个容器中随机访问，并操作对应槽位上的元素。在庞杂系统中，这个模块需求由元素环境负责，所以以元素环境为标题作为接口标准的基础。后续在拓展时，可以随便选用各种容器，只要接口标准符合要求即可。

本标准的设立建立在总元素环境检索器的运行逻辑上，如果优化或者调整运行逻辑，便可以按照逻辑来修改标准。这也导致了一个问题，在代码中编写时需要经常性地引入总元素环境检索器的结构命名空间，来获取接口标准的顺序。

在初始版本中，总元素环境检索器按照自身的要求提出了下面的所有标准。首先，方法接口统一按照映射的形式，每一个接口都要求按照对应的标准提供映射元素。总元素环境检索器获取接口对应的映射后，便可以直接使用解析宏等方式完成操作。而元素环境的实体则需要作为元素，转交到总元素环境检索器的固定位置上，那里会专门预留一个元素的插槽。

在具体实现上，总元素环境检索器为接口提供了一个元素序列插槽，要求元素环境模块要按照相应的顺序注册映射即可。下面按照该顺序逐个介绍接口。

***

## 接口总览及顺序：

元素环境需要完成以下七个映射：

```C++
namespace EES_Base_Struct{

    constexpr unsigned int EEExpand         = 0;

    // 元素环境拓展接口，申请增加一个新的元素槽位

    constexpr unsigned int EEReadElement    = 1;

    // 元素环境读取元素接口，从指定地址读取元素

    constexpr unsigned int EEGetElement     = 2;

    // 元素环境获取元素接口，从指定地址获取元素

    constexpr unsigned int EEPutElement     = 3;

    // 元素环境存入元素接口，向指定地址存入元素

    constexpr unsigned int EERetain         = 4;

    // 元素环境缩容接口，缩小容器大小

    constexpr unsigned int EENewAddress     = 5;

    // 元素环境新建地址元素映射，创建新的元素环境所使用的地址元素

    constexpr unsigned int EEReleaseAddress = 6;

    // 元素环境释放地址元素映射，释放元素环境所使用的地址元素

}
```

***

### 一些需要指明的集合

在整个接口标准中，不但需要确立映射的标准，还需要确定这些映射所使用的集合。接口标准使用到的集合包括：

- 元素环境集合（容器集合）
- 无符号整型元素集合（容器所使用的地址集合）

***

### 元素环境拓展映射接口

元素环境拓展映射接受容器集合为定义域，地址集合为值域。该映射期望在容器元素中申请一个新的元素插槽，并将对应的地址信息赋值给值域地址元素上。例如原始版本所使用的元素环境拓展映射：

```C++
Map ElementEnvironmentExpand(&ElementEnvironmentSet, &UIntSet, ElementEnvironmentExpandFunction);
```

元素环境拓展映射将会在总元素环境检索器在注册新的元素时被使用，用于在元素环境层分配一个新的槽位。那么按照该标准拓展，该接口只需要保证容器可以分配一个槽位并返回地址信息赋值给值域即可。

***

### 元素环境读取元素映射接口

元素环境读取元素映射接受元素序偶集合为定义域，其元素序偶格式为<地址集合, 容器集合>，接受空元素集合为值域。该映射按照地址信息从容器元素中读取元素，将其引用传递到值域空元素上。例如原始版本所使用的元素环境读取元素映射：

```C++
Map ElementEnvironmentReadElement(&OrderedPairSet, &NullElementSet, ElementEnvironmentReadElementFunction);
```

总元素环境检索器在读取元素的元素环境层中调用该映射，在中间层完成对元素容器地址的检索并返回值。此时使用该地址，便可以通过调用映射来完成读取。

***

### 元素环境获取元素映射接口

元素环境获取元素映射接受元素序偶集合为定义域，其元素序偶格式为<地址集合, 容器集合>，接受空元素集合为值域。该映射按照地址信息从容器元素中获取元素，将其转交传递到值域空元素上。例如原始版本所使用的元素环境获取元素映射：

```C++
Map ElementEnvironmentGetElement(&OrderedPairSet, &NullElementSet, ElementEnvironmentGetElementFunction);
```

总元素环境检索器在获取元素时的元素环境层中调用该映射，在中间层完成对元素容器地址的检索并返回值。此时使用该地址，便可以通过调用映射来完成获取。

***

### 元素环境存放元素映射接口

元素环境存放元素映射接受元素序偶集合为定义域，其元素格式为<地址集合，全集>，接受容器集合为值域。该映射按照地址信息将元素转交传递到值域容器元素的对应位置上。例如原始版本所使用的元素环境存放元素映射：

```C++
Map ElementEnvironmentPutElement(&OrderedPairSet, &ElementEnvironmentSet, ElementEnvironmentPutElementFunction);
```

总元素环境检索器在存放元素时的元素环境层中调用该映射，在中间层完成对元素容器地址的检索并返回值。此时使用该地址，便可以通过调用映射来完成存放。

***

### 元素环境缩容映射接口

元素环境缩容映射接受地址集合为定义域，容器集合为值域。该映射按照定义域指明的容器末尾地址，将值域容器的容量缩小。这要求容器可以按照末尾地址信息来计算最终缩容的大小，一般使用数组等稠密型容器。例如原始版本所使用的元素环境缩容映射：

```C++
Map ElementEnvironmentRetain(&UIntSet, &ElementEnvironemntSet, ElementEnvironmentRetainFunction);
```

总元素环境检索器在缩容时的元素环境层中调用该映射，在中间层计算出容器末尾地址信息并返回值。此时调用该映射，根据末尾地址确定容器如何缩减容量。

***

### 元素环境创建地址元素映射

元素环境新建地址元素映射接受空元素集合为定义域和值域。该映射在值域空元素上创建地址元素，以用来承载地址信息。例如原始版本所使用的新建无符号整型映射：

```C++
Map NewUIntElement(&NullElementSet, &NullElementSet, NewUIntElementFunction);
```

总元素环境检索器在运行逻辑的多个地方都涉及到对地址元素的使用，在使用发生前，应该声明并使用该映射完成构造和初始化。

***

### 元素环境释放地址元素映射

元素环境释放地址元素映射接受空元素集合为定义域，地址集合为值域。该映射分析并释放值域地址元素。例如原始版本所使用的释放元素映射，该映射可用于释放无符号整型元素：

```C++
Map ReleaseElement(&NullElementSet, &UniversalSet, ReleaseElementFunction);
```

总元素环境检索器在运行逻辑的多个地方都涉及到对地址元素的时候，在使用完成后，应该调用该映射完成释放。

***

## 关于注册标准

总元素环境检索器已经预留了槽位，只需要将对应的映射元素存放到槽位上，在运行时便可以直接调用。总元素环境检索器提供的方法里则要求元素环境模块按照一定的顺序，将映射元素打包成元素序列。总元素环境检索器在注册元素环境时，会直接将打包好的映射包直接转交到对应槽位。

以原始版本所使用的映射集注册映射为例，在实际使用中需要按以下步骤完成注册开发：

### 1. 使用总元素环境检索器命名空间

因为该标准所使用的宏定义在总元素环境检索器结构命名空间（EES_Base_Struct）中，所以在构建时需要主动引入该命名空间。

```C++
using namespace EES_Base_Struct;
```

### 2. 构造包体

这一步需要构造元素序列，即映射集的包（MapPackage），并在每一个插槽上都赋予映射元素大小。因为每一个插槽都是统一的映射元素，且原映射未经过封装，所以在构造时统一赋值。

```C++
Element MapPackage;

Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);

GetUIntElement(UIntElement) = EEMapSize;
UIntNewElementOrderFunction(UIntElement, MapPackage);

for(unsigned int midI = 0;midI < EEMapSize;midI++){
    GetEleOrder(MapPackage, midI).Size = sizeof(Map);
}
```

### 3. 完成映射引用传递

完成包体的构造后，只需要将映射结构的地址赋值即可。

```C++
GetEleOrder(Range, EEExpand         ).KeySpace = (char*)&ElementEnvironmentExpand;
GetEleOrder(Range, EEReadElement    ).KeySpace = (char*)&ElementEnvironmentReadElement;
GetEleOrder(Range, EEGetElement     ).KeySpace = (char*)&ElementEnvironmentGetElement;
GetEleOrder(Range, EEPutElement     ).KeySpace = (char*)&ElementEnvironmentPutElement;
GetEleOrder(Range, EERetain         ).KeySpace = (char*)&ElementEnvironmentRetain;
GetEleOrder(Range, EENewAddress     ).KeySpace = (char*)&NewUIntElement;
GetEleOrder(Range, EEReleaseAddress ).KeySpace = (char*)&ReleaseElement;
```

***

### 4. 另一种实现

在一些情况下，映射作为结构存在，没有经过元素封装。但在另一些情况下，映射已经完成了封装。那么便不需要再按照这种赋值的写法来完成，而是直接使用引用传递来完成赋值。

***

## 注册

完整的注册流程需要参考总元素环境检索器注册元素环境映射。映射接受元素序偶集合为定义域，其结构为<元素容器集合，映射包集合>，接受总元素环境检索器集合为值域。该映射解析总元素环境检索器元素结构，将定义域的元素容器元素和映射包元素转交传递到对应槽位。

```C++
Map PutEESEnvironment(&OrderedPairSet, &ElementEnvironmentSearcher, PutEESEnvironmentFunction);
```

这里调用注册需要封装到元素序偶中，一般可以按照以下流程即可完成注册：

```C++
Element ParaPair;
NewOrderedPairFunction(EmptyElement, ParaPair);

GetEleOrder(ParaPair, 0) &= EnvironmentElement;
GetEleOrder(ParaPair, 1) &= MapPackage;
PutEESEnvironemntFunction(ParaPair, EESElement);
```

需要注意，注册步骤仅包括将元素环境注册到总元素环境检索器中。元素环境元素 EnvironmentElement 以及映射包元素 MapPackage 都需要事先完成构造。这也意味着在拓展时，可以任意设计容器以及构造思路，因为接口标准只关注这么一小部分的规范。
