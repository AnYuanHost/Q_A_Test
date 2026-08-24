#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {
	namespace EES_Base_Struct {
constexpr unsigned int EESEnvironment		= 0;
constexpr unsigned int EESSubEES			= 1;
	//Index
		constexpr unsigned int SubEESSuperIndex			= 0;
		constexpr unsigned int SubEESEle				= 1;
		constexpr unsigned int SubEESMap				= 2;
			constexpr unsigned int SubEESMapSize		  = 20;
			constexpr unsigned int		SubEESLogin				= 0;
			constexpr unsigned int		SubEESSelect			= 1;
			constexpr unsigned int		SubEESLogout			= 2;
			constexpr unsigned int		SubEESSort				= 3;
			constexpr unsigned int		SubEESGetInf			= 4;
			constexpr unsigned int		SubEESGetSuperIndex		= 5;
			constexpr unsigned int		SubEESPutInf			= 6;
			constexpr unsigned int		SubEESPutSuperIndex		= 7;
			constexpr unsigned int		SubEESReadInf			= 8;
			constexpr unsigned int		SubEESReadSuperIndex	= 9;
			constexpr unsigned int		NewSubEESAddress		= 10;
			constexpr unsigned int		FirstSubEESAddress		= 11;
			constexpr unsigned int		ReleaseSubEESAddress	= 12;
			constexpr unsigned int		FESubEESAddress			= 13;
			constexpr unsigned int		NextSubEESAddress		= 14;
			constexpr unsigned int		SubEESRetain			= 15;
			constexpr unsigned int		SubEESDefragment		= 16;
			constexpr unsigned int		SubEESOutTest			= 17;
			constexpr unsigned int		SubEESGetOccupy			= 18;
			constexpr unsigned int		SubEESPutOccupy			= 19;

constexpr unsigned int		SISOrder		= 2;
constexpr unsigned int		EESParameter	= 3;
	constexpr unsigned int 		SISParameter		= 0;
		constexpr unsigned int 		SISPageSize				= 0;
		constexpr unsigned int 		SISExpandSize			= 1;
		constexpr unsigned int 		SISRetainSize			= 2;
		constexpr unsigned int		SISNextAddress			= 3;
		constexpr unsigned int		SISPageEnd				= 4;
		constexpr unsigned int		SISEnd					= 5;
		constexpr unsigned int		SISLazySize				= 6;
constexpr unsigned int		EESGetMap		= 4;
	constexpr unsigned int		SISMap				= 0;
	  constexpr unsigned int	  SISMapSize		  = 21;
		constexpr unsigned int		SISTest					= 0;
		constexpr unsigned int		SISNext					= 1;
		constexpr unsigned int		SISSelect				= 2;
		constexpr unsigned int		SISLogin				= 3;
		constexpr unsigned int		SISLogout				= 4;
		constexpr unsigned int		SISSort					= 5;
		constexpr unsigned int		SISGetLeastSI			= 6;
		constexpr unsigned int		SISRetain				= 7;
		constexpr unsigned int		SISNewAddress			= 8;
		constexpr unsigned int		SISFirstAddress			= 9;
		constexpr unsigned int		SISSuccessAddress		= 10;
		constexpr unsigned int		SISReleaseAddress		= 11;
		constexpr unsigned int		SISGetFEAddress			= 12;
		constexpr unsigned int		SISDefragment			= 13;
		constexpr unsigned int		SISGetSuperIndex		= 14;
		constexpr unsigned int		SISGetUInt				= 15;
		constexpr unsigned int		SISReadUInt				= 16;
		constexpr unsigned int		SISPutSuperIndex		= 17;
		constexpr unsigned int		SISPutUInt				= 18;
		constexpr unsigned int		SISRelease				= 19;
		constexpr unsigned int		SISFEAddress			= 20;
	constexpr unsigned int		EEMap		= 1;
	  constexpr unsigned int	  EEMapSize		= 7;
		constexpr unsigned int		EEExpand			= 0;
		constexpr unsigned int		EEReadElement		= 1;
		constexpr unsigned int		EEGetElement		= 2;
		constexpr unsigned int		EEPutElement		= 3;
		constexpr unsigned int		EERetain			= 4;
		constexpr unsigned int		EENewAddress		= 5;
		constexpr unsigned int		EEReleaseAddress	= 6;
	}

	namespace ElementOccupy_Code {
		constexpr unsigned int EO_Free		= 0;
		constexpr unsigned int EO_Occupy	= 1;
		constexpr unsigned int EO_Read		= 2;
	}

	bool ElementEnvironmentSearcherTest(Element& Ele, Set& S);

	extern Set ElementEnvironmentSearcher;

	bool SuperIndexSearcherTestFunction(Element& Domain, Element& Range);

	extern Map SuperIndexSearcherTest;

	bool NewElementEnvironmentSearcherFunction(Element& Domain, Element& Range);

	extern Map NewElementEnvironmentSearcher;

	bool NewEES_SISParameterFunction(Element& Domain, Element& Range);

	extern Map NewEES_SISParameter;

	bool NewEES_SISOrderFunction(Element& Domain, Element& Range);

	extern Map NewEES_SISOrder;

	bool NewEES_SISMapFunction(Element& Domain, Element& Range);

	extern Map NewEES_SISMap;

	bool PutEESEnvironmentFunction(Element& Domain, Element& Range);

	extern Map PutEESEnvironment;

	bool GetEESEnvironmentFunction(Element& Domain, Element& Range);

	extern Map GetEESEnvironment;

	bool LoginSubEESEESFunction(Element& Domain, Element& Range);

	extern Map LoginSubEESEES;

	bool LogoutSubEESEESFunction(Element& Domain, Element& Range);

	extern Map LogoutSubEESEES;

	bool LoginElementEnvironmentSearcherFunction(Element& Domain, Element& Range);

	extern Map LoginElementEnvironmentSearcher;

	bool LogoutElementEnvironmentSearcherFunction(Element& Domain, Element& Range);

	extern Map LogoutElementEnvironmentSearcher;

	bool ReadElementEnvironmentSearcherFunction(Element& Domain, Element& Range);

	extern Map ReadElementEnvironmentSearcher;

	bool GetElementEnvironmentSearcherFunction(Element& Domain, Element& Range);

	extern Map GetElementEnvironmentSearcher;

	bool PutElementEnvironmentSearcherFunction(Element& Domain, Element& Range);

	extern Map PutElementEnvironmentSearcher;

	bool GetOccupyElementEnvironmentSearcherFunction(Element& Domain, Element& Range);

	extern Map GetOccupyElementEnvironmentSearcher;

	bool PutOccupyElementEnvironmentSearcherFunction(Element& Domain, Element& Range);

	extern Map PutOccupyElementEnvironmentSearcher;

	bool OccupyElementEnvironmentSearcherFunction(Element& Domain, Element& Range);

	extern Map OccupyElementEnvironmentSearcher;

	bool RelieveOccupyElementEnvironmentSearcherFunction(Element& Domain, Element& Range);

	extern Map RelieveOccupyElementEnvironmentSearcher;

	bool SortElementEnvironmentSearcherFunction(Element& Domain, Element& Range);

	extern Map SortElementEnvironmentSearcher;

	bool DefragmentElementEnvironmentSearcherFunction(Element& Domain, Element& Range);

	extern Map DefragmentElementEnvironmentSearcher;

	bool RetainElementEnvironmentSearcherFunction(Element& Domain, Element& Range);

	extern Map RetainElementEnvironmentSearcher;

	bool ReleaseElementEnvironmentSearcherFunction(Element& Domain, Element& Range);

	extern Map ReleaseElementEnvironmentSearcher;

	bool SelectEES_SISFunction(Element& Domain, Element& Range);

	extern Map SelectEES_SIS;

	bool NextEES_SISFunction(Element& Domain, Element& Range);

	extern Map NextEES_SIS;

	bool LoginEES_SISFunction(Element& Domain, Element& Range);

	extern Map LoginEES_SIS;

	bool LogoutEES_SISFunction(Element& Domain, Element& Range);

	extern Map LogoutEES_SIS;

	bool SortEES_SISFunction(Element& Domain, Element& Range);

	extern Map SortEES_SIS;

	bool DefragmentEES_SISFunction(Element& Domain, Element& Range);

	extern Map DefragmentEES_SIS;

	bool GetSuperIndexEES_SISFunction(Element& Domain, Element& Range);

	extern Map GetSuperIndexEES_SIS;

	bool GetUIntEES_SISFunction(Element& Domain, Element& Range);

	extern Map GetUIntEES_SIS;

	bool PutSuperIndexEES_SISFunction(Element& Domain, Element& Range);

	extern Map PutSuperIndexEES_SIS;

	bool PutUIntEES_SISFunction(Element& Domain, Element& Range);

	extern Map PutUIntEES_SIS;

	bool EES_SISGetLeastSuperIndexFunction(Element& Domain, Element& Range);

	extern Map EES_SISGetLeastSuperIndex;

	bool EES_SISRetainFunction(Element& Domain, Element& Range);

	extern Map EES_SISRetain;

	bool EES_SISAddressNextFunction(Element& Domain, Element& Range);

	extern Map EES_SISAddressNext;

	bool EES_SISFEAddressFunction(Element& Domain, Element& Range);

	extern Map EES_SISFEAddress;

	bool ReleaseEES_SISFunction(Element& Domain, Element& Range);

	extern Map ReleaseEES_SIS;

	///*

	bool SuperIndexDictionariesTest(Element& Ele, Set& S);

	extern Set SuperIndexDictionaries;

	bool NewSuperIndexDictionariesFunction(Element& Domain, Element& Range);

	extern Map NewSuperIndexDictionaries;

	bool SetSuperIndexDictionariesFunction(Element& Domain, Element& Range);

	extern Map SetSuperIndexDictionaries;

	bool GetSuperIndexDictionariesFunction(Element& Domain, Element& Range);

	extern Map GetSuperIndexDictionaries;

	bool ReleaseSuperIndexDictionariesFunction(Element& Domain, Element& Range);

	extern Map ReleaseSuperIndexDictionaries;
	
	//*/

	namespace Code_Test {
		bool EESTotalTestFunction(Element& Domain, Element& Range);

		extern Map EESTotalTest;
	}
}