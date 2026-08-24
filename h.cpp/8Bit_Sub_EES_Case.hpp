#pragma once

#define _8Bit_Sub_EES_Case_Code 6

#include<E_S_M\h.cpp\All_E_S_M.h>
#include<ESM_Manage\h.cpp\SubEES_8Bit.h>
#include<Math\h.cpp\All_Math.h>

#include<iostream>

using namespace Q_A;

int _8Bit_Sub_EES_Case_Main() {

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

	Element _8BitElement;
	New8BitElementFunction(EmptyElement, _8BitElement);

	Element _8BitSubEESElement;
	New8BitSearcherFunction(EmptyElement, _8BitSubEESElement);

	std::cout << "Login: " << std::endl;

	for (midI = 0; midI < 100; midI++) {

		Get8BitElement(_8BitElement) = midI + 1;

		GetUIntElement(UIntElement) = midI;
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

		GetEleOrder(ParaPair, 0) |= _8BitElement;
		GetEleOrder(ParaPair, 1) |= SuperIndexElement;
		Login8BitSearcherFunction(ParaPair, _8BitSubEESElement);

		std::cout << "8BitElement: " << (unsigned int)Get8BitElement(_8BitElement) << " SuperIndex: " << GetUIntElement(UIntElement) << std::endl;

		ReleaseElementFunction(EmptyElement, SuperIndexElement);
	}

	std::cout << std::endl;

	std::cout << "Read:" << std::endl;

	for (midI = 0; midI < 100; midI++) {

		Get8BitElement(_8BitElement) = midI + 1;
		
		GetEleOrder(ParaPair, 0) |= _8BitElement;
		GetEleOrder(ParaPair, 1) |= _8BitSubEESElement;
		Select8BitSearcherFunction(ParaPair, Address);

		GetEleOrder(ParaPair, 0) |= Address;
		GetEleOrder(ParaPair, 1) |= _8BitSubEESElement;
		ReadSuperIndexIn8BitSearcherFunction(ParaPair, SuperIndexElement);

		SuperIndexToUIntFunction(SuperIndexElement, UIntElement);

		std::cout << "8BitElement: " << (unsigned int)Get8BitElement(_8BitElement) << " SuperIndex: " << GetUIntElement(UIntElement) << std::endl;

		ZeroElementFunction(EmptyElement, SuperIndexElement);
	}

	std::cout << std::endl;

	std::cout << "Select:" << std::endl;

	for (midI = 0; midI < 100; midI++) {
		Get8BitElement(_8BitElement) = midI + 1;

		GetEleOrder(ParaPair, 0) |= _8BitElement;
		GetEleOrder(ParaPair, 1) |= _8BitSubEESElement;
		Select8BitSearcherFunction(ParaPair, Address);

		std::cout << "8BitElement: " << (unsigned int)Get8BitElement(_8BitElement) << " Address: " << GetUIntElement(Address) << std::endl;
	}

	std::cout << std::endl;

	std::cout << "Logout:" << std::endl;

	for (midI = 0; midI < 100; midI += 2) {
		Get8BitElement(_8BitElement) = midI + 1;

		GetEleOrder(ParaPair, 0) |= _8BitElement;
		GetEleOrder(ParaPair, 1) |= _8BitSubEESElement;
		Logout8BitSearcherFunction(ParaPair, SuperIndexElement);

		SuperIndexToUIntFunction(SuperIndexElement, UIntElement);

		std::cout << "8BitElement: " << (unsigned int)Get8BitElement(_8BitElement) << " SuperIndex: " << GetUIntElement(UIntElement) << std::endl;

		ReleaseElementFunction(EmptyElement, SuperIndexElement);
	}

	std::cout << std::endl;

	GetUIntElement(Address) = 0;

	GetEleOrder(ParaPair, 0) |= Address;
	GetEleOrder(ParaPair, 1) |= _8BitSubEESElement;
	Next8BitSearcherAddressFunction(ParaPair, NextAddress);

	std::cout << "Address: " << GetUIntElement(Address) << " NextAddress: " << GetUIntElement(NextAddress) << std::endl;

	GetUIntElement(Address) = 1;

	GetEleOrder(ParaPair, 0) |= Address;
	GetEleOrder(ParaPair, 1) |= _8BitSubEESElement;
	Next8BitSearcherAddressFunction(ParaPair, NextAddress);

	std::cout << "Address: " << GetUIntElement(Address) << " NextAddress: " << GetUIntElement(NextAddress) << std::endl;

	std::cout << std::endl;

	Sort8BitSearcherFunction(EmptyElement, _8BitSubEESElement);

	EmptyMapFunction(EmptyElement, _8BitSubEESElement);

	FirstEmpty8BitSearcherAddressFunction(_8BitSubEESElement, Address);

	std::cout << "First Empty Address: " << GetUIntElement(Address) << std::endl;

	Retain8BitSearcherFunction(Address, _8BitSubEESElement);

	FirstEmpty8BitSearcherAddressFunction(_8BitSubEESElement, Address);

	std::cout << "First Empty Address: " << GetUIntElement(Address) << std::endl;

	std::cout << std::endl;

	for (midI = 1; midI < 100; midI += 2) {
		Get8BitElement(_8BitElement) = midI + 1;

		GetEleOrder(ParaPair, 0) |= _8BitElement;
		GetEleOrder(ParaPair, 1) |= _8BitSubEESElement;
		Logout8BitSearcherFunction(ParaPair, SuperIndexElement);

		SuperIndexToUIntFunction(SuperIndexElement, UIntElement);

		std::cout << "8BitElement: " << (unsigned int)Get8BitElement(_8BitElement) << " SuperIndex: " << GetUIntElement(UIntElement) << std::endl;

		ReleaseElementFunction(EmptyElement, SuperIndexElement);
	}

	Sort8BitSearcherFunction(EmptyElement, _8BitSubEESElement);

	EmptyMapFunction(EmptyElement, _8BitSubEESElement);

	FirstEmpty8BitSearcherAddressFunction(_8BitSubEESElement, Address);

	std::cout << "First Empty Address: " << GetUIntElement(Address) << std::endl;

	Retain8BitSearcherFunction(Address, _8BitSubEESElement);

	Release8BitSearcherFunction(EmptyElement, _8BitSubEESElement);

	return 0;
}