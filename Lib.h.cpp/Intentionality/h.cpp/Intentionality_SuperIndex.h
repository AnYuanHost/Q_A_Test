#pragma once

namespace Q_A {
	namespace Intentionality_SuperIndex_Old {
	  constexpr unsigned int ISIOffset	= 0xffff;
		constexpr unsigned int EmptyIntentionality		= 0;
		constexpr unsigned int SBIIAOI					= 1;
		constexpr unsigned int CannedData				= 2;
		constexpr unsigned int SBCNMI					= 3;
		constexpr unsigned int SBCNSI					= 4;
		constexpr unsigned int SBCNII					= 5;
		constexpr unsigned int SBCNILI					= 6;
		constexpr unsigned int SBILI					= 7;
		constexpr unsigned int SBIAOI					= 8;
		constexpr unsigned int SBCNISI					= 9;
		constexpr unsigned int SBCNISEESI				= 10;
		constexpr unsigned int SBCNIII					= 11;
		constexpr unsigned int SBILSI					= 12;
		constexpr unsigned int SBILSEESI				= 13;
		constexpr unsigned int SBILII					= 14;
		constexpr unsigned int GPIS						= 15;
		constexpr unsigned int GPISEES					= 16;
		constexpr unsigned int GPII						= 17;
		constexpr unsigned int SBICNMI					= 18;
		constexpr unsigned int SBICNSI					= 19;
		constexpr unsigned int SBICNII					= 20;
		constexpr unsigned int SBICNILI					= 21;
		constexpr unsigned int SBICNISI					= 22;
		constexpr unsigned int SBICNISEESI				= 23;
		constexpr unsigned int SBICNIII					= 24;
		constexpr unsigned int HDC						= 25;
		constexpr unsigned int SBIILI					= 26;
		constexpr unsigned int SBIILSI					= 27;
		constexpr unsigned int SBIILSEESI				= 28;
		constexpr unsigned int SBIILII					= 29;
		constexpr unsigned int SBRI						= 30;
		constexpr unsigned int SBRISI					= 31;
		constexpr unsigned int SBRISEESI				= 32;
		constexpr unsigned int SBRIII					= 33;
		constexpr unsigned int SBRLI					= 34;
		constexpr unsigned int SBRLISI					= 35;
		constexpr unsigned int SBRLISEESI				= 36;
		constexpr unsigned int SBRLIII					= 37;
		constexpr unsigned int GAIO						= 38;
		constexpr unsigned int ISIAI					= 39;
	}

	namespace IntentionalitySuperIndex {
	  constexpr unsigned int ISIOffset = 0xffff + 1;
		constexpr unsigned int ISIMI						= 0;
		constexpr unsigned int One_SuperIndex				= 1;
		constexpr unsigned int CannedData					= 2;
		constexpr unsigned int SIIDI						= 3;
		constexpr unsigned int ShowStream					= 4;

		constexpr unsigned int QAFMSMI						= 5;
		constexpr unsigned int QAFMSNSI						= 6;
		constexpr unsigned int QAFMSILI						= 7;
		constexpr unsigned int QAFMSDI						= 8;

		constexpr unsigned int SBRQAFM						= 9;
		constexpr unsigned int SARQAFM						= 10;

		constexpr unsigned int SRPI							= 11;
		constexpr unsigned int SLIPI						= 13;
		constexpr unsigned int SLOPI						= 25;
		constexpr unsigned int SRCI							= 15;

		constexpr unsigned int SDMS							= 34;

		constexpr unsigned int SolutionSet					= 35;

		constexpr unsigned int SDS							= 36;

		constexpr unsigned int E_Belong_S					= 38;

		constexpr unsigned int SolutionInformationManager	= 39;

		constexpr unsigned int SLEMMapInformation			= 41;

		constexpr unsigned int FileAddress					= 12;
		
		constexpr unsigned int LanguageFile					= 19;
		constexpr unsigned int ParameterFile				= 44;
	}
}