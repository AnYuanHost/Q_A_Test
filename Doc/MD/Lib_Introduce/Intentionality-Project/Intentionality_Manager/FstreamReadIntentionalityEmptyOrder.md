# FstreamReadIntentionalityEmptyOrder

***

映射FstreamReadIntentionalityEmptyOrder接受文件集合（FstreamSet）为定义域，意向性空序集合（IntentionalityEmptyOrderSet）为值域，定义为：

```C++
Map FstreamReadIntentionalityEmptyOrder(&FstreamSet, &IntentionalityEmptyOrderSet, FstreamReadIntentionalityEmptyOrderFunction);
```

意向性空序文件读取映射（FstreamReadIntentionalityEmptyOrder）从定义域文件中读取空序数据，在值域元素上重建意向性空序。重建完成后，值域元素即属于意向性空序集合（[IntentionalityEmptyOrder](IntentionalityEmptyOrder.md)），可以直接参与登录、登出与合并操作，重建出的空序由调用方接管。

***

## 案例：

```C++
Element FileElement;
// Initialize FileElement as FstreamSet Element

Element EmptyOrderElement;

FstreamReadIntentionalityEmptyOrderFunction(FileElement, EmptyOrderElement);

// Use EmptyOrderElement

ReleaseIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
```

案例解释：定义域准备一个文件元素，调用映射把文件中的空序数据重建到EmptyOrderElement上，重建出的空序与写入时的空序内容一致，可继续分配地址位置。重建结果由调用方持有，必须用[ReleaseIntentionalityEmptyOrder](ReleaseIntentionalityEmptyOrder.md)成对释放；跳过释放直接析构宿主元素将造成内部资源泄漏。文件与空序的完整往返流程，跳转至[意向性空序案例](IntentionalityEmptyOrder_Case.md)。
