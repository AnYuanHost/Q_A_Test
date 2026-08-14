#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {

	namespace ElementEnvironment {
constexpr unsigned int EleEnvSuperIndex		=		0;
constexpr unsigned int EleEnvOrder			=		1;
constexpr unsigned int EleEnvParameter		=		2;
	constexpr unsigned int EleEnvPageSize		=		0;
	constexpr unsigned int EleEnvPageEnd		=		1;
	constexpr unsigned int EleEnvEnd			=		2;
	constexpr unsigned int EleEnvPageExpand		=		3;
	constexpr unsigned int EleEnvPageRetain		=		4;
	}

	bool ElementEnvironmentSetTest(Element& Ele, Set& S);

	extern Set ElementEnvironmentSet;

	bool NewElementEnvironmentFunction(Element& Domain, Element& Range);

	extern Map NewElementEnvironment;

	bool ElementEnvironmentSetSuperIndexFunction(Element& Domain, Element& Range);

	extern Map ElementEnvironmentSetSuperIndex;

	bool ElementEnvironmentGetSuperIndexFunction(Element& Domain, Element& Range);

	extern Map ElementEnvironmentGetSuperIndex;

	bool ElementEnvironmentExpandFunction(Element& Domain, Element& Range);

	extern Map ElementEnvironmentExpand;

	bool ElementEnvironmentReadElementFunction(Element& Domain, Element& Range);

	extern Map ElementEnvironmentReadElement;

	bool ElementEnvironmentGetElementFunction(Element& Domain, Element& Range);
	
	extern Map ElementEnvironmentGetElement;

	bool ElementEnvironmentPutElementFunction(Element& Domain, Element& Range);

	extern Map ElementEnvironmentPutElement;

	bool ElementEnvironmentRetainFunction(Element& Domain, Element& Range);
	
	extern Map ElementEnvironmentRetain;

	bool ReleaseElementEnvironmentFunction(Element& Domain, Element& Range);

	extern Map ReleaseElementEnvironment;

	bool ElementEnvironmentLoginMapFunction(Element& Domain, Element& Range);

	extern Map ElementEnvironmentLoginMap;

	namespace Code_Test {
		bool NewElementEnvironmentTestFunction(Element& Domain, Element& Range);

		extern Map NewElementEnvironmentTest;

		bool ElementEnvironmentSetGetSuperIndexTestFunction(Element& Domain, Element& Range);

		extern Map ElementEnvironmentSetGetSuperIndexTest;

		bool ElementEnvironmentExpandTestFunction(Element& Domain, Element& Range);

		extern Map ElementEnvironmentExpandTest;

		bool ElementEnvironmentPutGetElementTestFunction(Element& Domain, Element& Range);

		extern Map ElementEnvironmentPutGetElementTest;

		bool ElementEnvironmentRetainTestFunction(Element& Domain, Element& Range);

		extern Map ElementEnvironmentRetainTest;

		bool ReleaseElementEnvironmentTestFunction(Element& Domain, Element& Range);

		extern Map ReleaseElementEnvironmentTest;

		bool EleEnvTotalTestFunction(Element& Domain, Element& Range);

		extern Map EleEnvTotalTest;

		bool EleEnvTotalTestReadExcpetionFunction(Element& Domain, Element& Range);

		extern Map EleEnvTotalTestReadException;
	}
}