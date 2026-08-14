#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {
	namespace SuperIndexSubEES_Struct {
		constexpr unsigned int		SEES_SI_SuperIndex		= 0;
		constexpr unsigned int		SEES_SI_Order			= 1;
		constexpr unsigned int		SEES_SI_Parameter			= 2;
			constexpr unsigned int		SEES_SI_Occupied			= 0;
			constexpr unsigned int		SEES_SI_Asc				= 1;
			constexpr unsigned int		SEES_SI_PageSize			= 2;
			constexpr unsigned int		SEES_SI_ExpandPage		= 3;
			constexpr unsigned int		SEES_SI_RetainPage		= 4;
			constexpr unsigned int		SEES_SI_End				= 5;
			constexpr unsigned int		SEES_SI_LazySize			= 6;
	}

	bool SuperIndexSubEESTest(Element& Ele, Set& S);

	extern Set SuperIndexSubEES;

	bool SelectSuperIndexSubEESFunction(Element& Domain, Element& Range);

	extern Map SelectSuperIndexSubEES;

	bool SortSuperIndexSubEESFunction(Element& Domain, Element& Range);

	extern Map SortSuperIndexSubEES;

	bool NewSuperIndexSubEESDefaultParameterFunction(Element& Domain, Element& Range);

	extern Map NewSuperIndexSubEESDefaultParameter;

	bool NewSuperIndexSubEESFunction(Element& Domain, Element& Range);

	extern Map NewSuperIndexSubEES;

	bool GetInformationSuperIndexSubEESFunction(Element& Domain, Element& Range);

	extern Map GetInformationSuperIndexSubEES;

	bool GetSuperIndexSuperIndexSubEESFunction(Element& Domain, Element& Range);

	extern Map GetSuperIndexSuperIndexSubEES;

	bool PutInformationSuperIndexSubEESFunction(Element& Domain, Element& Range);

	extern Map PutInformationSuperIndexSubEES;

	bool PutSuperIndexSuperIndexSubEESFunction(Element& Domain, Element& Range);

	extern Map PutSuperIndexSuperIndexSubEES;

	bool ReadInformationSuperIndexSubEESFunction(Element& Domain, Element& Range);

	extern Map ReadInformationSuperIndexSubEES;

	bool ReadSuperIndexSuperIndexSubEESFunction(Element& Domain, Element& Range);

	extern Map ReadSuperIndexSuperIndexSubEES;

	bool GetOccupySuperIndexSubEESFunction(Element& Domain, Element& Range);

	extern Map GetOccupySuperIndexSubEES;

	bool SetOccupySuperIndexSubEESFunction(Element& Domain, Element& Range);

	extern Map SetOccupySuperIndexSubEES;

	bool LoginSuperIndexSubEESFunction(Element& Domain, Element& Range);

	extern Map LoginSuperIndexSubEES;

	bool LogoutSuperIndexSubEESFunction(Element& Domain, Element& Range);

	extern Map LogoutSuperIndexSubEES;

	bool DefragmentSuperIndexSubEESFunction(Element& Domain, Element& Range);

	extern Map DefragmentSuperIndexSubEES;

	bool FirstEmptySuperIndexSubEESFunction(Element& Domain, Element& Range);

	extern Map FirstEmptySuperIndexSubEES;

	bool NextAddressSuperIndexSubEESFunction(Element& Domian, Element& Range);

	extern Map NextAddressSuperIndexSubEES;

	bool RetainSuperIndexSubEESFunction(Element& Domain, Element& Range);

	extern Map RetainSuperIndexSubEES;

	bool ReleaseSuperIndexSubEESFunction(Element& Domain, Element& Range);

	extern Map ReleaseSuperIndexSubEES;

	bool SuperIndexSubEESOutTestFunction(Element& Domain, Element& Range);

	extern Map SuperIndexSubEESOutTest;

	bool LoginSuperIndexSubEESMapSetFunction(Element& Domain, Element& Range);

	extern Map LoginSuperIndexSubEESMapSet;

	namespace Code_Test {
		bool SuperIndexSubEESMainTestFunction(Element& Domain, Element& Range);

		extern Map SuperIndexSubEESMainTest;
	}
}