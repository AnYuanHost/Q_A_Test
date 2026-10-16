# NewCoreKRSManager

***

映射NewCoreKRSManager接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map NewCoreKRSManager(&NullElementSet, &NullElementSet, NewCoreKRSManagerFunction);
```

新建核心KRS管理器映射（NewCoreKRSManager）在值域空元素上构造一个核心KRS管理器：分页登记表位置（[CoreKRSManager_Struct](CoreKRSManager_Struct.md) 的 CoreKRS_Order）与参数位置（CoreKRS_Parameter）就位，参数结构以 CoreKRS_End 结尾，四个参数位就位并置默认值——页容量 CoreKRS_PageSize=16、末尾标志 CoreKRS_End=0、扩容量 CoreKRS_ExpandSize=2、保留容量 CoreKRS_RetainSize=3。构造完成后，值域元素即属于核心KRS管理器集合（[CoreKRSManager](CoreKRSManager.md)），可以接受信息体登录、注销、超索引检索与项状态读写等映射的操作；空元素集合作为定义域与值域，输入为空，返回的即是这个已构造完成的管理器本体。

该映射与 [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) 成对：构造一次，使用完毕释放一次；对已构造的管理器重复构造会覆盖原有分页登记表与参数结构并泄漏内部资源。

***

## 案例：

```C++
Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);
// ManagerElement now belongs to CoreKRSManager

// 经 LoginCoreKRSManager 转交登录若干知识库信息体

ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：构造空元素ManagerElement，用NewCoreKRSManagerFunction在其上构造核心KRS管理器，随后即可登录知识库信息体、按超索引检索并读写项状态。构造与释放必须成对：使用完毕由 [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) 释放，跳过释放直接令元素析构，会造成分页登记表与参数结构的资源泄漏。管理器的完整调度用法，见[核心KRS管理器集合](CoreKRSManager.md)。
