#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {
	bool DoubleVectorSetTest(Element& Ele, Set& S);

	extern Set DoubleVectorSet;

	bool DoubleMatrixSetTest(Element& Ele, Set& S);

	extern Set DoubleMatrixSet;

	bool NewDoubleMatrixFunction(Element& Domain, Element& Range);

	extern Map NewDoubleMatrix;

	bool BoolMatrixSetTest(Element& Ele, Set& S);

	extern Set BoolMatrixSet;

	bool NewBoolMatrixFunction(Element& Domain, Element& Range);

	extern Map NewBoolMatrix;

	bool GetRandomZeroUIntInBoolMatrixFunction(Element& Domain, Element& Range);

	extern Map GetRandomZeroUIntInBoolMatrix;

	bool SetOneInBoolMatrixFunction(Element& Domain, Element& Range);

	extern Map SetOneInBoolMatrix;

	bool SetZeroInBoolMatrixFunction(Element& Domain, Element& Range);

	extern Map SetZeroInBoolMatrix;

	bool SetInBoolMatrixParameterTest(Element& Ele, Set& S);

	extern Set SetInBoolMatrixParameter;

	bool SetInBoolMatrixFunction(Element& Domain, Element& Range);

	extern Map SetInBoolMatrix;
}