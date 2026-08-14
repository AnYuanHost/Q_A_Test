#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {
	bool StringPairOrderSetTest(Element& Ele, Set& S);

	extern Set StringPairOrderSet;

	bool StringPairOrderSelectSubEESFunction(Element& Domain, Element& Range);

	extern Map StringPairOrderSelectSubEES;

	bool StringPairOrderSelectElementFunction(Element& Domain, Element& Range);

	extern Map StringPairOrderSelectElement;
}