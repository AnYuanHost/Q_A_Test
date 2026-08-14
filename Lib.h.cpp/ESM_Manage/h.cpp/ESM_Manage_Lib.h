#pragma once

#include"E_S_M/h.cpp/All_E_S_M.h"


namespace Q_A {

	constexpr auto LibElementNumber = 576;

	extern Element ESM_Lib_Manage;

	bool InitializeESMLibOrderFunction(Element& Domain, Element& Range);

	extern Map InitializeESMLibOrder;

	bool ReleaseESMLibOrderFunction(Element& Domain, Element& Range);

	extern Map ReleaseESMLibOrder;

	extern Element ESM_Lib_NameOrder;

	bool InitializeESMLibNameOrderFunction(Element& Domain, Element& Range);

	extern Map InitializeESMLibNameOrder;

	bool ReleaseESMLibNameOrderFunction(Element& Domain, Element& Range);

	extern Map ReleaseESMLibNameOrder;

	bool GetElementFromESMLibFunction(Element& Domain, Element& Range);

	extern Map GetElementFromESMLib;

	bool GetUIntFromESMLibFunction(Element& Domain, Element& Range);

	extern Map GetUIntFromESMLib;

	bool GetStreamNameFromESMLibFunction(Element& Domain, Element& Range);

	extern Map GetStreamNameFromESMLib;

}