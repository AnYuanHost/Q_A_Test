#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {

	bool DeteminingStateEdgeSetTest(Element& Ele, Set& S);

	extern Set DeteminingStateEdgeSet;

	bool DeteminingStateNoteTest(Element& Ele, Set& S);

	extern Set DeteminingStateNoteSet;

	bool DeteminingStateHeadTest(Element& Ele, Set& S);

	extern Set DeteminingStateHead;

	bool NewDeteminingStateEdgeFunction(Element& Domain, Element& Range);

	extern Map NewDeteminingStateEdge;

	bool SetDeteminingStateEdgeExpressionFunction(Element& Domain, Element& Range);

	extern Map SetDeteminingStateEdgeExpression;

	bool SetDeteminingStateNextStateFunction(Element& Domain, Element& Range);

	extern Map SetDeteminingStateNextState;

	bool SetDeteminingStateEdgeOperationMapFunction(Element& Domain, Element& Range);

	extern Map SetDeteminingStateEdgeOperationMap;

	bool SetDeteminingStateEdgeTransmitElementFunction(Element& Domain, Element& Range);

	extern Map SetDeteminingStateEdgeTransmitElement;

	bool GetDeteminingStateEdgeExpressionFunction(Element& Domain, Element& Range);

	extern Map GetDeteminingStateEdgeExpression;

#define NewDeteminingStateNodeFunction UIntNewElementOrderFunction

#define NewDeteminingStateNode UIntNewElementOrder

	bool SetDeteminingStateNoteByEdgeFunction(Element& Domain, Element& Range);

	extern Map SetDeteminingStateNoteByEdge;

	bool NewDeteminingStateHeadFunction(Element& Domain, Element& Range);

	extern Map NewDeteminingStateHead;

	bool SetDeteminingStateHeadStreamFunction(Element& Domain, Element& Range);

	extern Map SetDeteminingStateHeadStream;

	bool SetDeteminingStateHeadNodeOrderFunction(Element& Domain, Element& Range);

	extern Map SetDeteminingStateHeadNodeOrder;

	bool SetDeteminingStateHeadFirstNodeFunction(Element& Domain, Element& Range);

	extern Map SetDeteminingStateHeadFirstNode;

	bool JumpDeteminingStateFunction(Element& Domain, Element& Range);

	extern Map JumpDeteminingState;

	bool ReleaseDeteminingStateHeadFunction(Element& Domain, Element& Range);

	extern Map ReleaseDeteminingStateHead;

}