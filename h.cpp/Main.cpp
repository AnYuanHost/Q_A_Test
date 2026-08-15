#include"Main.h"

int main()
{
	unsigned int SwitchCase = Thread_Base_Case_Code;

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

	default:

		return 0;
	}
}