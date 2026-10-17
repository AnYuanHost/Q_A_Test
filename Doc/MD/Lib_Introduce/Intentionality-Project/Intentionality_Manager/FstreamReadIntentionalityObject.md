# FstreamReadIntentionalityObject

***

映射FstreamReadIntentionalityObject接受文件集合（FstreamSet）为定义域，意向性对象集合（IntentionalityObjectSet）为值域，定义为：

```C++
Map FstreamReadIntentionalityObject(&FstreamSet, &IntentionalityObjectSet, FstreamReadIntentionalityObjectFunction);
```

意向性对象文件读取映射（FstreamReadIntentionalityObject）从定义域文件中读取意向性对象数据，在值域意向性对象上重建。重建完成后，值域元素即属于意向性对象集合（[IntentionalityObjectSet](../Intentionality/IntentionalityObjectSet.md)），可以接受其他意向性对象映射的操作，重建出的意向性对象由调用方接管。

***

## 案例：

```C++
Element FileElement;
// Initialize FileElement as FstreamSet Element

Element IntentionalityObjectElement;

FstreamReadIntentionalityObjectFunction(FileElement, IntentionalityObjectElement);

// Use IntentionalityObjectElement

ReleaseIntentionalityObjectFunction(EmptyElement, IntentionalityObjectElement);
```

案例解释：定义域准备一个文件元素，调用映射把文件中的意向性对象数据重建到IntentionalityObjectElement上，随后该元素即可参与检索、读取、存入等意向性对象操作。重建结果由调用方持有，使用完毕必须与[FstreamWriteIntentionalityObject](FstreamWriteIntentionalityObject.md)写入的内容相对应，并用[ReleaseIntentionalityObject](../Intentionality/ReleaseIntentionalityObject.md)成对释放；跳过释放直接析构宿主元素将造成内部资源泄漏。
