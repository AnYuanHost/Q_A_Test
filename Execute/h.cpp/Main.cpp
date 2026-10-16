#include"Main.h"

#include<E_S_M/h.cpp/All_E_S_M.h>
#include<ESM_Manage/h.cpp/All_ESM_Manage.h>
#include<KRS_Base/h.cpp/All_KRS_Base.h>
#include<KRS_Lib/h.cpp/All_KRS_Lib.h>
#include<I_O/h.cpp/All_I_O.h>
#include<Intentionality/h.cpp/All_Intentionality.h>
#include<Language/h.cpp/All_Language.h>
#include<Language_IO/h.cpp/All_Language_IO.h>
#include<MapSearcher/h.cpp/All_MapSearcher.h>
#include<Math/h.cpp/All_Math.h>
#include<Polling_Base/h.cpp/All_Polling_Base.h>
#include<Question_Answer/h.cpp/All_Q_A.h>
#include<Solution/h.cpp/All_Solution.h>
#include<Thread_Base/h.cpp/All_Thread_Base.h>

#pragma comment(lib, "E_S_M.lib")
#pragma comment(lib, "ESM_Manage.lib")
#pragma comment(lib, "KRS_Base.lib")
#pragma comment(lib, "KRS_Lib.lib")
#pragma comment(lib, "I_O.lib")
#pragma comment(lib, "Intentionality.lib")
#pragma comment(lib, "Language.lib")
#pragma comment(lib, "Language_IO.lib")
#pragma comment(lib, "MapSearcher.lib")
#pragma comment(lib, "Math.lib")
#pragma comment(lib, "Polling_Base.lib")
#pragma comment(lib, "Question_Answer.lib")
#pragma comment(lib, "Solution.lib")
#pragma comment(lib, "Thread_Base.lib")

using namespace Q_A;

int InitializeEnvironmentFunction(Element& Domain, Element& Range) {

	InitializeESMLibOrderFunction(EmptyElement, EmptyElement);
	InitializeESMLibNameOrderFunction(EmptyElement, EmptyElement);
	InitializeRecursionSuperIndexFunction(EmptyElement, EmptyElement);
	InitializeKRSPollingDrivenZero_MapSearcherFunction(EmptyElement, EmptyElement);
	InitializePollingDrivenZeroZeroMapSuperIndexFunction(EmptyElement, EmptyElement);
	NewUniversalMapSearcherOrderFunction(EmptyElement, UniversalMapSearcherElement);
	InitializeEmptyElementNameFunction(EmptyElement, EmptyElement);

	return 0;
}

int RecycleEnvironmentFunction(Element& Domain, Element& Range) {

	ReleaseUniversalMapSearcherOrderFunction(EmptyElement, UniversalMapSearcherElement);
	ReleaseRecursionSuperIndexFunction(EmptyElement, EmptyElement);
	ReleaseKRSPollingDrivenZero_MapSearcherFunction(EmptyElement, EmptyElement);
	ReleasePollingDrivenZeroZeroMapSuperIndexFunction(EmptyElement, EmptyElement);
	ReleaseESMLibOrderFunction(EmptyElement, EmptyElement);
	ReleaseESMLibNameOrderFunction(EmptyElement, EmptyElement);

	return 0;
}

namespace Environment {
	constexpr unsigned int EnvironmentOrderLength = 10;
	constexpr unsigned int EES = 0;
	constexpr unsigned int KRSPDZ = 1;
	constexpr unsigned int CoreKRSSuperIndex = 2;
	constexpr unsigned int IntentionalityManager = 3;
	constexpr unsigned int SystemSuperIndex = 4;
	constexpr unsigned int AddressCreater = 5;
}

bool InitializeSystemEnvironmentFunction(Element& Domain, Element& Range) {

	using namespace Environment;

	using namespace QuestionFlowMap_Struct;
	using namespace QuestionNode_Struct;
	using namespace KRSPollingDrivenZero_Struct;
	using namespace QuestionNode_StateCode;

	Element UIntElement;
	NewUIntElementFunction(EmptyElement, UIntElement);
	Element ParaOrder;
	GetUIntElement(UIntElement) = 3;
	UIntNewElementOrderFunction(UIntElement, ParaOrder);
	Element ZeroElement;

	GetUIntElement(UIntElement) = EnvironmentOrderLength;
	UIntNewElementOrderFunction(UIntElement, Range);

	Element KRSPDZElement;
	NewKRSPollingDrivenZeroFunction(EmptyElement, KRSPDZElement);

	ConstructKRSPollingDrivenZeroThreadMapFunction(EmptyElement, ZeroElement);
	SetKRSPollingDrivenZeroThreadMapFunction(ZeroElement, KRSPDZElement);

	Element QuestionMap;
	NewQuestionFlowMapFunction(EmptyElement, QuestionMap);
	SetKRSPollingDrivenZeroQuestionMapFunction(QuestionMap, KRSPDZElement);

	Element RecursionMap;
	NewQuestionFlowMapFunction(EmptyElement, RecursionMap);

	Element RecursionNode;

	Element AddressCreater;
	NewAddressCreaterManagerFunction(EmptyElement, AddressCreater);

	ExpandQuestionFlowMapFunction(RecursionMap, UIntElement);
	GetEleOrder(ParaOrder, 0) |= UIntElement;
	GetEleOrder(ParaOrder, 1) |= RecursionMap;
	ReadQuestionFlowMapFunction(ParaOrder, RecursionNode);

	GetUIntElement(GetEleOrder(GetEleOrder(RecursionMap, QFM_FEAddress), QFM_PendingE))
		= GetUIntElement(GetEleOrder(GetEleOrder(RecursionMap, QFM_FEAddress), QFM_PendingF))
		= GetUIntElement(UIntElement);

	CopyElementFunction(RecursionMapSuperIndex, GetEleOrder(RecursionNode, MapInformation));
	GetUIntElement(GetEleOrder(RecursionNode, MapActiveState)) = QN_Pending;

	GetUIntElement(UIntElement) = 2;
	UIntNewElementOrderFunction(UIntElement, GetEleOrder(RecursionNode, AntecedentQuestionOrder));

	NewUIntElementFunction(EmptyElement, GetEleOrder(GetEleOrder(RecursionNode, AntecedentQuestionOrder), 0));
	NewUIntElementFunction(EmptyElement, GetEleOrder(GetEleOrder(RecursionNode, AntecedentQuestionOrder), 1));

	ZeroElementFunction(EmptyElement, RecursionNode);

	SetKRSPollingDrivenZeroRecursionMapFunction(RecursionMap, KRSPDZElement);

	GetUIntElement(GetEleOrder(GetEleOrder(KRSPDZElement, KRSPDZ_RecursionOrder), KRSPDZ_RecursionState)) = PDZRecursionStateCode::PDZ_AskReplace;

	Element EnvironmentElement;
	NewElementEnvironmentFunction(EmptyElement, EnvironmentElement);

	NewElementEnvironmentSearcherFunction(EmptyElement, GetEleOrder(Range, EES));

	GetEleOrder(ParaOrder, 0) |= EnvironmentElement;
	ElementEnvironmentLoginMapFunction(EmptyElement, GetEleOrder(ParaOrder, 1));

	PutEESEnvironmentFunction(ParaOrder, GetEleOrder(Range, EES));

	Element _8BitSubEES;
	New8BitSearcherFunction(EmptyElement, _8BitSubEES);

	LoginMap8BitSearcherFunction(EmptyElement, GetEleOrder(ParaOrder, 2));

	GetUIntElement(UIntElement) = SubEES_8Bit_Code::System_SuperIndex;
	UIntToSuperIndexFunction(UIntElement, GetEleOrder(ParaOrder, 0));

	GetEleOrder(ParaOrder, 1) |= _8BitSubEES;

	LoginSubEESEESFunction(ParaOrder, GetEleOrder(Range, EES));

	ReleaseElementFunction(EmptyElement, GetEleOrder(ParaOrder, 0));

	Element LexSubEES;
	NewLexOrderEESDefaultParameterFunction(EmptyElement, ZeroElement);
	NewLexOrderEESFunction(ZeroElement, LexSubEES);

	Element LexSubEESSuperIndex;
	ApplySubEESSuperIndexFunction(GetEleOrder(Range, EES), LexSubEESSuperIndex);

	GetEleOrder(ParaOrder, 0) |= LexSubEESSuperIndex;
	GetEleOrder(ParaOrder, 1) &= LexSubEES;
	LoginLexOrderEESMapSetFunction(EmptyElement, GetEleOrder(ParaOrder, 2));

	LoginSubEESEESFunction(ParaOrder, GetEleOrder(Range, EES));

	Element _8BitSuperIndex;
	GetUIntElement(UIntElement) = 0;
	UIntToSuperIndexFunction(UIntElement, _8BitSuperIndex);

	Element _8BitElement;
	New8BitElementFunction(EmptyElement, _8BitElement);

	Get8BitElement(_8BitElement) = SubEES_8Bit_Code::Quote_SystemSubEESSuperIndex;
	GetEleOrder(ParaOrder, 0) |= _8BitSuperIndex;
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	LoginElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Range, EES));

	GetEleOrder(ParaOrder, 0) |= _8BitSuperIndex;
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	GetEleOrder(ParaOrder, 2) |= _8BitSuperIndex;
	PutElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Range, EES));

	Get8BitElement(_8BitElement) = SubEES_8Bit_Code::Quote_ElementEnvironmentSearcher;
	GetEleOrder(ParaOrder, 0) |= _8BitSuperIndex;
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	LoginElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Range, EES));

	GetEleOrder(ParaOrder, 0) |= _8BitSuperIndex;
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	GetEleOrder(ParaOrder, 2) |= GetEleOrder(Range, EES);
	PutElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Range, EES));

	Get8BitElement(_8BitElement) = SubEES_8Bit_Code::Quote_ElementEnvironment;
	GetEleOrder(ParaOrder, 0) |= _8BitSuperIndex;
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	LoginElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Range, EES));

	GetEleOrder(ParaOrder, 0) |= _8BitSuperIndex;
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	GetEleOrder(ParaOrder, 2) |= EnvironmentElement;
	PutElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Range, EES));

	GetEleOrder(ParaOrder, 0) |= GetEleOrder(Range, EES);
	ConstructKRSPollingDrivenZeroEESMapFunction(EmptyElement, GetEleOrder(ParaOrder, 1));
	SetKRSPollingDrivenZeroEESFunction(ParaOrder, KRSPDZElement);

	Get8BitElement(_8BitElement) = SubEES_8Bit_Code::Quote_PollingDrivenZero;
	GetEleOrder(ParaOrder, 0) |= _8BitSuperIndex;
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	LoginElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Range, EES));

	SetAddressCreaterManagerMapFunction(GetEleOrder(KRSPDZElement, KRSPDZ_QuestionMap), AddressCreater);

	GetEleOrder(ParaOrder, 0) |= _8BitSuperIndex;
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	GetEleOrder(ParaOrder, 2) &= KRSPDZElement;
	PutElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Range, EES));

	Get8BitElement(_8BitElement) = SubEES_8Bit_Code::Quote_AddressCreaterManager;
	GetEleOrder(ParaOrder, 0) |= _8BitSuperIndex;
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	LoginElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Range, EES));

	GetEleOrder(ParaOrder, 0) |= _8BitSuperIndex;
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	GetEleOrder(ParaOrder, 2) &= AddressCreater;
	PutElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Range, EES));

	Get8BitElement(_8BitElement) = SubEES_8Bit_Code::Quote_FirstContextSuperIndex;
	GetEleOrder(ParaOrder, 0) |= _8BitSuperIndex;
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	LoginElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Range, EES));

	GetEleOrder(ParaOrder, 0) |= _8BitSuperIndex;
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	GetEleOrder(ParaOrder, 2) &= LexSubEESSuperIndex;
	PutElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Range, EES));

	ZeroElementFunction(EmptyElement, _8BitSuperIndex);
	ZeroElementFunction(EmptyElement, _8BitSubEES);
	ZeroElementFunction(EmptyElement, EnvironmentElement);

	return true;
}

bool LoadIntentionalityFunction(Element& Domain, Element& Range) {


	Element UIntElement;
	NewUIntElementFunction(EmptyElement, UIntElement);
	Element ParaOrder;
	GetUIntElement(UIntElement) = 3;
	UIntNewElementOrderFunction(UIntElement, ParaOrder);

	Element DictionariesSuperIndex;
	GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + IntentionalitySuperIndex::SIIDI;
	UIntToSuperIndexFunction(UIntElement, DictionariesSuperIndex);

	Element FstreamAddress;
	IntentionalitySuperIndexToTxtAddressFunction(DictionariesSuperIndex, FstreamAddress);

	Element Fstream;
	NewFstreamFunction(EmptyElement, Fstream);

	OpenFstreamFunction(FstreamAddress, Fstream);

	Element DictionariesObject;
	FstreamReadIntentionalityObjectFunction(Fstream, DictionariesObject);

	CloseFstreamFunction(EmptyElement, Fstream);
	ReleaseFstreamFunction(EmptyElement, Fstream);

	Element CannedDataSuperIndex;
	GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + IntentionalitySuperIndex::CannedData;
	UIntToSuperIndexFunction(UIntElement, CannedDataSuperIndex);

	GetEleOrder(ParaOrder, 0) |= CannedDataSuperIndex;
	GetEleOrder(ParaOrder, 1) |= DictionariesObject;
	SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

	Element DictionariesInformation;

	GetEleOrder(ParaOrder, 0) |= UIntElement;
	GetEleOrder(ParaOrder, 1) |= DictionariesObject;
	ReadIntentionalityObjectFunction(ParaOrder, DictionariesInformation);

	Element Dictionaries;
	NewIntentionalitySuperIndexDictionariesFunction(EmptyElement, Dictionaries);

	InformationToIntentionalitySuperIndexDictionariesFunction(DictionariesInformation, Dictionaries);

	ReleaseIntentionalityObjectFunction(EmptyElement, DictionariesObject);

	Element _8BitElement;
	New8BitElementFunction(EmptyElement, _8BitElement);
	Get8BitElement(_8BitElement) = SubEES_8Bit_Code::Quote_CoreKRSSuperIndex;

	Element _8BitSubEESSuperIndex;
	GetUIntElement(UIntElement) = 0;
	UIntToSuperIndexFunction(UIntElement, _8BitSubEESSuperIndex);

	GetEleOrder(ParaOrder, 0) |= _8BitSubEESSuperIndex;
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	LoginElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Domain, Environment::EES));

	SortElementEnvironmentSearcherFunction(EmptyElement, GetEleOrder(Domain, Environment::EES));

	Element KRSSuperIndex;
	ApplySubEESSuperIndexFunction(GetEleOrder(Domain, Environment::EES), KRSSuperIndex);

	GetEleOrder(ParaOrder, 0) |= _8BitSubEESSuperIndex;
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	CopyElementFunction(KRSSuperIndex, GetEleOrder(ParaOrder, 2));
	PutElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Domain, Environment::EES));

	Element SuperIndexSubEESParameter;
	NewSuperIndexSubEESDefaultParameterFunction(EmptyElement, SuperIndexSubEESParameter);

	Element SuperIndexSubEESElement;
	NewSuperIndexSubEESFunction(SuperIndexSubEESParameter, SuperIndexSubEESElement);

	GetEleOrder(ParaOrder, 0) |= KRSSuperIndex;
	GetEleOrder(ParaOrder, 1) &= SuperIndexSubEESElement;
	LoginSuperIndexSubEESMapSetFunction(EmptyElement, GetEleOrder(ParaOrder, 2));

	LoginSubEESEESFunction(ParaOrder, GetEleOrder(Domain, Environment::EES));

	GetEleOrder(ParaOrder, 0) |= KRSSuperIndex;
	GetEleOrder(ParaOrder, 1) |= Dictionaries;

	SystemLoginIntentionalitySuperIndexDictionariesFunction(ParaOrder, GetEleOrder(Domain, Environment::EES));

	ZeroElementFunction(EmptyElement, DictionariesInformation);


	using namespace SubEES_8Bit_Code;
	using namespace IntentionalitySuperIndexManager_Struct;

	Element KRSSubEESIndex;
	New8BitElementFunction(EmptyElement, KRSSubEESIndex);
	Get8BitElement(KRSSubEESIndex) = Quote_CoreKRSSuperIndex;

	Element SystemSuperIndex;
	GetUIntElement(UIntElement) = 0;
	UIntToSuperIndexFunction(UIntElement, SystemSuperIndex);

	Element CoreKRSSuperIndex;

	GetEleOrder(ParaOrder, 0) |= SystemSuperIndex;
	GetEleOrder(ParaOrder, 1) |= KRSSubEESIndex;
	GetEleOrder(ParaOrder, 2) |= GetEleOrder(Domain, Environment::EES);
	ReadElementEnvironmentSearcherFunction(ParaOrder, CoreKRSSuperIndex);

	Element IntentionalityManagerInformationSuperIndex;
	GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + IntentionalitySuperIndex::ISIMI;
	UIntToSuperIndexFunction(UIntElement, IntentionalityManagerInformationSuperIndex);

	SuperIndexToUIntFunction(CoreKRSSuperIndex, UIntElement);

	GetEleOrder(ParaOrder, 0) |= CoreKRSSuperIndex;
	GetEleOrder(ParaOrder, 1) |= IntentionalityManagerInformationSuperIndex;
	GetEleOrder(ParaOrder, 2) |= GetEleOrder(Domain, Environment::EES);
	Element IntentionalityManagerInformationObject;
	ReadElementEnvironmentSearcherFunction(ParaOrder, IntentionalityManagerInformationObject);

	Element ConnedDataSuperIndex;
	GetUIntElement(UIntElement) = IntentionalitySuperIndex::CannedData + IntentionalitySuperIndex::ISIOffset;
	UIntToSuperIndexFunction(UIntElement, ConnedDataSuperIndex);

	GetEleOrder(ParaOrder, 0) |= ConnedDataSuperIndex;
	GetEleOrder(ParaOrder, 1) |= IntentionalityManagerInformationObject;
	SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

	Element IntentionalityManagerInformation;

	GetEleOrder(ParaOrder, 0) |= UIntElement;
	GetEleOrder(ParaOrder, 1) |= IntentionalityManagerInformationObject;
	ReadIntentionalityObjectFunction(ParaOrder, IntentionalityManagerInformation);

	Element IntentionalityManager;
	NewIntentionalitySuperIndexManagerFunction(EmptyElement, IntentionalityManager);

	InformationToIntentionalitySuperIndexManagerFunction(IntentionalityManagerInformation, IntentionalityManager);

	Element EmptyOrderIntentionalityObject;

	Element EmptyOrderElement;
	Element EmptyOrderInformation;

	unsigned int midI;
	for (midI = 0; midI < GetUIntElement(GetEleOrder(IntentionalityManager, ISIManager_PageNumber)); midI++) {

		GetEleOrder(ParaOrder, 0) |= CoreKRSSuperIndex;
		GetEleOrder(ParaOrder, 1) |= GetEleOrder(GetEleOrder(GetEleOrder(IntentionalityManager, ISIManager_PageOrder), midI), ISIMPage_SuperIndex);
		GetEleOrder(ParaOrder, 2) |= GetEleOrder(Domain, Environment::EES);
		ReadElementEnvironmentSearcherFunction(ParaOrder, EmptyOrderIntentionalityObject);

		GetEleOrder(ParaOrder, 0) |= ConnedDataSuperIndex;
		GetEleOrder(ParaOrder, 1) |= EmptyOrderIntentionalityObject;
		SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

		GetEleOrder(ParaOrder, 0) |= UIntElement;
		GetEleOrder(ParaOrder, 1) |= EmptyOrderIntentionalityObject;
		ReadIntentionalityObjectFunction(ParaOrder, EmptyOrderInformation);

		NewIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);

		InformationToIntentionalityEmptyOrderFunction(EmptyOrderInformation, EmptyOrderElement);

		GetEleOrder(GetEleOrder(GetEleOrder(IntentionalityManager, ISIManager_PageOrder), midI), ISIMPage_Page) &=
			EmptyOrderElement;

		ZeroElementFunction(EmptyElement, EmptyOrderIntentionalityObject);
		ZeroElementFunction(EmptyElement, EmptyOrderInformation);
	}

	Element IntentionalityManagerIndex;
	New8BitElementFunction(EmptyElement, IntentionalityManagerIndex);
	Get8BitElement(IntentionalityManagerIndex) = Quote_IntentionalityAllotor;

	GetEleOrder(ParaOrder, 0) |= SystemSuperIndex;
	GetEleOrder(ParaOrder, 1) |= IntentionalityManagerIndex;
	LoginElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Domain, Environment::EES));

	GetEleOrder(ParaOrder, 0) |= SystemSuperIndex;
	GetEleOrder(ParaOrder, 1) |= IntentionalityManagerIndex;
	GetEleOrder(ParaOrder, 2) |= IntentionalityManager;
	PutElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Domain, Environment::EES));

	IntentionalitySuperIndexManagerUpdateParameterFunction(EmptyElement, IntentionalityManager);

	ZeroElementFunction(EmptyElement, CoreKRSSuperIndex);
	ZeroElementFunction(EmptyElement, IntentionalityManagerInformation);
	ZeroElementFunction(EmptyElement, IntentionalityManager);

	ZeroElementFunction(EmptyElement, IntentionalityManagerInformationObject);

	return true;
}

bool ConstructEnvironmentOrderFunction(Element& Domain, Element& Range) {

	Element UIntElement;
	NewUIntElementFunction(EmptyElement, UIntElement);
	Element ParaOrder;
	GetUIntElement(UIntElement) = 3;
	UIntNewElementOrderFunction(UIntElement, ParaOrder);

	Element _8BitElement;
	New8BitElementFunction(EmptyElement, _8BitElement);
	Element SubEESSuperIndex;
	GetUIntElement(UIntElement) = SubEES_8Bit_Code::System_SuperIndex;
	UIntToSuperIndexFunction(UIntElement, SubEESSuperIndex);

	Get8BitElement(_8BitElement) = SubEES_8Bit_Code::Quote_SystemSubEESSuperIndex;

	GetEleOrder(ParaOrder, 0) |= SubEESSuperIndex;
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	GetEleOrder(ParaOrder, 2) |= GetEleOrder(Range, Environment::EES);
	ReadElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Range, Environment::SystemSuperIndex));

	Get8BitElement(_8BitElement) = SubEES_8Bit_Code::Quote_CoreKRSSuperIndex;

	GetEleOrder(ParaOrder, 0) |= SubEESSuperIndex;
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	GetEleOrder(ParaOrder, 2) |= GetEleOrder(Range, Environment::EES);
	ReadElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Range, Environment::CoreKRSSuperIndex));

	Get8BitElement(_8BitElement) = SubEES_8Bit_Code::Quote_IntentionalityAllotor;

	GetEleOrder(ParaOrder, 0) |= SubEESSuperIndex;
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	GetEleOrder(ParaOrder, 2) |= GetEleOrder(Range, Environment::EES);
	ReadElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Range, Environment::IntentionalityManager));

	Get8BitElement(_8BitElement) = SubEES_8Bit_Code::Quote_AddressCreaterManager;

	GetEleOrder(ParaOrder, 0) |= SubEESSuperIndex;
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	GetEleOrder(ParaOrder, 2) |= GetEleOrder(Range, Environment::EES);
	ReadElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Range, Environment::AddressCreater));

	Get8BitElement(_8BitElement) = SubEES_8Bit_Code::Quote_PollingDrivenZero;

	GetEleOrder(ParaOrder, 0) |= SubEESSuperIndex;
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	GetEleOrder(ParaOrder, 2) |= GetEleOrder(Range, Environment::EES);
	ReadElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Range, Environment::KRSPDZ));

	return true;
}

bool RecycleEnvironmentOrderFunction(Element& Domain, Element& Range) {

	using namespace Environment;

	Element UIntElement;
	NewUIntElementFunction(EmptyElement, UIntElement);
	Element ParaOrder;
	GetUIntElement(UIntElement) = 3;
	UIntNewElementOrderFunction(UIntElement, ParaOrder);

	Element _8BitElement;
	New8BitElementFunction(EmptyElement, _8BitElement);

	Element KRSPDZElement;

	Element _8BitSearcher;
	Element SuperIndexSearcher;
	Element EESElement;
	Element Environment;

	Get8BitElement(_8BitElement) = SubEES_8Bit_Code::Quote_PollingDrivenZero;

	GetEleOrder(ParaOrder, 0) |= GetEleOrder(Range, SystemSuperIndex);
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	GetEleOrder(ParaOrder, 2) |= GetEleOrder(Range, EES);
	GetElementEnvironmentSearcherFunction(ParaOrder, KRSPDZElement);

	ReleaseKRSPollingDrivenZeroFunction(EmptyElement, KRSPDZElement);

	return true;
}

namespace SolutionSingleDomain_Code {
	constexpr unsigned int SS_SuperIndex = 0;
	constexpr unsigned int SS_Element = 1;
	constexpr unsigned int SSI_SuperIndex = 2;
	constexpr unsigned int SSI_Element = 3;
	constexpr unsigned int FirstMapSelect = 4;
}

bool LoadSolutionLanguageFunction(Element& Domain, Element& Range) {

	using namespace SolutionSingleDomain_Code;

	Element UIntElement;
	NewUIntElementFunction(EmptyElement, UIntElement);
	Element ParaOrder;
	GetUIntElement(UIntElement) = 3;
	UIntNewElementOrderFunction(UIntElement, ParaOrder);
	Element BoolElement;
	NewBoolElementFunction(EmptyElement, BoolElement);

	Element _8BitElement;
	New8BitElementFunction(EmptyElement, _8BitElement);

	Element SubEESSuperIndex;
	Element CoreKRSSuperIndex;

	Element SuperIndexElement;

	Element SuperIndexElement1;
	Element SuperIndexElement2;

	Element SolutionSuperIndex;
	Element IntentionalityElement;
	Element IntentionalityManager;

	SolutionSuperIndex |= GetEleOrder(Range, SS_SuperIndex);

	GetUIntElement(UIntElement) = SubEES_8Bit_Code::System_SuperIndex;
	UIntToSuperIndexFunction(UIntElement, SubEESSuperIndex);

	Get8BitElement(_8BitElement) = SubEES_8Bit_Code::Quote_CoreKRSSuperIndex;

	GetEleOrder(ParaOrder, 0) |= SubEESSuperIndex;
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	GetEleOrder(ParaOrder, 2) |= GetEleOrder(Domain, Environment::EES);
	ReadElementEnvironmentSearcherFunction(ParaOrder, CoreKRSSuperIndex);

	GetEleOrder(ParaOrder, 0) |= CoreKRSSuperIndex;
	GetEleOrder(ParaOrder, 1) |= SolutionSuperIndex;
	GetEleOrder(ParaOrder, 2) |= GetEleOrder(Domain, Environment::EES);
	ReadElementEnvironmentSearcherFunction(ParaOrder, IntentionalityElement);

	GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + IntentionalitySuperIndex::E_Belong_S;
	UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

	GetEleOrder(ParaOrder, 0) |= SuperIndexElement;
	GetEleOrder(ParaOrder, 1) |= IntentionalityElement;
	SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

	GetEleOrder(ParaOrder, 0) |= UIntElement;
	GetEleOrder(ParaOrder, 1) |= IntentionalityElement;
	ReadIntentionalityObjectFunction(ParaOrder, SuperIndexElement1);

	GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + IntentionalitySuperIndex::SolutionSet;
	UIntToSuperIndexFunction(UIntElement, SuperIndexElement2);

	GetEleOrder(ParaOrder, 0) |= SuperIndexElement1;
	GetEleOrder(ParaOrder, 1) |= SuperIndexElement2;
	ElementEqualFunction(ParaOrder, BoolElement);

	ZeroElementFunction(EmptyElement, SuperIndexElement1);

	GetEleOrder(Range, SS_Element) |= IntentionalityElement;

	ReleaseElementFunction(EmptyElement, SuperIndexElement);
	GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + IntentionalitySuperIndex::SolutionInformationManager;
	UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

	GetEleOrder(ParaOrder, 0) |= SuperIndexElement;
	GetEleOrder(ParaOrder, 1) |= IntentionalityElement;
	SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

	ReleaseElementFunction(EmptyElement, SuperIndexElement);

	GetEleOrder(ParaOrder, 0) |= UIntElement;
	GetEleOrder(ParaOrder, 1) |= IntentionalityElement;
	ReadIntentionalityObjectFunction(ParaOrder, SuperIndexElement);

	CopyElementFunction(SuperIndexElement, GetEleOrder(Range, SSI_SuperIndex));
	ZeroElementFunction(EmptyElement, SuperIndexElement);

	GetEleOrder(ParaOrder, 0) |= CoreKRSSuperIndex;
	GetEleOrder(ParaOrder, 1) |= GetEleOrder(Range, SSI_SuperIndex);
	GetEleOrder(ParaOrder, 2) |= GetEleOrder(Domain, Environment::EES);
	ReadElementEnvironmentSearcherFunction(ParaOrder, GetEleOrder(Range, SSI_Element));

	ZeroElementFunction(EmptyElement, IntentionalityElement);
	ZeroElementFunction(EmptyElement, CoreKRSSuperIndex);
	ZeroElementFunction(EmptyElement, SolutionSuperIndex);

	return true;
};

bool CompileFunction(Element& Domain, Element& Range) {
	using namespace SolutionSingleDomain_Code;
	using namespace SolutionLanguageExplainManager_Struct;

	Element UIntElement;
	NewUIntElementFunction(EmptyElement, UIntElement);
	Element ParaOrder;
	GetUIntElement(UIntElement) = 3;
	UIntNewElementOrderFunction(UIntElement, ParaOrder);

	Element SuperIndexElement;

	Element StreamElement;

	Element FstreamElement;
	NewFstreamFunction(EmptyElement, FstreamElement);

	Element IntentionalitySuperIndex;
	Element IntentionalityElement;

	Element IntentionalitySuperIndex1;
	Element IntentionalityElement1;

	Element SolutionExplain;

	Element CannedSuperIndex;
	GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + IntentionalitySuperIndex::CannedData;
	UIntToSuperIndexFunction(UIntElement, CannedSuperIndex);

	Element AddressSuperIndex;
	GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + IntentionalitySuperIndex::FileAddress;
	UIntToSuperIndexFunction(UIntElement, AddressSuperIndex);

	unsigned int midI;

	unsigned int MapIntentionality[4] = {
		IntentionalitySuperIndex::QAFMSMI,
		IntentionalitySuperIndex::QAFMSNSI,
		IntentionalitySuperIndex::QAFMSILI,
		IntentionalitySuperIndex::QAFMSDI
	};

	Map* MapElement[4] = {
		&SolutionLanguageNodeOrderMapInformationToData,
		&SolutionLanguageNodeOrderStateToData,
		&SolutionLanguageNodeOrderInsideLinkToData,
		&SolutionLanguageNodeOrderDomainParameterToData
	};

	unsigned int ParameterIntentionality[4] = {
		IntentionalitySuperIndex::SRPI,
		IntentionalitySuperIndex::SLIPI,
		IntentionalitySuperIndex::SLOPI,
		IntentionalitySuperIndex::SRCI
	};

	unsigned int ManagerIndex[4] = {
		SL_MapParameter,
		SL_LoginInformation,
		SL_LogoutInformation,
		SL_MPContext
	};

	Map* MapElement1[4] = {
		&SolutionLanguageParameterDictionariesToData,
		&LoginOutInformationDictionariesToData,
		&LoginOutInformationDictionariesToData,
		&SolutionLanguageContextDictionariesToData
	};

	NewSolutionLanguageExplainManagerFunction(EmptyElement, SolutionExplain);

	GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + IntentionalitySuperIndex::LanguageFile;
	UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

	GetEleOrder(ParaOrder, 0) |= SuperIndexElement;
	GetEleOrder(ParaOrder, 1) |= GetEleOrder(Range, SSI_Element);
	SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

	ReleaseElementFunction(EmptyElement, SuperIndexElement);

	GetEleOrder(ParaOrder, 0) |= UIntElement;
	GetEleOrder(ParaOrder, 1) |= GetEleOrder(Range, SSI_Element);
	ReadIntentionalityObjectFunction(ParaOrder, SuperIndexElement);

	GetEleOrder(ParaOrder, 0) |= GetEleOrder(Domain, Environment::CoreKRSSuperIndex);
	GetEleOrder(ParaOrder, 1) |= SuperIndexElement;
	GetEleOrder(ParaOrder, 2) |= GetEleOrder(Domain, Environment::EES);
	ReadElementEnvironmentSearcherFunction(ParaOrder, IntentionalityElement);

	ZeroElementFunction(EmptyElement, SuperIndexElement);

	GetEleOrder(ParaOrder, 0) |= AddressSuperIndex;
	GetEleOrder(ParaOrder, 1) |= IntentionalityElement;
	SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

	GetEleOrder(ParaOrder, 0) |= UIntElement;
	GetEleOrder(ParaOrder, 1) |= IntentionalityElement;
	ReadIntentionalityObjectFunction(ParaOrder, StreamElement);

	OpenFstreamFunction(StreamElement, FstreamElement);

	ZeroElementFunction(EmptyElement, StreamElement);

	ZeroElementFunction(EmptyElement, IntentionalityElement);

	FstreamConstructSolutionLanguageExplainManagerMapFunction(FstreamElement, SolutionExplain);

	CloseFstreamFunction(EmptyElement, FstreamElement);

	ReleaseElementFunction(EmptyElement, SuperIndexElement);
	GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + IntentionalitySuperIndex::ParameterFile;
	UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

	GetEleOrder(ParaOrder, 0) |= SuperIndexElement;
	GetEleOrder(ParaOrder, 1) |= GetEleOrder(Range, SSI_Element);
	SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

	ReleaseElementFunction(EmptyElement, SuperIndexElement);

	GetEleOrder(ParaOrder, 0) |= UIntElement;
	GetEleOrder(ParaOrder, 1) |= GetEleOrder(Range, SSI_Element);
	ReadIntentionalityObjectFunction(ParaOrder, SuperIndexElement);

	GetEleOrder(ParaOrder, 0) |= GetEleOrder(Domain, Environment::CoreKRSSuperIndex);
	GetEleOrder(ParaOrder, 1) |= SuperIndexElement;
	GetEleOrder(ParaOrder, 2) |= GetEleOrder(Domain, Environment::EES);
	ReadElementEnvironmentSearcherFunction(ParaOrder, IntentionalityElement);

	ZeroElementFunction(EmptyElement, SuperIndexElement);

	GetEleOrder(ParaOrder, 0) |= AddressSuperIndex;
	GetEleOrder(ParaOrder, 1) |= IntentionalityElement;
	SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

	GetEleOrder(ParaOrder, 0) |= UIntElement;
	GetEleOrder(ParaOrder, 1) |= IntentionalityElement;
	ReadIntentionalityObjectFunction(ParaOrder, StreamElement);

	OpenFstreamFunction(StreamElement, FstreamElement);

	FstreamConstructSolutionParameterInformationFunction(FstreamElement, SolutionExplain);

	CloseFstreamFunction(EmptyElement, FstreamElement);

	ZeroElementFunction(EmptyElement, StreamElement);

	ZeroElementFunction(EmptyElement, IntentionalityElement);

	SolutionLanguageExplainManagerConstructLoginOutDictionariesFunction(EmptyElement, SolutionExplain);

	ReleaseElementFunction(EmptyElement, SuperIndexElement);
	GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + IntentionalitySuperIndex::SBRQAFM;
	UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

	GetEleOrder(ParaOrder, 0) |= SuperIndexElement;
	GetEleOrder(ParaOrder, 1) |= GetEleOrder(Range, SSI_Element);
	SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

	GetEleOrder(ParaOrder, 0) |= UIntElement;
	GetEleOrder(ParaOrder, 1) |= GetEleOrder(Range, SSI_Element);
	ReadIntentionalityObjectFunction(ParaOrder, IntentionalitySuperIndex);

	GetEleOrder(ParaOrder, 0) |= GetEleOrder(Domain, Environment::CoreKRSSuperIndex);
	GetEleOrder(ParaOrder, 1) |= IntentionalitySuperIndex;
	GetEleOrder(ParaOrder, 2) |= GetEleOrder(Domain, Environment::EES);
	ReadElementEnvironmentSearcherFunction(ParaOrder, IntentionalityElement);

	for (midI = 0; midI < 4; midI++) {
		ReleaseElementFunction(EmptyElement, SuperIndexElement);
		GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + MapIntentionality[midI];
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

		GetEleOrder(ParaOrder, 0) |= SuperIndexElement;
		GetEleOrder(ParaOrder, 1) |= IntentionalityElement;
		SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

		GetEleOrder(ParaOrder, 0) |= UIntElement;
		GetEleOrder(ParaOrder, 1) |= IntentionalityElement;
		ReadIntentionalityObjectFunction(ParaOrder, IntentionalitySuperIndex1);

		GetEleOrder(ParaOrder, 0) |= GetEleOrder(Domain, Environment::CoreKRSSuperIndex);
		GetEleOrder(ParaOrder, 1) |= IntentionalitySuperIndex1;
		GetEleOrder(ParaOrder, 2) |= GetEleOrder(Domain, Environment::EES);
		ReadElementEnvironmentSearcherFunction(ParaOrder, IntentionalityElement1);

		GetEleOrder(ParaOrder, 0) |= CannedSuperIndex;
		GetEleOrder(ParaOrder, 1) |= IntentionalityElement1;
		SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

		GetEleOrder(ParaOrder, 0) |= UIntElement;
		GetEleOrder(ParaOrder, 1) |= IntentionalityElement1;
		GetIntentionalityObjectFunction(ParaOrder, StreamElement);

		ReleaseElementFunction(EmptyElement, StreamElement);

		MapElement[midI]->MapActive(GetEleOrder(SolutionExplain, SL_FirstMap), StreamElement);

		GetEleOrder(ParaOrder, 0) |= UIntElement;
		GetEleOrder(ParaOrder, 1) &= StreamElement;
		PutIntentionalityObjectFunction(ParaOrder, IntentionalityElement1);

		ZeroElementFunction(EmptyElement, IntentionalityElement1);
		ZeroElementFunction(EmptyElement, IntentionalitySuperIndex1);
	}

	ZeroElementFunction(EmptyElement, IntentionalityElement);
	ZeroElementFunction(EmptyElement, IntentionalitySuperIndex);

	ReleaseElementFunction(EmptyElement, SuperIndexElement);
	GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + IntentionalitySuperIndex::SARQAFM;
	UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

	GetEleOrder(ParaOrder, 0) |= SuperIndexElement;
	GetEleOrder(ParaOrder, 1) |= GetEleOrder(Range, SSI_Element);
	SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

	GetEleOrder(ParaOrder, 0) |= UIntElement;
	GetEleOrder(ParaOrder, 1) |= GetEleOrder(Range, SSI_Element);
	ReadIntentionalityObjectFunction(ParaOrder, IntentionalitySuperIndex);

	GetEleOrder(ParaOrder, 0) |= GetEleOrder(Domain, Environment::CoreKRSSuperIndex);
	GetEleOrder(ParaOrder, 1) |= IntentionalitySuperIndex;
	GetEleOrder(ParaOrder, 2) |= GetEleOrder(Domain, Environment::EES);
	ReadElementEnvironmentSearcherFunction(ParaOrder, IntentionalityElement);

	for (midI = 0; midI < 4; midI++) {
		ReleaseElementFunction(EmptyElement, SuperIndexElement);
		GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + MapIntentionality[midI];
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

		GetEleOrder(ParaOrder, 0) |= SuperIndexElement;
		GetEleOrder(ParaOrder, 1) |= IntentionalityElement;
		SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

		GetEleOrder(ParaOrder, 0) |= UIntElement;
		GetEleOrder(ParaOrder, 1) |= IntentionalityElement;
		ReadIntentionalityObjectFunction(ParaOrder, IntentionalitySuperIndex1);

		GetEleOrder(ParaOrder, 0) |= GetEleOrder(Domain, Environment::CoreKRSSuperIndex);
		GetEleOrder(ParaOrder, 1) |= IntentionalitySuperIndex1;
		GetEleOrder(ParaOrder, 2) |= GetEleOrder(Domain, Environment::EES);
		ReadElementEnvironmentSearcherFunction(ParaOrder, IntentionalityElement1);

		GetEleOrder(ParaOrder, 0) |= CannedSuperIndex;
		GetEleOrder(ParaOrder, 1) |= IntentionalityElement1;
		SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

		GetEleOrder(ParaOrder, 0) |= UIntElement;
		GetEleOrder(ParaOrder, 1) |= IntentionalityElement1;
		GetIntentionalityObjectFunction(ParaOrder, StreamElement);

		ReleaseElementFunction(EmptyElement, StreamElement);

		MapElement[midI]->MapActive(GetEleOrder(SolutionExplain, SL_SecoundMap), StreamElement);

		GetEleOrder(ParaOrder, 0) |= UIntElement;
		GetEleOrder(ParaOrder, 1) &= StreamElement;
		PutIntentionalityObjectFunction(ParaOrder, IntentionalityElement1);

		ZeroElementFunction(EmptyElement, IntentionalityElement1);
		ZeroElementFunction(EmptyElement, IntentionalitySuperIndex1);
	}

	ZeroElementFunction(EmptyElement, IntentionalityElement);
	ZeroElementFunction(EmptyElement, IntentionalitySuperIndex);

	for (midI = 0; midI < 4; midI++) {

		ReleaseElementFunction(EmptyElement, SuperIndexElement);
		GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + ParameterIntentionality[midI];
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

		GetEleOrder(ParaOrder, 0) |= SuperIndexElement;
		GetEleOrder(ParaOrder, 1) |= GetEleOrder(Range, SSI_Element);
		SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

		GetEleOrder(ParaOrder, 0) |= UIntElement;
		GetEleOrder(ParaOrder, 1) |= GetEleOrder(Range, SSI_Element);
		ReadIntentionalityObjectFunction(ParaOrder, IntentionalitySuperIndex);

		GetEleOrder(ParaOrder, 0) |= GetEleOrder(Domain, Environment::CoreKRSSuperIndex);
		GetEleOrder(ParaOrder, 1) |= IntentionalitySuperIndex;
		GetEleOrder(ParaOrder, 2) |= GetEleOrder(Domain, Environment::EES);
		ReadElementEnvironmentSearcherFunction(ParaOrder, IntentionalityElement);

		GetEleOrder(ParaOrder, 0) |= CannedSuperIndex;
		GetEleOrder(ParaOrder, 1) |= IntentionalityElement;
		SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

		GetEleOrder(ParaOrder, 0) |= UIntElement;
		GetEleOrder(ParaOrder, 1) |= IntentionalityElement;
		GetIntentionalityObjectFunction(ParaOrder, StreamElement);

		ReleaseElementFunction(EmptyElement, StreamElement);

		MapElement1[midI]->MapActive(GetEleOrder(SolutionExplain, ManagerIndex[midI]), StreamElement);

		GetEleOrder(ParaOrder, 0) |= UIntElement;
		GetEleOrder(ParaOrder, 1) &= StreamElement;
		PutIntentionalityObjectFunction(ParaOrder, IntentionalityElement);

		ZeroElementFunction(EmptyElement, IntentionalityElement);
		ZeroElementFunction(EmptyElement, IntentionalitySuperIndex);
	}

	ReleaseSolutionLanguageExplainManagerFunction(EmptyElement, SolutionExplain);

	getchar();

	system("cls");

	return true;
};

bool LoadSolutionFunction(Element& Domain, Element& Range) {

	using namespace SolutionLanguageExplainManager_Struct;
	using namespace QuestionNode_Struct;

	Element UIntElement;
	NewUIntElementFunction(EmptyElement, UIntElement);
	Element ParaOrder;
	GetUIntElement(UIntElement) = 3;
	UIntNewElementOrderFunction(UIntElement, ParaOrder);
	Element BoolElement;
	NewBoolElementFunction(EmptyElement, BoolElement);

	Element SuperIndexElement;

	Element CannedDataSuperIndex;
	GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + IntentionalitySuperIndex::CannedData;
	UIntToSuperIndexFunction(UIntElement, CannedDataSuperIndex);

	Element SolutionSuperIndex;
	Element SolutionIntentionality;
	Element SolutionInformationSuperIndex;
	Element SolutionInformationElement;
	Element IntentionalitySuperIndex;
	Element IntentionalityElement;
	Element IntentionalityElement1;

	Element StreamElement;

	unsigned int midI;

	unsigned int MISuperIndex[4] = {
		IntentionalitySuperIndex::QAFMSMI,
		IntentionalitySuperIndex::QAFMSNSI,
		IntentionalitySuperIndex::QAFMSILI,
		IntentionalitySuperIndex::QAFMSDI
	};

	Map* MIMap[4] = {
		&DataConstructSolutionLanguageNodeOrderMapInformation,
		&DataConstructSolutionLanguageNodeOrderState,
		&DataConstructSolutionLanguageNodeOrderInsideLink,
		&DataConstructSolutionLanguageNodeOrderDomainParameter
	};

	unsigned int MISuperIndex1[4] = {
		IntentionalitySuperIndex::SRPI,
		IntentionalitySuperIndex::SLIPI,
		IntentionalitySuperIndex::SLOPI,
		IntentionalitySuperIndex::SRCI
	};

	unsigned int MIIndex[4] = {
		SL_MapParameter,
		SL_LoginInformation,
		SL_LogoutInformation,
		SL_MPContext
	};

	Map* MIMap1[4] = {
		&DataConstructSolutionLanguageParameterDictionaries,
		&DataConstructLoginOutInformationDictionaries,
		&DataConstructLoginOutInformationDictionaries,
		&DataConstructSolutionLanguageContextDictionaries
	};

	SolutionSuperIndex |= GetEleOrder(Range, 0);

	GetEleOrder(ParaOrder, 0) |= GetEleOrder(Domain, Environment::CoreKRSSuperIndex);
	GetEleOrder(ParaOrder, 1) |= SolutionSuperIndex;
	GetEleOrder(ParaOrder, 2) |= GetEleOrder(Domain, Environment::EES);
	ReadElementEnvironmentSearcherFunction(ParaOrder, SolutionIntentionality);

	GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + IntentionalitySuperIndex::SolutionInformationManager;
	UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

	GetEleOrder(ParaOrder, 0) |= SuperIndexElement;
	GetEleOrder(ParaOrder, 1) |= SolutionIntentionality;
	SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

	GetEleOrder(ParaOrder, 0) |= UIntElement;
	GetEleOrder(ParaOrder, 1) |= SolutionIntentionality;
	ReadIntentionalityObjectFunction(ParaOrder, SolutionInformationSuperIndex);

	ZeroElementFunction(EmptyElement, SolutionIntentionality);

	GetEleOrder(ParaOrder, 0) |= GetEleOrder(Domain, Environment::CoreKRSSuperIndex);
	GetEleOrder(ParaOrder, 1) |= SolutionInformationSuperIndex;
	GetEleOrder(ParaOrder, 2) |= GetEleOrder(Domain, Environment::EES);
	ReadElementEnvironmentSearcherFunction(ParaOrder, SolutionInformationElement);

	ZeroElementFunction(EmptyElement, SolutionInformationSuperIndex);

	ReleaseElementFunction(EmptyElement, SuperIndexElement);
	GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + IntentionalitySuperIndex::SBRQAFM;
	UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

	GetEleOrder(ParaOrder, 0) |= SuperIndexElement;
	GetEleOrder(ParaOrder, 1) |= SolutionInformationElement;
	SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

	GetEleOrder(ParaOrder, 0) |= UIntElement;
	GetEleOrder(ParaOrder, 1) |= SolutionInformationElement;
	ReadIntentionalityObjectFunction(ParaOrder, IntentionalitySuperIndex);

	GetEleOrder(ParaOrder, 0) |= GetEleOrder(Domain, Environment::CoreKRSSuperIndex);
	GetEleOrder(ParaOrder, 1) |= IntentionalitySuperIndex;
	GetEleOrder(ParaOrder, 2) |= GetEleOrder(Domain, Environment::EES);
	ReadElementEnvironmentSearcherFunction(ParaOrder, IntentionalityElement);

	ZeroElementFunction(EmptyElement, IntentionalitySuperIndex);

	for (midI = 0; midI < 4; midI++) {
		ReleaseElementFunction(EmptyElement, SuperIndexElement);
		GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + MISuperIndex[midI];
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

		GetEleOrder(ParaOrder, 0) |= SuperIndexElement;
		GetEleOrder(ParaOrder, 1) |= IntentionalityElement;
		SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

		GetEleOrder(ParaOrder, 0) |= UIntElement;
		GetEleOrder(ParaOrder, 1) |= IntentionalityElement;
		ReadIntentionalityObjectFunction(ParaOrder, IntentionalitySuperIndex);

		GetEleOrder(ParaOrder, 0) |= GetEleOrder(Domain, Environment::CoreKRSSuperIndex);
		GetEleOrder(ParaOrder, 1) |= IntentionalitySuperIndex;
		GetEleOrder(ParaOrder, 2) |= GetEleOrder(Domain, Environment::EES);
		ReadElementEnvironmentSearcherFunction(ParaOrder, IntentionalityElement1);

		ZeroElementFunction(EmptyElement, IntentionalitySuperIndex);

		GetEleOrder(ParaOrder, 0) |= CannedDataSuperIndex;
		GetEleOrder(ParaOrder, 1) |= IntentionalityElement1;
		SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

		GetEleOrder(ParaOrder, 0) |= UIntElement;
		GetEleOrder(ParaOrder, 1) |= IntentionalityElement1;
		ReadIntentionalityObjectFunction(ParaOrder, StreamElement);

		MIMap[midI]->MapActive(StreamElement, GetEleOrder(GetEleOrder(Range, 1), SL_FirstMap));

		ZeroElementFunction(EmptyElement, StreamElement);

		ZeroElementFunction(EmptyElement, IntentionalityElement1);
	}

	ZeroElementFunction(EmptyElement, IntentionalityElement);

	ReleaseElementFunction(EmptyElement, SuperIndexElement);
	GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + IntentionalitySuperIndex::SARQAFM;
	UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

	GetEleOrder(ParaOrder, 0) |= SuperIndexElement;
	GetEleOrder(ParaOrder, 1) |= SolutionInformationElement;
	SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

	GetEleOrder(ParaOrder, 0) |= UIntElement;
	GetEleOrder(ParaOrder, 1) |= SolutionInformationElement;
	ReadIntentionalityObjectFunction(ParaOrder, IntentionalitySuperIndex);

	GetEleOrder(ParaOrder, 0) |= GetEleOrder(Domain, Environment::CoreKRSSuperIndex);
	GetEleOrder(ParaOrder, 1) |= IntentionalitySuperIndex;
	GetEleOrder(ParaOrder, 2) |= GetEleOrder(Domain, Environment::EES);
	ReadElementEnvironmentSearcherFunction(ParaOrder, IntentionalityElement);

	ZeroElementFunction(EmptyElement, IntentionalitySuperIndex);

	for (midI = 0; midI < 4; midI++) {
		ReleaseElementFunction(EmptyElement, SuperIndexElement);
		GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + MISuperIndex[midI];
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

		GetEleOrder(ParaOrder, 0) |= SuperIndexElement;
		GetEleOrder(ParaOrder, 1) |= IntentionalityElement;
		SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

		GetEleOrder(ParaOrder, 0) |= UIntElement;
		GetEleOrder(ParaOrder, 1) |= IntentionalityElement;
		ReadIntentionalityObjectFunction(ParaOrder, IntentionalitySuperIndex);

		GetEleOrder(ParaOrder, 0) |= GetEleOrder(Domain, Environment::CoreKRSSuperIndex);
		GetEleOrder(ParaOrder, 1) |= IntentionalitySuperIndex;
		GetEleOrder(ParaOrder, 2) |= GetEleOrder(Domain, Environment::EES);
		ReadElementEnvironmentSearcherFunction(ParaOrder, IntentionalityElement1);

		ZeroElementFunction(EmptyElement, IntentionalitySuperIndex);

		GetEleOrder(ParaOrder, 0) |= CannedDataSuperIndex;
		GetEleOrder(ParaOrder, 1) |= IntentionalityElement1;
		SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

		GetEleOrder(ParaOrder, 0) |= UIntElement;
		GetEleOrder(ParaOrder, 1) |= IntentionalityElement1;
		ReadIntentionalityObjectFunction(ParaOrder, StreamElement);

		MIMap[midI]->MapActive(StreamElement, GetEleOrder(GetEleOrder(Range, 1), SL_SecoundMap));
		ZeroElementFunction(EmptyElement, StreamElement);

		ZeroElementFunction(EmptyElement, IntentionalityElement1);
	}

	ZeroElementFunction(EmptyElement, IntentionalityElement);

	for (midI = 0; midI < 4; midI++) {
		ReleaseElementFunction(EmptyElement, SuperIndexElement);
		GetUIntElement(UIntElement) = IntentionalitySuperIndex::ISIOffset + MISuperIndex1[midI];
		UIntToSuperIndexFunction(UIntElement, SuperIndexElement);

		GetEleOrder(ParaOrder, 0) |= SuperIndexElement;
		GetEleOrder(ParaOrder, 1) |= SolutionInformationElement;
		SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

		GetEleOrder(ParaOrder, 0) |= UIntElement;
		GetEleOrder(ParaOrder, 1) |= SolutionInformationElement;
		ReadIntentionalityObjectFunction(ParaOrder, IntentionalitySuperIndex);

		GetEleOrder(ParaOrder, 0) |= GetEleOrder(Domain, Environment::CoreKRSSuperIndex);
		GetEleOrder(ParaOrder, 1) |= IntentionalitySuperIndex;
		GetEleOrder(ParaOrder, 2) |= GetEleOrder(Domain, Environment::EES);
		ReadElementEnvironmentSearcherFunction(ParaOrder, IntentionalityElement1);

		ZeroElementFunction(EmptyElement, IntentionalitySuperIndex);

		GetEleOrder(ParaOrder, 0) |= CannedDataSuperIndex;
		GetEleOrder(ParaOrder, 1) |= IntentionalityElement1;
		SelectIntentionalityObjectFunction(ParaOrder, UIntElement);

		GetEleOrder(ParaOrder, 0) |= UIntElement;
		GetEleOrder(ParaOrder, 1) |= IntentionalityElement1;
		ReadIntentionalityObjectFunction(ParaOrder, StreamElement);

		MIMap1[midI]->MapActive(StreamElement, GetEleOrder(GetEleOrder(Range, 1), MIIndex[midI]));

		ZeroElementFunction(EmptyElement, StreamElement);

		ZeroElementFunction(EmptyElement, IntentionalityElement1);
	}

	ZeroElementFunction(EmptyElement, SuperIndexElement);
	ZeroElementFunction(EmptyElement, SolutionInformationElement);

	return true;
};

bool FirstContextConstructCMDMainFunction(Element& Domain, Element& Range)
{
	using namespace SolutionLanguageContextDictionaries_Struct;

	Element UIntElement;
	NewUIntElementFunction(EmptyElement, UIntElement);
	Element ParaOrder;
	GetUIntElement(UIntElement) = 3;
	UIntNewElementOrderFunction(UIntElement, ParaOrder);

	Element SuperIndexElement;
	Element ZeroElement;

	Element _8BitElement;
	New8BitElementFunction(EmptyElement, _8BitElement);

	unsigned int midI;

	Get8BitElement(_8BitElement) = SubEES_8Bit_Code::Quote_FirstContextSuperIndex;

	GetEleOrder(ParaOrder, 0) |= GetEleOrder(Domain, Environment::SystemSuperIndex);
	GetEleOrder(ParaOrder, 1) |= _8BitElement;
	GetEleOrder(ParaOrder, 2) |= GetEleOrder(Domain, Environment::EES);
	ReadElementEnvironmentSearcherFunction(ParaOrder, SuperIndexElement);

	for (midI = 0; midI < GetUIntElement(GetEleOrder(GetEleOrder(Range, SLCD_Parameter), SLCD_End)); midI++) {
		GetUIntElement(UIntElement) = midI;

		CopyElementFunction(SuperIndexElement, ZeroElement);

		GetEleOrder(ParaOrder, 0) |= UIntElement;
		GetEleOrder(ParaOrder, 1) &= ZeroElement;
		PutSolutionLanguageContextDictionariesFunction(ParaOrder, Range);
	}

	ZeroElementFunction(EmptyElement, SuperIndexElement);

	return true;
}

bool ExecuteSolutionFunction(Element& Domain, Element& Range) {

	using namespace KRSPollingDrivenZero_Struct;
	using namespace SolutionLanguageExplainManager_Struct;
	using namespace SolutionFactory_Struct;

	system("cls");

	Element UIntElement;
	NewUIntElementFunction(EmptyElement, UIntElement);
	Element ParaOrder;
	GetUIntElement(UIntElement) = 3;
	UIntNewElementOrderFunction(UIntElement, ParaOrder);
	Element BoolElement;
	NewBoolElementFunction(EmptyElement, BoolElement);

	Element SolutionFactory;
	NewSolutionFactoryFunction(EmptyElement, SolutionFactory);

	Element SolutionElement;

	Element AddressOrder;

	SetSolutionFactorySolutionInformationFunction(GetEleOrder(Range, 1), SolutionFactory);

	SetSolutionFactoryQuestionFlowMapFunction(GetEleOrder(GetEleOrder(Domain, Environment::KRSPDZ), KRSPDZ_QuestionMap), SolutionFactory);

	SolutionFactoryCopyParameterInformationFunction(EmptyElement, SolutionFactory);

	FirstContextConstructCMDMainFunction(Domain, GetEleOrder(SolutionFactory, SF_ContextDictionaries));


	SolutionFactoryNewSolutionFunction(EmptyElement, SolutionFactory);


	SetSolutionFactoryAddressManagerFunction(GetEleOrder(Domain, Environment::AddressCreater), SolutionFactory);

	SolutionFactoryAskAddressFunction(EmptyElement, SolutionFactory);


	SolutionLanguageParameterDictionariesNormalInformationFunction(EmptyElement, GetEleOrder(SolutionFactory, SF_ParameterDictionaries));


	SolutionFactoryConstructSecoundNodeOrderFunction(EmptyElement, SolutionFactory);

	SolutionFactorySetSolutionInformationFunction(EmptyElement, SolutionFactory);


	SolutionFactoryConstructLoginOutFunction(EmptyElement, SolutionFactory);


	SolutionFactoryGetSolutionFunction(SolutionFactory, SolutionElement);


	LoginKRSSolutionManagerFunction(SolutionElement, GetEleOrder(GetEleOrder(Domain, Environment::KRSPDZ), KRSPDZ_SolutionManager));


	KRSPollingDrivenZeroRecursionMainFunction(EmptyElement, GetEleOrder(Domain, Environment::KRSPDZ));


	ReleaseSolutionFactoryFunction(EmptyElement, SolutionFactory);

	getchar();

	return true;
}

bool CompileExecuteFunction(Element& Domain, Element& Range) {

	using namespace SolutionSingleDomain_Code;

	Element UIntElement;
	NewUIntElementFunction(EmptyElement, UIntElement);

	Element IntentionalitySuperIndex;
	GetUIntElement(UIntElement) = 65576;
	UIntToSuperIndexFunction(UIntElement, IntentionalitySuperIndex);

	Element ParaOrder;
	GetUIntElement(UIntElement) = 5;
	UIntNewElementOrderFunction(UIntElement, ParaOrder);

	Element SolutionExplain;
	NewSolutionLanguageExplainManagerFunction(EmptyElement, SolutionExplain);

	GetEleOrder(ParaOrder, SS_SuperIndex) |= IntentionalitySuperIndex;
	NewBoolElementFunction(EmptyElement, GetEleOrder(ParaOrder, FirstMapSelect));

	LoadSolutionLanguageFunction(Domain, ParaOrder);

	CompileFunction(Domain, ParaOrder);

	ReleaseElementFunction(EmptyElement, GetEleOrder(ParaOrder, FirstMapSelect));

	GetEleOrder(ParaOrder, 0) |= IntentionalitySuperIndex;
	GetEleOrder(ParaOrder, 1) |= SolutionExplain;

	LoadSolutionFunction(Domain, ParaOrder);

	ExecuteSolutionFunction(Domain, ParaOrder);

	return true;
}

int main() {

	Element Environment;

	InitializeEnvironmentFunction(EmptyElement, EmptyElement);

	InitializeSystemEnvironmentFunction(EmptyElement, Environment);

	LoadIntentionalityFunction(Environment, EmptyElement);

	ConstructEnvironmentOrderFunction(EmptyElement, Environment);

	CompileExecuteFunction(Environment, EmptyElement);
	
	RecycleEnvironmentOrderFunction(EmptyElement, Environment);

	RecycleEnvironmentFunction(EmptyElement, EmptyElement);

	return 0;
}