# 意向性空序案例

***

本例覆盖意向性空序的完整流程：新建与释放空序、登录与登出位置、加权筛选与合并、切分子段、以及空序与文件、结构信息之间的互转，演示空序作为地址分配回收核心结构的一次完整使用。空序的集合定义见[IntentionalityEmptyOrder](IntentionalityEmptyOrder.md)。

***

## 构造与释放

说明段：一切空序操作都始于[NewIntentionalityEmptyOrder](NewIntentionalityEmptyOrder.md)、终于[ReleaseIntentionalityEmptyOrder](ReleaseIntentionalityEmptyOrder.md)，两者必须成对出现。

```C++
Element EmptyOrderElement;

NewIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);

// Use EmptyOrderElement

ReleaseIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
```

注意事项：跳过释放直接析构宿主元素，将造成空序分段结构资源泄漏；重复释放触发异常；释放前必须确认该空序上已无未登出的工作态位置，否则这些位置随空序一并消亡。

***

## 登录与登出

说明段：[LoginIntentionalityEmptyOrder](LoginIntentionalityEmptyOrder.md)从空序中登录（占用）一个空闲位置，把分配到的地址信息赋值到值域无符号整型元素，无空闲位置时赋值UINT_MAX；[LogoutIntentionalityEmptyOrder](LogoutIntentionalityEmptyOrder.md)是它的配对映射，把定义域地址信息代表的位置登出（归还）回空序。

```C++
Element AddressElement;
NewUIntElementFunction(EmptyElement, AddressElement);

LoginIntentionalityEmptyOrderFunction(EmptyOrderElement, AddressElement);

if (GetUIntElement(AddressElement) == UINT_MAX)
{
	// No Free Position
}
else
{
	// Address Information Available
	// ... Use the Address

	LogoutIntentionalityEmptyOrderFunction(AddressElement, EmptyOrderElement);
}

ZeroElementFunction(EmptyElement, AddressElement);
ReleaseIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
```

注意事项：登录与登出必须成对，漏掉登出将使该位置永久离开空序、可用地址逐渐耗尽；登出的地址必须来自同一空序上一次成功的登录结果；只归还地址而希望顺带整理空序时，用[IntentionalityEmptyOrderLogoutMerge](IntentionalityEmptyOrderLogoutMerge.md)一步完成。

***

## 筛选与合并

说明段：[IntentionalityEmptyOrderWeightedScreen](IntentionalityEmptyOrderWeightedScreen.md)按权重条件筛选空闲位置、把筛选结果构造为新的空序；[IntentionalityEmptyOrderMergeOrder](IntentionalityEmptyOrderMergeOrder.md)把两个空序合并为一个有序空序；[IntentionalityEmptyOrderLogoutMerge](IntentionalityEmptyOrderLogoutMerge.md)在归还地址的同时对空序执行合并整理。

```C++
Element ScreenPair;
NewOrderedPairFunction(EmptyElement, ScreenPair);

Element WeightElement;
NewUIntElementFunction(EmptyElement, WeightElement);
// Initialize Weight Information in WeightElement

CopyElementFunction(WeightElement, GetPairFirstElement(ScreenPair));
GetPairSecoundElement(ScreenPair) &= EmptyOrderElement;

Element ScreenedEmptyOrderElement;
IntentionalityEmptyOrderWeightedScreenFunction(ScreenPair, ScreenedEmptyOrderElement);

Element MergePair;
NewOrderedPairFunction(EmptyElement, MergePair);
GetPairFirstElement(MergePair) &= EmptyOrderElement;
GetPairSecoundElement(MergePair) &= ScreenedEmptyOrderElement;

Element MergedEmptyOrderElement;
IntentionalityEmptyOrderMergeOrderFunction(MergePair, MergedEmptyOrderElement);

Element LogoutMergePair;
NewOrderedPairFunction(EmptyElement, LogoutMergePair);
// Initialize Address information (UIntSet) in GetPairFirstElement(LogoutMergePair)
GetPairSecoundElement(LogoutMergePair) &= MergedEmptyOrderElement;

Element FinalEmptyOrderElement;
IntentionalityEmptyOrderLogoutMergeFunction(LogoutMergePair, FinalEmptyOrderElement);

// Use FinalEmptyOrderElement

ReleaseIntentionalityEmptyOrderFunction(EmptyElement, FinalEmptyOrderElement);
ReleaseIntentionalityEmptyOrderFunction(EmptyElement, MergedEmptyOrderElement);
ReleaseIntentionalityEmptyOrderFunction(EmptyElement, ScreenedEmptyOrderElement);
ReleaseIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
ZeroElementFunction(EmptyElement, LogoutMergePair);
ZeroElementFunction(EmptyElement, MergePair);
ZeroElementFunction(EmptyElement, ScreenPair);
ZeroElementFunction(EmptyElement, WeightElement);
```

注意事项：三张映射都在值域上新构造空序，结果不是定义域空序的引用，因此每个结果空序都有独立的释放责任，漏掉任意一次Release都会泄漏分段结构；原空序与筛选结果、合并结果持有各自的位置集合，不可把它们混用于同一地址的登录与登出。

***

## 分段

说明段：[NewIntentionalityEmptyOrderSubsectionFeature](NewIntentionalityEmptyOrderSubsectionFeature.md)先在独立元素上构造分段特征结构，[IntentionalityEmptyOrderSubsection](IntentionalityEmptyOrderSubsection.md)再把空序切分为子段，分段结果构造为新的空序置于值域，其定义域与值域都是空序本身。

```C++
Element FeatureElement;
NewIntentionalityEmptyOrderSubsectionFeatureFunction(EmptyElement, FeatureElement);

// Initialize FeatureElement for Subsection

Element SubsectionEmptyOrderElement;
IntentionalityEmptyOrderSubsectionFunction(EmptyOrderElement, SubsectionEmptyOrderElement);

// SubsectionEmptyOrderElement is a new EmptyOrder holding the Subsections

ReleaseIntentionalityEmptyOrderFunction(EmptyElement, SubsectionEmptyOrderElement);
ZeroElementFunction(EmptyElement, FeatureElement);
ReleaseIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
```

注意事项：分段特征结构与空序本体分离，没有专用释放映射，分段结束后用ZeroElementFunction清零解除；分段过程中不要修改分段特征结构；原空序与分段结果空序分别持有各自的分段结构，必须各自释放。

***

## 文件与信息互转

说明段：空序有四种外部表示，两两成对——[FstreamWriteIntentionalityEmptyOrder](FstreamWriteIntentionalityEmptyOrder.md) / [FstreamReadIntentionalityEmptyOrder](FstreamReadIntentionalityEmptyOrder.md)负责与文件往返，[IntentionalityEmptyOrderToInformation](IntentionalityEmptyOrderToInformation.md) / [InformationToIntentionalityEmptyOrder](InformationToIntentionalityEmptyOrder.md)负责与展开的结构信息元素往返。

```C++
Element FileElement;
// Initialize FileElement as FstreamSet Element

Element FileEmptyOrderElement;
FstreamReadIntentionalityEmptyOrderFunction(FileElement, FileEmptyOrderElement);

Element WriteFileElement;
// Initialize WriteFileElement as FstreamSet Element

FstreamWriteIntentionalityEmptyOrderFunction(FileEmptyOrderElement, WriteFileElement);

Element InformationElement;
IntentionalityEmptyOrderToInformationFunction(FileEmptyOrderElement, InformationElement);

Element RebuiltEmptyOrderElement;
InformationToIntentionalityEmptyOrderFunction(InformationElement, RebuiltEmptyOrderElement);

// Use RebuiltEmptyOrderElement

ReleaseIntentionalityEmptyOrderFunction(EmptyElement, RebuiltEmptyOrderElement);
ZeroElementFunction(EmptyElement, InformationElement);
ReleaseIntentionalityEmptyOrderFunction(EmptyElement, FileEmptyOrderElement);
```

注意事项：文件读取在值域上重建空序，重建结果由调用方接管并负责释放；文件写入只读取定义域空序的内容，不转移它的所有权；信息互转是拷贝式往返，展开后即可用ZeroElement解除信息元素，不必等待空序释放。

***

## 内存与引用纪律

本案例全程遵循三条纪律：构造与释放成对（NewIntentionalityEmptyOrder / ReleaseIntentionalityEmptyOrder，凡在值域上新建的筛选、合并、分段、读取结果空序，各有一次Release）；登录与登出成对（每个成功的Login都有一次Logout或LogoutMerge）；引用与解除成对（序偶参数与结果元素用ZeroElementFunction解除，文件与信息元素按各自内容清零）。任何一条被打破，都会表现为空间位永久丢失、重复释放异常或分段结构泄漏。最易错的一步是把筛选或合并的结果当作原空序的引用而漏掉释放——它是值域上新构造的独立空序，必须单独释放。
