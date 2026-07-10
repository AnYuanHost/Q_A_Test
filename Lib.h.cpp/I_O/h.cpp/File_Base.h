#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

#include<fstream>

namespace Q_A {

#define GetFstreamElement(Ele) (*(std::fstream*)(Ele).KeySpace)

	bool FstreamSetTest(Element& Ele, Set& S);

	extern Set FstreamSet;

	bool NewFstreamFunction(Element& Domain, Element& Range);

	extern Map NewFstream;

	bool OpenFstreamFunction(Element& Domain, Element& Range);

	extern Map OpenFstream;

	bool OpenFstreamParameterPairTest(Element& Ele, Set& S);

	extern Set OpenFstreamParameterPair;

	bool OpenFstreamByParaFunction(Element& Domain, Element& Range);

	extern Map OpenFstreamByPara;

	bool CloseFstreamFunction(Element& Domain, Element& Range);

	extern Map CloseFstream;

	bool GetCharFromFstreamFunction(Element& Domain, Element& Range);

	extern Map GetCharFromFstream;

	bool PutCharToFstreamFunction(Element& Domain, Element& Range);

	extern Map PutCharToFstream;

	bool GetStreamFromFstreamFunction(Element& Domain, Element& Range);

	extern Map GetStreamFromFstream;

	bool PutStreamToFstreamFunction(Element& Domain, Element& Range);

	extern Map PutStreamToFstream;

	bool SetFstreamSeekPFunction(Element& Domain, Element& Range);

	extern Map SetFstreamSeekP;

	bool GetFstreamTellPFunction(Element& Domain, Element& Range);

	extern Map GetFstreamTellP;

	bool SetFstreamSeekGFunction(Element& Domain, Element& Range);

	extern Map SetFstreamSeekG;

	bool GetFstreamTellGFunction(Element& Domain, Element& Range);

	extern Map GetFstreamTellG;

	bool GetElementFromFstreamFunction(Element& Domain, Element& Range);

	extern Map GetElementFromFstream;

	bool PutElementToFstreamFunction(Element& Domain, Element& Range);

	extern Map PutElementToFstream;

	bool ClearFstreamFunction(Element& Domain, Element& Range);

	extern Map ClearFstream;

	bool ReleaseFstreamFunction(Element& Domain, Element& Range);

	extern Map ReleaseFstream;

}