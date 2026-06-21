#include"Main.h"
#include<iostream>

#pragma comment (lib, "E_S_M.lib")

int main()
{
	using namespace Q_A;

	Element UIntElement;
	NewUIntElementFunction(EmptyElement, UIntElement);

	Element UIntA;
	NewUIntElementFunction(EmptyElement, UIntA);
	Element UIntB;
	NewUIntElementFunction(EmptyElement, UIntB);

	Element ParaPair;
	NewOrderedPairFunction(EmptyElement, ParaPair);

	GetUIntElement(UIntA) = 1;
	GetUIntElement(UIntB) = 2;

	GetEleOrder(ParaPair, 0) |= UIntA;
	GetEleOrder(ParaPair, 1) |= UIntB;
	
	UIntAddFunction(ParaPair, UIntElement);

	std::cout << GetUIntElement(UIntElement);

	std::getchar();

	return 0;
}