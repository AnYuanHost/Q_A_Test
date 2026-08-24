# 元素环境案例

***

本案例展示元素怒环境如何在总元素环境检索器中完成工作，并提供测试案例数据展示如何进行测试。

元素环境仅提供基础的扩容缩容，以及读写操作。严格来说，元素环境本身并不需要提供完整的运转逻辑。因为元素环境并不存储任何映射关系，其只需要在对应的地址上记录一个具体的元素。

***

## 1. 准备工作

***

### 引入工作

本案例需要使用三个库，分别是E_S_M库提供基本操作，以及ESM_Manage库提供元素环境服务，中间计算需要使用Math库。因为呈现测试数据需要使用std::cout进行输出，所以还需要引入iostream。

```C++
#include<E_S_M/h.cpp/All_E_S_M.h>
#include<ESM_Manage/h.cpp/ElementEnvironment.h>
#include<Math/h.cpp/All_Math.h>
```

### 构造中间变量

因为本案例相较于单纯的使用功能，还要兼顾部分测试案例的展示，所以任务量相对较多，所使用的中间变量更多。在这一节准备工作中，需要完成以下中间变量的声明与构造。

```C++
unsigned int midI;

Element ParaPair;
NewOrderedPairFunction(EmptyElement, ParaPair);
Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);
Element Address;
NewUIntElementFunction(EmptyElement, Address);

Element ZeroElement;
```

***

### 构造元素环境

在完成中间变量的构造后，直接调用构造映射完成元素环境的构造工作。

```C++
Element EnvironmentElement;
NewElementEnvironmentFunction(EmptyElement, EnvironmentElement);
```

***

## 2. 操作

在操作部分，将会使用测试数据按照以下流程完成操作。注册，读取，查询，注销，排序，以及碎片整理与缩容。

***

### 注册

向元素环境发起100次注册申请，按顺序得到0~99，共100个地址。这些地址对应空槽位，即EmptyElement。

```C++
std::cout << "Login:" << std::endl;

for (midI = 0; midI < 100; midI++) {
	ElementEnvironmentExpandFunction(EnvironmentElement, Address);

	std::cout << "Address: " << GetUIntElement(Address) << std::endl;
}

std::cout << std::endl;
```

***

### 构造与存放与读取

在完成注册工作后，构造具体的无符号整型元素，将其按地址转交到对应的槽位上。随后，读取并输出。

```C++
std::cout << "Construct And Put And Read: " << std::endl;

for (midI = 0; midI < 100; midI++) {
    GetUIntElement(Address) = midI;

    NewUIntElementFunction(EmptyElement, ZeroElement);
    GetUIntElement(ZeroElement) = midI;

    GetEleOrder(ParaPair, 0) |= Address;
    GetEleOrder(ParaPair, 1) &= ZeroElement;
    ElementEnvironmentPutElementFunction(ParaPair, EnvironmentElement);

    GetEleOrder(ParaPair, 0) |= Address;
    GetEleOrder(ParaPair, 1) |= EnvironmentElement;
    ElementEnvironmentReadElementFunction(ParaPair, ZeroElement);

    std::cout << "Address: " << midI << " UIntElement: " << GetUIntElement(ZeroElement) << std::endl;

    ZeroElementFunction(EmptyElement, ZeroElement);
}

std::cout << std::endl;
```

***

### 释放与注销

按照顺序，将后50个地址对应的元素释放。而在总元素环境检索器的运行逻辑中，将通过中间层完成对该部分的注销工作。元素环境并不进行实际的注销操作。

```C++
std::cout << "Release And Logout:" << std::endl;

for (midI = 50; midI < 100; midI++) {
    GetUIntElement(Address) = midI;

    GetEleOrder(ParaPair, 0) |= Address;
    GetEleOrder(ParaPair, 1) |= EnvironmentElement;
    ElementEnvironmentGetElementFunction(ParaPair, ZeroElement);

    std::cout << "Address: " << midI << " UIntElement: " << GetUIntElement(ZeroElement) << std::endl;

    ReleaseElementFunction(EmptyElement, ZeroElement);
}

std::cout << std::endl;
```

***

### 缩容

在总元素环境检索器的运行逻辑中，中间层管控元素环境完成碎片整理，并给出缩容后的末地址。元素环境需要使用该地址完成缩容。

```C++
std::cout << "Retain:" << std::endl;

GetUIntElement(Address) = 50;
ElementEnvironmentRetainFunction(Address, EnvironmentElement);
```

***

## 3. 最后的注销与释放

在完成演示后，释放剩余的元素，并完成元素环境缩容。这会释放掉所有槽位。

```C++
for (midI = 0; midI < 50; midI++) {
    GetUIntElement(Address) = midI;

    GetEleOrder(ParaPair, 0) |= Address;
    GetEleOrder(ParaPair, 1) |= EnvironmentElement;
    ElementEnvironmentGetElementFunction(ParaPair, ZeroElement);

    std::cout << "Address: " << midI << " UIntElement: " << GetUIntElement(ZeroElement) << std::endl;

    ReleaseElementFunction(EmptyElement, ZeroElement);
}

GetUIntElement(Address) = 0;
ElementEnvironmentRetainFunction(Address, EnvironmentElement);

ReleaseElementEnvironmentFunction(EmptyElement, EnvironmentElement);
```

***

## 4. 案例代码：

```C++
#include<E_S_M/h.cpp/All_E_S_M.h>
#include<ESM_Manage/h.cpp/ElementEnvironment.h>
#include<Math/h.cpp/All_Math.h>

#include<iostream>

using namespace Q_A;

int ElementEnvironment_Case_Main() {

	unsigned int midI;

	Element ParaPair;
	NewOrderedPairFunction(EmptyElement, ParaPair);
	Element UIntElement;
	NewUIntElementFunction(EmptyElement, UIntElement);
	Element Address;
	NewUIntElementFunction(EmptyElement, Address);

	Element ZeroElement;

	Element EnvironmentElement;
	NewElementEnvironmentFunction(EmptyElement, EnvironmentElement);

	std::cout << "Login:" << std::endl;

	for (midI = 0; midI < 100; midI++) {
		ElementEnvironmentExpandFunction(EnvironmentElement, Address);

		std::cout << "Address: " << GetUIntElement(Address) << std::endl;
	}

	std::cout << std::endl;

	std::cout << "Construct And Put And Read: " << std::endl;

	for (midI = 0; midI < 100; midI++) {
		GetUIntElement(Address) = midI;

		NewUIntElementFunction(EmptyElement, ZeroElement);
		GetUIntElement(ZeroElement) = midI;

		GetEleOrder(ParaPair, 0) |= Address;
		GetEleOrder(ParaPair, 1) &= ZeroElement;
		ElementEnvironmentPutElementFunction(ParaPair, EnvironmentElement);

		GetEleOrder(ParaPair, 0) |= Address;
		GetEleOrder(ParaPair, 1) |= EnvironmentElement;
		ElementEnvironmentReadElementFunction(ParaPair, ZeroElement);

		std::cout << "Address: " << midI << " UIntElement: " << GetUIntElement(ZeroElement) << std::endl;

		ZeroElementFunction(EmptyElement, ZeroElement);
	}

	std::cout << std::endl;

	std::cout << "Release And Logout:" << std::endl;

	for (midI = 50; midI < 100; midI++) {
		GetUIntElement(Address) = midI;

		GetEleOrder(ParaPair, 0) |= Address;
		GetEleOrder(ParaPair, 1) |= EnvironmentElement;
		ElementEnvironmentGetElementFunction(ParaPair, ZeroElement);

		std::cout << "Address: " << midI << " UIntElement: " << GetUIntElement(ZeroElement) << std::endl;

		ReleaseElementFunction(EmptyElement, ZeroElement);
	}

	std::cout << std::endl;

	std::cout << "Retain:" << std::endl;

	GetUIntElement(Address) = 50;
	ElementEnvironmentRetainFunction(Address, EnvironmentElement);

	for (midI = 0; midI < 50; midI++) {
		GetUIntElement(Address) = midI;

		GetEleOrder(ParaPair, 0) |= Address;
		GetEleOrder(ParaPair, 1) |= EnvironmentElement;
		ElementEnvironmentGetElementFunction(ParaPair, ZeroElement);

		std::cout << "Address: " << midI << " UIntElement: " << GetUIntElement(ZeroElement) << std::endl;

		ReleaseElementFunction(EmptyElement, ZeroElement);
	}

	GetUIntElement(Address) = 0;
	ElementEnvironmentRetainFunction(Address, EnvironmentElement);

	ReleaseElementEnvironmentFunction(EmptyElement, EnvironmentElement);

	return 0;
}
```
