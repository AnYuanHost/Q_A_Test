# 超索引检索器（中间层）案例

***

本案例展示超索引检索器如何在总元素环境检索器中完成工作，并提供测试案例数据展示如何进行测试。

超索引检索器作为承上（子元素环境检索器）启下（元素环境）的中间层，需要承担很多工作。使用两次映射的方式（子检索器检索信息 -> 超索引 -> 元素环境地址），使得超索引检索器只需要关注超索引到元素环境地址的映射维护工作，大大地方便了开发与使用。

另外一点在于中间层是标准的提出者，子检索器层和元素环境层都需要依照其标准开发。另一方面，中间层的运行逻辑也是总元素环境检索器的运行逻辑核心，中间层的行动总是对应总元素环境检索器的行动。

***

## 1. 准备工作

***

### 引入文件

本案例需要使用三个库，分别是E_S_M库提供基本操作，以及ESM_Manage库提供总元素环境检索器服务，中间计算需要使用Math库。因为呈现测试数据需要使用std::cout进行输出，所以还需要引入iostream。

```C++
#include<E_S_M\h.cpp\All_E_S_M.h>
#include<ESM_Manage\h.cpp\EES_Base.h>
#include<Math\h.cpp\All_Math.h>
```

***

### 构造中间变量

因为本案例相较于单纯的使用功能，还要兼顾部分测试案例的展示，所以任务量相对较多，所使用的中间变量更多。在这一节准备工作中，需要完成以下中间变量的声明与构造。

```C++
unsigned int midI;

Element Address;
NewUIntElementFunction(EmptyElement, Address);
Element EEAddress;
NewUIntElementFunction(EmptyElement, EEAddress);

Element ParaPair;
NewOrderedPairFunction(EmptyElement, ParaPair);
Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);

Element SuperIndexElement;

Element ZeroElement;
```

***

### 构造超索引检索器（在总元素环境检索器中）

因为超索引检索器的行为高度跟随总元素环境检索器，其构造也直接在总元素环境检索器中完成，所以这里直接调用总元素环境检索器。该总元素环境检索器仅仅在中间层上提供服务，而不关系子元素环境检索器层以及元素环境层。

```C++
Element EESElement;
NewElementEnvironmentSearcherFunction(EmptyElement, EESElement);
```

***

## 2. 操作

在操作部分，将会使用测试数据按照以下流程完成操作。注册，读取，查询，注销，排序，以及碎片整理与缩容。

***

### 注册

使用0~99代表的元素环境地址信息，从超索引检索器层中注册得到新的超索引信息。

```C++
std::cout << "Login:" << std::endl;

for (midI = 0; midI < 100; midI++) {
    GetUIntElement(EEAddress) = midI;

    GetEleOrder(ParaPair, 0) |= EEAddress;
    GetEleOrder(ParaPair, 1) |= EESElement;
    LoginEES_SISFunction(ParaPair, SuperIndexElement);

    SuperIndexToUIntFunction(SuperIndexElement, UIntElement);

    std::cout << "EEAddress: " << GetUIntElement(EEAddress) << " SuperIndex: " << GetUIntElement(UIntElement) << std::endl;

    ReleaseElementFunction(EmptyElement, SuperIndexElement);
}

std::cout << std::endl;
```

***

### 检索与读取/存放

因为总元素环境检索器本身的逻辑需求，中间层的逻辑不需要完备，所以这里使用读取和存放进行演示。

```C++
std::cout << "Select And Get/Put:" << std::endl;

for (midI = 0; midI < 100; midI++) {
	GetUIntElement(UIntElement) = midI;
	UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

	GetEleOrder(ParaPair, 0) |= SuperIndexElement;
	GetEleOrder(ParaPair, 1) |= EESElement;
	SelectEES_SISFunction(ParaPair, Address);

	GetEleOrder(ParaPair, 0) |= Address;
	GetEleOrder(ParaPair, 1) |= EESElement;
	GetUIntEES_SISFunction(ParaPair, ZeroElement);

	std::cout << "SuperIndex: " << GetUIntElement(UIntElement) << " Address: " << GetUIntElement(Address) << " EEAddress: " << GetUIntElement(ZeroElement) << std::endl;

	GetEleOrder(ParaPair, 0) |= Address;
	GetEleOrder(ParaPair, 1) &= ZeroElement;
	PutUIntEES_SISFunction(ParaPair, EESElement);

	ReleaseElementFunction(EmptyElement, SuperIndexElement);
}

std::cout << std::endl;
```

***

### 部分注销

为了方便后续的排序，碎片整理和缩容，在这里部分注销。按照隔一个注销一个的策略，将0, 2, 4...98对应的超索引进行注销。

```C++
std::cout << "Logout:" << std::endl;

for (midI = 0; midI < 100; midI += 2) {
	GetUIntElement(UIntElement) = midI;
	UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

	GetEleOrder(ParaPair, 0) |= SuperIndexElement;
	GetEleOrder(ParaPair, 1) |= EESElement;
	LogoutEES_SISFunction(ParaPair, EEAddress);

	std::cout << "SuperIndex: " << GetUIntElement(UIntElement) << " EEAddress: " << GetUIntElement(EEAddress) << std::endl;

	ReleaseElementFunction(EmptyElement, SuperIndexElement);
}

std::cout << std::endl;
```

***

### 下一地址计算演示

在完成隔一注销后，置懒和非置懒的槽位都被分割开。这里演示超索引检索器的下一地址是如何完成计算的。这里不区分置懒和非置懒，直接计算槽位的下一地址。

```C++
std::cout << "Next Address:" << std::endl;

GetUIntElement(Address) = 0;

GetEleOrder(ParaPair, 0) |= Address;
GetEleOrder(ParaPair, 1) |= EESElement;
EES_SISAddressNextFunction(ParaPair, UIntElement);

std::cout << "Address: " << GetUIntElement(Address) << " Next Address: " << GetUIntElement(UIntElement) << std::endl;

GetUIntElement(Address) = 1;

GetEleOrder(ParaPair, 0) |= Address;
GetEleOrder(ParaPair, 1) |= EESElement;
EES_SISAddressNextFunction(ParaPair, UIntElement);

std::cout << "Address: " << GetUIntElement(Address) << " Next Address: " << GetUIntElement(UIntElement) << std::endl;

std::cout << std::endl;
```

***

### 排序，碎片整理与缩容

这一步的主要的目的是将所有置空的槽位释放，并尽可能的减少槽位。在完成这些操作后，将会获取第一个空地址的方式来呈现信息。

```C++
std::cout << "Sort And Retain:" << std::endl;

SortEES_SISFunction(EmptyElement, EESElement);

DefragmentEES_SISFunction(EmptyElement, EESElement);

EES_SISFEAddressFunction(EESElement, Address);

std::cout << "FirstEmpty Address: " << GetUIntElement(UIntElement) << std::endl;

EES_SISRetainFunction(Address, EESElement);

std::cout << std::endl;
```

***

## 3. 最后的注销与释放

在完成演示后，注销剩余的元素，并完成超索引检索器的排序、碎片整理与缩容。这会释放掉所有槽位，避免在释放超索引检索器时出现内存泄漏等问题。

```C++
std::cout << "Logout And Release:" << std::endl;

for (midI = 1; midI < 100; midI += 2) {
	GetUIntElement(UIntElement) = midI;
	UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

	GetEleOrder(ParaPair, 0) |= SuperIndexElement;
	GetEleOrder(ParaPair, 1) |= EESElement;
	LogoutEES_SISFunction(ParaPair, EEAddress);

	std::cout << "SuperIndex: " << GetUIntElement(UIntElement) << " EE Address: " << GetUIntElement(EEAddress) << std::endl;

	ReleaseElementFunction(EmptyElement, SuperIndexElement);
}

SortEES_SISFunction(EmptyElement, EESElement);

DefragmentEES_SISFunction(EmptyElement, EESElement);

EES_SISFEAddressFunction(EESElement, Address);

std::cout << "First Empty Address: " << GetUIntElement(Address) << std::endl;

EES_SISRetainFunction(Address, EESElement);

ReleaseElementEnvironmentSearcherFunction(EmptyElement, EESElement);
```

***

## 4. 案例代码：

```C++
#include<E_S_M\h.cpp\All_E_S_M.h>
#include<ESM_Manage\h.cpp\EES_Base.h>
#include<Math\h.cpp\All_Math.h>

#include<iostream>

using namespace Q_A;

int SuperIndex_Searcher_Case_Main() {

	unsigned int midI;

	Element Address;
	NewUIntElementFunction(EmptyElement, Address);
	Element EEAddress;
	NewUIntElementFunction(EmptyElement, EEAddress);

	Element ParaPair;
	NewOrderedPairFunction(EmptyElement, ParaPair);
	Element UIntElement;
	NewUIntElementFunction(EmptyElement, UIntElement);

	Element SuperIndexElement;

	Element EESElement;
	NewElementEnvironmentSearcherFunction(EmptyElement, EESElement);

	Element ZeroElement;

	std::cout << "Login:" << std::endl;
	
	for (midI = 0; midI < 100; midI++) {
		GetUIntElement(EEAddress) = midI;

		GetEleOrder(ParaPair, 0) |= EEAddress;
		GetEleOrder(ParaPair, 1) |= EESElement;
		LoginEES_SISFunction(ParaPair, SuperIndexElement);

		SuperIndexToUIntFunction(SuperIndexElement, UIntElement);

		std::cout << "EEAddress: " << GetUIntElement(EEAddress) << " SuperIndex: " << GetUIntElement(UIntElement) << std::endl;

		ReleaseElementFunction(EmptyElement, SuperIndexElement);
	}

	std::cout << std::endl;

	std::cout << "Select And Get/Put:" << std::endl;

	for (midI = 0; midI < 100; midI++) {
		GetUIntElement(UIntElement) = midI;
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

		GetEleOrder(ParaPair, 0) |= SuperIndexElement;
		GetEleOrder(ParaPair, 1) |= EESElement;
		SelectEES_SISFunction(ParaPair, Address);

		GetEleOrder(ParaPair, 0) |= Address;
		GetEleOrder(ParaPair, 1) |= EESElement;
		GetUIntEES_SISFunction(ParaPair, ZeroElement);

		std::cout << "SuperIndex: " << GetUIntElement(UIntElement) << " Address: " << GetUIntElement(Address) << " EEAddress: " << GetUIntElement(ZeroElement) << std::endl;

		GetEleOrder(ParaPair, 0) |= Address;
		GetEleOrder(ParaPair, 1) &= ZeroElement;
		PutUIntEES_SISFunction(ParaPair, EESElement);

		ReleaseElementFunction(EmptyElement, SuperIndexElement);
	}

	std::cout << std::endl;

	std::cout << "Logout:" << std::endl;

	for (midI = 0; midI < 100; midI += 2) {
		GetUIntElement(UIntElement) = midI;
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

		GetEleOrder(ParaPair, 0) |= SuperIndexElement;
		GetEleOrder(ParaPair, 1) |= EESElement;
		LogoutEES_SISFunction(ParaPair, EEAddress);

		std::cout << "SuperIndex: " << GetUIntElement(UIntElement) << " EEAddress: " << GetUIntElement(EEAddress) << std::endl;

		ReleaseElementFunction(EmptyElement, SuperIndexElement);
	}

	std::cout << std::endl;

	std::cout << "Next Address:" << std::endl;

	GetUIntElement(Address) = 0;

	GetEleOrder(ParaPair, 0) |= Address;
	GetEleOrder(ParaPair, 1) |= EESElement;
	EES_SISAddressNextFunction(ParaPair, UIntElement);

	std::cout << "Address: " << GetUIntElement(Address) << " Next Address: " << GetUIntElement(UIntElement) << std::endl;

	GetUIntElement(Address) = 1;

	GetEleOrder(ParaPair, 0) |= Address;
	GetEleOrder(ParaPair, 1) |= EESElement;
	EES_SISAddressNextFunction(ParaPair, UIntElement);

	std::cout << "Address: " << GetUIntElement(Address) << " Next Address: " << GetUIntElement(UIntElement) << std::endl;

	std::cout << std::endl;

	std::cout << "Sort And Retain:" << std::endl;

	SortEES_SISFunction(EmptyElement, EESElement);

	DefragmentEES_SISFunction(EmptyElement, EESElement);

	EES_SISFEAddressFunction(EESElement, Address);

	std::cout << "FirstEmpty Address: " << GetUIntElement(UIntElement) << std::endl;

	EES_SISRetainFunction(Address, EESElement);

	std::cout << std::endl;

	std::cout << "Logout And Release:" << std::endl;

	for (midI = 1; midI < 100; midI += 2) {
		GetUIntElement(UIntElement) = midI;
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

		GetEleOrder(ParaPair, 0) |= SuperIndexElement;
		GetEleOrder(ParaPair, 1) |= EESElement;
		LogoutEES_SISFunction(ParaPair, EEAddress);

		std::cout << "SuperIndex: " << GetUIntElement(UIntElement) << " EE Address: " << GetUIntElement(EEAddress) << std::endl;

		ReleaseElementFunction(EmptyElement, SuperIndexElement);
	}

	SortEES_SISFunction(EmptyElement, EESElement);

	DefragmentEES_SISFunction(EmptyElement, EESElement);

	EES_SISFEAddressFunction(EESElement, Address);

	std::cout << "First Empty Address: " << GetUIntElement(Address) << std::endl;

	EES_SISRetainFunction(Address, EESElement);

	ReleaseElementEnvironmentSearcherFunction(EmptyElement, EESElement);

	return 0;
}
```
