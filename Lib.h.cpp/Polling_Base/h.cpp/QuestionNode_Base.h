#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {
	namespace QuestionNode_Struct {
		constexpr unsigned int AntecedentQuestionOrder		= 0;
		constexpr unsigned int PostQuestionOrder			= 1;
		constexpr unsigned int MapInformation				= 2;
		constexpr unsigned int DomainTree					= 3;
		constexpr unsigned int RangeTree					= 4;
		constexpr unsigned int MapActiveState				= 5;
		constexpr unsigned int LastAddress					= 6;
		constexpr unsigned int NextAddress					= 7;
		constexpr unsigned int SuperIndex					= 8;
	}

	namespace QuestionNode_StateCode {
		constexpr unsigned int QN_Zero				= 0;
		constexpr unsigned int QN_Processed			= 1;
		constexpr unsigned int QN_Tractable			= 2;
		constexpr unsigned int QN_Pending			= 3;
		constexpr unsigned int QN_Untractable		= 4;
		constexpr unsigned int QN_Wait				= 5;
		constexpr unsigned int QN_Success			= 6;
		constexpr unsigned int QN_TraUntractable	= 7;

		constexpr unsigned int QN_Parallel			= 0x8;
	}

	bool SetQuestionNodeStateFunction(Element& Domain, Element& Range);

	extern Map SetQuestionNodeState;

	bool QuestionParameterNodeTest(Element& Ele, Set& S);

	extern Set QuestionParameterNode;

	bool ReleaseQuestionParameterNodeFunction(Element& Domain, Element& Range);

	extern Map ReleaseQuestionParameterNode;

	bool QuestionNodeSetTest(Element& Ele, Set& S);

	extern Set QuestionNodeSet;

	bool NewQuestionNodeFunction(Element& Domain, Element& Range);

	extern Map NewQuestionNode;

	bool SetQuestionNodeSuperIndexFunction(Element& Domain, Element& Range);

	extern Map SetQuestionNodeSuperIndex;

	bool SetQuestionNodeAntecedentFunction(Element& Domain, Element& Range);

	extern Map SetQuestionNodeAntecedent;

	bool GetQuestionNodeAntecedentFunction(Element& Domain, Element& Range);

	extern Map GetQuestionNodeAntecedent;

	bool SetQuestionNodePostFunction(Element& Domain, Element& Range);

	extern Map SetQuestionNodePost;

	bool GetQuestionNodePostFunction(Element& Domain, Element& Range);

	extern Map GetQuestionNodePost;

	bool SetQuestionNodeMapInformationFunction(Element& Domain, Element& Range);

	extern Map SetQuestionNodeMapInformation;

	bool GetQuestionNodeDomainFunction(Element& Domain, Element& Range);

	extern Map GetQuestionNodeDomain;

	bool SetQuestionNodeDomainFunction(Element& Domain, Element& Range);

	extern Map SetQuestionNodeDomain;

	bool GetQuestionNodeRangeFunction(Element& Domain, Element& Range);

	extern Map GetQuestionNodeRange;

	bool SetQuestionNodeRangeFunction(Element& Domain, Element& Range);

	extern Map SetQuestionNodeRange;

	bool ReleaseQuestionNodeFunction(Element& Domain, Element& Range);

	extern Map ReleaseQuestionNode;

	bool RecursionCopyQuestionNodeTreeFunction(Element& Domain, Element& Range);

	extern Map RecursionCopyQuestionNodeTree;

	bool CopyQuestionNodeFunction(Element& Domain, Element& Range);

	extern Map CopyQuestionNode;

	bool SortQuestionNodeLinkOrderFunction(Element& Domain, Element& Range);

	extern Map SortQuestionNodeLinkOrder;

	bool ReleaseQuestionNodeLinkOrderFunction(Element& Domain, Element& Range);

	extern Map ReleaseQuestionNodeLinkOrder;

	namespace QuestionFlowMap_Struct {
		constexpr unsigned int QFM_Order				= 0;
		constexpr unsigned int QFM_FEAddress			= 1;
			constexpr unsigned int QFM_ProcessedF				= 0;
			constexpr unsigned int QFM_TractableF				= 1;
			constexpr unsigned int QFM_PendingF					= 2;
			constexpr unsigned int QFM_UntractableF				= 3;
			constexpr unsigned int QFM_ProcessedE				= 4;
			constexpr unsigned int QFM_TractableE				= 5;
			constexpr unsigned int QFM_PendingE					= 6;
			constexpr unsigned int QFM_UntractableE				= 7;
		constexpr unsigned int QFM_Parameter			= 2;
			constexpr unsigned int QFM_PageSize					= 0;
			constexpr unsigned int QFM_ExpandSize				= 1;
			constexpr unsigned int QFM_RetainSize				= 2;
			constexpr unsigned int QFM_End						= 3;
			constexpr unsigned int QFM_LazyNumber				= 4;
			constexpr unsigned int QFM_FirstEmpty				= 5;
	}

	namespace QuestionFlowMap_ReplacePackage {
		constexpr unsigned int Package_RemoveNode		= 0;
		constexpr unsigned int Package_AddNode			= 1;
		constexpr unsigned int Package_ResetANP			= 2;
		constexpr unsigned int Package_ResetPNA			= 3;
		constexpr unsigned int Package_LoginElement		= 4;
		constexpr unsigned int Package_LogoutElement	= 5;
	}

	bool QuestionFlowMapReplacePackageTest(Element& Ele, Set& S);

	extern Set QuestionFlowMapReplacePackage;

	bool QuestionFlowMapTest(Element& Ele, Set& S);

	extern Set QuestionFlowMap;

	bool NewQuestionFlowMapFunction(Element& Domain, Element& Range);
	
	extern Map NewQuestionFlowMap;

	bool ExpandQuestionFlowMapFunction(Element& Domain, Element& Range);

	extern Map ExpandQuestionFlowMap;

	bool DefragmentQuestionFlowMapFunction(Element& Domain, Element& Range);

	extern Map DefragmentQuestionFlowMap;

	bool GetQuestionFlowMapFunction(Element& Domain, Element& Range);

	extern Map GetQuestionFlowMap;

	bool PutQuestionFlowMapFunction(Element& Domain, Element& Range);

	extern Map PutQuestionFlowMap;

	bool ReadQuestionFlowMapFunction(Element& Domain, Element& Range);

	extern Map ReadQuestionFlowMap;

	bool RemoveQuestionFlowMapNodeFunction(Element& Domain, Element& Range);

	extern Map RemoveQuestionFlowMapNode;

	bool TurnOrderToActiveQuestionFlowMapFunction(Element& Domain, Element& Range);

	extern Map TurnOrderToActiveQuestionFlowMap;

	bool OrderAddQuestionFlowMapFunction(Element& Domain, Element& Range);

	extern Map OrderAddQuestionFlowMap;

	bool FirstTractableQuestionFlowMapFunction(Element& Domain, Element& Range);

	extern Map FirstTractableQuestionFlowMap;

	bool FirstPendingQuestionFlowMapFunction(Element& Domain, Element& Range);

	extern Map FirstPendingQuestionFlowMap;

	bool FirstProcessedQuestionFlowMapFunction(Element& Domain, Element& Range);

	extern Map FirstProcessedQuestionFlowMap;

	bool FirstUntractableQuestionFlowMapFunction(Element& Domain, Element& Range);

	extern Map FirstUntractableQuestionFlowMap;

	bool NextQuestionFlowMapAddressFunction(Element& Domain, Element& Range);

	extern Map NextQuestionFlowMapAddress;

	bool BackPushQuestionFlowMapFunction(Element& Domain, Element& Range);

	extern Map BackPushQuestionFlowMap;

	bool LazyExpandQuestionFlowMapFunction(Element& Domain, Element& Range);

	extern Map LazyExpandQuestionFlowMap;

	bool ReplaceQuestionFlowMapFunction(Element& Domain, Element& Range);

	extern Map ReplaceQuestionFlowMap;

	bool ReleaseQuestionFlowMapFunction(Element& Domain, Element& Range);

	extern Map ReleaseQuestionFlowMap;

	bool QuoteQuestionFlowMapTest(Element& Ele, Set& S);

	extern Set QuoteQuestionFlowMap;

	bool NewQuoteQuestionFlowMapFunction(Element& Domain, Element& Range);

	extern Map NewQuoteQuestionFlowMap;

	bool ReleaseQuoteQuestionFlowMapFunction(Element& Domain, Element& Range);

	extern Map ReleaseQuoteQuestionFlowMap;

	/*
	namespace QuestionNodeOrder_Struct {
		constexpr unsigned int QNO_Order		= 0;
		constexpr unsigned int QNO_Parameter	= 1;
			constexpr unsigned int QNO_PageSize		= 0;
			constexpr unsigned int QNO_First		= 1;
			constexpr unsigned int QNO_End			= 2;
			constexpr unsigned int QNO_ExpandSize	= 3;
			constexpr unsigned int QNO_RetainSize	= 4;
			constexpr unsigned int QNO_OrderSize	= 5;
	}

	using namespace QuestionNodeOrder_Struct;

	bool QuestionNodeOrderTest(Element& Ele, Set& S);

	extern Set QuestionNodeOrder;

	bool NewQuestionNodeOrderFunction(Element& Domain, Element& Range);

	extern Map NewQuestionNodeOrder;

	bool ExpandQuestionNodeOrderFunction(Element& Domain, Element& Range);

	extern Map ExpandQuestionNodeOrder;

	bool ReadQuestionNodeOrderFunction(Element& Domain, Element& Range);

	extern Map ReadQuestionNodeOrder;

	bool GetQuestionNodeOrderFunction(Element& Domain, Element& Range);

	extern Map GetQuestionNodeOrder;
	
	bool PutQuestionNodeOrderFunction(Element& Domain, Element& Range);

	extern Map PutQuestionNodeOrder;

	bool QuestionNodeOrderEmptyTestFunction(Element& Domain, Element& Range);

	extern Map QuestionNodeOrderEmptyTest;

	bool ReleaseQuestionNodeOrderFunction(Element& Domain, Element& Range);

	extern Map ReleaseQuestionNodeOrder;

	namespace QuestionMap_Struct {
		constexpr unsigned int QM_Order_Processed		= 0;
		constexpr unsigned int QM_Order_Tractable		= 1;
		constexpr unsigned int QM_Order_Pending			= 2;
		constexpr unsigned int QM_Order_Untractable		= 3;
	}

	using namespace QuestionMap_Struct;

	bool QuestionMapSetTest(Element& Ele, Set& S);

	extern Set QuestionMapSet;

	bool ResloveQuestionMapAddressFunction(Element& Domain, Element& Range);

	extern Map ResloveQuestionMapAddress;

	bool CompoundQuestionMapAddressFunction(Element& Domain, Element& Range);

	extern Map CompoundQuestionMapAddress;

	bool NewQuestionMapFunction(Element& Domain, Element& Range);

	extern Map NewQuestionMap;

	bool ReleaseQuestionMapFunction(Element& Domain, Element& Range);

	extern Map ReleaseQuestionMap;
	*/

}