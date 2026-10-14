#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {
	bool OpenCoreKRSObjectDllFunction(Element& Domain, Element& Range);

	extern Map OpenCoreKRSObjectDll;

	bool CloseCoreKRSObjectDllFunction(Element& Domain, Element& Range);

	extern Map CloseCoreKRSObjectDll;

	bool ReadDictionariesCoreKRSObjectFunction(Element& Domain, Element& Range);

	extern Map ReadDictionariesCoreKRSObject;
}