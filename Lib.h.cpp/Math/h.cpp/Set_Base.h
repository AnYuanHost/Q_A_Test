#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {
	bool ElementSetPairTest(Element& Ele, Set& S);

	extern Set ElementSetPair;

	bool SetBelongElementFunction(Element& Domain, Element& Range);

	extern Map SetBelongElement;
}