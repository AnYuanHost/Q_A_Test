#pragma once
#include<E_S_M/h.cpp/E_S_M.h>

namespace Q_A {

	namespace SubEES_LexOrder {
		constexpr unsigned int		SEES_LO_SuperIndex		=	0;
		constexpr unsigned int		SEES_LO_Order			=	1;
		constexpr unsigned int		SEES_LO_Parameter			=	2;
			constexpr unsigned int		SEES_LO_Occupied			=	0;
			constexpr unsigned int		SEES_LO_Asc				=	1;
			constexpr unsigned int		SEES_LO_PageSize			=	2;
			constexpr unsigned int		SEES_LO_ExpandPage		=	3;
			constexpr unsigned int		SEES_LO_RetainPage		=	4;
			constexpr unsigned int		SEES_LO_PageEnd			=	5;
			constexpr unsigned int		SEES_LO_End				=	6;
			constexpr unsigned int		SEES_LO_LazySize			=	7;
	}

	bool LexOrderEESTest(Element& Ele, Set& S);

	extern Set LexOrderEES;

	bool LexOrderEESSelectFunction(Element& Domain, Element& Range);

	extern Map LexOrderEESSelect;

	bool LexOrderEESSortFunction(Element& Domain, Element& Range);

	extern Map LexOrderEESSort;

	bool NewLexOrderEESDefaultParameterFunction(Element& Domain, Element& Range);

	extern Map NewLexOrderEESDefaultParameter;

	bool NewLexOrderEESFunction(Element& Domain, Element& Range);

	extern Map NewLexOrderEES;

	bool GetInformationLexOrderEESFunction(Element& Domain, Element& Range);

	extern Map GetInformationLexOrderEES;

	bool GetSuperIndexLexOrderEESFunction(Element& Domain, Element& Range);

	extern Map GetSuperIndexLexOrderEES;

	bool PutInformationLexOrderEESFunction(Element& Domain, Element& Range);

	extern Map PutInformationLexOrderEES;

	bool PutSuperIndexLexOrderEESFunction(Element& Domain, Element& Range);

	extern Map PutSuperIndexLexOrderEES;

	bool ReadInformationLexOrderEESFunction(Element& Domain, Element& Range);

	extern Map ReadInformationLexOrderEES;

	bool ReadSuperIndexLexOrderEESFunction(Element& Domain, Element& Range);

	extern Map ReadSuperIndexLexOrderEES;

	bool GetOccupyLexOrderEESFunction(Element& Domain, Element& Range);

	extern Map GetOccupyLexOrderEES;

	bool SetOccupyLexOrderEESFunction(Element& Domain, Element& Range);
	
	extern Map SetOccupyLexOrderEES;

	bool LoginLexOrderEESFunction(Element& Domain, Element& Range);

	extern Map LoginLexOrderEES;

	bool LogoutLexOrderEESFunction(Element& Domain, Element& Range);

	extern Map LogoutLexOrderEES;

	bool DefragmentLexOrderEESFunction(Element& Domain, Element& Range);

	extern Map DefragmentLexOrderEES;

	bool FirstEmptyLexOrderEESFunction(Element& Domain, Element& Range);

	extern Map FirstEmptyLexOrderEES;
	
	bool NextAddressLexOrderEESFunction(Element& Domain, Element& Range);

	extern Map NextAddressLexOrderEES;

	bool RetainLexOrderEESFunction(Element& Domain, Element& Range);

	extern Map RetainLexOrderEES;

	bool ReleaseLexOrderEESFunction(Element& Domain, Element& Range);

	extern Map ReleaseLexOrderEES;

	bool LexOrderEESOutTestFunction(Element& Domain, Element& Range);

	extern Map LexOrderEESOutTest;

	bool LoginLexOrderEESMapSetFunction(Element& Domain, Element& Range);

	extern Map LoginLexOrderEESMapSet;

	namespace Code_Test {
		bool NewSubEESLexOrderTestFunction(Element& Domain, Element& Range);

		extern Map NewSubEESLexOrdeTest;

		bool LoginLexOrderEESTestFunction(Element& Domain, Element& Range);

		extern Map LoginLexOrderEESTest;

		bool SelectLexOrderEESTestFunction(Element& Domain, Element& Range);

		extern Map SelectLexOrderEESTest;

		bool LexOrderEESTotalTestFunction(Element& Domain, Element& Range);

		extern Map LexOrderEESTotalTest;
	}
}