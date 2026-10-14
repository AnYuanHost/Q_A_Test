#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {
	namespace UniversalMapSearcher_Struct {
		constexpr unsigned int UMS_SuperIndex		= 0;
		constexpr unsigned int UMS_Order			= 1;
		constexpr unsigned int UMS_Parameter		= 2;
			constexpr unsigned int UMS_Number					= 0;
	}

	extern Element UniversalMapSearcherElement;

	bool UniversalMapSearcherTest(Element& Ele, Set& S);

	extern Set UniversalMapSearcher;

	namespace SUMSF_Domain {
		constexpr unsigned int SUMSF_SuperIndex			= 0;
		constexpr unsigned int SUMSF_UMS				= 1;
		constexpr unsigned int SUMSF_Pair				= 2;
		constexpr unsigned int SUMSF_Bool				= 3;
	}

	bool SelectUniversalMapSearcherFunction(Element& Domain, Element& Range);

	extern Map SelectUniversalMapSearcher;

	bool ReleaseUniversalMapSearcherFunction(Element& Domain, Element& Range);

	extern Map ReleaseUniversalMapSearcher;

	namespace UniversalMapSearcherOrder_Struct {
		constexpr unsigned int UMSO_Order		= 0;
		constexpr unsigned int UMSO_Parameter	= 1;
	}

	bool UniversalMapSearcherOrderTest(Element& Ele, Set& S);

	extern Set UniversalMapSearcherOrder;

	bool NewUniversalMapSearcherOrderFunction(Element& Domain, Element& Range);

	extern Map NewUniversalMapSearcherOrder;

	bool LoginUniversalMapSearcherOrderFunction(Element& Domain, Element& Range);

	extern Map LoginUniversalMapSearcherOrder;

	bool LogoutUniversalMapSearcherOrderFunction(Element& Domain, Element& Range);

	extern Map LogoutUniversalMapSearcherOrder;

	bool SelectUniversalMapSearcherOrderFunction(Element& Domain, Element& Range);

	extern Map SelectUniversalMapSearcherOrder;

	bool ReleaseUniversalMapSearcherOrderFunction(Element& Domain, Element& Range);

	extern Map ReleaseUniversalMapSearcherOrder;

}
