# FstreamWriteIntentionalityObject

***

映射FstreamWriteIntentionalityObject接受意向性对象集合（IntentionalityObjectSet）为定义域，文件集合（FstreamSet）为值域，定义为：

```C++
Map FstreamWriteIntentionalityObject(&IntentionalityObjectSet, &FstreamSet, FstreamWriteIntentionalityObjectFunction);
```

意向性对象文件写入映射（FstreamWriteIntentionalityObject）将定义域意向性对象序列化写入值域文件。写入完成后，值域文件保存的正是定义域意向性对象的质性与质料数据，可由[FstreamReadIntentionalityObject](FstreamReadIntentionalityObject.md)读回重建。

***

## 案例：

```C++
Element IntentionalityObjectElement;
NewIntentionalityObjectFunction(EmptyElement, IntentionalityObjectElement);

// Initialize IntentionalityObjectElement

Element FileElement;
// Initialize FileElement as FstreamSet Element

FstreamWriteIntentionalityObjectFunction(IntentionalityObjectElement, FileElement);

ReleaseIntentionalityObjectFunction(EmptyElement, IntentionalityObjectElement);
ZeroElementFunction(EmptyElement, FileElement);
```

案例解释：先构造意向性对象并写入内容，再准备目标文件元素，调用映射把意向性对象序列化写入文件。写入只读取定义域意向性对象的内容，不转移它的所有权：对象仍由调用方持有，必须用[ReleaseIntentionalityObject](../Intentionality/ReleaseIntentionalityObject.md)释放；文件元素按其自身内容用ZeroElement解除。
