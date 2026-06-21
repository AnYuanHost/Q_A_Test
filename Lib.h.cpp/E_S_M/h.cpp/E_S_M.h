#pragma once

namespace Q_A {
	struct Element {
		unsigned int Size;
		char* KeySpace;

		Element();
		Element(unsigned int S, char* keySpace);
		Element(const Element& Ele);
		~Element() noexcept;
		void operator&=(Element& Ele);
		void operator=(const Element& Ele);
		void operator|=(const Element& Ele);
	};

	struct Set;

	typedef bool (*SetTestFunction)(Element& Ele, Set& S);

	struct Set {
		Element SetParameter;
		SetTestFunction TestFunction;

		Set();
		Set(const Element& Ele, const SetTestFunction& Fun);
		~Set();
	};

	typedef bool (*MapFunction)(Element& Domain, Element& Range);

	struct Map {
		Set* Domain;
		Set* Range;
		MapFunction MapActive;

		Map();
		Map(Set* domain, Set* range, MapFunction mapActive);
		~Map();
	};
}