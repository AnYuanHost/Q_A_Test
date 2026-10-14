#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {

	bool FstreamSolutionLanguageTestFunction(Element& Domain, Element& Range);

	extern Map FstreamSolutionLanguageTest;

	bool FstreamSolutionLanguageJumpSpaceFunction(Element& Domain, Element& Range);

	extern Map FstreamSolutionLanguageJumpSpace;

	bool FstreamSolutionLanguageEOFTestFunction(Element& Domain, Element& Range);

	extern Map FstreamSolutionLanguageEOFTest;

	bool FstreamSolutionLanguageMapTestFunction(Element& Domain, Element& Range);

	extern Map FstreamSolutionLanguageMapTest;

	bool FstreamSolutionLanguageMapEndTestFunction(Element& Domain, Element& Range);

	extern Map FstreamSolutionLanguageMapEndTest;

	namespace Serial_Parallel_State {
		constexpr bool Serial_State = true;
		constexpr bool Parallel_State = false;
	}

	bool FstreamSolutionLanguageSerialParallelTestFunction(Element& Domain, Element& Range);

	extern Map FstreamSolutionLanguageSerialParallelTest;

	bool FstreamSolutionLanguageRecursionInformationTestFunction(Element& Domain, Element& Range);

	extern Map FstreamSolutionLanguageRecursionInformationTest;

	bool FstreamSolutionLanguageInformationTestFunction(Element& Domain, Element& Range);

	extern Map FstreamSolutionLanguageInformationTest;

	namespace Node_State_Stream {
		extern const char* NE_Tractable_Name;
		extern const char* NE_Pending_Name;
		extern const char* NE_Untractable_Name;
		extern const char* NE_TraUntractable_Name;
	}

	bool FstreamSolutionLanguageNodeStateTestFunction(Element& Domain, Element& Range);

	extern Map FstreamSolutionLanguageNodeStateTest;

	bool FstreamSolutionLanguageSerialTestFunction(Element& Domain, Element& Range);

	extern Map FstreamSolutionLanguageSerialTest;

	bool FstreamSolutionLanguageParallelTestFunction(Element& Domain, Element& Range);

	extern Map FstreamSolutionLanguageParallelTest;

	bool FstreamSolutionLanguageParallelEndTestFunction(Element& Domain, Element& Range);

	extern Map FstreamSolutionLanguageParallelEndTest;

	namespace SolutionLanguageNodeOrder_Struct {
		constexpr unsigned int SLNO_Order			= 0;
		constexpr unsigned int SLNO_Parameter		= 1;
			constexpr unsigned int SLNO_PageSize		= 0;
			constexpr unsigned int SLNO_End				= 1;
			constexpr unsigned int SLNO_ExpandSize		= 2;
	}

	bool SolutionLanguageNodeOrderTest(Element& Ele, Set& S);

	extern Set SolutionLanguageNodeOrder;

	bool NewSolutionLanguageNodeOrderFunction(Element& Domain, Element& Range);

	extern Map NewSolutionLanguageNodeOrder;

	bool LoginSolutionLanguageNodeOrderFunction(Element& Domain, Element& Range);

	extern Map LoginSolutionLanguageNodeOrder;

	bool ReadSolutionLanguageNodeOrderFunction(Element& Domain, Element& Range);

	extern Map ReadSolutionLanguageNodeOrder;

	bool ReleaseSolutionLanguageNodeOrderFunction(Element& Doamin, Element& Range);

	extern Map ReleaseSolutionLanguageNodeOrder;

	namespace SolutionLanguageParameterDictionaries_Struct {
		constexpr unsigned int SLPD_Order			= 0;
		constexpr unsigned int SLPD_Parameter		= 1;
			constexpr unsigned int SLPD_PageSize		= 0;
			constexpr unsigned int SLPD_End				= 1;
			constexpr unsigned int SLPD_ExpandSize		= 2;

			constexpr unsigned int SLPD_OrderSize = 7;
			constexpr unsigned int SLPD_ParameterName		= 0;
			constexpr unsigned int SLPD_BIType					= 1;
			constexpr unsigned int SLPD_BaseInformation			= 2;
			constexpr unsigned int SLPD_ContextInformation		= 3;
			constexpr unsigned int SLPD_LoginOutState			= 4;
			constexpr unsigned int SLPD_Information				= 5;
			constexpr unsigned int SLPD_FirstAddress			= 6;
	}

	bool SolutionLanguageParameterDictionariesTest(Element& Ele, Set& S);

	extern Set SolutionLanguageParameterDictionaries;

	bool NewSolutionLanguageParameterDictionariesFunction(Element& Domain, Element& Range);

	extern Map NewSolutionLanguageParameterDictionaries;

	bool LoginSolutionLanguageParameterDictionariesFunction(Element& Domain, Element& Range);

	extern Map LoginSolutionLanguageParameterDictionaries;

	bool SelectSolutionLanguageParameterDictionariesFunction(Element& Domain, Element& Range);

	extern Map SelectSolutionLanguageParameterDictionaries;

	bool ReadBITypeSolutionLanguageParameterDictionariesFunction(Element& Domain, Element& Range);

	extern Map ReadBITypeSolutionLanguageParameterDictionaries;

	bool PutBITypeSolutionLanguageParameterDictionariesFunction(Element& Domain, Element& Range);

	extern Map PutBITypeSolutionLanguageParameterDictionaries;

	bool ReadBaseInformationSolutionLanguageParameterDictionariesFunction(Element& Domain, Element& Range);

	extern Map ReadBaseInformationSolutionLanguageParameterDictionaries;

	bool GetBaseInformationSolutionLanguageParameterDictionariesFunction(Element& Domain, Element& Range);

	extern Map GetBaseInformationSolutionLanguageParameterDictionaries;

	bool PutBaseInformationSolutionLanguageParameterDictionariesFunction(Element& Domain, Element& Range);

	extern Map PutBaseInformationSolutionLanguageParameterDictionaries;

	bool ReadStateSolutionLanguageParameterDictionariesFunction(Element& Domain, Element& Range);

	extern Map GetStateSolutionLanguageParameterDictionaries;

	bool PutStateSolutionLanguageParameterDictionariesFunction(Element& Domain, Element& Range);

	extern Map PutStateSolutionLanguageParameterDictionaries;

	bool ReadContextSolutionLanguageParameterDictionariesFunction(Element& Domain, Element& Range);

	extern Map ReadContextSolutionLanguageParameterDictionaries;

	bool GetContextSolutionLanguageParameterDictionariesFunction(Element& Domain, Element& Range);

	extern Map GetContextSolutionLanguageParameterDictionaries;

	bool PutContextSolutionLanguageParameterDictionariesFunction(Element& Domain, Element& Range);

	extern Map PutContextSolutionLanguageParameterDictionaries;

	bool ReadSolutionLanguageParameterDictionariesInformationFunction(Element& Domain, Element& Range);

	extern Map ReadSolutionLanguageParameterDictionariesInformation;

	bool GetSolutionLanguageParameterDictionariesInformationFunction(Element& Domain, Element& Range);

	extern Map GetSolutionLanguageParameterDictionariesInformation;

	bool PutSolutionLanguageParameterDictionariesInformationFunction(Element& Domain, Element& Range);

	extern Map PutSolutionLanguageParameterDictionariesInformation;

	bool SortSolutionLanguageParameterDictionariesFunction(Element& Domain, Element& Range);

	extern Map SortSolutionLanguageParameterDictionaries;

	bool RecursionSolutionLanguageParameterDictionariesCalculateFirstAddressFunction(Element& Domain, Element& Range);

	extern Map RecursionSolutionLanguageParameterDictionariesCalculateFirstAddress;

	bool SolutionLanguageParameterDictionariesCalculateFirstAddressFunction(Element& Domain, Element& Range);

	extern Map SolutionLanguageParameterDictionariesCalculateFirstAddress;

	bool DataConstructSolutionLanguageParameterDictionariesFunction(Element& Domain, Element& Range);

	extern Map DataConstructSolutionLanguageParameterDictionaries;

	bool CopySolutionLanguageParameterDictionariesFunction(Element& Domain, Element& Range);

	extern Map CopySolutionLanguageParameterDictionaries;

	bool SolutionLanguageParameterDictionariesNormalInformationFunction(Element& Domain, Element& Range);

	extern Map SolutionLanguageParameterDictionariesNormalInformation;

	bool ReleaseSolutionLanguageParameterDictionariesFunction(Element& Domain, Element& Range);

	extern Map ReleaseSolutionLanguageParameterDictionaries;

	namespace SolutionLanguageExplainManager_Struct {
	constexpr unsigned int SL_OrderSize = 7;
		constexpr unsigned int SL_FirstMap				= 0;
		constexpr unsigned int SL_SecoundMap			= 1;
		constexpr unsigned int SL_MapParameter			= 2;
		constexpr unsigned int SL_MPContext				= 3;
		constexpr unsigned int SL_LoginInformation		= 4;
		constexpr unsigned int SL_LogoutInformation		= 5;
		constexpr unsigned int SL_APNode				= 6;
			constexpr unsigned int SL_FirstMapANode			= 0;
			constexpr unsigned int SL_SecoundMapANode		= 1;
			constexpr unsigned int SL_FirstMapPNode			= 2;
			constexpr unsigned int SL_SecoundMapPNode		= 3;
	}

	bool SolutionLanguageExplainManagerSetTest(Element& Ele, Set& S);

	extern Set SolutionLanguageExplainManager;

	bool NewSolutionLanguageExplainManagerFunction(Element& Domain, Element& Range);

	extern Map NewSolutionLanguageExplainManager;

	bool FstreamConstructSolutionMapFunction(Element& Domain, Element& Range);

	extern Map FstreamConstructSolutionMap;

	bool FstreamConstructSolutionRecursionInformationFunction(Element& Domain, Element& Range);

	extern Map FstreamConstructSolutionRecursionInformation;

	bool FstreamConstructSolutionInformationFunction(Element& Domain, Element& Range);

	extern Map FstreamConstructSolutionInformation;

	bool FstreamConstructSolutionNodeStateFunction(Element& Domain, Element& Range);

	extern Map FstreamConstructSolutionNodeState;

	bool FstreamConstructSolutionSerialFunction(Element& Domain, Element& Range);

	extern Map FstreamConstructSolutionSerial;

	bool FstreamConstructSolutionParallelFunction(Element& Domain, Element& Range);

	extern Map FstreamConstructSolutionParallel;

	bool FstreamConstructSolutionLanguageExplainManagerMapFunction(Element& Domain, Element& Range);
	
	extern Map FstreamConstructSolutionLanguageExplainManagerMap;

	bool ReleaseSolutionLanguageExplainManagerFunction(Element& Domain, Element& Range);

	extern Map ReleaseSolutionLanguageExplainManager;

	namespace DomainInformationTypeName {
		extern const char* String_TypeName;
		extern const char* UInt_TypeName;
		extern const char* SuperIndex_TypeName;
		extern const char* Bool_TypeName;
		extern const char* Empty_TypeName;

		const unsigned int String_Type = 0;
		const unsigned int UInt_Type = 1;
		const unsigned int SuperIndex_Type = 2;
		const unsigned int Bool_Type = 3;
		const unsigned int Empty_Type = 4;
	}

	extern Element EmptyElementName;

	bool InitializeEmptyElementNameFunction(Element& Domain, Element& Range);

	extern Map InitializeEmptyElementName;

	namespace DomainInformationLoginoutTypeName {
		extern const char* Login_TypeName;
		extern const char* Logout_TypeName;
		extern const char* Common_TypeName;
		extern const char* LoginOut_TypeName;

		constexpr unsigned int Login_Type		= 0;
		constexpr unsigned int Logout_Type		= 1;
		constexpr unsigned int Common_Type		= 2;
		constexpr unsigned int LoginOut_Type	= 3;
	}
	
	bool FstreamConstructSolutionParameterInformationFunction(Element& Domain, Element& Range);

	extern Map FstreamConstructSolutionParameterInformation;

	bool RecursionTransformSolutionParameterInformationFunction(Element& Domain, Element& Range);

	extern Map RecursionTransformSolutionParameterInformation;

	bool TransformSolutionParameterInformationFunction(Element& Domain, Element& Range);

	extern Map TransformSolutionParameterInformation;

	bool SolutionLanguageNodeOrderMapInformationToDataFunction(Element& Domain, Element& Range);

	extern Map SolutionLanguageNodeOrderMapInformationToData;

	bool DataConstructSolutionLanguageNodeOrderMapInformationFunction(Element& Domain, Element& Range);

	extern Map DataConstructSolutionLanguageNodeOrderMapInformation;

	bool SolutionLanguageNodeOrderInsideLinkToDataFunction(Element& Domain, Element& Range);

	extern Map SolutionLanguageNodeOrderInsideLinkToData;

	bool DataConstructSolutionLanguageNodeOrderInsideLinkFunction(Element& Domain, Element& Range);

	extern Map DataConstructSolutionLanguageNodeOrderInsideLink;

	bool SolutionLanguageNodeOrderStateToDataFunction(Element& Domain, Element& Range);

	extern Map SolutionLanguageNodeOrderStateToData;

	bool DataConstructSolutionLanguageNodeOrderStateFunction(Element& Domain, Element& Range);

	extern Map DataConstructSolutionLanguageNodeOrderState;

	bool RecursionSolutionLanguageNodeOrderParameterDataLengthCalculateFunction(Element& Domain, Element& Range);

	extern Map RecursionSolutionLanguageNodeOrderParameterDataLengthCalculate;

	bool RecursionSolutionLanguageNodeOrderParameterToDataFunction(Element& Domain, Element& Range);

	extern Map RecursionSolutionLanguageManagerToNodeDomainInformationData;

	bool RecursionDataConstructSolutionLanguageNodeOrderParameterFunction(Element& Domain, Element& Range);

	extern Map RecursionDataConstructSolutionLangaugeNodeOrderParameter;

	bool SolutionLanguageNodeOrderDomainParameterToDataFunction(Element& Domain, Element& Range);

	extern Map SolutionLanguageNodeOrderDomainParameterToData;

	bool DataConstructSolutionLanguageNodeOrderDomainParameterFunction(Element& Domain, Element& Range);

	extern Map DataConstructSolutionLanguageNodeOrderDomainParameter;

	bool SolutionLanguageParameterDictionariesToDataFunction(Element& Domain, Element& Range);

	extern Map SolutionLanguageParameterDictionariesToData;

	bool SolutionLanguageExplainManagerConstructContextDictionariesFunction(Element& Domain, Element& Range);

	extern Map SolutionLanguageExplainManagerConstructContextDictionaries;

	bool SolutionLanguageExplainManagerConstructAPNodeOrderFunction(Element& Domain, Element& Range);

	extern Map SolutionLanguageExplainManagerConstructAPNodeOrder;

	bool SolutionLanguageAPNodeToDataFunctiuon(Element& Domain, Element& Range);

	extern Map SolutionLanguageAPNodeToData;

	bool DataToSolutionLanguageAPNodeFunction(Element& Domain, Element& Range);

	extern Map DataToSolutionLanguageAPNode;

	bool SolutionLanguageContextDictionariesToDataFunction(Element& Domain, Element& Range);

	extern Map SolutionLanguageContextDictionariesToData;

	bool SolutionLanguageExplainManagerConstructLoginOutDictionariesFunction(Element& Domain, Element& Range);

	extern Map SolutionLanguageExplainManagerConstructLoginOutDictionaries;

	bool IntentionalityObjectConstructSolutionLanguageExplainManagerFunction(Element& Domain, Element& Range);

	extern Map IntentionalityObjectConstructSolutionLanguageExplainManager;

#define ContextInformationTypeName DomainInformationTypeName

	namespace SolutionLanguageContextDictionaries_Struct {
		constexpr unsigned int SLCD_Order =		0;
		constexpr unsigned int SLCD_Parameter =		1;
			constexpr unsigned int SLCD_PageSize			= 0;
			constexpr unsigned int SLCD_ExpandSize			= 1;
			constexpr unsigned int SLCD_End					= 2;

			constexpr unsigned int SLCD_OrderSize = 2;
			constexpr unsigned int SLCD_Information			= 0;
			constexpr unsigned int SLCD_SuperIndex			= 1;
	}

	namespace UnlimitedContextDictionaries {
		extern const char* UnlimitedContextName;
	}

	bool SolutionLanguageContextDictionariesTest(Element& Ele, Set& S);

	extern Set SolutionLanguageContextDictionaries;

	bool NewSolutionLanguageContextDictionariesFunction(Element& Domain, Element& Range);

	extern Map NewSolutionLanguageContextDictionaries;

	bool SelectSolutionLanguageContextDictionariesFunction(Element& Domain, Element& Range);

	extern Map SelectSolutionLanguageContextDictionaries;

	bool LoginSolutionLanguageContextDictionariesFunction(Element& Domain, Element& Range);

	extern Map LoginSolutionLanguageContextDictionaries;

	bool LoginUnlimitedSolutionLanguageContextDictionariesFunction(Element& Domain, Element& Range);

	extern Map LoginUnlimitedSolutionLanguageContextDictionaries;

	bool ReadSolutionLanguageContextDictionariesFunction(Element& Domain, Element& Range);

	extern Map ReadSolutionLanguageContextDictionaries;

	bool GetSolutionLanguageContextDictionariesFunction(Element& Domain, Element& Range);

	extern Map GetSolutionLanguageContextDictionaries;

	bool PutSolutionLanguageContextDictionariesFunction(Element& Domain, Element& Range);

	extern Map PutSolutionLanguageContextDictionaries;

	bool SortSolutionLanguageContextDictionariesFunction(Element& Domain, Element& Range);

	extern Map SortSolutionLanguageContextDictionaries;

	bool DataConstructSolutionLanguageContextDictionariesFunction(Element& Domain, Element& Range);

	extern Map DataConstructSolutionLanguageContextDictionaries;

	bool CopySolutionLanguageContextDictionariesFunction(Element& Domain, Element& Range);

	extern Map CopySolutionLanguageContextDictionaries;

	bool ReleaseSolutionLanguageContextDictionariesFunction(Element& Domain, Element& Range);

	extern Map ReleaseSolutionLanguageContextDictionaries;

	namespace LoginOutInformationDictionaries_Struct {
		constexpr unsigned int LIOID_Number		= 0;
		constexpr unsigned int LIOID_Order		= 1;
	}

	bool LoginOutInformationDictionariesTest(Element& Ele, Set& S);

	extern Set LoginOutInformationDictionaries;

	bool NewLoginOutInformationDictionariesFunction(Element& Domain, Element& Range);

	extern Map NewLoginOutInformationDictionaries;

	bool ReleaseLoginOutInformationDictionariesFunction(Element& Domain, Element& Range);

	extern Map ReleaseLoginOutInformationDictionaries;

	bool DataConstructLoginOutInformationDictionariesFunction(Element& Domain, Element& Range);

	extern Map DataConstructLoginOutInformationDictionaries;

	bool CopyLoginOutInformationDictionariesFunction(Element& Domain, Element& Range);

	extern Map CopyLoginOutInformationDictionaries;

	bool LoginOutInformationDictionariesToDataFunction(Element& Domain, Element& Range);

	extern Map LoginOutInformationDictionariesToData;
}