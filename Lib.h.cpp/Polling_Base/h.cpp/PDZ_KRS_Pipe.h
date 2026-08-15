#pragma once
#include"E_S_M\h.cpp\E_S_M.h"

namespace Q_A {
	namespace PDZ_KRS_Pipe_Struct {
		constexpr unsigned int PDZ_KRS_Pipe_Request			= 0;
		constexpr unsigned int PDZ_KRS_Pipe_OrderPackage	= 1;
	}

	bool PDZ_KRS_PipeTest(Element& Ele, Set& Set);

	extern Set PDZ_KRS_Pipe;

	bool NewPDZ_KRS_PipeFunction(Element& Domain, Element& Range);

	extern Map NewPDZ_KRS_Pipe;

	bool ReleasePDZ_KRS_PipeFunction(Element& Domain, Element& Range);

	extern Map ReleasePDZ_KRS_Pipe;
}