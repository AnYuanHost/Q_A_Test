#pragma once
#include"ESM_Base.h"

namespace Q_A{

	bool TestScorePairTest(Element& Ele, Set& S);

	extern Set TestScorePair;

	bool NewTestScorePairFunction(Element& Domain, Element& Range);

	extern Map NewTestScorePair;

	bool ZeroTestScorePairFunction(Element& Domain, Element& Range);

	extern Map ZeroTestScorePair;

	bool BoolAddTestScorePairFunction(Element& Domain, Element& Range);

	extern Map BoolAddTestScorePair;

	bool AddTestScorePairFunction(Element& Domain, Element& Range);

	extern Map AddTestScorePair;

	bool ReleaseTestScorePairFunction(Element& Domain, Element& Range);

	extern Map ReleaseTestScorePair;

	namespace Code_Method {
		unsigned int GetTestScorePair(Element& Pair, unsigned int Index);
	}
}