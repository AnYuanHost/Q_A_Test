#pragma once
#include"E_S_M/h.cpp/E_S_M.h"

namespace Q_A {
	bool ExpressionSetTest(Element& Ele, Set& S);

	extern Set ExpressionSet;

	bool ConstExpressionAssigningFunction(Element& Domain, Element& Range);

	extern Map ConstExpressionAssigning;

	bool ConstExpressionDomainAssigningFunction(Element& Domain, Element& Range);

	extern Map ConstExpressionDomainAssigning;

	bool QuoteExpressionAssigningFunction(Element& Domain, Element& Range);

	extern Map QuoteExpressionAssigning;

	bool ExpressionDomainQuoteFunction(Element& Domain, Element& Range);

	extern Map ExpressionDomainQuote;

	bool GetExpressionValueFunction(Element& Domain, Element& Range);

	extern Map GetExpressionValue;

	bool ReleaseExpressionDomainFunction(Element& Domain, Element& Range);

	extern Map ReleaseExpressionDomain;

	bool ReleaseExpressionRangeFunction(Element& Domain, Element& Range);

	extern Map ReleaseExpressionRange;

	bool ExpressionIndexPairTest(Element& Ele, Set& S);

	extern Set ExpressionIndexPair;

	bool ShallowGetSubExpressionFunction(Element& Domain, Element& Range);

	extern Map ShallowGetSubExpression;

	bool GetSubExpressionFunction(Element& Domain, Element& Range);

	extern Map GetSubExpression;

	bool PutSubExpressionFunction(Element& Domain, Element& Range);

	extern Map PutSubExpression;

	bool NewExpressionFunction(Element& Domain, Element& Range);

	extern Map NewExpression;

	bool ReleaseExpressionFunction(Element& Domain, Element& Range);

	extern Map ReleaseExpression;

	bool GetExpressionRangeFunction(Element& Domain, Element& Range);

	extern Map GetExpressionRange;

	bool PutExpressionRangeFunction(Element& Domain, Element& Range);

	extern Map PutExpressionRange;

	bool SetExpressionMapFunction(Element& Domain, Element& Range);

	extern Map SetExpressionMap;

	bool ExpressionSuperIndexNodeTest(Element& Ele, Set& S);

	extern Set ExpressionSuperIndexNode;

	bool ExpressionSuperIndexNodeToExpressionFunction(Element& Domain, Element& Range);

	extern Map ExpressionSuperIndexNodeToExpression;

	bool NewExpressionSuperIndexNodeFunction(Element& Domain, Element& Range);

	extern Map NewExpressionSuperIndexNode;

	bool ExpressionStreamNodeTest(Element& Ele, Set& S);

	extern Set ExpressionStreamNode;

	bool ExpressionStreamNodeToSuperIndexNodeFunction(Element& Domain, Element& Range);

	extern Map ExpressionStreamNodeToSuperIndexNode;

	bool ExpressionParameterizationFunction(Element& Domain, Element& Range);

	extern Map ExpressionParameterization;
}