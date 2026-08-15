#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {

	bool LoginEESMapFunction(Element& Domain, Element& Range);

	extern Map LoginEESMap;

	bool NewZeroPollingDrivenZeroFunction(Element& Domain, Element& Range);

	extern Map NewZeroPollingDrivenZero;

	namespace Code_Test {
		bool ZeroPollingDrivenZeroTotalTestFunction(Element& Domain, Element& Range);

		extern Map ZeroPollingDrivenZeroTotalTest;
	}
}