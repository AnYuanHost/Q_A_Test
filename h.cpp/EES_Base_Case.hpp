#pragma once

#define EES_Base_Case_Code 10

#include<iostream>

#include<E_S_M/h.cpp/All_E_S_M.h>
#include<Math/h.cpp/All_Math.h>

#include<ESM_Manage/h.cpp/EES_Base.h>
#include<ESM_Manage/h.cpp/ElementEnvironment.h>
#include<ESM_Manage/h.cpp/SubEES_SuperIndex.h>
#include<ESM_Manage/h.cpp/SubEES_8Bit.h>

using namespace Q_A;

int EES_Base_Case_Main() {

	unsigned int midI;

	Element BoolElement;
	NewBoolElementFunction(EmptyElement, BoolElement);
	Element UIntElement;
	NewUIntElementFunction(EmptyElement, UIntElement);

	Element ParameterPair;
	NewOrderedPairFunction(EmptyElement, ParameterPair);

	Element ParameterOrder;
	GetUIntElement(UIntElement) = 3;
	UIntNewElementOrderFunction(UIntElement, ParameterOrder);

	Element ZeroElement;
	Element SubEESElement;

	Element EESElement;
	NewElementEnvironmentSearcherFunction(EmptyElement, EESElement);

	NewElementEnvironmentFunction(EmptyElement, GetEleOrder(ParameterPair, 0));
	ElementEnvironmentLoginMapFunction(EmptyElement, GetEleOrder(ParameterPair, 1));

	PutEESEnvironmentFunction(ParameterPair, EESElement);

	Element SuperIndexSubEESSuperIndex;
	GetUIntElement(UIntElement) = 1;
	UIntToSuperIndexFunction(UIntElement, SuperIndexSubEESSuperIndex);

	Element _8BitSubEESSuperIndex;
	GetUIntElement(UIntElement) = 2;
	UIntToSuperIndexFunction(UIntElement, _8BitSubEESSuperIndex);

	Element SuperIndexElement;

	Element _8BitElement;
	New8BitElementFunction(EmptyElement, _8BitElement);

	NewSuperIndexSubEESDefaultParameterFunction(EmptyElement, ZeroElement);
	NewSuperIndexSubEESFunction(ZeroElement, SubEESElement);

	CopyElementFunction(SuperIndexSubEESSuperIndex, GetEleOrder(ParameterOrder, 0));
	GetEleOrder(ParameterOrder, 1) &= SubEESElement;
	LoginSuperIndexSubEESMapSetFunction(EmptyElement, GetEleOrder(ParameterOrder, 2));

	LoginSubEESEESFunction(ParameterOrder, EESElement);

	New8BitSearcherFunction(EmptyElement, SubEESElement);

	CopyElementFunction(_8BitSubEESSuperIndex, GetEleOrder(ParameterOrder, 0));
	GetEleOrder(ParameterOrder, 1) &= SubEESElement;
	LoginMap8BitSearcherFunction(EmptyElement, GetEleOrder(ParameterOrder, 2));

	LoginSubEESEESFunction(ParameterOrder, EESElement);

	for (midI = 0; midI < 100; midI++) {
		GetUIntElement(UIntElement) = midI;

		UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

		GetEleOrder(ParameterPair, 0) |= SuperIndexSubEESSuperIndex;
		GetEleOrder(ParameterPair, 1) |= SuperIndexElement;

		LoginElementEnvironmentSearcherFunction(ParameterPair, EESElement);

		ReleaseElementFunction(EmptyElement, SuperIndexElement);
	}

	for (midI = 0; midI < 100; midI++) {
		Get8BitElement(_8BitElement) = midI + 1;

		GetEleOrder(ParameterPair, 0) |= _8BitSubEESSuperIndex;
		GetEleOrder(ParameterPair, 1) |= _8BitElement;

		LoginElementEnvironmentSearcherFunction(ParameterPair, EESElement);
	}

	for (midI = 0; midI < 100; midI++) {
		GetUIntElement(UIntElement) = midI;
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

		NewUIntElementFunction(EmptyElement, ZeroElement);
		GetUIntElement(ZeroElement) = midI * 2;

		GetEleOrder(ParameterOrder, 0) |= SuperIndexSubEESSuperIndex;
		GetEleOrder(ParameterOrder, 1) |= SuperIndexElement;
		GetEleOrder(ParameterOrder, 2) &= ZeroElement;

		PutElementEnvironmentSearcherFunction(ParameterOrder, EESElement);

		ReleaseElementFunction(EmptyElement, SuperIndexElement);

		Get8BitElement(_8BitElement) = midI + 1;

		NewUIntElementFunction(EmptyElement, ZeroElement);
		GetUIntElement(ZeroElement) = midI * 2 + 1;

		GetEleOrder(ParameterOrder, 0) |= _8BitSubEESSuperIndex;
		GetEleOrder(ParameterOrder, 1) |= _8BitElement;
		GetEleOrder(ParameterOrder, 2) &= ZeroElement;

		PutElementEnvironmentSearcherFunction(ParameterOrder, EESElement);
	}

	for (midI = 0; midI < 100; midI++) {
		GetUIntElement(UIntElement) = midI;
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

		GetEleOrder(ParameterOrder, 0) |= SuperIndexSubEESSuperIndex;
		GetEleOrder(ParameterOrder, 1) |= SuperIndexElement;
		GetEleOrder(ParameterOrder, 2) |= EESElement;
		ReadElementEnvironmentSearcherFunction(ParameterOrder, ZeroElement);

		std::cout << GetUIntElement(ZeroElement) << std::endl;

		ReleaseElementFunction(EmptyElement, SuperIndexElement);
		ZeroElementFunction(EmptyElement, ZeroElement);

		Get8BitElement(_8BitElement) = midI + 1;

		GetEleOrder(ParameterOrder, 0) |= _8BitSubEESSuperIndex;
		GetEleOrder(ParameterOrder, 1) |= _8BitElement;
		GetEleOrder(ParameterOrder, 2) |= EESElement;
		ReadElementEnvironmentSearcherFunction(ParameterOrder, ZeroElement);

		std::cout << GetUIntElement(ZeroElement) << std::endl;

		ZeroElementFunction(EmptyElement, ZeroElement);
	}

	for (midI = 0; midI < 100; midI += 2) {
		GetUIntElement(UIntElement) = midI;
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

		GetEleOrder(ParameterOrder, 0) |= SuperIndexSubEESSuperIndex;
		GetEleOrder(ParameterOrder, 1) |= SuperIndexElement;
		GetEleOrder(ParameterOrder, 2) |= EESElement;
		GetElementEnvironmentSearcherFunction(ParameterOrder, ZeroElement);

		ReleaseElementFunction(EmptyElement, ZeroElement);
		ReleaseElementFunction(EmptyElement, SuperIndexElement);

		Get8BitElement(_8BitElement) = midI + 1;

		GetEleOrder(ParameterOrder, 0) |= _8BitSubEESSuperIndex;
		GetEleOrder(ParameterOrder, 1) |= _8BitElement;
		GetEleOrder(ParameterOrder, 2) |= EESElement;
		GetElementEnvironmentSearcherFunction(ParameterOrder, ZeroElement);

		ReleaseElementFunction(EmptyElement, ZeroElement);
	}

	for (midI = 0; midI < 100; midI += 2) {
		GetUIntElement(UIntElement) = midI;
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

		GetEleOrder(ParameterPair, 0) |= SuperIndexSubEESSuperIndex;
		GetEleOrder(ParameterPair, 1) |= SuperIndexElement;
		LogoutElementEnvironmentSearcherFunction(ParameterPair, EESElement);

		ReleaseElementFunction(EmptyElement, SuperIndexElement);

		Get8BitElement(_8BitElement) = midI + 1;

		GetEleOrder(ParameterPair, 0) |= _8BitSubEESSuperIndex;
		GetEleOrder(ParameterPair, 1) |= _8BitElement;
		LogoutElementEnvironmentSearcherFunction(ParameterPair, EESElement);
	}

	SortElementEnvironmentSearcherFunction(EmptyElement, EESElement);

	DefragmentElementEnvironmentSearcherFunction(EmptyElement, EESElement);

	RetainElementEnvironmentSearcherFunction(EmptyElement, EESElement);

	GetUIntElement(UIntElement) = 1;
	UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

	GetEleOrder(ParameterOrder, 0) |= SuperIndexSubEESSuperIndex;
	GetEleOrder(ParameterOrder, 1) |= SuperIndexElement;
	GetEleOrder(ParameterOrder, 2) |= EESElement;
	GetOccupyElementEnvironmentSearcherFunction(ParameterOrder, BoolElement);

	if (GetBoolElement(BoolElement) == false) {
		GetBoolElement(BoolElement) = true;

		GetEleOrder(ParameterOrder, 0) |= SuperIndexSubEESSuperIndex;
		GetEleOrder(ParameterOrder, 1) |= SuperIndexElement;
		GetEleOrder(ParameterOrder, 2) |= BoolElement;
		PutOccupyElementEnvironmentSearcherFunction(ParameterOrder, EESElement);
	}

	ReleaseElementFunction(EmptyElement, SuperIndexElement);

	GetUIntElement(UIntElement) = 1;
	UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

	GetEleOrder(ParameterOrder, 0) |= SuperIndexSubEESSuperIndex;
	GetEleOrder(ParameterOrder, 1) |= SuperIndexElement;
	GetEleOrder(ParameterOrder, 2) |= EESElement;
	GetOccupyElementEnvironmentSearcherFunction(ParameterOrder, BoolElement);

	if (GetBoolElement(BoolElement) == true) {
		GetBoolElement(BoolElement) = false;

		GetEleOrder(ParameterOrder, 0) |= SuperIndexSubEESSuperIndex;
		GetEleOrder(ParameterOrder, 1) |= SuperIndexElement;
		GetEleOrder(ParameterOrder, 2) |= BoolElement;
		PutOccupyElementEnvironmentSearcherFunction(ParameterOrder, EESElement);
	}

	ReleaseElementFunction(EmptyElement, SuperIndexElement);

	GetUIntElement(UIntElement) = 1;
	UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

	GetEleOrder(ParameterPair, 0) |= SuperIndexSubEESSuperIndex;
	GetEleOrder(ParameterPair, 1) |= SuperIndexElement;
	OccupyElementEnvironmentSearcherFunction(ParameterPair, EESElement);

	GetEleOrder(ParameterPair, 0) |= SuperIndexSubEESSuperIndex;
	GetEleOrder(ParameterPair, 1) |= SuperIndexElement;
	RelieveOccupyElementEnvironmentSearcherFunction(ParameterPair, EESElement);

	ReleaseElementFunction(EmptyElement, SuperIndexElement);

	for (midI = 1; midI < 100; midI += 2) {
		GetUIntElement(UIntElement) = midI;
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

		GetEleOrder(ParameterOrder, 0) |= SuperIndexSubEESSuperIndex;
		GetEleOrder(ParameterOrder, 1) |= SuperIndexElement;
		GetEleOrder(ParameterOrder, 2) |= EESElement;
		GetElementEnvironmentSearcherFunction(ParameterOrder, ZeroElement);

		ReleaseElementFunction(EmptyElement, ZeroElement);

		GetEleOrder(ParameterPair, 0) |= SuperIndexSubEESSuperIndex;
		GetEleOrder(ParameterPair, 1) |= SuperIndexElement;
		LogoutElementEnvironmentSearcherFunction(ParameterPair, EESElement);

		ReleaseElementFunction(EmptyElement, SuperIndexElement);

		Get8BitElement(_8BitElement) = midI + 1;

		GetEleOrder(ParameterOrder, 0) |= _8BitSubEESSuperIndex;
		GetEleOrder(ParameterOrder, 1) |= _8BitElement;
		GetEleOrder(ParameterOrder, 2) |= EESElement;
		GetElementEnvironmentSearcherFunction(ParameterOrder, ZeroElement);

		ReleaseElementFunction(EmptyElement, ZeroElement);

		GetEleOrder(ParameterPair, 0) |= _8BitSubEESSuperIndex;
		GetEleOrder(ParameterPair, 1) |= _8BitElement;
		LogoutElementEnvironmentSearcherFunction(ParameterPair, EESElement);
	}

	SortElementEnvironmentSearcherFunction(EmptyElement, EESElement);

	DefragmentElementEnvironmentSearcherFunction(EmptyElement, EESElement);

	RetainElementEnvironmentSearcherFunction(EmptyElement, EESElement);

	GetEleOrder(ParameterPair, 0) |= SuperIndexSubEESSuperIndex;
	GetEleOrder(ParameterPair, 1) |= EESElement;
	LogoutSubEESEESFunction(ParameterPair, ZeroElement);

	ReleaseSuperIndexSubEESFunction(EmptyElement, ZeroElement);

	GetEleOrder(ParameterPair, 0) |= _8BitSubEESSuperIndex;
	GetEleOrder(ParameterPair, 1) |= EESElement;
	LogoutSubEESEESFunction(ParameterPair, ZeroElement);

	Release8BitSearcherFunction(EmptyElement, ZeroElement);

	GetEESEnvironmentFunction(EESElement, ZeroElement);

	ReleaseElementEnvironmentFunction(EmptyElement, ZeroElement);

	ReleaseElementEnvironmentSearcherFunction(EmptyElement, EESElement);

	return 0;
}
