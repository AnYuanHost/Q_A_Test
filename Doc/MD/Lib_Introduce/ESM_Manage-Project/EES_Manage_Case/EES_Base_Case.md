# 总元素环境检索器基础案例

***

总元素环境检索器的生命周期跟随智能体的承载元素零轮询机。在开始构造智能体时，便为其构造总元素环境检索器。智能体完成所有任务准备注销时，也会先注销总元素环境检索器。本案例关注于总元素环境检索器的整个生命周期，包括创建，使用和注销。在使用阶段，也会展示超索引子检索器和8比特子检索器的使用。

***

## 1. 准备工作

在准备工作阶段，引入对应的头文件与命名空间，并且构造整个案例所需的各种参数元素。

***

### 引入头文件

为了使用基本元素操作和数学操作，需要引入"All_E_S_M.h"和"All_Math.h"

本案例使用总元素环境检索器、元素环境、超索引子检索器、8比特子检索器，需要引入以下头文件：

- EES_Base.h
- ElementEnvironment.h
- SubEES_SuperIndex.h
- SubEES_8Bit.h

***

### 构造参数

为了方便进行各种操作，在这一步预先对各种中间参数进行构造：

```C++
unsigned int midI;

Element BoolElement;
NewBoolElementFunction(EmptyElement, BoolElement);
Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);

Element ParameterPair;
NewOrderedPairFunction(EmptyElement, ParameterPair);

Element ParameterOrder;
GetUIntElement(UIntElement) = 3;
UIntNewElementOrderFunction(UIntElement, ParameterOrder);

Element ZeroElement;
Element SubEESElement;
```

***

## 2. 构造

总元素环境检索器可以直接调用构造映射完成构造，同时完成元素环境等配套模块的装配。在本案例中，还需要完成一系列需要使用的元素的声明与构造，包括所使用的子检索器的超索引等等。

***

### 构造总元素环境检索器

这一步需要构造总元素环境检索器元素 EESElement ，直接调用构造映射完成。

```C++
Element EESElement;
NewElementEnvironmentSearcherFunction(EmptyElement, EESElement);
```

***

### 构造元素环境并打包传入

构造元素环境，打包映射包，并将其传入到总元素环境检索器元素 EESElement中。因为构造简单，所以在案例代码中直接构造到元素序偶元素 ParameterPair 中。

```C++
NewElementEnvironmentFunction(EmptyElement, GetEleOrder(ParameterPair, 0));
ElementEnvironmentLoginMapFunction(EmptyElement, GetEleOrder(ParameterPair, 1));

PutEESEnvironmentFunction(ParameterPair, EESElement);
```

***

### 计算子检索器的超索引

在本案例中，总元素环境检索器使用两个子检索器，所以为这两个子检索器分配对应的超索引检索信息以满足检索需求。

```C++
Element SuperIndexSubEESSuperIndex;
GetUIntElement(UIntElement) = 1;
UIntToSuperIndexFunction(UIntElement, SuperIndexSubEESSuperIndex);

Element _8BitSubEESSuperIndex;
GetUIntElement(UIntElement) = 2;
UIntToSuperIndexFunction(UIntElement, _8BitSubEESSuperIndex);
```
***

### 构造测试用数据的结构

因为在后续测试中，需要事先声明各个检索器的测试用例中的检索信息，而只需要在使用时直接修改其数据即可。其中，超索引子检索器的检索信息是变长的，所以全部在使用时临时计算，这里仅声明。但8比特子检索器的检索信息是定长的，可以任意使用。

```C++
Element SuperIndexElement;

Element _8BitElement;
New8BitElementFunction(EmptyElement, _8BitElement);
```

***

## 构造子检索器并完成注册

在本案例中，使用超索引子检索器和8比特子检索器。但在庞杂系统中，还需要使用字典序子检索器，因为字典序子检索器的实现逻辑和超索引子检索器基本相同，所以在本案例中就不过多阐述了。

***

### 构造并注册超索引子检索器

在注册时需要提供超索引检索信息，具体的超索引子检索器元素，以及总元素环境检索器要求提供的映射包。通过三元参数序列 ParameterOrder 可以完成注册时的封装，再加上这些元素都会转交传递给值域元素，所以这里直接在三元参数序列上进行构造。

而因为部分子检索器的构造比较复杂，所以使用中间变量 SubEESElement 来中转。

```C++
NewSuperIndexSubEESDefaultParameterFunction(EmptyElement, ZeroElement);
NewSuperIndexSubEESFunction(ZeroElement, SubEESElement);

CopyElementFunction(SuperIndexSubEESSuperIndex, GetEleOrder(ParameterOrder, 0));
GetEleOrder(ParameterOrder, 1) &= SubEESElement;
LoginSuperIndexSubEESMapSetFunction(EmptyElement, GetEleOrder(ParameterOrder, 2));

LoginSubEESEESFunction(ParameterOrder, EESElement);
```

***

### 构造并注册8比特子检索器

8比特子检索器得注册同样需要提供超索引检索信息，具体得超索引子检索器元素，以及映射包。同样通过三元参数序列来完成注册时得封装。

```C++
New8BitSearcherFunction(EmptyElement, SubEESElement);

CopyElementFunction(_8BitSubEESSuperIndex, GetEleOrder(ParameterOrder, 0));
GetEleOrder(ParameterOrder, 1) &= SubEESElement;
LoginMap8BitSearcherFunction(EmptyElement, GetEleOrder(ParameterOrder, 2));

LoginSubEESEESFunction(ParameterOrder, EESElement);
```

***

## 3. 操作

在完成了装配后，便可以在这一部分进行操作和测试工作，正式开始关于总元素环境检索器的使用案例。

***

### 两个子检索器语境下的注册

超索引子检索器在注册时，将0~100的无符号整型元素对应的超索引元素作为检索信息，完成注册。

```C++
for(midI = 0; midI < 100; midI++){
    GetUIntElement(UIntElement) = midI;

    UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

    GetEleOrder(ParameterPair, 0) |= SuperIndexSubEESSuperIndex;
    GetEleOrder(ParameterPair, 1) |= SuperIndexElement;

    LoginElementEnvironmentSearcherFunction(ParameterPair, EESElement);

    ReleaseElementFunction(EmptyElement, SuperIndexElement);
}
```

8比特子检索器在注册时，将1~101的无符号整型元素对应的8比特元素作为检索信息，完成注册。这是因为0对应的8比特元素被视为置懒标志，所以不能设置为0。

```C++
for(midI = 0; midI < 100; midI++){
    Get8BitElement(_8BitElement) = midI + 1;

    GetEleOrder(ParameterPair, 0) |= _8BitSubEESSuperIndex;
    GetEleOrder(ParameterPair, 1) |= _8BitElement;

    LoginElementEnvironmentSearcherFunction(ParameterPair, EESElement);
}
```

***

### 构造实际元素

在完成注册后，元素环境中已经注册了200个空元素实体。那么便可以通过总元素环境检索器的各种方法获得这些元素并进行操作。在本案例中，构造200个无符号整型元素并按顺序赋值。在实际操作时，统一使用 ZeroElement 元素进行中转。ZeroElement被尽可能的保持

```C++
for(midI = 0; midI < 100; midI++){
    GetUIntElement(UIntElement) = midI;
    UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

    NewUIntElementFunction(EmptyElement, ZeroElement);
    GetUIntElement(ZeroElement) = midI * 2;

    GetEleOrder(ParameterOrder, 0) |= SuperIndexSubEESSuperIndex;
    GetEleOrder(ParameterOrder, 1) |= SuperIndexElement;
    GetEleOrder(ParameterOrder, 2) &= ZeroElement;

    PutElementEnvironmentSearcherFunction(ParameterOrder, EESElement);

    ReleaseElementFunction(EmptyElement, SuperIndexElement);

    Get8BitElement(_8BitElement) = midI + 1;

    NewUIntElementFunction(EmptyElement, ZeroElement);
    GetUIntElement(ZeroElement) = midI * 2 + 1;

    GetEleOrder(ParameterOrder, 0) |= _8BitSubEESSuperIndex;
    GetEleOrder(ParameterOrder, 1) |= _8BitElement;
    GetEleOrder(ParameterOrder, 2) &= ZeroElement;

    PutElementEnvironmentSearcherFunction(ParameterOrder, EESElement);
}
```

***

### 读取并打印

在完成实际元素构造后，在这里进行读取和打印。输出使用std::cout来完成，需要注意使用<iostream>头文件。

读取元素时都需要使用零元素 ZeroElement 来作为中转。因为读取映射获取的是引用，所以使用完成后调用 ZeroElement 映射解除引用。

```C++
#include<iostream>
```

```C++
for(midI = 0; midI < 100; midI++){
    GetUIntElement(UIntElement) = midI;
    UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

    GetEleOrder(ParameterOrder, 0) |= SuperIndexSubEESSuperIndex;
    GetEleOrder(ParameterOrder, 1) |= SuperIndexElement;
    GetEleOrder(ParameterOrder, 2) |= EESElement;
    ReadElementEnvironmentSearcherFunction(ParameterOrder, ZeroElement);

    std::cout << GetUIntElement(ZeroElement) << std::endl;

    ReleaseElementFunction(EmptyElement, SuperIndexElement);
    ZeroElementFunction(EmptyElement, ZeroElement);

    Get8BitElement(_8BitElement) = midI + 1;

    GetEleOrder(ParameterOrder, 0) |= _8BitSubEESSuperIndex;
    GetEleOrder(ParameterOrder, 1) |= _8BitElement;
    GetEleOrder(ParameterOrder, 2) |= EESElement;
    ReadElementEnvironmentSearcherFunction(ParameterOrder, ZeroElement);

    std::cout << GetUIntElement(ZeroElement) << std::endl;

    ZeroElementFunction(EmptyElement, ZeroElement);
}
```

***

## 释放并注销

在完成对元素的使用后，应该主动释放，随后再从语境中将其注销。释放需要将元素从总元素环境检索器中获取出来，随后便将其注销。

***

### 释放

因为元素环境中所有的元素都是无符号整型元素，所以直接调用释放元素映射完成释放。

```C++
for(midI = 0; midI < 100; midI += 2){
    GetUIntElement(UIntElement) = midI;
    UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

    GetEleOrder(ParameterOrder, 0) |= SuperIndexSubEESSuperIndex;
    GetEleOrder(ParameterOrder, 1) |= SuperIndexElement;
    GetEleOrder(ParameterOrder, 2) |= EESElement;
    GetElementEnvironmentSearcherFunction(ParameterOrder, ZeroElement);

    ReleaseElementFunction(EmptyElement, ZeroElement);
    ReleaseElementFunction(EmptyElement, SuperIndexElement);

    Get8BitElement(_8BitElement) = midI + 1;

    GetEleOrder(ParameterOrder, 0) |= _8BitElement;
    GetEleOrder(ParameterOrder, 1) |= SuperIndexElement;
    GetEleOrder(ParameterOrder, 2) |= EESElement;
    GetElementEnvironmentSearcherFunction(ParameterOrder, ZeroElement);

    ReleaseElementFunction(EmptyElement, ZeroElement);
}
```

***

### 注销

在完成获取并释放的任务后，元素环境中只留下对应的槽位，即槽位上的元素是空元素。这个时候已经不需要对这些元素环境中的元素进行任何操作，所以直接从子检索器层和中间层超索引检索器中完成注销。

```C++
for(midI = 0; midI < 100; midI += 2){
    GetUIntElement(UIntElement) = midI;
    UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

    GetEleOrder(ParameterPair, 0) |= SuperIndexSubEESSuperIndex;
    GetEleOrder(ParameterPair, 1) |= SuperIndexElement;
    LogoutElementEnvironmentSearcherFunction(ParameterPair, EESElement);

    ReleaseElementFunction(EmptyElement, SuperIndexElement);

    Get8BitElement(_8BitElement) = midI + 1;

    GetEleOrder(ParameterPair, 0) |= _8BitSubEESSuperIndex;
    GetEleOrder(ParameterPair, 1) |= _8BitElement;
    LogoutElementEnvironmentSearcherFunction(ParameterPair, EESElement);
}
```

***

### 碎片整理与缩容

当置懒的插槽越来越多，整个总元素环境检索器就需要通过碎片整理和缩容来去除这些空槽。总元素环境检索器在调用碎片整理和缩容映射时，会在每一个子元素环境检索器上都进行碎片整理和缩容操作。

```C++
SortElementEnvironmentSearcherFunction(EmptyElement, EESElement);

DefragmentElementEnvironmentSearcherFunction(EmptyElement, EESElement);

RetainElementEnvironmentSearcherFunction(EmptyElement, EESElement);
```

***

## 占用与解除占用

在轮询机制中，为了防止两个轮询机操作同一个元素，需要为元素加锁，也就是占用和解除占用。原始版本中的子元素检索器不被要求直接提供占用和解除占用的映射，只要求提供获取和存放占用信息。所以这里使用两种模式来完成。

***

### 获取占用信息，检测并占用

获取一个已注册元素的占用情况，检测其是否被占用，若没有被占用则进行占用。

```C++
GetUIntElement(UIntElement) = 1;
UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

GetEleOrder(ParameterOrder, 0) |= SuperIndexSubEESSuperIndex;
GetEleOrder(ParameterOrder, 1) |= SuperIndexElement;
GetEleOrder(ParameterOrder, 2) |= EESElement;
GetOccupyElementEnvironmentSearcherFunction(ParameterOrder, BoolElement);

if(GetBoolElement(BoolElement) == false){
    GetBoolElement(BoolElement) = true;

    GetEleOrder(ParameterOrder, 0) |= SuperIndexSubEESSuperIndex;
    GetEleOrder(ParameterOrder, 1) |= SuperIndexElement;
    GetEleOrder(ParameterOrder, 2) |= BoolElement;
    PutOccupyElementEnvironmentSearcherFunction(ParameterOrder, EESElement);
}

ReleaseElementFunction(EmptyElement, SuperIndexElement);
```

***

### 获取占用信息，检测并解除占用

因为上一节完成了对一个元素的占用，所以这里对这个元素进行检测和解除占用。

```C++
GetUIntElement(UIntElement) = 1;
UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

GetEleOrder(ParameterOrder, 0) |= SuperIndexSubEESSuperIndex;
GetEleOrder(ParameterOrder, 1) |= SuperIndexElement;
GetEleOrder(ParameterOrder, 2) |= EESElement;
GetOccupyElementEnvironmentSearcherFunction(ParameterOrder, BoolElement);

if(GetBoolElement(BoolElement) == true){
    GetBoolElement(BoolElement) = false;

    GetEleOrder(ParameterOrder, 0) |= SuperIndexSubEESSuperIndex;
    GetEleOrder(ParameterOrder, 1) |= SuperIndexElement;
    GetEleOrder(ParameterOrder, 2) |= BoolElement;
    PutOccupyElementEnvironmentSearcherFunction(ParameterOrder, EESElement);
}

ReleaseElementFunction(EmptyElement, SuperIndexElement);
```

***

### 直接占用和解除

为了方便使用，总元素环境检索器提供了直接的占用和解除占用方法。

```C++
GetUIntElement(UIntElement) = 1;
UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

GetEleOrder(ParameterPair, 0) |= SuperIndexSubEESSuperIndex;
GetEleOrder(ParameterPair, 1) |= SuperIndexElement;
OccupyElementEnvironmentSearcherFunction(ParameterPair, EESElement);

GetEleOrder(ParameterPair, 0) |= SuperIndexSubEESSuperIndex;
GetEleOrder(ParameterPair, 1) |= SuperIndexElement;
RelieveOccupyElementEnvironmentSearcherFunction(ParameterPair, EESElement);

ReleaseElementFunction(EmptyElement, SuperIndexElement);
```

***

## 最后的回收

在完成操作部分的大部分演示后，将剩余的元素释放并注销，完成元素最后的回收工作。随后，调用排序，碎片整理，与缩容。

```C++
for(midI = 1; midI < 100; midI += 2){
    GetUIntElement(UIntElement) = midI;
    UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

    GetEleOrder(ParameterOrder, 0) |= SuperIndexSubEESSuperIndex;
    GetEleOrder(ParameterOrder, 1) |= SuperIndexElement;
    GetEleOrder(ParameterOrder, 2) |= EESElement;
    GetElementEnvironmentSearcherFunction(ParameterOrder, ZeroElement);

    ReleaseElementFunction(EmptyElement, ZeroElement);

    GetEleOrder(ParameterPair, 0) |= SuperIndexSubEESSuperIndex;
    GetEleOrder(ParameterPair, 1) |= SuperIndexElement;
    LogoutElementEnvironmentSearcherFunction(ParameterPair, EESElement);

    ReleaseElementFunction(EmptyElement, SuperIndexElement);

    Get8BitElement(_8BitElement) = midI + 1;

    GetEleOrder(ParameterOrder, 0) |= _8BitSubEESSuperIndex;
    GetEleOrder(ParameterOrder, 1) |= _8BitElement;
    GetEleOrder(ParameterOrder, 2) |= EESElement;
    GetElementEnvironmentSearcherFunction(ParameterOrder, ZeroElement);

    ReleaseElementFunction(EmptyElement, ZeroElement);

    GetEleOrder(ParameterPair, 0) |= _8BitSubEESSuperIndex;
    GetEleOrder(ParameterPair, 1) |= _8BitElement;
    LogoutElementEnvironmentSearcherFunction(ParameterPair, EESElement);
}

SortElementEnvironmentSearcherFunction(EmptyElement, EESElement);

DefragmentElementEnvironmentSearcherFunction(EmptyElement, EESElement);

RetainElementEnvironmentSearcherFunction(EmptyElement, EESElement);

```

***

## 子元素环境检索器的注销

当子检索器中注册的所有元素都已经完成撤销，且已经通过碎片整理和缩容去除所有的置懒槽位时，便可以从总元素环境检索器中注销子元素环境检索器。

调用注销映射后，会将子元素环境检索器返回到指定的零元素上，与其对应的超索引索引和映射包会直接释放。随后再主动调用对应的子元素环境检索器释放映射完成释放。

```C++
GetEleOrder(ParameterPair, 0) |= SuperIndexSubEESSuperIndex;
GetEleOrder(ParameterPair, 1) |= EESElement;
LogoutSubEESEESFunction(ParameterPair, ZeroElement);

ReleaseSuperIndexSubEESFunction(EmptyElement, ZeroElement);

GetEleOrder(ParameterPair, 0) |= _8BitSubEESSuperIndex;
GetEleOrder(ParameterPair, 1) |= EESElement;
LogoutSubEESEESFunction(ParameterPair, ZeroElement);

Release8BitSearcherFunction(EmptyElement, ZeroElement);
```

***

## 总元素环境检索器的释放

在完成子元素环境检索器的释放后，总元素环境检索器不再持有任何子检索器，也不再持有任何元素，仅持有与之绑定的元素环境。在本部分的释放工作中，将会从总元素环境检索器中获取元素环境并释放，随后将空的总元素环境检索器元素释放。

### 获取并释放元素环境

```C++
GetEESEnvironmentFunction(EESElement, ZeroElement);

ReleaseElementEnvironmentFunction(EmptyElement, ZeroElement);
```

### 释放总元素环境检索器

```C++
ReleaseElementEnvironmentSearcherFunction(EmptyElement, EESElement);
```

***

## 案例代码

```C++

```
