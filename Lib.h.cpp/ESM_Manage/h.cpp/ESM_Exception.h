#pragma once
#include"E_S_M/h.cpp/All_E_S_M.h"

namespace Q_A {
#define GetESMException GetCharElement

	bool NewException_ESMDefaultFunction(Element& Domain, Element& Range);
	
	extern Map NewException_ESMDefault;

	bool NewExcSuperIndex_ESMDefaultFunction(Element& Domain, Element& Range);
	
	extern Map NewExcSuperIndex_ESMDefault;

#define ExcESMSelect			1
#define ExcESMLoginDuplicate	2
#define ExcESMForSort			3

}