# FstreamWriteIntentionalitySuperIndexManager

***

映射FstreamWriteIntentionalitySuperIndexManager接受意向性超索引管理器集合（IntentionalitySuperIndexManagerSet）为定义域，文件集合（FstreamSet）为值域，定义为：

```C++
Map FstreamWriteIntentionalitySuperIndexManager(&IntentionalitySuperIndexManagerSet, &FstreamSet, FstreamWriteIntentionalitySuperIndexManagerFunction);
```

意向性超索引管理器文件写入映射（FstreamWriteIntentionalitySuperIndexManager）将定义域意向性超索引管理器序列化写入值域文件。写入完成后，值域文件保存的正是定义域管理器的页数、页序与各页条目内容，可由[FstreamReadIntentionalitySuperIndexManager](FstreamReadIntentionalitySuperIndexManager.md)读回重建。写入只读取定义域管理器的内容，不转移它的所有权。

***

## 案例：

```C++
Element ManagerElement;

NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
// Initialize ManagerElement

Element FileElement;
// Initialize FileElement as FstreamSet Element

FstreamWriteIntentionalitySuperIndexManagerFunction(ManagerElement, FileElement);

// FileElement now stores the serialized Manager

ZeroElementFunction(EmptyElement, FileElement);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
```

案例解释：定义域准备管理器，值域准备文件元素，调用映射把管理器序列化写入文件。写入是只读操作，管理器本身的内容不变，写入后管理器仍由[ReleaseIntentionalitySuperIndexManager](ReleaseIntentionalitySuperIndexManager.md)负责释放，文件元素按其文件内容清零解除。文件与管理器的完整往返流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
