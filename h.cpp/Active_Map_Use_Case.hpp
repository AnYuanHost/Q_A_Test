#pragma once

#define Active_Map_Use_Case_Code 3

#include<Math/h.cpp/All_Math.h>
#include<E_S_M/h.cpp/All_E_S_M.h>

#include<iostream>

#define If_Add 0
#define If_Sub 1

#define If_Select If_Add

using namespace Q_A;

int Active_Map_Use_Case_Main() {

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

	GetEleOrder(ActiveMapElement, 2).Size = sizeof(Map);
	GetEleOrder(ActiveMapElement, 2).KeySpace = (char*)&UIntAdd;

#else

	GetEleOrder(ActiveMapElement, 2).Size = sizeof(Map);
	GetEleOrder(ActiveMapElement, 2).KeySpace = (char*)&UIntSub;

#endif

	ActiveMapExecuteFunction(EmptyElement, ActiveMapElement);

	ParaPair &= GetEleOrder(ActiveMapElement, 0);

	UIntC &= GetEleOrder(ActiveMapElement, 1);

	std::cout << GetUIntElement(UIntC);

	ZeroElementFunction(EmptyElement, GetEleOrder(ActiveMapElement, 2));

	return 0;
}