#pragma once

#define Thread_Base_Case_Code 4

#include<E_S_M/h.cpp/All_E_S_M.h>
#include<Math/h.cpp/All_Math.h>
#include<Polling_Base/h.cpp/All_Polling_Base.h>
#include<Thread_Base/h.cpp/All_Thread_Base.h>

#include<iostream>

using namespace Q_A;

int Thread_Base_Case_Main() {

    using namespace PollingDrivenZero_Struct;

    Element UIntA, UIntB, UIntC;

    NewUIntElementFunction(EmptyElement, UIntA);
    GetUIntElement(UIntA) = 10;

    NewUIntElementFunction(EmptyElement, UIntB);
    GetUIntElement(UIntB) = 5;

    NewUIntElementFunction(EmptyElement, UIntC);

    Element ParaPair;
    NewOrderedPairFunction(EmptyElement, ParaPair);

    Element ActiveMapElement;
    NewActiveMapFunction(EmptyElement, ActiveMapElement);

    GetEleOrder(ParaPair, 0) |= UIntA;
    GetEleOrder(ParaPair, 1) |= UIntB;

    GetEleOrder(ActiveMapElement, 0) &= ParaPair;
    GetEleOrder(ActiveMapElement, 1) &= UIntC;

    GetEleOrder(ActiveMapElement, 2).Size = sizeof(Map);
    GetEleOrder(ActiveMapElement, 2).KeySpace =  (char*)&UIntAdd;

    Element Thread_Inf;

    Element BoolElement;
    NewBoolElementFunction(EmptyElement, BoolElement);

    Element MapOrder;

    LoginThreadMapFunction(EmptyElement, MapOrder);

    GetMapElement(GetEleOrder(MapOrder, PDZ_Thread_Active)).MapActive(
        ActiveMapElement,
        Thread_Inf
    );

    while (1) {
        GetMapElement(GetEleOrder(MapOrder, PDZ_Thread_Test)).MapActive(
            Thread_Inf,
            BoolElement
        );

        if (GetBoolElement(BoolElement)) {
            break;
        }
    }

    GetMapElement(GetEleOrder(MapOrder, PDZ_Thread_Release)).MapActive(
        EmptyElement,
        Thread_Inf
    );

    ParaPair &= GetEleOrder(ActiveMapElement, 0);
    UIntC &= GetEleOrder(ActiveMapElement, 1);

    ZeroElementFunction(EmptyElement, GetEleOrder(ActiveMapElement, 2));

    std::cout << GetUIntElement(UIntC);

    return 0;
}