#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {

#define DataStringSet UniversalSet

	bool MinkowskiDistanceParameterOrderTest(Element& Ele, Set& S);

	extern Set MinkowskiDistanceParameterOrder;

	bool MinkowskiDistanceEvaluationFunction(Element& Domain, Element& Range);

	extern Map MinkowskiDistanceEvaluation;

	bool K_MeansEvaluationParameterOrderTest(Element& Ele, Set& S);

	extern Set K_MeansEvaluationParameterOrder;

	bool K_MeansEvaluationFunction(Element& Domain, Element& Range);

	extern Map K_MeansEvaluation;

	bool K_MeansRandomMeansFunction(Element& Domain, Element& Range);

	extern Map K_MeansRandomMeans;

	bool K_MeansGetNewMeansGeneralFunction(Element& Domain, Element& Range);

	extern Map K_MeansGetNewMeansGeneral;

	bool K_MeansGetNewMeansPointFunction(Element& Domain, Element& Range);

	extern Map K_MeansGetNewMeansPoint;

	bool ReleaseK_MeansOrderFunction(Element& Domain, Element& Range);

	extern Map ReleaseK_MeansOrder;
}