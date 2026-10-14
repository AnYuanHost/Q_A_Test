#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {
	bool IntentionalityObjectSetTest(Element& Ele, Set& S);

	extern Set IntentionalityObjectSet;

	bool NewIntentionalityObjectFunction(Element& Domain, Element& Range);

	extern Map NewIntentionalityObject;

	bool ReleaseIntentionalityObjectFunction(Element& Domain, Element& Range);

	extern Map ReleaseIntentionalityObject;

	bool SelectIntentionalityObjectFunction(Element& Domain, Element& Range);

	extern Map SelectIntentionalityObject;

	bool AddIntentionalityObjectFunction(Element& Domain, Element& Range);

	extern Map AddIntentionalityObject;

	bool RemoveIntentionalityObjectFunction(Element& Domain, Element& Range);

	extern Map RemoveIntentionalityObject;

	bool ReadIntentionalityObjectFunction(Element& Domain, Element& Range);

	extern Map ReadIntentionalityObject;

	bool GetIntentionalityObjectFunction(Element& Domain, Element& Range);

	extern Map GetIntentionalityObject;

	bool PutIntentionalityObjectFunction(Element& Domain, Element& Range);

	extern Map PutIntentionalityObject;

	bool SortIntentionalityObjectFunction(Element& Domain, Element& Range);

	extern Map SortIntentionalityObject;
}