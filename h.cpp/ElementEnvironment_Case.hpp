#pragma once

#define ElementEnvironment_Case_Code 9

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