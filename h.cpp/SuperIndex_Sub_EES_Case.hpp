#pragma once

#define SuperIndex_Sub_EES_Case_Code 7

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