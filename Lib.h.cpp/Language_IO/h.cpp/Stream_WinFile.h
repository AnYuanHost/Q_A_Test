#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {
	bool WinFileGetUIntFunction(Element& Domain, Element& Range);

	extern Map WinFileGetUInt;

	bool WinFilePutUIntFunction(Element& Domain, Element& Range);

	extern Map WinFilePutUInt;

	bool WinFileGetStringFunction(Element& Domain, Element& Range);

	extern Map WinFileGetString;

	bool WinFilePutStringFunction(Element& Domain, Element& Range);

	extern Map WinFilePutString;

	bool WinFilePutLineFunction(Element& Domain, Element& Range);

	extern Map WinFilePutLine;

	bool WinFilePutSpaceFunction(Element& Domain, Element& Range);

	extern Map WinFilePutSpace;

	bool WinFileGetAllStringFunction(Element& Domain, Element& Range);

	extern Map WinFileGetAllString;

	bool WinFilePutAllStringFunction(Element& Domain, Element& Range);

	extern Map WinFilePutAllString;
}