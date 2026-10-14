#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {

	bool AddressCreaterTest(Element& Ele, Set& S);

	extern Set AddressCreater;

	bool AddressCreaterTransformFunction(Element& Domain, Element& Range);

	extern Map AddressCreaterTransform;

	bool ReleaseAddressCreaterFunction(Element& Domain, Element& Range);

	extern Map ReleaseAddressCreater;

	namespace AddressCreaterManager_Struct {
		constexpr unsigned int ACM_QuestionFlowMap		= 0;
	}

	bool AddressCreaterManagerTest(Element& Ele, Set& S);

	extern Set AddressCreaterManager;

	bool NewAddressCreaterManagerFunction(Element& Domain, Element& Range);

	extern Map NewAddressCreaterManager;

	bool SetAddressCreaterManagerMapFunction(Element& Domain, Element& Range);

	extern Map SetAddressCreaterManagerMap;

	bool ReleaseAddressCreaterManagerFunction(Element& Domain, Element& Range);
	
	extern Map ReleaseAddressCreaterManager;

	bool NextAddressCreaterManagerFunction(Element& Domain, Element& Range);

	extern Map NextAddressCreaterManager;

	bool ReleaseAddressOrderFunction(Element& Domain, Element& Range);

	extern Map ReleaseAddressOrder;
}