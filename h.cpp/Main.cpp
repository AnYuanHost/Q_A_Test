#include"Main.h"

int main()
{
	unsigned int SwitchCase = SuperIndex_Searcher_Case_Code;

	switch (SwitchCase) {

	case ElementOrder_Case_Code_0:

		return ElementOrder_Case_1_Main();
		
	case ElementOrder_Case_Code_1:
		
		return ElementOrder_Case_2_Main();

	case Active_Map_Use_Case_Code:

		return Active_Map_Use_Case_Main();

	case Thread_Base_Case_Code:

		return Thread_Base_Case_Main();

	case EES_Base_Case_Code:

		return EES_Base_Case_Main();

	case _8Bit_Sub_EES_Case_Code:

		return _8Bit_Sub_EES_Case_Main();

	case SuperIndex_Sub_EES_Case_Code:

		return SuperIndex_Sub_EES_Case_Main();

	case LexOrder_Sub_EES_Case_Code:

		return LexOrder_Sub_EES_Case_Main();

	case ElementEnvironment_Case_Code:

		return ElementEnvironment_Case_Main();

	case SuperIndex_Searcher_Case_Code:

		return SuperIndex_Searcher_Case_Main();

	default:

		return 0;
	}
}