#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {
	namespace Solution_Struct {
	constexpr unsigned int SolutionOrderSize = 6;
		constexpr unsigned int SolutionState			= 0;
		constexpr unsigned int Solution_RemoveNode		= 1;
		constexpr unsigned int Solution_AddNode			= 2;
		constexpr unsigned int Solution_LoginElement	= 3;
		constexpr unsigned int Solution_LogoutElement	= 4;
		constexpr unsigned int Solution_Information		= 5;
	}

	namespace SolutionStateCode {
		constexpr unsigned int Solution_Pending		= 0;
		constexpr unsigned int Solution_Replacing	= 1;
		constexpr unsigned int Solution_Complate	= 2;
	}

	bool SolutionSetTest(Element& Ele, Set& S);

	extern Set SolutionSet;

	bool NewSolutionFunction(Element& Domain, Element& Range);

	extern Map NewSolution;

	bool ReleaseSolutionFunction(Element& Domain, Element& Range);

	extern Map ReleaseSolution;

	bool SolutionReplaceKRSQuestionFlowMapFunction(Element& Domain, Element& Range);

	extern Map SolutionReplaceKRSQuestionFlowMap;

	bool SortUIntAddressOrderFunction(unsigned int* Array, unsigned int Size);

	bool SelectUIntAddressOrderFunction(unsigned int* Array, unsigned int Size, unsigned int UIntInformation, unsigned int& ResultAddress);

	bool SelectQuestionLinkOrderFunction(Element& LinkOrder, unsigned int UIntInformation, unsigned int& ResultAddress);

	bool SolutionLoginOutKRSElementEnvironmentSearcherFunction(Element& Domain, Element& Range);
	
	extern Map SolutionLoginOutKRSElementEnvironmentSearcher;

	bool SolutionReplaceKRSPollingDrivenFunction(Element& Domain, Element& Range);

	extern Map SolutionReplaceKRSPollingDriven;

	namespace KRSSolutionManager_Struct {
		constexpr unsigned int KRSSolutionOrder			= 0;
		constexpr unsigned int KRSSolutionParameter		= 1;
			constexpr unsigned int KRSSolutionOrderPageSize		= 0;
			constexpr unsigned int KRSSolutionOrderExpandSize	= 1;
			constexpr unsigned int KRSSolutionOrderRetainSize	= 2;
			constexpr unsigned int KRSSolutionOrderEnd			= 3;
			constexpr unsigned int KRSSolutionOrderEmptySize	= 4;
	}

	bool KRSSolutionManagerTest(Element& Ele, Set& S);

	extern Set KRSSolutionManager;

	bool NewKRSSolutionManagerFunction(Element& Domain, Element& Range);

	extern Map NewKRSSolutionManager;

	bool ReadKRSSolutionManagerFunction(Element& Domain, Element& Range);

	extern Map ReadKRSSolutionManager;

	bool LoginKRSSolutionManagerFunction(Element& Domain, Element& Range);

	extern Map LoginKRSSolutionManager;

	bool LogoutKRSSolutionManagerFunction(Element& Domain, Element& Range);

	extern Map LogoutKRSSolutionManager;

	bool DefragmentKRSSolutionManagerFunction(Element& Domain, Element& Range);

	extern Map DefragmentKRSSolutionManager;

	bool ReleaseKRSSolutionManagerFunction(Element& Domain, Element& Range);
	
	extern Map ReleaseKRSSolutionManager;
}