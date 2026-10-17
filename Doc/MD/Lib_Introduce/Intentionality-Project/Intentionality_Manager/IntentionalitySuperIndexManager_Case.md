# 意向性超索引管理器案例

***

本例覆盖意向性超索引管理器的完整流程：构造与释放管理器、页登录与页登出分配回收条目、按超索引检索地址信息、以首个/下一个超索引配对遍历、合并与分段整理页结构、以及管理器与文件、结构信息之间的互转，演示管理器以页为单位管理超索引地址信息的一次完整使用。管理器的集合定义见[IntentionalitySuperIndexManager](IntentionalitySuperIndexManager.md)，结构位置常量见[IntentionalitySuperIndexManager_Struct](IntentionalitySuperIndexManager_Struct.md)。

***

## 构造与释放

说明段：一切管理器操作都始于[NewIntentionalitySuperIndexManager](NewIntentionalitySuperIndexManager.md)、终于[ReleaseIntentionalitySuperIndexManager](ReleaseIntentionalitySuperIndexManager.md)，两者必须成对出现；页结构的读取全部通过结构位置常量与宏GetEleOrder完成。

```C++
Element ManagerElement;

NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);

// ManagerElement now belongs to IntentionalitySuperIndexManagerSet

unsigned int PageNumber = GetUIntElement(GetEleOrder(ManagerElement, IntentionalitySuperIndexManager_Struct::ISIManager_PageNumber));
unsigned int PageSize = IntentionalitySuperIndexManager_Struct::ISIManager_PageSize;

// Iterate the PageOrder at IntentionalitySuperIndexManager_Struct::ISIManager_PageOrder
// Read each Entry Position with IntentionalitySuperIndexManager_Struct::ISIMPage_SuperIndex,
// ISIMPage_Page, ISIMPage_EmptyNumber, ISIMPage_AllotNumber

ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
```

注意事项：跳过释放直接析构宿主元素，将造成管理器页序资源泄漏；重复释放触发异常；释放前必须确认已无依赖该管理器地址信息的未登出条目，否则这些条目随管理器一并消亡；特征结构（登录特征、登出特征、一二合并特征）不在管理器内部，管理器的Release不会替它们完成释放。

***

## 页登录与登出

说明段：[LoginPageIntentionalitySuperIndexManager](LoginPageIntentionalitySuperIndexManager.md)从管理器中登录（分配）一个空闲条目，把分配到的页号与位置信息赋值到值域无符号整型元素，无空闲条目时赋值UINT_MAX；[LogoutPageIntentionalitySuperIndexManager](LogoutPageIntentionalitySuperIndexManager.md)是它的配对映射，把定义域页号与位置信息代表的条目登出（归还）回管理器；各页的空位数（EmptyNumber）与分配数（AllotNumber）由[IntentionalitySuperIndexManagerUpdateParameter](IntentionalitySuperIndexManagerUpdateParameter.md)按参数信息维护。

```C++
Element ManagerElement;
NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
// Initialize ManagerElement

Element AddressElement;
NewUIntElementFunction(EmptyElement, AddressElement);

LoginPageIntentionalitySuperIndexManagerFunction(ManagerElement, AddressElement);

if (GetUIntElement(AddressElement) == UINT_MAX)
{
	// No Free Entry
}
else
{
	// Address Information Available
	// Register a SuperIndex to this Entry

	LogoutPageIntentionalitySuperIndexManagerFunction(AddressElement, ManagerElement);
}

Element ParameterPair;
NewOrderedPairFunction(EmptyElement, ParameterPair);

Element ParameterElement;
NewUIntElementFunction(EmptyElement, ParameterElement);
// Initialize Parameter Information in ParameterElement

CopyElementFunction(ParameterElement, GetPairFirstElement(ParameterPair));
GetPairSecoundElement(ParameterPair) &= ManagerElement;

IntentionalitySuperIndexManagerUpdateParameterFunction(ParameterPair, EmptyElement);

// The EmptyNumber and AllotNumber of each Page in ManagerElement are updated

ZeroElementFunction(EmptyElement, ParameterElement);
ZeroElementFunction(EmptyElement, ParameterPair);
ZeroElementFunction(EmptyElement, AddressElement);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
```

注意事项：页登录与页登出必须成对，漏掉登出将使该条目永久占用、可用条目逐渐耗尽；登出的地址必须来自同一管理器上一次成功的登录结果，归还错误地址将破坏该页的条目状态；参数更新与页登出都把结果直接写回定义域管理器，值域一律用空元素接收，不产生新的释放责任；序偶参数与地址、参数元素用ZeroElement解除。

***

## 检索与遍历

说明段：[IntentionalitySuperIndexManagerSelect](IntentionalitySuperIndexManagerSelect.md)按超索引检索其所在页与位置，把地址信息赋值到值域无符号整型元素，未命中赋值UINT_MAX；[FirstSuperIndexIntentionalitySuperIndexManager](FirstSuperIndexIntentionalitySuperIndexManager.md)把管理器登记的首个超索引引用传递到值域，[NextSuperIndexIntentionalitySuperIndexManager](NextSuperIndexIntentionalitySuperIndexManager.md)推进到下一个登记的超索引，两者配对完成遍历，值域为空元素即表示起点或末端没有超索引。

```C++
Element ManagerElement;
NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
// Initialize ManagerElement with Registered SuperIndexes

Element SuperIndexElement;
// Initialize SuperIndexElement as SuperIndexSet Element

Element AddressElement;
NewUIntElementFunction(EmptyElement, AddressElement);

IntentionalitySuperIndexManagerSelectFunction(SuperIndexElement, AddressElement);

if (GetUIntElement(AddressElement) != UINT_MAX)
{
	// Address Information Available: the Page and Position of this SuperIndex
}

Element CurrentSuperIndexElement;
FirstSuperIndexIntentionalitySuperIndexManagerFunction(ManagerElement, CurrentSuperIndexElement);

// CurrentSuperIndexElement holds the First Registered SuperIndex, or is an Empty Element

NextSuperIndexIntentionalitySuperIndexManagerFunction(ManagerElement, CurrentSuperIndexElement);

// CurrentSuperIndexElement advances to the Next SuperIndex, or is an Empty Element at the End

ZeroElementFunction(EmptyElement, CurrentSuperIndexElement);
ZeroElementFunction(EmptyElement, AddressElement);
ZeroElementFunction(EmptyElement, SuperIndexElement);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
```

注意事项：检索与遍历都要先判定结果——地址为UINT_MAX表示未命中，超索引值域为空元素表示无下一个，直接使用未判定的结果将读到无效地址；[OutTestIntentionalitySuperIndexManager](OutTestIntentionalitySuperIndexManager.md)可对可疑地址先做越界测试，结果真即不可使用；管理器登记的是超索引本身，排序信息由[IntentionalitySuperIndexOrder](IntentionalitySuperIndexOrder.md)保存，两者配合支撑[IntentionalitySuperIndexDictionaries](IntentionalitySuperIndexDictionaries.md)的有序检索；遍历推进不修改管理器的页结构，已至末端后管理器仍可继续使用。

***

## 合并与分段

说明段：[IntentionalitySuperIndexManagerMergeOrder](IntentionalitySuperIndexManagerMergeOrder.md)把两个管理器的序信息合并为一个管理器，[IntentionalitySuperIndexManagerMergePage](IntentionalitySuperIndexManagerMergePage.md)按页信息把指定页的空闲条目合并整理、空页整页回收，[PageIntentionalitySuperIndexManagerSubsection](PageIntentionalitySuperIndexManagerSubsection.md)把管理器切分为子段，[IntentionalitySuperIndexManagerWeightedScreen](IntentionalitySuperIndexManagerWeightedScreen.md)按权重条件筛选页与位置、构造筛选结果管理器。

```C++
Element FirstManagerElement;
NewIntentionalitySuperIndexManagerFunction(EmptyElement, FirstManagerElement);
// Initialize FirstManagerElement

Element SecondManagerElement;
NewIntentionalitySuperIndexManagerFunction(EmptyElement, SecondManagerElement);
// Initialize SecondManagerElement

Element MergePair;
NewOrderedPairFunction(EmptyElement, MergePair);
GetPairFirstElement(MergePair) &= FirstManagerElement;
GetPairSecoundElement(MergePair) &= SecondManagerElement;

Element MergedManagerElement;
IntentionalitySuperIndexManagerMergeOrderFunction(MergePair, MergedManagerElement);

Element PagePair;
NewOrderedPairFunction(EmptyElement, PagePair);

Element PageElement;
NewUIntElementFunction(EmptyElement, PageElement);
// Initialize Page Information in PageElement

CopyElementFunction(PageElement, GetPairFirstElement(PagePair));
GetPairSecoundElement(PagePair) &= MergedManagerElement;

Element MergedPageManagerElement;
IntentionalitySuperIndexManagerMergePageFunction(PagePair, MergedPageManagerElement);

Element SubsectionManagerElement;
PageIntentionalitySuperIndexManagerSubsectionFunction(MergedPageManagerElement, SubsectionManagerElement);

// SubsectionManagerElement is a new Manager holding the Subsections

ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, SubsectionManagerElement);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, MergedPageManagerElement);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, MergedManagerElement);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, SecondManagerElement);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, FirstManagerElement);
ZeroElementFunction(EmptyElement, PageElement);
ZeroElementFunction(EmptyElement, PagePair);
ZeroElementFunction(EmptyElement, MergePair);
```

注意事项：合并、合并页、分段与加权筛选都在值域上新构造管理器，结果不是定义域管理器的引用，因此每个结果管理器都有独立的释放责任，漏掉任意一次Release都会泄漏页序资源；原管理器与合并、分段结果各自持有自己的页结构，不可把它们混用于同一条目的登录与登出；序偶参数用ZeroElement解除；一二合并的过程状态记录在[IntentionalitySuperIndex_1_2_MergeFeature](IntentionalitySuperIndex_1_2_MergeFeature.md)构造的合并特征上，该特征与管理器分离、需各自释放。

***

## 文件与信息互转

说明段：管理器有四种外部表示，两两成对——[FstreamWriteIntentionalitySuperIndexManager](FstreamWriteIntentionalitySuperIndexManager.md) / [FstreamReadIntentionalitySuperIndexManager](FstreamReadIntentionalitySuperIndexManager.md)负责与文件往返，[IntentionalitySuperIndexManagerToInformation](IntentionalitySuperIndexManagerToInformation.md) / [InformationToIntentionalitySuperIndexManager](InformationToIntentionalitySuperIndexManager.md)负责与展开的结构信息元素往返。

```C++
Element ManagerElement;
NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
// Initialize ManagerElement

Element WriteFileElement;
// Initialize WriteFileElement as FstreamSet Element

FstreamWriteIntentionalitySuperIndexManagerFunction(ManagerElement, WriteFileElement);

Element ReadManagerElement;
FstreamReadIntentionalitySuperIndexManagerFunction(WriteFileElement, ReadManagerElement);

Element InformationElement;
IntentionalitySuperIndexManagerToInformationFunction(ReadManagerElement, InformationElement);

Element RebuiltManagerElement;
InformationToIntentionalitySuperIndexManagerFunction(InformationElement, RebuiltManagerElement);

// Use RebuiltManagerElement

ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, RebuiltManagerElement);
ZeroElementFunction(EmptyElement, InformationElement);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ReadManagerElement);
ZeroElementFunction(EmptyElement, WriteFileElement);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
```

注意事项：文件读取与信息重建都在值域上新建管理器，重建结果由调用方接管并负责释放；文件写入与信息展开只读取定义域管理器的内容，不转移它的所有权，原管理器的释放责任不变；信息互转是拷贝式往返，展开后即可用ZeroElement解除信息元素，不必等待管理器释放。

***

## 内存与引用纪律

本案例全程遵循三条纪律：构造与释放成对（NewIntentionalitySuperIndexManager / ReleaseIntentionalitySuperIndexManager，凡在值域上新建的合并、合并页、分段、筛选、文件读取、信息重建结果管理器，各有一次Release，三个特征结构各自的New也各配一次Release）；登录与登出成对（每个成功的LoginPageIntentionalitySuperIndexManager都有一次LogoutPageIntentionalitySuperIndexManager，每个UINT_MAX判定都在使用地址之前完成）；引用与解除成对（序偶参数、地址、参数、权重、页信息与遍历结果元素用ZeroElementFunction解除，文件与信息元素按各自内容清零）。任何一条被打破，都会表现为条目永久占用、重复释放异常或页序资源泄漏。最易错的一步是把合并、分段、筛选或读取的结果当作原管理器的引用而漏掉释放——它是值域上新构造的独立管理器，必须单独释放；其次是把UpdateParameter与LogoutPage的写回结果误当作需要释放的新管理器，它们的更新写回定义域，值域用空元素接收即可。
