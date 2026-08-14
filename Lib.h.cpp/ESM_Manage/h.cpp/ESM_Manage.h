#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {
	bool SetPairTest(Element& Ele, Set& S);

	extern Set SetPair;

	bool PairInSetPairParameterTest(Element& Ele, Set& S);

	extern Set PairInSetPairParameter;

	bool PairInSetPairTestFunction(Element& Domain, Element& Range);

	extern Map PairInSetPairTest;

	bool ESMManageOrderTest(Element& Ele, Set& S);
	
	extern Set ESMManageOrder;

	bool FreeNewLibESMOrderFunction(Element& Domain, Element& Range);

	extern Map FreeNewLibESMOrder;
}