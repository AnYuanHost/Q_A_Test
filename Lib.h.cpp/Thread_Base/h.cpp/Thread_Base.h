#pragma once
#include"E_S_M/h.cpp/E_S_M.h"
#include<thread>

namespace Q_A {
#define GetThreadElement(Ele) (*(std::thread*)Ele.KeySpace)

	bool ThreadSetTest(Element& Ele, Set& S);

	extern Set ThreadSet;

	bool ThreadFunctionFunction(Element& Domain, Element& Range);

	extern Map ThreadFunction;

	bool NewAndActiveThreadFunction(Element& Domain, Element& Range);

	extern Map NewAndActiveThread;

	bool ThreadComplateTestFunction(Element& Domain, Element& Range);

	extern Map ThreadComplateTest;

	bool ThreadComplateFunction(Element& Domain, Element& Range);

	extern Map ThreadComplate;

	bool LoginThreadMapFunction(Element& Domain, Element& Range);

	extern Map LoginThreadMap;
}