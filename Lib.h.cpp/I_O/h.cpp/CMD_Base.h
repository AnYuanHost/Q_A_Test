#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A{
	
	bool CMDGetLineFunction(Element& Domain, Element& Range);
	
	extern Map CMDGetLine;

	bool CMDPutLineFunction(Element& Domain, Element& Range);

	extern Map CMDPutLine;

	bool CMDPutHelloWorldFunction(Element& Domain, Element& Range);

	extern Map CMDPutHelloWorld;

}