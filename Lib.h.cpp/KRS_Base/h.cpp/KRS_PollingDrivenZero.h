#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {
	extern Element KRSPollingDrivenZero_MapSearcher;

	namespace KRSPDZ_MS_Parameter {
		constexpr unsigned int KRSPDZ_MS_MapNumber		= 5;
			constexpr unsigned int KRSPDZ_MS_Replace			= 0;
			constexpr unsigned int KRSPDZ_MS_RecyclePD			= 1;
			constexpr unsigned int KRSPDZ_MS_AllotPD			= 2;
			constexpr unsigned int KRSPDZ_MS_PushBack			= 3;
			constexpr unsigned int KRSPDZ_MS_Recycle			= 4;
	}

	bool InitializeKRSPollingDrivenZero_MapSearcherFunction(Element& Domain, Element& Range);

	extern Map InitializeKRSPollingDrivenZero_MapSearcher;

	bool SelectKRSPollingDrivenZero_MapSearcherFunction(Element& Domain, Element& Range);

	extern Map SelectKRSPollingDrivenZero_MapSearcher;

	bool InTestKRSPollingDrivenZero_MapSearcherFunction(Element& Domain, Element& Range);

	extern Map InTestKRSPollingDrivenZero_MapSearcher;

	bool ReleaseKRSPollingDrivenZero_MapSearcherFunction(Element& Domain, Element& Range);

	extern Map ReleaseKRSPollingDrivenZero_MapSearcher;

	namespace KRSPollingDrivenZero_Struct {
	constexpr unsigned int KRSPDZ_OrderNumber = 9;
		constexpr unsigned int KRSPDZ_QuestionMap		= 0;
		constexpr unsigned int KRSPDZ_EES				= 1;
		constexpr unsigned int KRSPDZ_PDManager			= 2;
		constexpr unsigned int KRSPDZ_ActiveMap			= 3;
		constexpr unsigned int KRSPDZ_UMapSet			= 4;
		constexpr unsigned int KRSPDZ_PMapSet			= 5;
		constexpr unsigned int KRSPDZ_RecursionOrder	= 6;
			constexpr unsigned int KRSPDZ_RecursionMap		= 0;
			constexpr unsigned int KRSPDZ_RecursionState		= 1;
		constexpr unsigned int KRSPDZ_SolutionManager = 7;
		constexpr unsigned int KRSPDZ_Map				= 8;
			constexpr unsigned int KRSPDZ_EES_Map				= 0;
				constexpr unsigned int KRSPDZ_EES_Get					= 0;
				constexpr unsigned int KRSPDZ_EES_Read					= 1;
				constexpr unsigned int KRSPDZ_EES_Put					= 2;
				constexpr unsigned int KRSPDZ_EES_Occupy				= 3;
				constexpr unsigned int KRSPDZ_EES_RelieveOccupy			= 4;
				constexpr unsigned int KRSPDZ_EES_Login					= 5;
				constexpr unsigned int KRSPDZ_EES_Logout				= 6;
			constexpr unsigned int KRSPDZ_PMapSet_Map			= 1;
				constexpr unsigned int KRSPDZ_PMapSet_Select			= 0;
			constexpr unsigned int KRSPDZ_Thread_Map			= 2;
				constexpr unsigned int KRSPDZ_Thread_Active				= 0;
				constexpr unsigned int KRSPDZ_Thread_Test				= 1;
				constexpr unsigned int KRSPDZ_Thread_Release			= 2;

	}

	bool KRSPollingDrivenZeroTest(Element& Ele, Set& S);

	extern Set KRSPollingDrivenZero;

	bool NewKRSPollingDrivenZeroFunction(Element& Domain, Element& Range);

	extern Map NewKRSPollingDrivenZero;

	bool SetKRSPollingDrivenZeroEESFunction(Element& Domain, Element& Range);

	extern Map SetKRSPollingDrivenZeroEES;

	bool SetKRSPollingDrivenZeroQuestionMapFunction(Element& Domain, Element& Range);

	extern Map SetKRSPollingDrivenZeroQuestionMap;

	bool SetKRSPollingDrivenZeroUniversalMapSearcherFunction(Element& Domain, Element& Range);

	extern Map SetKRSPollingDrivenZeroUniversalMapSearcher;

	bool SetKRSPollingDrivenZeroPrivateMapSearcherFunction(Element& Domain, Element& Range);

	extern Map SetKRSPollingDrivenZeroPrivateMapSearcher;

	bool SetKRSPollingDrivenZeroRecursionMapFunction(Element& Domain, Element& Range);

	extern Map SetKRSPollingDrivenZeroRecursionMap;

	bool ConstructKRSPollingDrivenZeroEESMapFunction(Element& Domain, Element& Range);

	extern Map ConstructKRSPollingDrivenZeroEESMap;

	bool SetKRSPollingDrivenZeroEESMapFunction(Element& Domain, Element& Range);

	extern Map SetKRSPollingDrivenZeroEESMap;

	bool ConstructKRSPollingDrivenZeroThreadMapFunction(Element& Domain, Element& Range);

	extern Map ConstructKRSPollingDirvenZeroThreadMap;

	bool SetKRSPollingDrivenZeroThreadMapFunction(Element& Domain, Element& Range);

	extern Map SetKRSPollingDrivneZeroThreadMap;

	bool ReleaseKRSPollingDrivenZeroFunction(Element& Domain, Element& Range);

	extern Map ReleaseKRSPollingDrivenZero;

	bool KRSPollingDrivenZeroConstructMapDomainFunction(Element& Domain, Element& Range);

	extern Map KRSPollingDrivenZeroConstructMapDomain;

	bool KRSPollingDrivenZeroDestructMapDomainFunction(Element& Domain, Element& Range);

	extern Map KRSPollingDrivenZeroDestructMapDomain;

	bool KRSPollingDrivenZeroConstructMapFunction(Element& Domain, Element& Range);
	
	extern Map KRSPollingDrivenZeroConstructMap;

	bool KRSPollingDrivenZeroRecursionReplaceFunction(Element& Domain, Element& Range);

	extern Map KRSPollingDrivenZeroRecursionReplace;

	bool KRSPollingDrivenZeroRecursionActiveFunction(Element& Domain, Element& Range);

	extern Map KRSPollingDrivenZeroRecursionActive;

	bool KRSPollingDrivenZeroRecursionPushBackFunction(Element& Domain, Element& Range);

	extern Map KRSPollingDrivenZeroRecursionPushBack;

	bool KRSPollingDrivenZeroRecursionRecycleFunction(Element& Domain, Element& Range);

	extern Map KRSPollingDrivenZeroRecursionRecycle;

	bool KRSPollingDrivenZeroRecursionMainFunction(Element& Domain, Element& Range);

	extern Map KRSPollingDrivenZeroRecursionMain;

	bool KRSPollingDrivenZeroReplaceFunction(Element& Domain, Element& Range);

	extern Map KRSPollingDrivenZeroReplace;

	bool KRSPollingDrivenZeroRecyclePDFunction(Element& Domain, Element& Range);

	extern Map KRSPollingDrivenZeroRecyclePD;

	bool KRSPollingDrivenZeroAllotPDFunction(Element& Domain, Element& Range);

	extern Map KRSPollingDrivenZeroAllotPD;

	bool KRSPollingDrivenZeroPushBackFunction(Element& Domain, Element& Range);

	extern Map KRSPollingDrivenZeroPushBack;

	bool KRSPollingDrivenZeroRecycleFunction(Element& Domain, Element& Range);

	extern Map KRSPollingDrivenZeroRecycle;

	bool KRSPollingDrivenZeroConstructQuestionFlowMapFunction(Element& Domain, Element& Range);

	extern Map KRSPollingDrivenZeroConstructQuestionFlowMap;

	bool KRSPollingDrivenZeroConstructRecursionFlowMapFunction(Element& Domain, Element& Range);

	extern Map KRSPollingDrivenZeroConstructRecursionFlowMap;

	bool KRSPollingDrivenZeroZeroRecursionFlowMapFunction(Element& Domain, Element& Range);

	extern Map KRSPollingDrivenZeroZeroRecursionFlowMap;
}