#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {
	extern Element PollingDrivenZero_MapSearcher;

	namespace PDZ_MS_Parameter {
	constexpr unsigned int PDZ_MS_MapNumber = 6;
		constexpr unsigned int PDZ_MS_AskReplace		= 0;
		constexpr unsigned int PDZ_MS_Replace			= 1;
		constexpr unsigned int PDZ_MS_RecyclePD			= 2;
		constexpr unsigned int PDZ_MS_AllotPD			= 3;
		constexpr unsigned int PDZ_MS_Push				= 4;
		constexpr unsigned int PDZ_MS_RecycleMap		= 5;
	}

	bool InitializePollingDrivenZero_MapSearcherFunction(Element& Domain, Element& Range);

	extern Map InitializePollingDrivenZero_MapSearcher;

	bool SelectPollingDrivenZero_MapSearcherFunction(Element& Domain, Element& Range);

	extern Map SelectPollingDrivenZero_MapSearcher;

	bool InTestPollingDrivenZero_MapSearcherFunction(Element& Domain, Element& Range);

	extern Map InTestPollingDrivenZero_MapSearcher;

	bool ReleasePollingDrivenZero_MapSearcherFunction(Element& Domain, Element& Range);

	extern Map ReleasePollingDrivenZero_MapSearcher;

	namespace PollingDrivenZero_Struct {
	constexpr unsigned int PDZ_OrderNumber = 9;

		constexpr unsigned int PDZ_QuestionMap		= 0;
		constexpr unsigned int PDZ_EES				= 1;
		constexpr unsigned int PDZ_PDOrder			= 2;
		constexpr unsigned int PDZ_ActiveMap		= 3;
		constexpr unsigned int PDZ_UMapSet			= 4;
		constexpr unsigned int PDZ_PMapSet			= 5;
		constexpr unsigned int PDZ_RecursionOrder	= 6;
			constexpr unsigned int PDZ_RecursionGraph		= 0;
			constexpr unsigned int PDZ_RecursionState		= 1;
		constexpr unsigned int PDZ_KRS_Pipeline		= 7;
		constexpr unsigned int PDZ_Map				= 8;
			constexpr unsigned int PDZ_EES_Map				= 0;
				constexpr unsigned int PDZ_EES_Get					= 0;
				constexpr unsigned int PDZ_EES_Put					= 1;
				constexpr unsigned int PDZ_EES_Occupy				= 2;
				constexpr unsigned int PDZ_EES_RelieveOccupy		= 3;
				constexpr unsigned int PDZ_EES_Login				= 4;
				constexpr unsigned int PDZ_EES_Logout				= 5;
			constexpr unsigned int PDZ_PMapSet_Map			= 1;
				constexpr unsigned int PDZ_PMapSet_Select			= 0;
			constexpr unsigned int PDZ_Thread_Map			= 2;
				constexpr unsigned int PDZ_Thread_Active			= 0;
				constexpr unsigned int PDZ_Thread_Test				= 1;
				constexpr unsigned int PDZ_Thread_Release			= 2;
	}

	namespace PDZRecursionStateCode {
		constexpr unsigned int PDZ_Recursion	= 0;
		constexpr unsigned int PDZ_AskReplace	= 1;
		constexpr unsigned int PDZ_Replace		= 2;
		constexpr unsigned int PDZ_RecyclePD	= 3;
		constexpr unsigned int PDZ_NewPD		= 4;
		constexpr unsigned int PDZ_Push			= 5;
		constexpr unsigned int PDZ_RecycleMap	= 6;
		constexpr unsigned int PDZ_End			= 7;
	}

	bool PollingDrivenZeroTest(Element& Ele, Set& S);

	extern Set PollingDrivenZero;

	bool NewPollingDrivenZeroFunction(Element& Domain, Element& Range);

	extern Map NewPollingDrivenZero;

	bool SetPollingDrivenZeroQuestionMapFunction(Element& Domain, Element& Range);

	extern Map SetPollingDrivenZeroQuestionMap;

	bool SetPollingDrivenZeroPDZ_KRS_PipeFunction(Element& Domain, Element& Range);

	extern Map SetPollingDrivenZeroPDZ_KRS_Pipe;

	bool SetPollingDrivenZeroEESFunction(Element& Domain, Element& Range);

	extern Map SetPollingDrivenZeroEES;

	bool SetPollingDrivenZeroUniversalMapSearcherFunction(Element& Domain, Element& Range);

	extern Map SetPollingDrivenZeroUniversalMapSearcher;

	bool SetPollingDrivenZeroPrivateMapSearcherFunction(Element& Domain, Element& Range);

	extern Map SetPollingDrivenZeroPrivateMapSearcher;

	bool SetPollingDrivenZeroRecursionQuestionMapFunction(Element& Domain, Element& Range);

	extern Map SetPollingDrivenZeroRecursionQuestionMap;

	bool InitializePollingDrivenRecursionMapFunction(Element& Domain, Element& Range);
	
	extern Map InitializePollingDrivenRecursionMap;

	extern Map RecursionPollingDrivenMap;

	bool ReleasePollingDrivenRecursionMapFunction(Element& Domain, Element& Range);

	extern Map ReleasePollingDrivenRecursionMap;

	bool PDZConstructMapDomainFunction(Element& Domain, Element& Range);

	extern Map PDZConstructMapDomain;

	bool PDZSelectMapFunction(Element& Domain, Element& Range);

	extern Map PDZSelectMap;

	bool PDZDestructMapDomainFunction(Element& Domain, Element& Range);

	extern Map PDZDestructMapDomain;

	bool PollingDrivenZeroActiveFunction(Element& Domain, Element& Range);
	
	extern Map PollingDrivenZeroActive;

	bool PollingDrivenZeroReplaceTractableFunction(Element& Domain, Element& Range);

	extern Map PollingDrivenZeroReplaceTractable;

	bool PollingDrivenZeroReplacePendingFunction(Element& Domain, Element& Range);

	extern Map PollingDrivenZeroReplacePending;

	bool PollingDrivenZeroRecursionReplaceFunction(Element& Domain, Element& Range);

	extern Map PollingDrivenZeroRecrsionReplace;

	bool PollingDrivenZeroRecursionPushFunction(Element& Domain, Element& Range);

	extern Map PollingDrivenZeroRecursionPush;

	bool PollingDrivenZeroRecursionRecycleFunction(Element& Domain, Element& Range);

	extern Map PollingDrivenZeroRecursionRecycle;

	bool PollingDrivenZeroMainFunction(Element& Domain, Element& Range);

	extern Map PollingDrivenZeroMain;

	bool PollingDrivenZeroLogInOutFunction(Element& Domain, Element& Range);

	extern Map PollingDrivenZeroLogInOut;

	bool PollingDrivenZeroAskReplaceFunction(Element& Domain, Element& Range);

	extern Map PollingDrivenZeroAskReplace;
	
	bool PollingDrivenZeroReplaceFunction(Element& Domain, Element& Range);

	extern Map PollingDrivenZeroReplace;

	bool PollingDrivenZeroRecyclePDFunction(Element& Domain, Element& Range);

	extern Map PollingDrivenZeroRecyclePD;

	bool PollingDrivenZeroAllotPDFunction(Element& Domain, Element& Range);

	extern Map PollingDrivenZeroAllotPD;

	bool PollingDrivenZeroPushFunction(Element& Domain, Element& Range);

	extern Map PollingDrivenZeroPush;

	bool PollingDrivenZeroRecycleMapFunction(Element& Domain, Element& Range);

	extern Map PollingDrivenZeroRecycleMap;

	bool ReleasePollingDrivenZeroFunction(Element& Domain, Element& Range);

	extern Map ReleasePollingDrivenZero;

	extern Map PollingDrivenZeroZeroMap;

	extern Element PollingDrivenZeroZeroMapSuperIndex;

	bool InitializePollingDrivenZeroZeroMapSuperIndexFunction(Element& Domain, Element& Range);

	extern Map InitializePollingDrivenZeroZeroMapSuperIndex;

	bool ReleasePollingDrivenZeroZeroMapSuperIndexFunction(Element& Domain, Element& Range);

	extern Map ReleasePollingDrivenZeroZeroMapSuperIndex;

	extern Element RecursionMapSuperIndex;

	bool InitializeRecursionSuperIndexFunction(Element& Domain, Element& Range);
	
	extern Map InitializeRecursionSuperIndex;

	bool PDZRecursionSuperIndexTestFunction(Element& Domain, Element& Range);

	extern Map PDZRecursionSuperIndexTest;

	bool ReleaseRecursionSuperIndexFunction(Element& Domain, Element& Range);

	extern Map ReleaseRecursionSuperIndex;
}