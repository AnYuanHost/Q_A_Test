# 意向性对象案例

***

本例覆盖意向性基础模块的全部映射：构造意向性对象、添加与检索质性、存入与读取质料、排序与释放，演示一个意向性对象的完整生命周期。

***

## 构造与释放

说明段：一切意向性对象操作都始于New、终于Release，两者必须成对出现。

```C++
Element IntentionalityObjectElement;

NewIntentionalityObjectFunction(EmptyElement, IntentionalityObjectElement);

// Use IntentionalityObjectElement

ReleaseIntentionalityObjectFunction(EmptyElement, IntentionalityObjectElement);
```

与上面等价的写法：先构造到中间元素，再用CopyElementFunction转交，但释放责任也随之转移，同一对象只能释放一次。

注意事项：重复释放触发异常；跳过释放直接析构宿主元素会造成内部资源泄漏。

***

## 添加与检索质性

说明段：质性即意向性对象的指向信息，以超索引为检索键。先Add登记，再Select按同一超索引取回地址。

```C++
Element SuperIndexElement;
// Initialize SuperIndexElement as SuperIndexSet Element

AddIntentionalityObjectFunction(SuperIndexElement, IntentionalityObjectElement);

Element SelectPair;
NewOrderedPairFunction(EmptyElement, SelectPair);

CopyElementFunction(SuperIndexElement, GetPairFirstElement(SelectPair));
GetPairSecoundElement(SelectPair) &= IntentionalityObjectElement;

Element AddressElement;
NewUIntElementFunction(EmptyElement, AddressElement);

SelectIntentionalityObjectFunction(SelectPair, AddressElement);

if (GetUIntElement(AddressElement) == UINT_MAX)
{
	// Select Failed
}

ZeroElementFunction(EmptyElement, AddressElement);
ZeroElementFunction(EmptyElement, SelectPair);
```

注意事项：Select未命中返回UINT_MAX，必须先判定再使用；Add之后旧地址可能因内部重排失效。

***

## 移除质性

说明段：Remove按超索引移除已登记的质性，回收内部地址。

```C++
RemoveIntentionalityObjectFunction(SuperIndexElement, IntentionalityObjectElement);
```

与上面等价的写法：移除后再次Select将得到UINT_MAX，等价于该质性不存在。

注意事项：移除前通过该地址获取的质料引用随之失效。

***

## 质料的存入、读取与获取

说明段：质料挂靠在质性分配的地址上。Put按地址写入文本流信息；Read以引用读取；Get转交所有权。

```C++
Element PutPair;
NewOrderedPairFunction(EmptyElement, PutPair);

CopyElementFunction(AddressElement, GetPairFirstElement(PutPair));

Element StreamElement;
NewStringFunction(EmptyElement, StreamElement);
// Initialize StreamElement with content

GetPairSecoundElement(PutPair) = StreamElement;

PutIntentionalityObjectFunction(PutPair, IntentionalityObjectElement);

Element ReadPair;
NewOrderedPairFunction(EmptyElement, ReadPair);

CopyElementFunction(AddressElement, GetPairFirstElement(ReadPair));
GetPairSecoundElement(ReadPair) &= IntentionalityObjectElement;

Element QuoteElement;
ReadIntentionalityObjectFunction(ReadPair, QuoteElement);
// QuoteElement is a Quote of the Matter

ZeroElementFunction(EmptyElement, QuoteElement);

Element GetPair;
NewOrderedPairFunction(EmptyElement, GetPair);

CopyElementFunction(AddressElement, GetPairFirstElement(GetPair));
GetPairSecoundElement(GetPair) &= IntentionalityObjectElement;

Element MatterElement;
GetIntentionalityObjectFunction(GetPair, MatterElement);
// MatterElement now takes over the Matter

// ... Use MatterElement

ZeroElementFunction(EmptyElement, MatterElement);
ZeroElementFunction(EmptyElement, GetPair);
ZeroElementFunction(EmptyElement, ReadPair);
ZeroElementFunction(EmptyElement, PutPair);
```

注意事项：Read的结果是引用，Put/Remove/Add之后失效；Get的结果被值域接管，必须由调用方负责后续释放或归还，重复Get同一地址只会得到空元素。

***

## 排序优化检索

说明段：Sort重排对象内部结构以优化后续检索。

```C++
SortIntentionalityObjectFunction(EmptyElement, IntentionalityObjectElement);
```

注意事项：排序后一切旧地址与旧引用失效，必须重新Select。

***

## 内存与引用纪律

本案例全程遵循三条纪律：构造与释放成对（New/Release）；引用与解除成对（Read/Zero）；所有权转交后责任随之转移（Get之后由调用方释放）。任何一条被打破，都会表现为引用失效或重复释放异常。最易错的一步是把Read得到的引用元素当作自有元素释放——它只是意向性对象内部质料的视图，必须且只能ZeroElement解除。
