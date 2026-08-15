#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {
	namespace PollingDriven_Struct {
		constexpr unsigned int PD_EES				= 0;
		constexpr unsigned int PD_State				= 1;
		constexpr unsigned int PD_MapElement		= 2;
			constexpr unsigned int PD_Map_Domain		= 0;
			constexpr unsigned int PD_Map_Range		= 1;
			constexpr unsigned int PD_Map_Map			= 2;
		constexpr unsigned int PD_QuestionNode		= 3;
		constexpr unsigned int PD_UMapSet			= 4;
		constexpr unsigned int PD_PMapSet			= 5;
		constexpr unsigned int PD_Thread			= 6;
		constexpr unsigned int PD_Map				= 7;
			constexpr unsigned int PD_EES_Map			= 0;
				constexpr unsigned int PD_EES_Get				= 0;
				constexpr unsigned int PD_EES_Put				= 1;
				constexpr unsigned int PD_EES_Occupy			= 2; 
				constexpr unsigned int PD_EES_RelieveOccupy		= 3;
			constexpr unsigned int PD_PMapSet_Map		= 1;
				constexpr unsigned int PD_PMapSet_Select		= 0;
			constexpr unsigned int PD_Thread_Map		= 2;
				constexpr unsigned int PD_Thread_Active			= 0;
				constexpr unsigned int PD_Thread_Test			= 1;
				constexpr unsigned int PD_Thread_Release		= 2;
	}

	namespace PollingDriven_StateCode {
		constexpr unsigned int PD_Free			= 0;
		constexpr unsigned int PD_Wait			= 1;
		constexpr unsigned int PD_Active			= 2;
		constexpr unsigned int PD_Processed		= 3;
	}

	bool PollingDrivenSetTest(Element& Ele, Set& S);

	extern Set PollingDrivenSet;

	bool NewPollingDrivenFunction(Element& Domain, Element& Range);

	extern Map NewPollingDriven;

	bool SetEESPollingDrivenFunction(Element& Domain, Element& Range);

	extern Map SetEESPollingDriven;

	bool GetEESPollingDrivenFunction(Element& Domain, Element& Range);

	extern Map GetEESPollingDriven;

	bool SetStatePollingDrivenFunction(Element& Domain, Element& Range);

	extern Map SetStatePollingDriven;

	bool GetStatePollingDrivenFunction(Element& Domain, Element& Range);

	extern Map GetStatePollingDriven;

	bool SetQuestionNodePollingDrivenFunction(Element& Domain, Element& Range);

	extern Map SetQuestionNodePollingDriven;

	bool GetQuestionNodePollingDrivenFunction(Element& Domain, Element& Range);

	extern Map GetQuestionNodePollingDriven;

	bool QuestionNodeConstructMapPollingDrivenFunction(Element& Domain, Element& Range);

	extern Map QuestionNodeConstructMapPollingDriven;

	bool QuestionNodeDestructMapPollingDrivenFunction(Element& Domain, Element& Range);

	extern Map QuestionNodeDestructMapPollingDriven;

	bool QuestionNodeConstructMapMapPollingDrivenFunction(Element& Domain, Element& Range);

	extern Map QuestionNodeConstructMapMapPollingDriven;

	namespace RQNCMDPD_Domain {
		constexpr unsigned int QuestionTreeNode			= 0;
		constexpr unsigned int EES						= 1;
		constexpr unsigned int DomainUInt				= 2;
		constexpr unsigned int EESParameter				= 3;
		constexpr unsigned int EESGetMap				= 4;
		constexpr unsigned int EESOccupyMap				= 5;
	}

	bool QuestionNodeConstructMapDomainPollingDrivenFunction(Element& Domain, Element& Range);

	extern Map QuestionNodeConstructMapDomainPollingDriven;

	bool RecursionQuestionNodeConstructMapDomainPollingDrivenFunction(Element& Domain, Element& Range);

	extern Map RecursionQuestionNodeConstructMapDomainPollingDriven;

	namespace RQNDCMDPD_Domain {
		constexpr unsigned int QuestionTreeNode		= 0;
		constexpr unsigned int EES					= 1;
		constexpr unsigned int DomainUInt				= 2;
		constexpr unsigned int EESParameter			= 3;
		constexpr unsigned int EESPutMap				= 4;
		constexpr unsigned int EESRelieveOccupyMap		= 5;
	}

	bool QuestionNodeDestructMapDomainPollingDrivenFunction(Element& Domain, Element& Range);

	extern Map QuestionNodeDestructMapDomainPollingDriven;

	bool RecursionQuestionNodeDestructMapDomainPollingDrivenFunction(Element& Domain, Element& Range);

	extern Map RecursionQuestionNodeDestructMapDomainPollingDriven;

	bool PollingDrivenMainFunction(Element& Domain, Element& Range);

	extern Map PollingDrivenMain;

	bool PollingDrivenComplateFunction(Element& Domain, Element& Range);

	extern Map PollingDrivenComplate;

	bool PollingDrivenComplateTestFunction(Element& Domain, Element& Range);

	extern Map PollingDrivenComplateTest;

	bool ReleasePollingDrivenFunction(Element& Domain, Element& Range);

	extern Map ReleasePollingDriven;

	namespace PollingDrivenManager_Struct {
		constexpr unsigned int PDOrder				= 0;
		constexpr unsigned int PDOrderParameter		= 1;
			constexpr unsigned int PDOrderPageSize			= 0;
			constexpr unsigned int PDOrderExpandSize		= 1;
			constexpr unsigned int PDOrderRetainSize		= 2;
			constexpr unsigned int PDOrderEnd				= 3;
			constexpr unsigned int PDOrderEmptySize			= 4;
	}

	bool PollingDrivenManagerTest(Element& Ele, Set& S);

	extern Set PollingDrivenManager;

	bool NewPollingDrivenManagerFunction(Element& Domain, Element& Range);

	extern Map NewPollingDrivenManager;

	bool ReadPollingDrivenManagerFunction(Element& Domain, Element& Range);

	extern Map ReadPollingDrivenManager;

	bool RecursionPollingDrivenNodeOccupyTestFunction(Element& Domain, Element& Range);

	extern Map RecursionPollingDrivenNodeOccupyTest;

	bool PollingDrivenNodeOccupyTestFunction(Element& Domain, Element& Range);

	extern Map PollingDrivenNodeOccupyTest;

	bool RecursionPollingDrivenNodeOccupyFunction(Element& Domain, Element& Range);

	extern Map RecursionPollingDrivenNodeOccupy;

	bool PollingDrivenNodeOccupyFunction(Element& Domain, Element& Range);

	extern Map PollingDrivenNodeOccupy;

	bool RecursionPollingDrivenNodeRelieveOccupyFunction(Element& Domain, Element& Range);

	extern Map RecursionPollingDrivenNodeRelieveOccupy;

	bool PollingDrivenNodeRelieveOccupyFunction(Element& Domain, Element& Range);

	extern Map PollingDrivenNodeRelieveOccupy;

	bool AddPollingDrivenManagerFunction(Element& Domain, Element& Range);

	extern Map AddPollingDrivenManager;

	bool RemovePollingDrivenManagerFunction(Element& Domain, Element& Range);

	extern Map RemovePollingDrivenManager;

	bool DefragmentPollingDrivenManagerFunction(Element& Domain, Element& Range);

	extern Map DefragmentPollingDrivenManager;

	bool ReleasePollingDrivenManagerFunction(Element& Domain, Element& Range);

	extern Map ReleasePollingDrivenManager;
}