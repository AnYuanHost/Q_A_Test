#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {
#define Get8BitElement(Ele) (*((unsigned char*)((Ele).KeySpace)))

	namespace SubEES_8Bit {
		constexpr unsigned int SEES_8Bit_SuperIndex		= 0;
		constexpr unsigned int SEES_8Bit_Order				= 1;
		constexpr unsigned int SEES_8Bit_Parameter			= 2;
			constexpr unsigned int SEES_8Bit_First			= 0;
			constexpr unsigned int SEES_8Bit_FirstLazy		= 1;
	}

	namespace SubEES_8Bit_Code {
		constexpr unsigned int Quote_ElementEnvironmentSearcher		= 1;
		constexpr unsigned int Quote_ElementEnvironment			= 2;
		constexpr unsigned int Quote_PollingDrivenZero				= 3;
		constexpr unsigned int Quote_SolutionManager				= 4;
		constexpr unsigned int Quote_AddressCreaterManager			= 5;
		constexpr unsigned int Quote_IntentionalityAllotor			= 6;
		constexpr unsigned int Quote_CoreKRS						= 7;
		constexpr unsigned int Quote_SystemSpace					= 8;
	}

	using namespace SubEES_8Bit;

	bool _8BitSetTest(Element& Ele, Set& S);

	extern Set _8BitSet;

	bool New8BitElementFunction(Element& Domain, Element& Range);

	extern Map New8BitElement;

	bool _8BitSearcherTest(Element& Ele, Set& S);

	extern Set _8BitSearcher;

	bool New8BitSearcherFunction(Element& Domain, Element& Range);

	extern Map New8BitSearcher;

	bool Select8BitSearcherFunction(Element& Domain, Element& Range);

	extern Map Select8BitSearcher;

	bool Sort8BitSearcherFunction(Element& Domain, Element& Range);

	extern Map Sort8BitSearcher;

	bool Login8BitSearcherFunction(Element& Domain, Element& Range);

	extern Map Login8BitSearcher;

	bool Logout8BitSearcherFunction(Element& Domain, Element& Range);

	extern Map Logout8BitSearcher;

	bool Get8BitIn8BitSearcherFunction(Element& Domain, Element& Range);

	extern Map Get8BitIn8BitSearcher;

	bool GetSuperIndexIn8BitSearcherFunction(Element& Domain, Element& Range);

	extern Map GetSuperIndexIn8BitSearcher;

	bool Put8BitTo8BitSearcherFunction(Element& Domain, Element& Range);

	extern Map Put8BitTo8BitSearcher;

	bool PutSuperIndexTo8BitSearcherFunction(Element& Domain, Element& Range);

	extern Map PutSuperIndexTo8BitSearcher;

	bool Read8BitIn8BitSearcherFunction(Element& Domain, Element& Range);

	extern Map Read8BitIn8BitSearcher;

	bool ReadSuperIndexIn8BitSearcherFunction(Element& Domain, Element& Range);

	extern Map ReadSuperIndexIn8BitSearcher;

	bool GetOccupy8BitSearcherFunction(Element& Domain, Element& Range);
	
	extern Map GetOccupy8BitSearcher;

	bool SetOccupy8BitSearcherFunction(Element& Domain, Element& Range);
	
	extern Map SetOccupy8BitSearcher;

	bool First8BitSearcherAddressFunction(Element& Domain, Element& Range);

	extern Map First8BitSearcherAddress;

	bool FirstEmpty8BitSearcherAddressFunction(Element& Domain, Element& Range);

	extern Map FirstEmpty8BitSearcherAddress;

	bool Next8BitSearcherAddressFunction(Element& Domain, Element& Range);

	extern Map Next8BitSearcherAddress;

	bool Retain8BitSearcherFunction(Element& Domain, Element& Range);

	extern Map Retain8BitSearcher;

	bool _8BitSearcherOutTestFunction(Element& Domain, Element& Range);

	extern Map _8BitSearcherOutTest;

	bool Release8BitSearcherFunction(Element& Domain, Element& Range);

	extern Map Release8BitSearcher;

	bool LoginMap8BitSearcherFunction(Element& Domain, Element& Range);

	extern Map LoginMap8BitSearcher;

	namespace Code_Test {
		bool _8BitSearcherTotalTestFunction(Element& Domain, Element& Range);

		extern Map _8BitSearcherTotalTest;
	}

}