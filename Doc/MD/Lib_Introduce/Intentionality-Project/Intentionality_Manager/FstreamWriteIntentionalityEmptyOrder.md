# FstreamWriteIntentionalityEmptyOrder

***

映射FstreamWriteIntentionalityEmptyOrder接受意向性空序集合（IntentionalityEmptyOrderSet）为定义域，文件集合（FstreamSet）为值域，定义为：

```C++
Map FstreamWriteIntentionalityEmptyOrder(&IntentionalityEmptyOrderSet, &FstreamSet, FstreamWriteIntentionalityEmptyOrderFunction);
```

意向性空序文件写入映射（FstreamWriteIntentionalityEmptyOrder）将定义域意向性空序序列化写入值域文件。写入完成后，值域文件保存的正是定义域空序的分段有序结构，可由[FstreamReadIntentionalityEmptyOrder](FstreamReadIntentionalityEmptyOrder.md)读回重建。

***

## 案例：

```C++
Element EmptyOrderElement;
NewIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);

// Initialize EmptyOrderElement

Element FileElement;
// Initialize FileElement as FstreamSet Element

FstreamWriteIntentionalityEmptyOrderFunction(EmptyOrderElement, FileElement);

ReleaseIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
ZeroElementFunction(EmptyElement, FileElement);
```

案例解释：先构造空序并建立空闲位置，再准备目标文件元素，调用映射把空序序列化写入文件。写入只读取定义域空序的内容，不转移它的所有权：空序仍由调用方持有，必须用[ReleaseIntentionalityEmptyOrder](ReleaseIntentionalityEmptyOrder.md)释放；文件元素按其自身内容用ZeroElement解除。完整的文件往返流程，跳转至[意向性空序案例](IntentionalityEmptyOrder_Case.md)。
