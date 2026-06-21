#pragma once
#include"E_S_M.h"

namespace Q_A {

#define UINT_MAX      0xffffffff

#define GetEleOrder(Order, Index) ((Element*)(Order).KeySpace)[Index]

	extern Element EmptyElement;

#define GetSetElement(Ele) (*(Set*)(Ele).KeySpace)

	bool SetSetTest(Element& Ele, Set& S);

	extern Set SetSet;

#define GetMapElement(Ele) (*(Map*)(Ele).KeySpace)

	bool MapSetTest(Element& Ele, Set& S);

	extern Set MapSet;

	bool UniversalSetTest(Element& Ele, Set& S);

	extern Set UniversalSet;

	bool NullSetTest(Element& Ele, Set& S);

	extern Set NullSet;

	bool NullElementSetTest(Element& Ele, Set& S);

	extern Set NullElementSet;

	bool OrderedPairTest(Element& Ele, Set& S);

	extern Set OrderedPairSet;

	bool NewOrderedPairFunction(Element& Domain, Element& Range);

	extern Map NewOrderedPair;

	bool CopyOrderedPairFunction(Element& Domain, Element& Range);

	extern Map CopyOrderedPair;

	bool PutPairFirstElementFunction(Element& Domain, Element& Range);

	extern Map PutPairFirstElement;

	bool PutPairSecoundElementFunction(Element& Doamin, Element& Range);

	extern Map PutPairSecoundElement;

	bool GetPairFirstElementFunction(Element& Domain, Element& Range);

	extern Map GetPairFirstElement;

	bool GetPairSecoundElementFunction(Element& Domain, Element& Range);

	extern Map GetPairSecoundElement;

#define GetUIntElement(Ele) (((unsigned int*)((Ele).KeySpace))[0])

	bool UIntSetTest(Element& Ele, Set& S);

	extern Set UIntSet;

	bool NewUIntElementFunction(Element& Domain, Element& Range);

	extern Map NewUIntElement;

	bool UIntSuccessFunction(Element& Domain, Element& Range);

	extern Map UIntSuccess;

	bool ResizeElementFunction(Element& Domain, Element& Range);

	extern Map ResizeElement;

	bool ReleaseElementFunction(Element& Domain, Element& Range);

	extern Map ReleaseElement;

	bool ZeroElementFunction(Element& Domain, Element& Range);

	extern Map ZeroElement;

	bool CopyElementFunction(Element& Domain, Element& Range);

	extern Map CopyElement;

	bool SwapElementFunction(Element& Domain, Element& Range);
	
	extern Map SwapElement;

	bool CareElementFunction(Element& Domain, Element& Range);
	
	extern Map CareElement;

	bool ActiveMapSetTest(Element& Doamin, Set& S);

	extern Set ActiveMapSet;

	bool ActiveMapExecuteFunction(Element& Domain, Element& Range);

	extern Map ActiveMapExecute;

	bool NewActiveMapFunction(Element& Domain, Element& Range);

	extern Map NewActiveMap;

#define GetCharElement(Ele) (*(char*)(Ele).KeySpace)

	bool CharSetTest(Element& Ele, Set& S);

	extern Set CharSet;

	bool NewCharElementFunction(Element& Domain, Element& Range);

	extern Map NewCharElement;

	bool CharZeroFunction(Element& Domain, Element& Range);

	extern Map CharZero;

	bool CharNextFunction(Element& Domain, Element& Range);

	extern Map CharNext;

#define GetEleOrderSize(Ele) ((Ele).Size / sizeof(Element))

	bool ElementOrderSetTest(Element& Ele, Set& S);

	extern Set ElementOrderSet;

	bool ElementOrderationFunction(Element& Domain, Element& Range);

	extern Map ElementOrderation;

	bool ElementOrderMergeFunction(Element& Domain, Element& Range);

	extern Map ElementOrderMerge;

	bool ElementOrderIndexPairSetTest(Element& Ele, Set& S);

	extern Set ElementOrderIndexPairSet;

	bool UIntNewElementOrderFunction(Element& Domain, Element& Range);

	extern Map UIntNewElementOrder;

	bool UIntGetElementOrderFunction(Element& Domain, Element& Range);

	extern Map UIntGetElementOrder;

	bool UIntGetQuoteElementOrderFunction(Element& Domain, Element& Range);

	extern Map UIntGetQuoteElementOrder;

	bool UIntPutElementOrderFunction(Element& Domain, Element& Range);

	extern Map UIntPutElementOrder;

	bool CopyElementOrderFunction(Element& Domain, Element& Range);

	extern Map CopyElementOrder;

	bool PushElementOrderFunction(Element& Domain, Element& Range);

	extern Map PushElementOrder;

	bool HeadPopElementOrderFunction(Element& Domain, Element& Range);

	extern Map HeadPopElementOrder;

	bool TailPopElementOrderFunction(Element& Domain, Element& Range);

	extern Map TailPopElementOrder;

	bool RandomPopElementOrderFunction(Element& Domain, Element& Range);

	extern Map RandomPopElementOrder;

#define GetBoolElement(Ele) (*(bool*)Ele.KeySpace)

	bool BoolSetTest(Element& Doamin, Set& S);

	extern Set BoolSet;

#define GetPointerElement(Ele) (*(void**)Ele.KeySpace)

	bool PointerSetTest(Element& Ele, Set& S);

	extern Set PointerSet;

	bool NewBoolElementFunction(Element& Domain, Element& Range);

	extern Map NewBoolElement;

	bool NewPointerElementFunction(Element& Domain, Element& Range);

	extern Map NewPointerElement;

#define GetPointerSElement(Ele,Index) (((void**)Ele.KeySpace)[Index])

	bool PointerSSetTest(Element& Ele, Set& S);

	extern Set PointerSSet;

	bool PointerSUIntPairSetTest(Element& Ele, Set& S);

	extern Set PointerSUIntPairSet;

	bool GetPointerSFunction(Element& Domain, Element& Range);

	extern Map GetPointerS;

	bool PutPointerSFunction(Element& Domain, Element& Range);

	extern Map PutPointerS;

	bool TwoCharPairSetTest(Element& Domain, Set& S);

	extern Set TwoCharPairSet;

	bool TwoCharEqualFunction(Element& Domain, Element& Range);

	extern Map TwoCharEqual;

	bool ElementEqualFunction(Element& Domain, Element& Range);

	extern Map ElementEqual;

	bool ArraySetTest(Element& Ele, Set& S);

	extern Set ArraySet;

	bool ArrayIndexPairSetTest(Element& Ele, Set& S);

	extern Set ArrayIndexPairSet;

	bool GetArraySectionFunction(Element& Domain, Element& Range);

	extern Map GetArraySection;

	bool PutArraySectionFunction(Element& Domain, Element& Range);

	extern Map PutArraySection;

	bool GetElementPointerFunction(Element& Domain, Element& Range);

	extern Map GetElementPointer;

	bool CopySetElementFunction(Element& Domain, Element& Range);

	extern Map CopySetElement;

	bool SetSetParameterFunction(Element& Domain, Element& Range);

	extern Map SetSetParameter;

	bool GetSetParameterFunction(Element& Domain, Element& Range);

	extern Map GetSetParameter;

	bool UniversalIndexPairTest(Element& Ele, Set& S);

	extern Set UniversalIndexPair;

	bool CarePointerFunction(Element& Domain, Element& Range);
	
	extern Map CarePointer;

	bool EmptyMapFunction(Element& Domain, Element& Range);

	extern Map EmptyMap;
}