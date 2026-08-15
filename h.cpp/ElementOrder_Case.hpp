#pragma once

#define ElementOrder_Case_Code_0 1
#define ElementOrder_Case_Code_1 2

#include<E_S_M/h.cpp/All_E_S_M.h>

#include<iostream>

#define If_Care 0
#define If_Quote 1

#define If_Select If_Care

using namespace Q_A;

int ElementOrder_Case_1_Main() {
	Element UIntElement;
	NewUIntElementFunction(EmptyElement, UIntElement);

	Element Address;
	NewUIntElementFunction(EmptyElement, Address);

	Element ParaPair;
	NewOrderedPairFunction(EmptyElement, ParaPair);

	Element ElementOrder;
	GetUIntElement(UIntElement) = 5;
	UIntNewElementOrderFunction(UIntElement, ElementOrder);

	for (unsigned int midI = 0; midI < 5; midI++) {

		NewUIntElementFunction(EmptyElement, GetEleOrder(ElementOrder, midI));

		GetUIntElement(GetEleOrder(ElementOrder, midI)) = midI;

	}

	Element MidUInt;

	GetUIntElement(Address) = 0;

#if If_Select == If_Care

	GetEleOrder(ParaPair, 0) |= ElementOrder;
	GetEleOrder(ParaPair, 1) |= Address;

	UIntGetElementOrderFunction(ParaPair, MidUInt);

	std::cout << GetUIntElement(MidUInt) << std::endl;

#else

	GetEleOrder(ParaPair, 0) |= ElementOrder;
	GetEleOrder(ParaPair, 1) |= Address;

	UIntGetQuoteElementOrderFunction(ParaPair, MidUInt);

	std::cout << GetUIntElement(MidUInt) << std::endl;

#endif

	GetUIntElement(MidUInt) = 5;

#if If_Select == If_Care

	GetEleOrder(ParaPair, 0) &= MidUInt;
	GetEleOrder(ParaPair, 1) |= Address;

	UIntPutElementOrderFunction(ParaPair, ElementOrder);

#else

	ZeroElementFunction(EmptyElement, MidUInt);

#endif

	for (unsigned int midI = 0; midI < 5; midI++) {

		std::cout << GetUIntElement(GetEleOrder(ElementOrder, midI)) << ' ';

		ReleaseElementFunction(EmptyElement, GetEleOrder(ElementOrder, midI));
	}

	return 0;
}

int ElementOrder_Case_2_Main() {

	Element UIntElement;
	NewUIntElementFunction(EmptyElement, UIntElement);

	Element ParaPair;
	NewOrderedPairFunction(EmptyElement, ParaPair);

	Element ElementOrder;
	GetUIntElement(UIntElement) = 5;
	UIntNewElementOrderFunction(UIntElement, ElementOrder);

	for (unsigned midI = 0; midI < 5; midI++) {

		NewUIntElementFunction(EmptyElement, GetEleOrder(ElementOrder, midI));

		GetUIntElement(GetEleOrder(ElementOrder, midI)) = midI;

		std::cout << GetUIntElement(GetEleOrder(ElementOrder, midI)) << ' ';
	}
	std::cout << std::endl;

	Element AimOrder;

	GetUIntElement(UIntElement) = 5;
	ElementOrderationFunction(EmptyElement, UIntElement);

	GetEleOrder(ParaPair, 0) &= ElementOrder;
	GetEleOrder(ParaPair, 1) &= UIntElement;
	ElementOrderMergeFunction(ParaPair, AimOrder);

	for (unsigned int midI = 0; midI < 6; midI++) {

		std::cout << GetUIntElement(GetEleOrder(AimOrder, midI)) << ' ';

		ReleaseElementFunction(EmptyElement, GetEleOrder(AimOrder, midI));
	}

	return 0;
}