#pragma once
#include"Intentionality_MapManager.h"
#include<windows.h>

namespace Q_A {
#define GetWinDllElement(Ele) (*(HMODULE*)((Ele).KeySpace))

	bool WinDllSetTest(Element& Ele, Set& S);

	extern Set WinDllSet;

	bool NewWinDllFunction(Element& Domain, Element& Range);

	extern Map NewWinDll;

	bool LoadWinDllFunction(Element& Domain, Element& Range);

	extern Map LoadWinDll;

	bool UnloadWinDllFunction(Element& Domain, Element& Range);

	extern Map UnloadWinDll;

	bool GetElementFromWinDllFunction(Element& Domain, Element& Range);

	extern Map GetElementFromWinDll;

	bool ReleaseWinDllFunction(Element& Domain, Element& Range);

	extern Map ReleaseWinDll;

	bool DictionariesConstructDllElementManagerFunction(Element& Domain, Element& Range);

	extern Map DictionariesConstructDllElementManager;
}