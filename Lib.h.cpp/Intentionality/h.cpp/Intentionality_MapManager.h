#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {

	namespace IntentionalityMapManager_Struct {
		constexpr unsigned int IMM_Order			= 0;
		constexpr unsigned int IMM_Parameter		= 1;
			constexpr unsigned int IMM_End				= 0;

		constexpr unsigned int IMM_OrderSize		= 2;
			constexpr unsigned int IMM_Information		= 0;
			constexpr unsigned int IMM_ElementCategory	= 1;
	}

	namespace IntentionalityMapManager_TypeName {
		extern const char* Element_TypeName;
		extern const char* Set_TypeName;
		extern const char* Map_TypeName;

		constexpr unsigned int Element_Type		= 0;
		constexpr unsigned int Set_Type			= 1;
		constexpr unsigned int Map_Type			= 2;
	}

	bool IntentionalityMapManagerTest(Element& Ele, Set& S);

	extern Set IntentionalityMapManager;

	bool NewIntentionalityMapManagerFunction(Element& Domain, Element& Range);

	extern Map NewIntentionalityMapManager;

	bool SortIntentionalityMapManagerFunction(Element& Domain, Element& Range);

	extern Map SortIntentionalityMapManager;

	bool FstreamStructIntentionalityMapManagerFunction(Element& Domain, Element& Range);

	extern Map FstreamStructIntentionalityMapManager;

	bool ReleaseIntentionalityMapManagerFunction(Element& Domain, Element& Range);

	extern Map ReleaseIntentionalityMapManager;

	namespace DllElementManager_Struct {
		constexpr unsigned int DEM_SuperIndex		= 0;
		constexpr unsigned int DEM_Order		= 1;
		constexpr unsigned int DEM_Dll				= 2;
		constexpr unsigned int DEM_Parameter		= 3;
			constexpr unsigned int DEM_End				= 0;

		constexpr unsigned int DEM_OrderSize		= 2;
			constexpr unsigned int DEM_Information		= 0;
			constexpr unsigned int DEM_Element			= 1;
	}

	bool DllElementManagerTest(Element& Ele, Set& S);

	extern Set DllElementManager;

	bool NewDllElementManagerFunction(Element& Domain, Element& Range);

	extern Map NewDllElementManager;

	bool SetDllElementManagerSuperIndexFunction(Element& Domain, Element& Range);

	extern Map SetDllElementManagerSuperIndex;

	bool ReadDllElementManagerSuperIndexFunction(Element& Domain, Element& Range);

	extern Map ReadDllElementManagerSuperIndex;

	bool SetDllElementManagerDllFunction(Element& Domain, Element& Range);

	extern Map SetDllElementManagerDll;

	bool GetDllElementManagerDllFunction(Element& Domain, Element& Range);;

	extern Map GetDllElementManagerDll;

	bool SelectDllElementManagerFunction(Element& Domain, Element& Range);

	extern Map SelectDllElementManager;

	bool ReadDllElementManagerElementFunction(Element& Domain, Element& Range);

	extern Map ReadDllElementManagerElement;

	bool ReleaseDllElementManagerFunction(Element& Domain, Element& Range);

	extern Map ReleaseDllElementManager;
}