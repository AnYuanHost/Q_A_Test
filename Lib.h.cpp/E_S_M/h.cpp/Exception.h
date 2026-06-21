#pragma once
#include"ESM_Base.h"

namespace Q_A {
#define ExceptionSet UniversalSet

#define ExceptionSetTest UniversalSetTest

	bool ThrowExceptionFunction(Element& Domain, Element& Range);

	extern Map ThrowException;

	namespace ExceptionCode {
		constexpr unsigned int Success =					0;
		constexpr unsigned int MemoryOut =				1;
		constexpr unsigned int MapError =					2;
		constexpr unsigned int RezeroElement =				3;
		constexpr unsigned int OrderEmpty =				4;
		constexpr unsigned int OrderOut =					5;
		constexpr unsigned int ExceptionException =		6;
		constexpr unsigned int ExcProException =			7;
		constexpr unsigned int TestException =				8;
		constexpr unsigned int InitException =				9;
		constexpr unsigned int CallException =				10;
		constexpr unsigned int SelectFailException =		11;
		constexpr unsigned int ZeroDivision =				12;

	}

	bool ThrowSuccessFunction(Element& Domain, Element& Range);

	extern Map ThrowSuccess;

	bool ExceptionSuccessTestFunction(Element& Domain, Element& Range);

	extern Map ExceptionSuccessTest;

}