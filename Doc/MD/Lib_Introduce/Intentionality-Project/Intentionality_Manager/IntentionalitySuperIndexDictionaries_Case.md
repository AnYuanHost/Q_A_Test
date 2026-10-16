# 意向性超索引字典案例

***

本例覆盖意向性超索引字典的完整流程：一步构造与新建、写入超索引与序、系统登录与登出、成员测试、字典与结构信息互转、由意向性超索引管理器提取字典以及文件写入，演示一本字典从构造到归还的完整生命周期。字典的集合定义见[IntentionalitySuperIndexDictionaries](IntentionalitySuperIndexDictionaries.md)，各位置含义见[IntentionalitySuperIndexDictionaries_Struct](IntentionalitySuperIndexDictionaries_Struct.md)。

***

## 构造与释放

说明段：字典有两条构造路径——一步构造用[CreateSuperIndexIntentionalityDictionaries](CreateSuperIndexIntentionalityDictionaries.md)，以全集信息元素为定义域直接在值域得到字典；逐步构造用[NewIntentionalitySuperIndexDictionaries](NewIntentionalitySuperIndexDictionaries.md)先建空字典，再写入两个位置。两条路径都以[ReleaseIntentionalitySuperIndexDictionaries](ReleaseIntentionalitySuperIndexDictionaries.md)收尾，构造与释放必须成对。

```C++
Element InformationElement;
// Initialize InformationElement as UniversalSet Element

Element CreatedDictionariesElement;
CreateSuperIndexIntentionalityDictionariesFunction(InformationElement, CreatedDictionariesElement);

Element DictionariesElement;
NewIntentionalitySuperIndexDictionariesFunction(EmptyElement, DictionariesElement);

// Use DictionariesElement

ReleaseIntentionalitySuperIndexDictionariesFunction(EmptyElement, DictionariesElement);
ReleaseIntentionalitySuperIndexDictionariesFunction(EmptyElement, CreatedDictionariesElement);
ZeroElementFunction(EmptyElement, InformationElement);
```

注意事项：两条路径的产物是各自独立的字典，各有一次Release，漏掉任意一次都会泄漏字典内部资源；重复释放触发异常；信息元素不因构造而转移所有权，用完必须ZeroElementFunction解除。

***

## 超索引与序的设置

说明段：字典的两个位置分别由两张Set映射写入，定义域都是元素序偶，其第一元素为待写入内容、第二元素为目标字典：超索引经[SetIntentionalitySuperIndexDictionariesSuperIndex](SetIntentionalitySuperIndexDictionariesSuperIndex.md)写入ISID_SuperIndex，序信息经[SetIntentionalitySuperIndexDictionariesOrder](SetIntentionalitySuperIndexDictionariesOrder.md)写入ISID_Order。

```C++
Element SuperIndexPair;
NewOrderedPairFunction(EmptyElement, SuperIndexPair);

// Initialize SuperIndex information in GetPairFirstElement(SuperIndexPair)
GetPairSecoundElement(SuperIndexPair) &= DictionariesElement;

SetIntentionalitySuperIndexDictionariesSuperIndexFunction(SuperIndexPair, EmptyElement);

Element OrderPair;
NewOrderedPairFunction(EmptyElement, OrderPair);

// Initialize Order information in GetPairFirstElement(OrderPair)
GetPairSecoundElement(OrderPair) &= DictionariesElement;

SetIntentionalitySuperIndexDictionariesOrderFunction(OrderPair, EmptyElement);

ZeroElementFunction(EmptyElement, OrderPair);
ZeroElementFunction(EmptyElement, SuperIndexPair);
```

注意事项：两张Set映射只写位置内容，不改变字典结构，也不影响另一个位置的已有内容；写入的超索引与序由字典持有，字典释放前不得单独释放这两个位置的内容；序偶参数一律用ZeroElementFunction解除；两个位置都写入之后，字典才构成完整的超索引↔序对应条目，才可参与系统登录与成员测试。

***

## 系统登录与登出

说明段：[SystemLoginIntentionalitySuperIndexDictionaries](SystemLoginIntentionalitySuperIndexDictionaries.md)把字典登记入系统字典表单，使它进入工作态、供全局检索使用；[SystemLogoutIntentionalitySuperIndexDictionaries](SystemLogoutIntentionalitySuperIndexDictionaries.md)是配对映射，把字典从表单中注销。登录只登记位置，不转移字典的所有权。

```C++
SystemLoginIntentionalitySuperIndexDictionariesFunction(DictionariesElement, EmptyElement);

// DictionariesElement is now registered in the System Dictionaries Table
// Global Selection can reach it

SystemLogoutIntentionalitySuperIndexDictionariesFunction(DictionariesElement, EmptyElement);

// DictionariesElement has left the System Dictionaries Table
```

注意事项：登录与登出必须成对，带着未登出的字典直接释放，将在系统字典表单中残留指向已释放字典的悬空条目；标准次序是登录、使用、登出、释放，登出不改变字典内容，注销后的字典仍可再次登录或被释放。

***

## 成员测试

说明段：[IntentionalitySuperIndexDictionariesInTest](IntentionalitySuperIndexDictionariesInTest.md)以<超索引，字典>序偶为定义域，测试超索引是否属于该字典，把结果以真或假赋值到值域布尔元素上。

```C++
Element TestPair;
NewOrderedPairFunction(EmptyElement, TestPair);

// Initialize SuperIndex information in GetPairFirstElement(TestPair)
GetPairSecoundElement(TestPair) &= DictionariesElement;

Element BoolElement;
IntentionalitySuperIndexDictionariesInTestFunction(TestPair, BoolElement);

// BoolElement is True when the SuperIndex belongs to DictionariesElement,
// and False otherwise

ZeroElementFunction(EmptyElement, BoolElement);
ZeroElementFunction(EmptyElement, TestPair);
```

注意事项：测试只读取字典，不改变字典内容，也不改变它在系统字典表单中的登记状态；结果是拷贝值，随后写入、登出或释放字典都不影响已经取到的判定；结果元素与序偶参数用ZeroElementFunction解除。

***

## 信息互转与管理器转换

说明段：字典有三种外部转换，两两成对——[IntentionalitySuperIndexDictionariesToInformation](IntentionalitySuperIndexDictionariesToInformation.md)把字典展开为结构信息元素，[InformationToIntentionalitySuperIndexDictionaries](InformationToIntentionalitySuperIndexDictionaries.md)把信息元素重建为字典；[IntentionalitySuperIndexManagerToDictionaries](IntentionalitySuperIndexManagerToDictionaries.md)从意向性超索引管理器中提取出超索引与序均已填充的字典；序列化落盘用[FstreamPutIntentionalitySuperIndexDictionaries](FstreamPutIntentionalitySuperIndexDictionaries.md)。

```C++
Element ExpandedInformationElement;
IntentionalitySuperIndexDictionariesToInformationFunction(DictionariesElement, ExpandedInformationElement);

Element RebuiltDictionariesElement;
InformationToIntentionalitySuperIndexDictionariesFunction(ExpandedInformationElement, RebuiltDictionariesElement);

Element ExtractedDictionariesElement;
IntentionalitySuperIndexManagerToDictionariesFunction(SuperIndexManagerElement, ExtractedDictionariesElement);

Element FileElement;
// Initialize FileElement as FstreamSet Element

FstreamPutIntentionalitySuperIndexDictionariesFunction(ExtractedDictionariesElement, FileElement);

ReleaseIntentionalitySuperIndexDictionariesFunction(EmptyElement, ExtractedDictionariesElement);
ReleaseIntentionalitySuperIndexDictionariesFunction(EmptyElement, RebuiltDictionariesElement);
ZeroElementFunction(EmptyElement, FileElement);
ZeroElementFunction(EmptyElement, ExpandedInformationElement);
```

注意事项：信息互转是拷贝式往返，展开结果与重建结果互不隶属，展开后即可用ZeroElement解除信息元素，不必等待字典释放；重建出的字典与提取出的字典都是值域上新构造的独立结构，各有一次Release，漏掉任意一次都会泄漏；文件写入只读取字典的内容，不转移它的所有权，字典仍由调用方释放。

***

## 内存与引用纪律

本案例全程遵循三条纪律：构造与释放成对（CreateSuperIndexIntentionalityDictionaries / NewIntentionalitySuperIndexDictionaries 与 ReleaseIntentionalitySuperIndexDictionaries 相对，值域上新建的重建字典与提取字典同样各有一次Release）；登录与登出成对（每个SystemLogin都有一次SystemLogout，之后才Release）；引用与解除成对（序偶参数、测试结果与展开的信息元素用ZeroElementFunction解除，写入字典的超索引与序由字典持有、不得单独释放）。任何一条被打破，都会表现为系统字典表单悬空条目、重复释放异常或字典内部资源泄漏。最易错的一步是字典未登出便直接释放——它在系统字典表单中留下指向已释放内存的条目，此后每次全局检索都会命中这本无效字典。
