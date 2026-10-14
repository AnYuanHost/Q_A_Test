#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {
	namespace SolutionFactory_Struct {
		constexpr unsigned int SF_OrderSize = 9;

		constexpr unsigned int SF_SolutionInformation			= 0;
		constexpr unsigned int SF_QuestionFlowMap				= 1;
		constexpr unsigned int SF_AddressCreater				= 2;
		constexpr unsigned int SF_MatchMap						= 3;
		constexpr unsigned int SF_ParameterDictionaries			= 4;
		constexpr unsigned int SF_ContextDictionaries			= 5;
		constexpr unsigned int SF_Solution						= 6;
		constexpr unsigned int SF_InformationCreaterSuperIndex	= 7;
		constexpr unsigned int SF_AddressOrder					= 8;
	}

	bool SolutionFactoryTest(Element& Ele, Set& S);

	extern Set SolutionFactory;

	bool NewSolutionFactoryFunction(Element& Domain, Element& Range);

	extern Map NewSolutionFactory;

	bool SetSolutionFactorySolutionInformationFunction(Element& Domain, Element& Range);

	extern Map SetSolutionFactorySolutionInformation;

	bool SetSolutionFactoryQuestionFlowMapFunction(Element& Domain, Element& Range);

	extern Map SetSolutionFactoryQuestionFlowMap;

	bool SetSolutionFactoryMatchMapFunction(Element& Domain, Element& Range);

	extern Map SetSolutionFactoryMatchMap;

	bool GetSolutionFactoryMatchMapFunction(Element& Domain, Element& Range);

	extern Map GetSolutionFactoryMatchMap;

	bool SetSolutionFactoryInformationCreaterSuperIndexFunction(Element& Domain, Element& Range);

	extern Map SetSolutionFactoryInformationCreaterSuperIndex;

	bool SetSolutionFactoryAddressManagerFunction(Element& Domain, Element& Range);

	extern Map SetSolutionFactoryAddressManager;

	bool SolutionFactoryNewSolutionFunction(Element& Domain, Element& Range);

	extern Map SolutionFactoryNewSolution;

	bool SolutionFactoryGetSolutionFunction(Element& Domain, Element& Range);

	extern Map SolutionFactoryGetSolution;

	bool SolutionFactorySetSolutionInformationFunction(Element& Domain, Element& Range);

	extern Map SolutionFactorySetSolutionInformation;

	bool SolutionFactoryAskAddressFunction(Element& Domain, Element& Range);

	extern Map SolutionFactoryAskAddress;

	bool SolutionFactoryCopyParameterInformationFunction(Element& Domain, Element& Range);

	extern Map SolutionFactoryCopyParameterInformation;

	bool SolutionFactoryConstructRealityMapInformationFunction(Element& Domain, Element& Range);

	extern Map SolutionFactoryConstructRealityMapInformation;

	namespace RSFCRIF_Parameter {
		constexpr unsigned int Domain_NodeParameter				= 0;
		constexpr unsigned int Domain_ParaPair					= 1;
		constexpr unsigned int Domain_UInt						= 2;
		constexpr unsigned int Domain_Bool						= 3;
		constexpr unsigned int Domain_ZeroElement				= 4;
		constexpr unsigned int Domain_ParameterDictionaries		= 5;
		constexpr unsigned int Domain_ContextDictionaries		= 6;
	}

	bool RecursionSolutionFactoryConstructRealityInformationFunction(Element& Domain, Element& Range);

	extern Map RecursionSolutionFactoryConstructRealityInformation;

	bool SolutionFactoryConstructRealityInformationFunction(Element& Domain, Element& Range);
	
	extern Map SolutionFactoryConstructRealityInformation;

	bool SolutionFactoryConstructSecoundNodeOrderFunction(Element& Domain, Element& Range);

	extern Map SolutionFactoryConstructSecoundNodeOrder;

	bool SolutionFactorySecoundNodeOrderInlinkConstructFunction(Element& Domain, Element& Range);

	extern Map SolutionFactorySecoundNodeOrderInlinkConstruct;

	bool SolutionFactorySecoundNodeStateConstructFunction(Element& Domain, Element& Range);

	extern Map SolutionFactorySecoundNodeStateConstruct;

	bool SolutionFactoryConstructLoginOutFunction(Element& Domain, Element& Range);

	extern Map SolutionFactoryConstructLoginOut;

	bool ReleaseSolutionFactoryFunction(Element& Domain, Element& Range);

	extern Map ReleaseSolutionFactory;
}