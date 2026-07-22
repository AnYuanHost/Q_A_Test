# Thread_Base联合案例

***

在该案例中，将会演示庞杂系统内核是如何使用完成单个指令的线程管理的。在该案例中，组建一个标准的可执行映射，并为其提供参数，以及映射信息。随后调用管理线程的映射来完成整个线程执行的管理。

但是在实际实现时，并没有直接使用线程元素。而是使用一套接口，只要提供的方法可以完成线程管理的整个操作即可。本项目在实现路线上并未实际使用线程元素，但用户可以拓展一套方法来做涉及线程元素的方案。

***

## 1. 准备工作：

在准备工作阶段，需要完成以下步骤：封装UIntAdd映射，构建可执行映射并完成组装。以及声明一个存放线程信息的槽位：Thread_Inf，用于后面的操作。

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

GetEleOrder(ParaPair, 0) |= UIntA;
GetEleOrder(ParaPair, 1) |= UIntB;

GetEleOrder(ActiveMapElement, 0) &= ParaPair;
GetEleOrder(ActiveMapElement, 1) &= UIntC;
GetEleOrder(ActiveMapElement, 2) |= {sizeof(size), (char*)&UIntAdd};

Element Thread_Inf;

Element BoolElement;
NewBoolElementFunction(EmptyElement, BoolElement);
```

声明一个映射元素组成的序列，用于模拟系统内核提供的操作接口。需要注意，这里因为使用了另外一个项目中的命名空间，所以需要引入命名空间PollingDrivenZero_Struct。这里需要链接静态库：Polling_Base。

```C++
#include"All_Polling_Base.h"

using namespace PollingDrivenbZero_Struct;

Element MapOrder;

LoginThreadMapFunction(EmptyElement, MapOrder);
```

***

## 2. 执行与检测

完成准备工作后，便可以围绕线程插槽元素Thread_Inf展开一系列的操作。调用操作接口序列中的线程运行接口，该接口接受可执行映射元素，为其分配线程并运行，并将可供监控的信息存放到值域元素上。

```C++
GetMapElement(GetEleOrder(MapOrder, PDZ_Thread_Active)).MapActive(
    ActiveMapElement,
    Thread_Inf
);
```

为了检测该映射是否完成，这里调用操作接口序列中的检测接口，该接口接受插槽上的元素，并判断其是否运行完成。

```C++
while(1){
    GetMapElement(GetEleOrder(MapOrder, PDZ_Thread_Test)).MapActive(
        Thread_Inf,
        BoolElement
    );

    if(GetBoolElement(BoolElement)){
        break;
    }
}
```

***

## 3. 收尾工作

除了要将可执行映射元素相关的各个元素转交传递回原元素的位置上，还需要针对线程插槽进行专门的处理。这里便调用PDZ_Thread_Release来完成元素Thread_Inf的收尾工作。

```C++
GetMapElement(GetEleOrder(MapOrder, PDZ_Thread_Release)).MapActive(
    EmptyElement,
    Thread_Inf
);
```

```C++
ParaPair &= GetEleOrder(MapActiveElement, 0);
UIntC &= GetEleOrder(MapActievElement, 1);

ZeroElementFunction(EmptyElement, GetEleOrder(MapActiveElement, 2));
```

***

## 4. 案例代码

案例代码中，需要注意静态库方面应链接"Math.lib", "Polling_Base.lib"，并引入其头文件。

```C++
#include"Math/h.cpp/All_Math.h"
#include"Polling_Base/h.cpp/All_Polling_Base.h"

using namespace PollingDrivenbZero_Struct;

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
GetEleOrder(ActiveMapElement, 2) |= {sizeof(size), (char*)&UIntAdd};

Element Thread_Inf;

Element BoolElement;
NewBoolElementFunction(EmptyElement, BoolElement);

Element MapOrder;

LoginThreadMapFunction(EmptyElement, MapOrder);

GetMapElement(GetEleOrder(MapOrder, PDZ_Thread_Active)).MapActive(
    ActiveMapElement,
    Thread_Inf
);

while(1){
    GetMapElement(GetEleOrder(MapOrder, PDZ_Thread_Test)).MapActive(
        Thread_Inf,
        BoolElement
    );

    if(GetBoolElement(BoolElement)){
        break;
    }
}

GetMapElement(GetEleOrder(MapOrder, PDZ_Thread_Release)).MapActive(
    EmptyElement,
    Thread_Inf
);

ParaPair &= GetEleOrder(MapActiveElement, 0);
UIntC &= GetEleOrder(MapActievElement, 1);

ZeroElementFunction(EmptyElement, GetEleOrder(MapActiveElement, 2));
```
