#pragma once

#define LexOrder_Sub_EES_Case_Code 8

#include<E_S_M/h.cpp/All_E_S_M.h>
#include<ESM_Manage/h.cpp/SubEES_LexOrder.h>
#include<Math/h.cpp/All_Math.h>

#include<iostream>

using namespace Q_A;

int LexOrder_Sub_EES_Case_Main() {

	unsigned int midI;

	Element ParaPair;
	NewOrderedPairFunction(EmptyElement, ParaPair);
	Element Address;
	NewUIntElementFunction(EmptyElement, Address);
	Element UIntElement;
	NewUIntElementFunction(EmptyElement, UIntElement);
	Element NextAddress;
	NewUIntElementFunction(EmptyElement, NextAddress);

	Element SuperIndexElement;

	Element Parameter;
	NewLexOrderEESDefaultParameterFunction(EmptyElement, Parameter);

	Element LexOrderSubEESElement;
	NewLexOrderEESFunction(Parameter, LexOrderSubEESElement);

	Element NameTemple;
	GetUIntElement(UIntElement) = 7;
	ResizeElementFunction(UIntElement, NameTemple);

	NameTemple.KeySpace[0] = 'N';
	NameTemple.KeySpace[1] = 'a';
	NameTemple.KeySpace[2] = 'm';
	NameTemple.KeySpace[3] = 'e';
	NameTemple.KeySpace[4] = '0';
	NameTemple.KeySpace[5] = '0';
	NameTemple.KeySpace[6] = '\0';

	std::cout << "Login: " << std::endl;

	for (midI = 0; midI < 100; midI++) {

		NameTemple.KeySpace[4] = '0' + midI / 10;
		NameTemple.KeySpace[5] = '0' + midI % 10;

		GetUIntElement(UIntElement) = midI;
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

		GetEleOrder(ParaPair, 0) |= NameTemple;
		GetEleOrder(ParaPair, 1) |= SuperIndexElement;
		LoginLexOrderEESFunction(ParaPair, LexOrderSubEESElement);

		std::cout << "Name: " << NameTemple.KeySpace << " SuperIndex: " << midI + 1 << std::endl;

		ReleaseElementFunction(EmptyElement, SuperIndexElement);
	}

	std::cout << std::endl;

	std::cout << "Read:" << std::endl;

	for (midI = 0; midI < 100; midI++) {

		NameTemple.KeySpace[4] = '0' + midI / 10;
		NameTemple.KeySpace[5] = '0' + midI % 10;

		GetEleOrder(ParaPair, 0) |= NameTemple;
		GetEleOrder(ParaPair, 1) |= LexOrderSubEESElement;
		LexOrderEESSelectFunction(ParaPair, Address);

		GetEleOrder(ParaPair, 0) |= Address;
		GetEleOrder(ParaPair, 1) |= LexOrderSubEESElement;
		ReadSuperIndexLexOrderEESFunction(ParaPair, SuperIndexElement);

		SuperIndexToUIntFunction(SuperIndexElement, UIntElement);

		std::cout << "Name: " << NameTemple.KeySpace << " SuperIndex: " << GetUIntElement(UIntElement) << std::endl;

		ZeroElementFunction(EmptyElement, SuperIndexElement);
	}

	std::cout << std::endl;

	std::cout << "Select:" << std::endl;

	for (midI = 0; midI < 100; midI++) {

		NameTemple.KeySpace[4] = '0' + midI / 10;
		NameTemple.KeySpace[5] = '0' + midI % 10;

		GetEleOrder(ParaPair, 0) |= NameTemple;
		GetEleOrder(ParaPair, 1) |= LexOrderSubEESElement;
		LexOrderEESSelectFunction(ParaPair, Address);

		std::cout << "Name: " << NameTemple.KeySpace << " Address: " << GetUIntElement(Address) << std::endl;
	}

	std::cout << std::endl;

	std::cout << "Logout:" << std::endl;

	for (midI = 0; midI < 100; midI += 2) {

		NameTemple.KeySpace[4] = '0' + midI / 10;
		NameTemple.KeySpace[5] = '0' + midI % 10;

		GetEleOrder(ParaPair, 0) |= NameTemple;
		GetEleOrder(ParaPair, 1) |= LexOrderSubEESElement;
		LogoutLexOrderEESFunction(ParaPair, SuperIndexElement);

		SuperIndexToUIntFunction(SuperIndexElement, UIntElement);

		std::cout << "Name: " << NameTemple.KeySpace << " SuperIndex: " << GetUIntElement(UIntElement) << std::endl;

		ReleaseElementFunction(EmptyElement, SuperIndexElement);
	}

	std::cout << std::endl;

	GetUIntElement(Address) = 0;

	GetEleOrder(ParaPair, 0) |= Address;
	GetEleOrder(ParaPair, 1) |= LexOrderSubEESElement;
	NextAddressLexOrderEESFunction(ParaPair, NextAddress);

	std::cout << "Address: " << GetUIntElement(Address) << " NextAddress: " << GetUIntElement(NextAddress) << std::endl;

	GetUIntElement(Address) = 1;

	GetEleOrder(ParaPair, 0) |= Address;
	GetEleOrder(ParaPair, 1) |= LexOrderSubEESElement;
	NextAddressLexOrderEESFunction(ParaPair, NextAddress);

	std::cout << "Address: " << GetUIntElement(Address) << " NextAddress: " << GetUIntElement(NextAddress) << std::endl;

	std::cout << std::endl;

	LexOrderEESSortFunction(EmptyElement, LexOrderSubEESElement);

	DefragmentLexOrderEESFunction(EmptyElement, LexOrderSubEESElement);

	FirstEmptyLexOrderEESFunction(LexOrderSubEESElement, Address);

	std::cout << "First Empty Address: " << GetUIntElement(Address) << std::endl;

	RetainLexOrderEESFunction(Address, LexOrderSubEESElement);

	FirstEmptyLexOrderEESFunction(LexOrderSubEESElement, Address);

	std::cout << "First Empty Address: " << GetUIntElement(Address) << std::endl;

	std::cout << std::endl;

	for (midI = 1; midI < 100; midI += 2) {

		NameTemple.KeySpace[4] = '0' + midI / 10;
		NameTemple.KeySpace[5] = '0' + midI % 10;

		GetEleOrder(ParaPair, 0) |= NameTemple;
		GetEleOrder(ParaPair, 1) |= LexOrderSubEESElement;
		LogoutLexOrderEESFunction(ParaPair, SuperIndexElement);

		SuperIndexToUIntFunction(SuperIndexElement, UIntElement);

		std::cout << "Name: " << NameTemple.KeySpace << " SuperIndex: " << GetUIntElement(UIntElement) << std::endl;

		ReleaseElementFunction(EmptyElement, SuperIndexElement);
	}

	LexOrderEESSortFunction(EmptyElement, LexOrderSubEESElement);

	DefragmentLexOrderEESFunction(EmptyElement, LexOrderSubEESElement);

	FirstEmptyLexOrderEESFunction(LexOrderSubEESElement, Address);

	std::cout << "First Empty Address: " << GetUIntElement(Address) << std::endl;

	RetainLexOrderEESFunction(Address, LexOrderSubEESElement);

	ReleaseLexOrderEESFunction(EmptyElement, LexOrderSubEESElement);

	return 0;
}