# FstreamReadIntentionalitySuperIndexManager

***

映射FstreamReadIntentionalitySuperIndexManager接受文件集合（FstreamSet）为定义域，意向性超索引管理器集合（IntentionalitySuperIndexManagerSet）为值域，定义为：

```C++
Map FstreamReadIntentionalitySuperIndexManager(&FstreamSet, &IntentionalitySuperIndexManagerSet, FstreamReadIntentionalitySuperIndexManagerFunction);
```

意向性超索引管理器文件读取映射（FstreamReadIntentionalitySuperIndexManager）从定义域文件中读取管理器数据，在值域元素上重建意向性超索引管理器。重建完成后，值域元素即属于意向性超索引管理器集合，其页数、页序与各页条目恢复为写入时的内容，重建结果由调用方接管。配对映射为[FstreamWriteIntentionalitySuperIndexManager](FstreamWriteIntentionalitySuperIndexManager.md)。

***

## 案例：

```C++
Element FileElement;
// Initialize FileElement as FstreamSet Element

Element ManagerElement;

FstreamReadIntentionalitySuperIndexManagerFunction(FileElement, ManagerElement);

// Use ManagerElement

ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
```

案例解释：定义域准备一个文件元素，调用映射把文件中的管理器数据重建到ManagerElement上，重建出的管理器与写入时的页结构一致，可继续登录条目与检索超索引。重建结果由调用方持有，必须用[ReleaseIntentionalitySuperIndexManager](ReleaseIntentionalitySuperIndexManager.md)成对释放；跳过释放直接析构宿主元素将造成内部资源泄漏。文件与管理器的完整往返流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
