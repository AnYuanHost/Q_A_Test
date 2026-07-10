#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {
	bool DecimalCharANSISetTest(Element& Ele, Set& S);

	extern Set DecimalCharANSISet;

	bool DecimalCharToIntFun(Element& Domain, Element& Range);

	extern Map DecimalCharToInt;

	bool FourOperationANSISetTest(Element& Ele, Set& S);

	extern Set FourOperationANSISet;
	
	bool COperationANSISetTest(Element& Ele, Set& S);

	extern Set COperationANSISet;

	bool LowercaseAlphabetANSISetTest(Element& Ele, Set& S);

	extern Set LowercaseAlphabetANSISet;

	bool CapitalAlphabetANSISetTest(Element& Ele, Set& S);

	extern Set CapitalAlphabetANSISet;

	bool CBoundaryCharacterANSISetTest(Element& Ele, Set& S);

	extern Set CBoundaryCharacterANSISet;

	bool CBlankCharacterANSISetTest(Element& Ele, Set& S);

	extern Set CBlankCharacterANSISet;

	bool BelongToCharOrderSetTestFunction(Element& Ele, Set& S);

	bool BelongToCharOrderSetTest(Element& Ele, Set& S);

	extern Set BelongToCharOrderSet;
}