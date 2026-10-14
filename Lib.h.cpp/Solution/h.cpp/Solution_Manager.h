#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {

	namespace SolutionInformationManager_Struct {
		constexpr unsigned int SIM_OrderSize = 2;

		constexpr unsigned int SIM_SuperIndex				= 0;
		constexpr unsigned int SIM_SLMSuperIndex			= 1;
	}

	bool SolutionInformationManagerTest(Element& Ele, Set& S);

	extern Set SolutionInformationManager;

	bool NewSolutionInformationManagerFunction(Element& Domain, Element& Range);

	extern Map NewSolutionInformationManager;

	bool SetSolutionInformationManagerSuperIndexFunction(Element& Domain, Element& Range);

	extern Map SetSolutionInformationManagerSuperIndex;

	bool GetSolutionInformationManagerSuperIndexFunction(Element& Domain, Element& Range);

	extern Map GetSolutionInformationManagerSuperIndex;

	bool ReleaseSolutionInformationManagerFunction(Element& Domain, Element& Range);

	extern Map ReleaseSolutionInformationManager;

	namespace SolutionInformationDictionaries_Struct {
		constexpr unsigned int SID_SuperIndex		= 0;
		constexpr unsigned int SID_Order			= 1;
		constexpr unsigned int SID_Parameter		= 2;
			constexpr unsigned int SID_PageSize		= 0;
			constexpr unsigned int SID_End			= 1;
			constexpr unsigned int SID_ExpandSize		= 2;
			constexpr unsigned int SID_RetainSize		= 3;
			constexpr unsigned int SID_EmptyNumber		= 4;

		constexpr unsigned int SID_OrderSize			= 1;
			constexpr unsigned int SID_Information			= 0;
	}

	bool SolutionInformationDictionariesTest(Element& Ele, Set& S);

	extern Set SolutionInformationDictionaries;

	bool NewSolutionInformationDictionariesFunction(Element& Domain, Element& Range);

	extern Map NewSolutionInformationDictionaries;

	bool SelectSolutionInformationDictionariesFunction(Element& Domain, Element& Range);

	extern Map SelectSolutionInformationDictionaries;

	bool LoginSolutionInformationDictionariesFunction(Element& Domain, Element& Range);

	extern Map LoginSolutionInformationDictionaries;

	bool LogoutSolutionInformationDictionariesFunction(Element& Domain, Element& Range);

	extern Map LogoutSolutionInformationDictionaries;

	bool SortSolutionInformationDictionariesFunction(Element& Domain, Element& Range);

	extern Map SortSolutionInformationDictionaries;

	bool RetainSolutionInformationDictionariesFunction(Element& Domain, Element& Range);

	extern Map RetainSolutionInformationDictionaries;

	bool SolutionInformationDictionariesToDataFunction(Element& Domain, Element& Range);

	extern Map SolutionInformationDictionariesToData;

	bool DataConstructSolutionInformationDictionariesFunction(Element& Domain, Element& Range);

	extern Map DataConstructSolutionInformationDictionaries;

	bool ReleaseSolutionInformationDictionariesFunction(Element& Domain, Element& Range);

	extern Map ReleaseSolutionInformationDictionaries;

	namespace SolutionLanguageExplainManagerDictionaries_Struct {
		constexpr unsigned int SLEMD_Order			= 0;
		constexpr unsigned int SLEMD_Parameter			= 1;
			constexpr unsigned int SLEMD_End				= 0;

		constexpr unsigned int SLEMD_OrderSize			= 2;
			constexpr unsigned int SLEMD_SuperIndex		= 0;
			constexpr unsigned int SLEMD_Manager			= 1;
	}

	bool SolutionLanguageExplainManagerDictionariesTest(Element& Ele, Set& S);

	extern Set SolutionLanguageExplainManagerDictionaries;

	bool NewSolutionLanguageExplainManagerDictionariesFunction(Element& Domain, Element& Range);

	extern Map NewSolutionLanguageExplainManagerDictionaries;

	bool ConstructSolutionLanguageExplainManagerDictionariesFunction(Element& Domain, Element& Range);

	extern Map ConstructSolutionLanguageExplainManagerDictionaries;

	bool SelectSolutionLanguageExplainManagerDictionariesFunction(Element& Domain, Element& Range);

	extern Map SelectSolutionLanguageExplainManagerDictionaries;

	bool ReadSolutionLanguageExplainManagerDictionariesFunction(Element& Domain, Element& Range);

	extern Map ReadSolutionLanguageExplainManagerDictionaries;

	bool GetSolutionLanguageExplainManagerDictionariesFunction(Element& Domain, Element& Range);

	extern Map GetSolutionLanguageExplainManagerDictionaries;

	bool PutSolutionLanguageExplainManagerDictionariesFunction(Element& Domain, Element& Range);

	extern Map PutSolutionLanguageExplainManagerDictionaries;

	bool DestructSolutionLanguageExplainManagerDictionariesFunction(Element& Domain, Element& Range);

	extern Map DestructSolutionSolutionLanguageManagerDictionaries;

	bool ReleaseSolutionLanguageExplainManagerDictionariesFunction(Element& Domain, Element& Range);

	extern Map ReleaseSolutionLanguageExplainManagerDictionaries;

	namespace SolutionDictionariesManager_Struct {
		constexpr unsigned int SDM_Order			= 0;
		constexpr unsigned int SDM_Parameter		= 1;
			constexpr unsigned int SDM_End			= 0;
			constexpr unsigned int SDM_PageSize		= 1;
			constexpr unsigned int SDM_ExpandSize		= 2;
			constexpr unsigned int SDM_RetainSize		= 3;
			constexpr unsigned int SDM_EmptyNumber		= 4;

		constexpr unsigned int SDM_OrderSize = 3;
			constexpr unsigned int SDM_SuperIndex		= 0;
			constexpr unsigned int SDM_Dictionaries	= 1;
			constexpr unsigned int SDM_Manager		= 2;
	}

	bool SolutionDictionariesManagerTest(Element& Ele, Set& S);

	extern Set SolutionDictionariesManager;

	bool NewSolutionDictionariesManagerFunction(Element& Domain, Element& Range);

	extern Map NewSolutionDictionariesManager;

	bool SelectSolutionDictionariesManagerFunction(Element& Domain, Element& Range);

	extern Map SelectSolutionDictionariesManager;

	bool ReadSolutionDictionariesManagerDictionariesFunction(Element& Domain, Element& Range);

	extern Map ReadSolutionDictionariesManagerDictionaries;

	bool GetSolutionDictionariesManagerDictionariesFunction(Element& Domain, Element& Range);

	extern Map GetSolutionDictionariesManagerDictionaries;

	bool PutSolutionDictionariesManagerDictionariesFunction(Element& Domain, Element& Range);

	extern Map PutSolutionDictionariesManagerDictionaries;

	bool ReadSolutionDictionariesManagerSolutionManagerFunction(Element& Domain, Element& Range);

	extern Map ReadSolutionDictionariesManagerSolutionManager;

	bool GetSolutionDictionariesManagerSolutionManagerFunction(Element& Domain, Element& Range);

	extern Map GetSolutionDictionariesManagerSolutionManager;

	bool PutSolutionDictionariesManagerSolutionManagerFunction(Element& Domain, Element& Range);

	extern Map PutSolutionDictionariesManagerSolutionManager;

	bool LoginSolutionDictionariesManagerFunction(Element& Domain, Element& Range);

	extern Map LoginSolutionDictionariesManager;

	bool LogoutSolutionDictionariesManagerFunction(Element& Domain, Element& Range);

	extern Map LogoutSolutionDictionariesManager;

	bool SortSolutionDictionariesManagerFunction(Element& Domain, Element& Range);

	extern Map SortSolutionDictionariesManager;

	bool DefragmentSolutionDictionariesManagerFunction(Element& Domain, Element& Range);

	extern Map DefragmentSolutionDictionariesManager;

	bool RetainSolutionDictionariesManagerFunction(Element& Domain, Element& Range);

	extern Map RetainSolutionDictionariesManager;

	bool SolutionDictionariesManagerToDataFunction(Element& Domain, Element& Range);

	extern Map SolutionDictionariesManagerToData;

	bool DataToSolutionDictionariesManagerFunction(Element& Domain, Element& Range);

	extern Map DataToSolutionDictionariesManager;

	bool ReleaseSolutionDictionariesManagerFunction(Element& Domain, Element& Range);

	extern Map ReleaseSolutionDictionariesManager;
}