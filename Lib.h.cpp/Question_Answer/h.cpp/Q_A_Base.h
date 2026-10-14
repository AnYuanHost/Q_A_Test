#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {

#define RQSetTest MapSetTest

#define RQSet MapSet

	bool SuperIndexToElementRQFunction(Element& Domain, Element& Range);

	extern Map SuperIndexToElementRQ;

	bool ElementNameToSuperIndexRQFunction(Element& Domain, Element& Range);

	extern Map ElementNameToSuperIndexRQ;


}