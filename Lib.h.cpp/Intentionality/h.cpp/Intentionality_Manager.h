#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A{
	bool IntentionalitySuperIndexToTxtAddressFunction(Element& Domain, Element& Range);

	extern Map IntentionalitySuperIndexToTxtAddress;

	bool FstreamReadIntentionalityObjectFunction(Element& Domain, Element& Range);

	extern Map FstreamReadIntentionalityObject;

	bool FstreamWriteIntentionalityObjectFunction(Element& Domain, Element& Range);

	extern Map FstreamWriteIntentionalityObject;

	namespace IntentionalityAscender_Struct {
		constexpr unsigned int IA_Order_Size		= 0;
		constexpr unsigned int IA_Order_Index		= 1;
		constexpr unsigned int IA_Order				= 2;
		constexpr unsigned int IA_EES				= 3;
		constexpr unsigned int IA_SubEES_SuperIndex = 4;
	}

	bool IntentionalityAscenderTest(Element& Ele, Set& S);

	extern Set IntentionalityAscender;

	bool NewIntentionalityAscenderFunction(Element& Domain, Element& Range);

	extern Map NewIntentionalityAscender;

	bool SetIntentionalityAscenderOrderFunction(Element& Domain, Element& Range);

	extern Map SetIntentionalityAscenderOrder;

	bool SetIntentionalityAscenderEESFunction(Element& Domain, Element& Range);

	extern Map SetIntentionalityAscenderEES;

	bool SetIntentionalityAscenderSubEESSuperIndexFunction(Element& Domain, Element& Range);

	extern Map SetIntentionalityAscenderSubEESSuperIndex;

	bool NextIntentionalityAscenderFunction(Element& Domain, Element& Range);

	extern Map NextIntentionalityAscender;

	bool ZeroIntentionalityAscenderFunction(Element& Domain, Element& Range);

	extern Map ZeroIntentionalityAscender;

	bool ReleaseIntentionalityAscenderFunction(Element& Domain, Element& Range);

	extern Map ReleaseIntentionalityAscender;

	bool StreamToIntentionalityAscenderOrderFunction(Element& Domain, Element& Range);

	extern Map StreamToIntentionalityAscenderOrder;

	bool IntentionalityAscenderOrderToStreamFunction(Element& Domain, Element& Range);

	extern Map IntentionalityAscenderOrderToStream;

	bool ReleaseIntentionalityAscenderOrderFunction(Element& Domain, Element& Range);

	extern Map ReleaseIntentionalityAscenderOrder;

	bool IntentionalityEmptyOrderTest(Element& Ele, Set& S);

	extern Set IntentionalityEmptyOrder;

	bool NewIntentionalityEmptyOrderFunction(Element& Domain, Element& Range);

	extern Map NewIntentionalityEmptyOrder;

	bool FstreamReadIntentionalityEmptyOrderFunction(Element& Domain, Element& Range);	//

	extern Map FstreamReadIntentionalityEmptyOrder;

	bool FstreamWriteIntentionalityEmptyOrderFunction(Element& Domain, Element& Range);	//

	extern Map FstreamWriteIntentionalityEmptyOrder;

	bool InformationToIntentionalityEmptyOrderFunction(Element& Domain, Element& Range);

	extern Map InformationToIntentionalityEmptyOrder;

	bool IntentionalityEmptyOrderToInformationFunction(Element& Domain, Element& Range);

	extern Map IntentionalityEmptyOrderToInformation;

	bool LoginIntentionalityEmptyOrderFunction(Element& Domain, Element& Range);		//

	extern Map LoginIntentionalityEmptyOrder;

	bool LogoutIntentionalityEmptyOrderFunction(Element& Domain, Element& Range);		//

	extern Map LogoutIntentionalityEmptyOrder;

	bool ReleaseIntentionalityEmptyOrderFunction(Element& Domain, Element& Range);

	extern Map ReleaseIntentionalityEmptyOrder;

	bool IntentionalityEmptyOrderWeightedScreenFunction(Element& Domain, Element& Range);

	extern Map IntentionalityEmptyOrderWeightedScreen;

	bool IntentionalityEmptyOrderMergeOrderFunction(Element& Domain, Element& Range);

	extern Map IntentionalityEmptyOrderMergeOrder;

	bool IntentionalityEmptyOrderLogoutMergeFunction(Element& Domain, Element& Range);

	extern Map IntentionalityEmptyOrderLogoutMerge;

	bool IntentionalityEmptyOrderSubsectionFunction(Element& Domain, Element& Range);

	extern Map IntentionalityEmptyOrderSubsection;

	bool NewIntentionalityEmptyOrderSubsectionFeatureFunction(Element& Domain, Element& Range);

	extern Map NewIntentionalityEmptyOrderSubsectionFeature;

	namespace IntentionalitySuperIndexManager_Struct {
		constexpr unsigned int ISIManager_PageNumber		= 0;
		constexpr unsigned int ISIManager_PageOrder			= 1;
		  constexpr unsigned int ISIManager_PageSize			= 18;
			//Index
				constexpr unsigned int ISIMPage_SuperIndex			= 0;
				constexpr unsigned int ISIMPage_Page				= 1;
				constexpr unsigned int ISIMPage_EmptyNumber			= 2;
				constexpr unsigned int ISIMPage_AllotNumber			= 3;
	}

	bool IntentionalitySuperIndexManagerTest(Element& Ele, Set& S);

	extern Set IntentionalitySuperIndexManager;

	bool NewIntentionalitySuperIndexManagerFunction(Element& Domain, Element& Range);

	extern Map NewIntentionalitySuperIndexManager;

	bool FstreamReadIntentionalitySuperIndexManagerFunction(Element& Domain, Element& Range);		//

	extern Map FstreamReadIntentionalitySuperIndexManager;

	bool InformationToIntentionalitySuperIndexManagerFunction(Element& Domain, Element& Range);

	extern Map InformationToIntentionalitySuperIndexManager;

	bool IntentionalitySuperIndexManagerToInformationFunction(Element& Domain, Element& Range);

	extern Map IntentionalitySuperIndexManagerToInformation;

	bool IntentionalitySuperIndexManagerUpdateParameterFunction(Element& Domain, Element& Range);

	extern Map IntentionalitySuperIndexManagerUpdateParameter;

	bool IntentionalitySuperIndexManagerSelectFunction(Element& Domain, Element& Range);

	extern Map IntentionalitySuperIndexManagerSelect;

	bool IntentionalitySuperIndexManagerWeightedScreenFunction(Element& Domain, Element& Range);

	extern Map IntentionalitySuperIndexManagerWeightedScreen;

	bool IntentionalitySuperIndexManagerMergeOrderFunction(Element& Domain, Element& Range);

	extern Map IntentionalitySuperIndexManagerMergeOrder;

	bool IntentionalitySuperIndexManagerMergePageFunction(Element& Domain, Element& Range);

	extern Map IntentionalitySuperIndexManagerMergePage;

	bool LoginPageIntentionalitySuperIndexManagerFunction(Element& Domain, Element& Range);

	extern Map LoginPageIntentionalitySuperIndexManager;

	bool LogoutPageIntentionalitySuperIndexManagerFunction(Element& Domain, Element& Range);

	extern Map LogoutPageIntentionalitySuperIndexManager;

	bool PageIntentionalitySuperIndexManagerSubsectionFunction(Element& Domain, Element& Range);

	extern Map PageIntentionalitySuperIndexManagerSubsection;

	bool FstreamWriteIntentionalitySuperIndexManagerFunction(Element& Domain, Element& Range);		//

	extern Map FstreamWriteIntentionalitySuperIndexManager;

	bool FirstSuperIndexIntentionalitySuperIndexManagerFunction(Element& Domain, Element& Range);

	extern Map FirstSuperIndexIntentionalitySuperIndexManager;

	bool NextSuperIndexIntentionalitySuperIndexManagerFunction(Element& Domain, Element& Range);

	extern Map NextSuperIndexIntentionalitySuperIndexManager;

	bool OutTestIntentionalitySuperIndexManagerFunction(Element& Domain, Element& Range);

	extern Map OutTestIntentionalitySuperIndexManager;

	bool ReleaseIntentionalitySuperIndexManagerFunction(Element& Domain, Element& Range);

	extern Map ReleaseIntentionalitySuperIndexManager;

	namespace IntentionalitySuperIndexManagerLoginFeature {
	constexpr unsigned int ISIMLF_Length = 4;
		constexpr unsigned int ISIMLF_First				= 0;
		constexpr unsigned int ISIMLF_End				= 1;
		constexpr unsigned int ISIMLF_MergeOrder		= 2;
		constexpr unsigned int ISIMLF_PageEnd			= 3;
	}

	bool NewIntentionalitySuperIndexManagerLoginFeatureFunction(Element& Domain, Element& Range);

	extern Map NewIntentionalitySuperIndexManagerLoginFeature;

	bool ReleaseIntentionalitySuperIndexManagerLoginFeatureFunction(Element& Domain, Element& Range);

	extern Map ReleaseIntentionalitySuperIndexManagerLoginFeature;

	namespace IntentionalitySuperIndex_1_2_MergeFeature {
	constexpr unsigned int ISIMF_Length = 4;
		constexpr unsigned int ISIMF_Last			= 0;
		constexpr unsigned int ISIMF_Next			= 1;
		constexpr unsigned int ISIMF_Merge			= 2;
		constexpr unsigned int ISIMF_Zero			= 3;
	constexpr double ISIMF_MergeThreshold = 0.3;
	}

	bool NewIntentionalitySuperIndex_1_2_MergeFeatureFunction(Element& Domain, Element& Range);

	extern Map NewIntentionalitySuperIndex_1_2_MergeFeature;

	bool ReleaseIntentionalitySuperIndex_1_2_MergeFeatureFunction(Element& Domain, Element& Range);

	extern Map ReleaseIntentionalitySuperIndex_1_2_MergeFeature;

	namespace IntentionalitySuperIndexManagerLogoutFeature {
	constexpr unsigned int ISIMLF_Length = 5;
		constexpr unsigned int ISIMLF_Subsection		= 0;
		constexpr unsigned int ISIMLF_Merge				= 1;
		constexpr unsigned int ISIMLF_Last				= 2;
		constexpr unsigned int ISIMLF_End				= 3;
		constexpr unsigned int ISIMLF_Side				= 4;
	}

	bool NewIntentionalitySuperIndexManagerLogoutFeatureFunction(Element& Domain, Element& Range);

	extern Map NewIntentionalitySuperIndexManagerLogoutFeature;

	bool ReleaseIntentionalitySuperIndexManagerLogoutFeatureFunction(Element& Domain, Element& Range);

	extern Map ReleaseIntentionalitySuperIndexManagerLogoutFeature;

	bool IntentionalitySuperIndexOrderTest(Element& Ele, Set& S);

	extern Set IntentionalitySuperIndexOrder;

	namespace IntentionalityCreater {
		bool CreateSuperIndexManagerInitializeInformationFunction(Element& Domain, Element& Range);

		extern Map CreateSuperIndexManagerInitializeInformation;

		bool CreateSuperIndexManagerIntentionalityFunction(Element& Domain, Element& Range);

		extern Map CreateSuperIndexManagerIntentionality;

		bool CreateFirstEmptyOrderFunction(Element& Domain, Element& Range);

		extern Map CreateFirstEmptyOrder;

		bool CreateFirstEmptyOrderIntentionalityFunction(Element& Domain, Element& Range);

		extern Map CreateFirstEmptyOrderIntentionality;

		bool CreateCannedDataIntentionalityObjectFunction(Element& Domain, Element& Range);

		extern Map CreateCannedDataIntentioanlityObject;

		bool CreateSuperIndexIntentionalityDictionariesFunction(Element& Domain, Element& Range);

		extern Map CreateSuperIndexIntentionalityDictionaries;
	}

	namespace IntentionalitySuperIndexDictionaries_Struct {
		constexpr unsigned int ISID_SuperIndex		= 0;
		constexpr unsigned int ISID_Order			= 1;
	}

	bool IntentionalitySuperIndexDictionariesTest(Element& Ele, Set& S);

	extern Set IntentionalitySuperIndexDictionaries;

	bool NewIntentionalitySuperIndexDictionariesFunction(Element& Domain, Element& Range);

	extern Map NewIntentionalitySuperIndexDictionaries;

	bool SetIntentionalitySuperIndexDictionariesSuperIndexFunction(Element& Domain, Element& Range);

	extern Map SetIntentionalitySuperIndexDictionariesSuperIndex;

	bool SetIntentionalitySuperIndexDictionariesOrderFunction(Element& Domain, Element& Range);

	extern Map SetIntentionalitySuperIndexDictionariesOrder;

	bool SystemLoginIntentionalitySuperIndexDictionariesFunction(Element& Domain, Element& Range);

	extern Map SystemLoginIntentionalitySuperIndexDictionaries;

	bool SystemLogoutIntentionalitySuperIndexDictionariesFunction(Element& Domain, Element& Range);

	extern Map SystemLogoutIntentionalitySuperIndexDictionaries;

	bool FstreamPutIntentionalitySuperIndexDictionariesFunction(Element& Domain, Element& Range);

	extern Map FstreamPutIntentionalitySuperIndexDictionaries;

	bool ReleaseIntentionalitySuperIndexDictionariesFunction(Element& Domain, Element& Range);

	extern Map ReleaseIntentionalitySuperIndexDictionaries;

	bool IntentionalitySuperIndexDictionariesInTestFunction(Element& Domain, Element& Range);

	extern Map IntentionalitySuperIndexDictionariesInTest;

//	bool LoginIntentionalitySuperIndexDictionariesFunction(Element& Domain, Element& Range);

//	extern Map LoginIntentionalitySuperIndexDictionaries;

 //	bool LogoutIntentionalitySuperIndexDictionariesFunction(Element& Domain, Element& Range);

//	extern Map LogoutIntentionalitySuperIndexDictionaires;

	bool IntentionalitySuperIndexDictionariesToInformationFunction(Element& Domain, Element& Range);

	extern Map IntentionalitySuperIndexDictionariesToInformation;

	bool InformationToIntentionalitySuperIndexDictionariesFunction(Element& Domain, Element& Range);

	extern Map InformationToIntentionalitySuperIndexDictionaries;

	bool IntentionalitySuperIndexManagerToDictionariesFunction(Element& Domain, Element& Range);

	extern Map IntentionalitySuperIndexManagerToDictionaries;

	namespace IntentionalitySuperIndexDictionariesManager_Struct {
		constexpr unsigned int ISIDM_Number		= 0;
		constexpr unsigned int ISIDM_Order		= 1;
	}

	bool IntentionalitySuperIndexDictionariesManagerTest(Element& Ele, Set& S);

	extern Set IntentionalitySuperIndexDictionariesManager;

	bool NewIntentionalitySuperIndexDictionariesManagerFunction(Element& Domain, Element& Range);

	extern Map NewIntentionalitySuperIndexDictionariesManager;

	bool ReleaseIntentionalitySuperIndexDictionariesManagerFunction(Element& Domain, Element& Range);

	extern Map ReleaseIntentionalitySuperIndexDictionariesManager;

	namespace IntentionalityPathAscender_Struct {
		constexpr unsigned int IPA_First			= 0;
		constexpr unsigned int IPA_NextOrder		= 1;
		constexpr unsigned int IPA_Object			= 2;
		constexpr unsigned int IPA_EES				= 3;
		constexpr unsigned int IPA_SubEES			= 4;
	}

	bool IntentionalityPathAscenderTest(Element& Ele, Set& S);

	extern Set IntentionalityPathAscender;

	bool NewIntentionalityPathAscenderFunction(Element& Domain, Element& Range);

	extern Map NewIntentionalityPathAscender;

	bool SetIntentionalityPathAscenderEESFunction(Element& Domain, Element& Range);

	extern Map SetIntentionalityPathAscenderEES;

	bool SetIntentionalityPathAscenderSubEESFunction(Element& Domain, Element& Range);

	extern Map SetIntentionalityPathAscenderSubEES;

	bool SetIntentionalityPathAscenderFirstFunction(Element& Domain, Element& Range);

	extern Map SetIntentionalityPathAscenderFirst;

	bool SetIntentionalityPathAscenderNextOrderFunction(Element& Domain, Element& Range);

	extern Map SetIntentionalityPathAscenderNextOrder;

	bool UpdateIntentionalityPathAscenderFunction(Element& Domain, Element& Range);

	extern Map UpdateIntentionalityPathAscender;

	bool ReadIntentionalityPathAscenderFunction(Element& Domain, Element& Range);

	extern Map ReadIntentionalityPathAscender;

	bool ReleaseIntentionalityPathAscenderFunction(Element& Domain, Element& Range);

	extern Map ReleaseIntentionalityPathAscender;

}