#pragma once

#define SuperIndex_Searcher_Case_Code 10

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