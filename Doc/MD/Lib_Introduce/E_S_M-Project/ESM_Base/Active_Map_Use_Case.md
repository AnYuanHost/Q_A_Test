# 可执行映射的使用

***

在内核中，任何一个待执行的映射都会被封装成一个可执行映射元素，并交由执行映射完成执行。而相对的，在代码编写中，任何一个通用的映射接口，都可以使用这一套方法来完成对具体映射方法的解释和执行。在本案例中，将通过构建方法来完成操作。

但是，本案例使用了无符号整型的加减映射，在编写该案例时，需要导入Math数学库。

***

## 1. 准备工作

在准备工作中，声明三个无符号整型元素：UIntA, UIntB, UIntC并初始化，用于后续的计算。声明一个元素序偶元素ParaPair用于为映射传递参数。声明可执行映射ActiveMapElement来作为接口执行映射。

```C++
Element UIntA, UIntB, UIntC;

NewUIntElementFunction(EmptyElement, UIntA);
GetUIntElement(UIntA) = 10;

NewUIntElementFunction(EmptyElement, UIntB);
GetUIntElement(UIntB) = 5;

NewUIntElementFunction(EmptyElement, UIntC);

Element ParaPair;
NewOrderedPairFunction(EmptyElement, ParaPair);

Element ActiveMapElement;
NewActiveMapFunction(EmptyElement, ActiveMapElement);
```

## 2. 提供可执行映射的信息

现在为可执行应色号元素ActiaveMapElement提供其执行所需的所有信息，包括定义域信息、值域信息以及映射信息。

```C++
GetEleOrder(ParaPair, 0) |= UIntA;
GetEleOrder(ParaPair, 1) |= UIntB;

GetEleOrder(ActiveMapElement, 0) &= ParaPair;

GetEleOrder(ActiveMapElement, 1) &= UIntC;

GetEleOrder(ActiveMapElement, 2) = {sizeof(Map), (char*)&UIntAdd};
```

如果需要执行减函数，则需要在最后传入映射信息时传入减函数UIntSub的地址信息。

```C++
GetEleOrder(ActiveMapElement, 2) |= {sizeof(Map), (char*)&UIntSub};
```

## 3. 执行

封装完成后，便可以调用执行映射ActiveMapExecute来执行：

```C++
ActiveMapExecuteFunction(EmptyElement, ActiveMapElement);
```

## 4. 收尾工作

因为在执行时，需要将映射的定义域参数和值域参数转交传递进去，为了保证封闭，需要在执行完成后重新转交传递回原本的元素。

```C++
ParaPair &= GetEleOrder(ActiveMapElement, 0);

UIntC &= GetEleOrder(ActiveElement, 1);

ZeroElementFunction(EmptyElement, GetEleOrder(ActiveElement, 2));
```

因为映射信息传入时等价于传入了映射元素的引用，规范下只需要调用归零函数。

在此时，可以查看UIntC元素的无符号整型值。只需要调控传入的加映射还是减映射，便可以决定最终结果是加的结果还是减的结果。

## 5. 代码的等价写法

而在代码中，可以使用GetMapElement映射来完成解析，即上述代码中可以不将ParaPair、UIntC参数传入传出。而是使用下面这种写法：

```C++
GetMapElement(ActiveMapElement).MapActive(ParaPair, UIntC);
```

而2、3、4节代码关键点在于其参数的传入传出可以通过递交到系统内核的参数名来替换，这就保证了ActiveMapExecute的写法可以直接递交到系统内核中执行，而下面这种代码中的等价写法并不能递交到内核。

## 6. 案例代码

案例代码中使用宏If_Select的值来调控传入加映射还是减映射。

```C++
#include"Math/h.cpp/All_Math.h"
#include"E_S_M/h.cpp/All_E_S_M.h"

#define If_Add 0
#define If_Sub 1

#define If_Select If_Add

Element UIntA, UIntB, UIntC;

NewUIntElementFunction(EmptyElement, UIntA);
GetUIntElement(UIntA) = 10;

NewUIntElementFunction(EmptyElement, UIntB);
GetUIntElement(UIntB) = 5;

NewUIntElementFunction(EmptyElement, UIntC);

Element ParaPair;
NewOrderedPairFunction(EmptyElement, ParaPair);

Element ActiveMapElement;
NewActiveMapFunction(EmptyElement, ActiveMapElement);

GetEleOrder(ParaPair, 0) |= UIntA;
GetEleOrder(ParaPair, 1) |= UIntB;

GetEleOrder(ActiveMapElement, 0) &= ParaPair;

GetEleOrder(ActiveMapElement, 1) &= UIntC;

#if If_Select == If_Add

GetEleOrder(ActiveMapElement, 2) = {sizeof(Map), (char*)&UIntAdd};

#else

GetEleOrder(ActiveMapElement, 2) = {sizeof(Map), (char*)&UIntSub};

#endif

ActiveMapExecuteFunction(EmptyElement, ActiveMapElement);

ParaPair &= GetEleOrder(ActiveMapElement, 0);

UIntC &= GetEleOrder(ActiveElement, 1);

ZeroElementFunction(EmptyElement, GetEleOrder(ActiveElement, 2));
```