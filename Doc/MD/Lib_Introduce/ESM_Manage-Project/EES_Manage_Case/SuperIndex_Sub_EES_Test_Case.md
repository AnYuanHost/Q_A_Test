# 超索引子元素环境检索器测试案例

***

本案例展示超索引子检索器如何在总元素环境检索器中完成工作，并提供测试案例数据展示如何进行测试。

超索引子检索器主要用于适合使用超索引进行检索的场景，例如面向以超索引为主键的知识库系统。使用超索引检索，便可以完成知识库到系统的装载工作。

***

## 1. 准备工作

***

### 引入文件

本案例需要使用三个库，分别是E_S_M库提供基本操作，以及ESM_Manage库提供超索引子检索器服务，中间计算需要使用Math库。因为呈现测试数据需要使用std::cout进行输出，所以还需要引入iostream。

```C++
#include<E_S_M\h.cpp\All_E_S_M.h>
#include<ESM_Manage\h.cpp\SubEES_SuperIndex.h>
#include<Math\h.cpp\All_Math.h>
```

***

### 构造中间变量

因为本案例相较于单纯的使用功能，还要兼顾部分测试案例的展示，所以任务量相对较多，所使用的中间变量更多。在这一节准备工作中，需要完成以下中间变量的声明与构造。

```C++
unsigned int midI;

Element ParaPair;
NewOrderedPairFunction(EmptyElement, ParaPair);
Element Address;
NewUIntElementFunction(EmptyElement, Address);
Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);
Element NextAddress;
NewUIntElementFunction(EmptyElement, NextAddress);

Element SuperIndexElement1;
Element SuperIndexElement2;
```

***

### 构造超索引子检索器

在完成中间变量的构造后，调用参数构造映射和构造映射完成超索引子检索器的构造工作。

```C++
Element Parameter;
NewSuperIndexSubEESDefaultParameterFunction(EmptyElement, Parameter);

Element SuperIndexSubEESElement;
NewSuperIndexSubEESFunction(Parameter, SuperIndexSubEESElement);
```

***

## 2. 操作

在操作部分，将会使用测试数据按照以下流程完成操作。注册，读取，查询，注销，排序，以及碎片整理与缩容。

***

### 注册

按照0~99代表的超索引信息与0~99代表的超索引信息间的映射完成注册。

```C++
std::cout << "Login: " << std::endl;

for (midI = 0; midI < 100; midI++) {

	GetUIntElement(UIntElement) = midI;
	UIntToSuperIndexFunction(UIntElement, SuperIndexElement1);

	GetUIntElement(UIntElement) = midI + 1;
	UIntToSuperIndexFunction(UIntElement, SuperIndexElement2);

	GetEleOrder(ParaPair, 0) |= SuperIndexElement1;
	GetEleOrder(ParaPair, 1) |= SuperIndexElement2;
	LoginSuperIndexSubEESFunction(ParaPair, SuperIndexSubEESElement);

	std::cout << "SuperIndex: " << midI << " SuperIndex: " << midI + 1 << std::endl;

	ReleaseElementFunction(EmptyElement, SuperIndexElement1);
	ReleaseElementFunction(EmptyElement, SuperIndexElement2);
}

std::cout << std::endl;
```

***

### 读取

在完成注册工作后，逐一读取映射关系的信息，并进行展示。因为读取、获取、存放以及占用情况的设置与获取都高度绑定于同一套逻辑，并无太大差异，所以这里只使用读取来进行演示。

```C++
std::cout << "Read:" << std::endl;

for (midI = 0; midI < 100; midI++) {

	GetUIntElement(UIntElement) = midI;
	UIntToSuperIndexFunction(UIntElement, SuperIndexElement1);

	GetEleOrder(ParaPair, 0) |= SuperIndexElement1;
	GetEleOrder(ParaPair, 1) |= SuperIndexSubEESElement;
	SelectSuperIndexSubEESFunction(ParaPair, Address);

	GetEleOrder(ParaPair, 0) |= Address;
	GetEleOrder(ParaPair, 1) |= SuperIndexSubEESElement;
	ReadSuperIndexSuperIndexSubEESFunction(ParaPair, SuperIndexElement2);

	SuperIndexToUIntFunction(SuperIndexElement2, UIntElement);

	std::cout << "SuperIndex: " << midI << " SuperIndex: " << GetUIntElement(UIntElement) << std::endl;

	ReleaseElementFunction(EmptyElement, SuperIndexElement1);
	ZeroElementFunction(EmptyElement, SuperIndexElement2);
}

std::cout << std::endl;
```

***

### 检索

逐一检索映射信息，并展示对应的地址信息。

```C++
std::cout << "Select:" << std::endl;

for (midI = 0; midI < 100; midI++) {
	GetUIntElement(UIntElement) = midI;
	UIntToSuperIndexFunction(UIntElement, SuperIndexElement1);

	GetEleOrder(ParaPair, 0) |= SuperIndexElement1;
	GetEleOrder(ParaPair, 1) |= SuperIndexSubEESElement;
	SelectSuperIndexSubEESFunction(ParaPair, Address);

	std::cout << "SuperIndex: " << midI << " Address: " << GetUIntElement(Address) << std::endl;

	ReleaseElementFunction(EmptyElement, SuperIndexElement1);
}

std::cout << std::endl;
```

***

### 部分注销

为了方便后续的排序，碎片整理和缩容，在这里部分注销。按照隔一个注销一个的策略，将0、2、4...98对应的映射进行注销。

```C++
std::cout << "Logout:" << std::endl;

for (midI = 0; midI < 100; midI += 2) {
    GetUIntElement(UIntElement) = midI;
    UIntToSuperIndexFunction(UIntElement, SuperIndexElement1);

    GetEleOrder(ParaPair, 0) |= SuperIndexElement1;
    GetEleOrder(ParaPair, 1) |= SuperIndexSubEESElement;
    LogoutSuperIndexSubEESFunction(ParaPair, SuperIndexElement2);

    SuperIndexToUIntFunction(SuperIndexElement2, UIntElement);

    std::cout << "SuperIndex: " << midI << " SuperIndex: " << GetUIntElement(UIntElement) << std::endl;

    ReleaseElementFunction(EmptyElement, SuperIndexElement1);
    ReleaseElementFunction(EmptyElement, SuperIndexElement2);
}

std::cout << std::endl;
```

***

### 下一地址计算演示

在完成隔一注销后，置懒和非置懒的槽位都被分割开。这里演示超索引子检索器的下一地址，和8比特子检索器不同，超索引子检索器只按照顺序计算下一个槽位。

```C++
GetUIntElement(Address) = 0;

GetEleOrder(ParaPair, 0) |= Address;
GetEleOrder(ParaPair, 1) |= SuperIndexSubEESElement;
NextAddressSuperIndexSubEESFunction(ParaPair, NextAddress);

std::cout << "Address: " << GetUIntElement(Address) << " NextAddress: " << GetUIntElement(NextAddress) << std::endl;

GetUIntElement(Address) = 1;

GetEleOrder(ParaPair, 0) |= Address;
GetEleOrder(ParaPair, 1) |= SuperIndexSubEESElement;
NextAddressSuperIndexSubEESFunction(ParaPair, NextAddress);

std::cout << "Address: " << GetUIntElement(Address) << " NextAddress: " << GetUIntElement(NextAddress) << std::endl;

std::cout << std::endl;
```

***

### 排序，碎片整理与缩容

这一步的主要的目的是将所有置空的槽位释放，并尽可能的减少槽位。在完成这些操作后，将会获取第一个空地址的方式来呈现信息。

```C++
SortSuperIndexSubEESFunction(EmptyElement, SuperIndexSubEESElement);

DefragmentSuperIndexSubEESFunction(EmptyElement, SuperIndexSubEESElement);

FirstEmptySuperIndexSubEESFunction(SuperIndexSubEESElement, Address);

std::cout << "First Empty Address: " << GetUIntElement(Address) << std::endl;

RetainSuperIndexSubEESFunction(Address, SuperIndexSubEESElement);

FirstEmptySuperIndexSubEESFunction(SuperIndexSubEESElement, Address);

std::cout << "First Empty Address: " << GetUIntElement(Address) << std::endl;

std::cout << std::endl;
```

***

## 3. 最后的注销与释放

在完成演示后，注销剩余的元素，并完成超索引子检索器的排序、碎片整理与缩容。这会释放掉所有槽位，避免在释放子检索器时出现内存泄漏等问题。

```C++
for (midI = 1; midI < 100; midI += 2) {
    GetUIntElement(UIntElement) = midI;
    UIntToSuperIndexFunction(UIntElement, SuperIndexElement1);

    GetEleOrder(ParaPair, 0) |= SuperIndexElement1;
    GetEleOrder(ParaPair, 1) |= SuperIndexSubEESElement;
    LogoutSuperIndexSubEESFunction(ParaPair, SuperIndexElement2);

    SuperIndexToUIntFunction(SuperIndexElement2, UIntElement);

    std::cout << "SuperIndex: " << midI << " SuperIndex: " << GetUIntElement(UIntElement) << std::endl;

    ReleaseElementFunction(EmptyElement, SuperIndexElement1);
    ReleaseElementFunction(EmptyElement, SuperIndexElement2);
}

SortSuperIndexSubEESFunction(EmptyElement, SuperIndexSubEESElement);

DefragmentSuperIndexSubEESFunction(EmptyElement, SuperIndexSubEESElement);

FirstEmptySuperIndexSubEESFunction(SuperIndexSubEESElement, Address);

std::cout << "First Empty Address: " << GetUIntElement(Address) << std::endl;

RetainSuperIndexSubEESFunction(Address, SuperIndexSubEESElement);

ReleaseSuperIndexSubEESFunction(EmptyElement, SuperIndexSubEESElement);
```
***

## 4. 案例代码

```C++
#include<E_S_M/h.cpp/All_E_S_M.h>
#include<ESM_Manage/h.cpp/SubEES_SuperIndex.h>
#include<Math/h.cpp/All_Math.h>

#include<iostream>

using namespace Q_A;

int SuperIndex_Sub_EES_Case_Main() {

	unsigned int midI;

	Element ParaPair;
	NewOrderedPairFunction(EmptyElement, ParaPair);
	Element Address;
	NewUIntElementFunction(EmptyElement, Address);
	Element UIntElement;
	NewUIntElementFunction(EmptyElement, UIntElement);
	Element NextAddress;
	NewUIntElementFunction(EmptyElement, NextAddress);

	Element SuperIndexElement1;
	Element SuperIndexElement2;

	Element Parameter;
	NewSuperIndexSubEESDefaultParameterFunction(EmptyElement, Parameter);

	Element SuperIndexSubEESElement;
	NewSuperIndexSubEESFunction(Parameter, SuperIndexSubEESElement);

	std::cout << "Login: " << std::endl;

	for (midI = 0; midI < 100; midI++) {

		GetUIntElement(UIntElement) = midI;
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement1);

		GetUIntElement(UIntElement) = midI + 1;
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement2);

		GetEleOrder(ParaPair, 0) |= SuperIndexElement1;
		GetEleOrder(ParaPair, 1) |= SuperIndexElement2;
		LoginSuperIndexSubEESFunction(ParaPair, SuperIndexSubEESElement);

		std::cout << "SuperIndex: " << midI << " SuperIndex: " << midI + 1 << std::endl;

		ReleaseElementFunction(EmptyElement, SuperIndexElement1);
		ReleaseElementFunction(EmptyElement, SuperIndexElement2);
	}

	std::cout << std::endl;

	std::cout << "Read:" << std::endl;

	for (midI = 0; midI < 100; midI++) {

		GetUIntElement(UIntElement) = midI;
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement1);

		GetEleOrder(ParaPair, 0) |= SuperIndexElement1;
		GetEleOrder(ParaPair, 1) |= SuperIndexSubEESElement;
		SelectSuperIndexSubEESFunction(ParaPair, Address);

		GetEleOrder(ParaPair, 0) |= Address;
		GetEleOrder(ParaPair, 1) |= SuperIndexSubEESElement;
		ReadSuperIndexSuperIndexSubEESFunction(ParaPair, SuperIndexElement2);

		SuperIndexToUIntFunction(SuperIndexElement2, UIntElement);

		std::cout << "SuperIndex: " << midI << " SuperIndex: " << GetUIntElement(UIntElement) << std::endl;

		ReleaseElementFunction(EmptyElement, SuperIndexElement1);
		ZeroElementFunction(EmptyElement, SuperIndexElement2);
	}

	std::cout << std::endl;

	std::cout << "Select:" << std::endl;

	for (midI = 0; midI < 100; midI++) {
		GetUIntElement(UIntElement) = midI;
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement1);

		GetEleOrder(ParaPair, 0) |= SuperIndexElement1;
		GetEleOrder(ParaPair, 1) |= SuperIndexSubEESElement;
		SelectSuperIndexSubEESFunction(ParaPair, Address);

		std::cout << "SuperIndex: " << midI << " Address: " << GetUIntElement(Address) << std::endl;

		ReleaseElementFunction(EmptyElement, SuperIndexElement1);
	}

	std::cout << std::endl;

	std::cout << "Logout:" << std::endl;

	for (midI = 0; midI < 100; midI += 2) {
		GetUIntElement(UIntElement) = midI;
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement1);

		GetEleOrder(ParaPair, 0) |= SuperIndexElement1;
		GetEleOrder(ParaPair, 1) |= SuperIndexSubEESElement;
		LogoutSuperIndexSubEESFunction(ParaPair, SuperIndexElement2);

		SuperIndexToUIntFunction(SuperIndexElement2, UIntElement);

		std::cout << "SuperIndex: " << midI << " SuperIndex: " << GetUIntElement(UIntElement) << std::endl;

		ReleaseElementFunction(EmptyElement, SuperIndexElement1);
		ReleaseElementFunction(EmptyElement, SuperIndexElement2);
	}

	std::cout << std::endl;

	GetUIntElement(Address) = 0;

	GetEleOrder(ParaPair, 0) |= Address;
	GetEleOrder(ParaPair, 1) |= SuperIndexSubEESElement;
	NextAddressSuperIndexSubEESFunction(ParaPair, NextAddress);

	std::cout << "Address: " << GetUIntElement(Address) << " NextAddress: " << GetUIntElement(NextAddress) << std::endl;

	GetUIntElement(Address) = 1;

	GetEleOrder(ParaPair, 0) |= Address;
	GetEleOrder(ParaPair, 1) |= SuperIndexSubEESElement;
	NextAddressSuperIndexSubEESFunction(ParaPair, NextAddress);

	std::cout << "Address: " << GetUIntElement(Address) << " NextAddress: " << GetUIntElement(NextAddress) << std::endl;

	std::cout << std::endl;

	SortSuperIndexSubEESFunction(EmptyElement, SuperIndexSubEESElement);

	DefragmentSuperIndexSubEESFunction(EmptyElement, SuperIndexSubEESElement);

	FirstEmptySuperIndexSubEESFunction(SuperIndexSubEESElement, Address);

	std::cout << "First Empty Address: " << GetUIntElement(Address) << std::endl;

	RetainSuperIndexSubEESFunction(Address, SuperIndexSubEESElement);

	FirstEmptySuperIndexSubEESFunction(SuperIndexSubEESElement, Address);

	std::cout << "First Empty Address: " << GetUIntElement(Address) << std::endl;

	std::cout << std::endl;

	for (midI = 1; midI < 100; midI += 2) {
		GetUIntElement(UIntElement) = midI;
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement1);

		GetEleOrder(ParaPair, 0) |= SuperIndexElement1;
		GetEleOrder(ParaPair, 1) |= SuperIndexSubEESElement;
		LogoutSuperIndexSubEESFunction(ParaPair, SuperIndexElement2);

		SuperIndexToUIntFunction(SuperIndexElement2, UIntElement);

		std::cout << "SuperIndex: " << midI << " SuperIndex: " << GetUIntElement(UIntElement) << std::endl;

		ReleaseElementFunction(EmptyElement, SuperIndexElement1);
		ReleaseElementFunction(EmptyElement, SuperIndexElement2);
	}

	SortSuperIndexSubEESFunction(EmptyElement, SuperIndexSubEESElement);

	DefragmentSuperIndexSubEESFunction(EmptyElement, SuperIndexSubEESElement);

	FirstEmptySuperIndexSubEESFunction(SuperIndexSubEESElement, Address);

	std::cout << "First Empty Address: " << GetUIntElement(Address) << std::endl;

	RetainSuperIndexSubEESFunction(Address, SuperIndexSubEESElement);

	ReleaseSuperIndexSubEESFunction(EmptyElement, SuperIndexSubEESElement);

	return 0;
}
```

***
