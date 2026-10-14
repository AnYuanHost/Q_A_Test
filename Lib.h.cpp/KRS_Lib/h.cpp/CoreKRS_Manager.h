#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {
	namespace CoreKRSObject_Struct {
		constexpr unsigned int CoreKRSObject_SuperIndex			= 0;
		constexpr unsigned int CoreKRSObject_Dll				= 1;
		constexpr unsigned int CoreKRSObject_Dictionaries		= 2;
		constexpr unsigned int CoreKRSObject_SubEES				= 3;
		constexpr unsigned int CoreKRSObject_LoginSuperIndex	= 4;
		constexpr unsigned int CoreKRSObject_LogoutSuperIndex	= 5;
	}

	bool CoreKRSObjectTest(Element& Ele, Set& S);

	extern Set CoreKRSObject;

	bool NewCoreKRSObjectFunction(Element& Domain, Element& Range);
	
	extern Map NewCoreKRSObject;

	bool SetCoreKRSObjectSuperIndexFunction(Element& Domain, Element& Range);

	extern Map SetCoreKRSObjectSuperIndex;

	bool SetCoreKRSObjectSubEESFunction(Element& Domain, Element& Range);

	extern Map SetCoreKRSObjectSubEES;

	bool ReadCoreKRSObjectSubEESFunction(Element& Domain, Element& Range);

	extern Map ReadCoreKRSObjectSubEES;

	bool SetLoginSuperIndexCoreKRSObjectFunction(Element& Domain, Element& Range);

	extern Map SetLoginSuperIndexCoreKRSObject;

	bool SetLogoutSuperIndexCoreKRSObjectFunction(Element& Domain, Element& Range);

	extern Map SetLogoutSuperIndexCoreKRSObject;

	bool ReadLoginSuperIndexCoreKRSObjectFunction(Element& Domain, Element& Range);

	extern Map ReadLoginSuperIndexCoreKRSObject;

	bool ReadLogoutSuperIndexCoreKRSObjectFunction(Element& Domain, Element& Range);

	extern Map ReadLogoutSuperIndexCoreKRSObject;

	bool ReleaseDictionariesCoreKRSObjectSubEESFunction(Element& Domain, Element& Range);

	extern Map ReleaseDictionariesCoreKRSObjectSubEES;

	bool ReleaseCoreKRSObjectFunction(Element& Domain, Element& Range);

	extern Map ReleaseCoreKRSObject;

	namespace CoreKRSManager_Struct {
		constexpr unsigned int CoreKRS_Order			= 0;
			//Index
				constexpr unsigned int CoreKRS_Object			= 0;
				constexpr unsigned int CoreKRS_State			= 1;
		constexpr unsigned int CoreKRS_Parameter		= 1;
			constexpr unsigned int CoreKRS_PageSize			= 0;
			constexpr unsigned int CoreKRS_ExpandSize		= 1;
			constexpr unsigned int CoreKRS_RetainSize		= 2;
			constexpr unsigned int CoreKRS_End				= 3;
	}

	namespace CoreKRSObject_StateCode {
		constexpr unsigned int CoreKRSObject_Usable			= 0;
		constexpr unsigned int CoreKRSObject_Unusable		= 1;
	}

	bool CoreKRSManagerTest(Element& Ele, Set& S);

	extern Set CoreKRSManager;

	bool NewCoreKRSManagerFunction(Element& Domain, Element& Range);

	extern Map NewCoreKRSManager;

	bool SelectCoreKRSManagerFunction(Element& Domain, Element& Range);

	extern Map SelectCoreKRSManager;

	bool LoginCoreKRSManagerFunction(Element& Domain, Element& Range);

	extern Map LoginCoreKRSManager;

	bool LogoutCoreKRSManagerFunction(Element& Domain, Element& Range);

	extern Map LogoutCoreKRSManager;

	bool SetObjectStateCoreKRSManagerFunction(Element& Domain, Element& Range);

	extern Map SetObjectStateCoreKRSManager;

	bool ReadObjectStateCoreKRSManagerFunction(Element& Domain, Element& Raneg);

	extern Map ReadObjectStateCoreKRSManager;

	bool ReleaseCoreKRSManagerFunction(Element& Domain, Element& Range);

	extern Map ReleaseCoreKRSManager;
}