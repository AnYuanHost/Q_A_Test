#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

#include<string>

namespace Q_A {

#define StreamSetTest UniversalSetTest

#define StreamSet UniversalSet

	bool CutStreamByRangeOrderTest(Element& Ele, Set& S);

	extern Set CutStreamByRangeOrder;

	bool CutStreamByRangeFunction(Element& Domain, Element& Range);

	extern Map CutStreamByRange;

	bool CutStreamByRangesOrderTest(Element& Ele, Set& S);

	extern Set CutStreamByRangesOrder;

	bool CutStreamByRangesFunction(Element& Domain, Element& Range);

	extern Map CutStreamByRanges;

#define GetStringElement(Ele) (*(std::string*)(Ele).KeySpace)

	bool StringSetTest(Element& Ele, Set& S);

	extern Set StringSet;

	bool NewStringFunction(Element& Domain, Element& Range);

	extern Map NewString;

	bool ReleaseStringFunction(Element& Domain, Element& Range);
	
	extern Map ReleaseString;

	bool StreamToStringFunction(Element& Domain, Element& Range);

	extern Map StreamToString;

	bool StringToStreamFunction(Element& Domain, Element& Range);

	extern Map StringToStream;

	bool SameInitialSubStreamTest(Element& Ele, Set& S);

	extern Set SameInitialSubStream;

	bool StreamLexicographicalOrderBeforeFunction(Element& Domain, Element& Range);

	extern Map StreamLexicographicalOrderBefore;

	bool UIntToStreamFunction(Element& Domain, Element& Range);

	extern Map UIntToStream;

	bool StreamOrderToStreamFunction(Element& Domain, Element& Range);

	extern Map StreamOrderToStream;
	
	bool StreamReadElementFunction(Element& Domain, Element& Range);

	extern Map StreamReadElement;

	bool StreamGetElementFunction(Element& Domain, Element& Range);

	extern Map StreamGetElement;

	bool StreamPutElementFunction(Element& Domain, Element& Range);

	extern Map StreamPutElement;
}