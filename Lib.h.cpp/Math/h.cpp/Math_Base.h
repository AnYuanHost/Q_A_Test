#pragma once
#include"E_S_M/h.cpp/E_S_M.h"
#include<math.h>
#include<random>
#include<float.h>

#pragma comment (lib, "Math.lib")

namespace Q_A {

#define TypeDescriptionSet UniversalSet

#define GetIntElement(Ele) (*(int*)Ele.KeySpace) 

	bool IntSetTest(Element& Ele, Set& S);

	extern Set IntSet;

	bool TwoIntPairSetTest(Element& Ele, Set& S);

	extern Set TwoIntPairSet;

	bool TwoUIntPairSetTest(Element& Ele, Set& S);
		
	extern Set TwoUIntPairSet;

	bool TwoUIntSymmetryFunction(Element& Domain, Element& Range);

	extern Map TwoUIntSymmetry;

	bool TwoIntAddFunction(Element& Domain, Element& Range);

	extern Map TwoIntAdd;

	bool TwoIntSubFunction(Element& Domain, Element& Range);

	extern Map TwoIntSub;

	bool TwoIntMulFunction(Element& Domain, Element& Range);

	extern Map TwoIntMul;

	bool TwoIntDivFunction(Element& Domain, Element& Range);

	extern Map TwoIntDiv;

	bool UIntAddFunction(Element& Domain, Element& Range);

	extern Map UIntAdd;

	bool UIntSubFunction(Element& Domain, Element& Range);

	extern Map UIntSub;

	bool UIntMulFunction(Element& Domain, Element& Range);

	extern Map UIntMul;

	bool UIntDivFunction(Element& Domain, Element& Range);

	extern Map UIntDiv;

	bool IntSuccessorFunction(Element& Domain, Element& Range);

	extern Map IntSuccessor;

	bool IntZeroFunction(Element& Domain, Element& Range);

	extern Map IntZero;

	bool UIntZeroFunction(Element& Domain, Element& Range);

	extern Map UIntZero;

	//extern void* BaseMathFunctionMapPointer[6];

#define GetDoubleElement(Ele) (*(double*)Ele.KeySpace)

	bool DoubleSetTest(Element& Ele, Set& S);

	extern Set DoubleSet;

	bool DoublePairSetTest(Element& Ele, Set& S);

	extern Set DoublePairSet;

#define GetUIntOrder(Ele,Index) (((unsigned int*)Ele.KeySpace)[Index])

	bool UnsignedIntOrderSetTest(Element& Ele, Set& S);

	extern Set UnsignedIntOrderSet;

	bool UIntOrderOrderSetTest(Element& Ele, Set& S);

	extern Set UIntOrderOrderSet;

	extern std::default_random_engine RandomEngine;

	extern std::uniform_real_distribution<double> UniformIn_0_1;

	bool RandomByProbabilityDistributionDescriptionPairTest(Element& Ele, Set& S);

	extern Set RandomByProbabilityDistributionDescriptionPair;

	bool RandomUniformRealInRangeFunction(Element& Domain, Element& Range);

	extern Map RandomUniformRealInRange;

	bool UIntLessFunction(Element& Domain, Element& Range);

	extern Map UIntLess;

	bool UIntLEFunction(Element& Domain, Element& Range);

	extern Map UIntLE;

	bool UIntGreaterFunction(Element& Domain, Element& Range);

	extern Map UIntGreater;

	bool UIntGEFunction(Element& Domain, Element& Range);

	extern Map UIntGE;

	bool TranslateBoolToUIntFunction(Element& Domain, Element& Range);

	extern Map TranslateBoolToUInt;

	bool TwoBoolPairTest(Element& Ele, Set& S);

	extern Set TwoBoolPair;

	bool BoolOrFunction(Element& Domain, Element& Range);

	extern Map BoolOr;

	bool BoolAndFunction(Element& Domain, Element& Range);

	extern Map BoolAnd;

	bool BoolXORFunction(Element& Domain, Element& Range);

	extern Map BoolXOR;

	bool BoolNotFunction(Element& Domain, Element& Range);

	extern Map BoolNot;

#define SuperIndexSet UniversalSet

#define SuperIndexSetTest UniversalSetTest

	bool SuperIndexLessFunction(Element& Domain, Element& Range);

	extern Map SuperIndexLess;

	bool SuperIndexLEFunction(Element& Domain, Element& Range);

	extern Map SuperIndexLE;

	bool SuperIndexGreaterFunction(Element& Domain, Element& Range);

	extern Map SuperIndexGreater;

	bool SuperIndexGEFunction(Element& Domain, Element& Range);

	extern Map SuperIndexGE;

	bool SuperIndexToUIntFunction(Element& Domain, Element& Range);

	extern Map SuperIndexToUInt;

	bool UIntToSuperIndexFunction(Element& Domain, Element& Range);

	extern Map UIntToSuperIndex;

	bool SuperIndexSuccessFunction(Element& Domain, Element& Range);

	extern Map SuperIndexSuccess;

	bool SuperIndexPrecursorFunction(Element& Domain, Element& Range);

	extern Map SuperIndexPrecursor;
}