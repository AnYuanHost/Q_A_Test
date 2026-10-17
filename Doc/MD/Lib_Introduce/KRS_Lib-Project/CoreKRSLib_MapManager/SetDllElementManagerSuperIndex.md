# SetDllElementManagerSuperIndex

***

映射SetDllElementManagerSuperIndex接受元素序偶集合（OrderedPairSet）为定义域，其结构为：<超索引集合, 动态库元素管理器集合>，其信息为：<超索引，管理器>；空元素集合（NullElementSet）为值域，定义为：

```C++
Map SetDllElementManagerSuperIndex(&OrderedPairSet, &NullElementSet, SetDllElementManagerSuperIndexFunction);
```

动态库元素管理器超索引设置映射（SetDllElementManagerSuperIndex）取定义域序偶的第一元素（超索引）与第二元素（动态库元素管理器条目），将超索引写入管理器条目的超索引位置（[DEM_SuperIndex](DllElementManager_Struct.md)）。值域空元素仅作为映射的出口，不产生返回内容。

***

## 案例：

```C++
Element Pair;
NewOrderedPairFunction(EmptyElement, Pair);

// Pair 登记序偶 <超索引，管理器>：第一元素为超索引，第二元素为管理器条目
Element SuperIndexElement = GetPairFirstElement(Pair);
Element ManagerElement = GetPairSecoundElement(Pair);

SetDllElementManagerSuperIndexFunction(Pair, EmptyElement);
// 管理器条目的超索引位置写入该超索引

ZeroElementFunction(EmptyElement, Pair);
```

在案例代码中，经NewOrderedPairFunction构造序偶元素Pair，登记〈超索引，管理器〉序偶，由GetPairFirstElement与GetPairSecoundElement（Secound是库的历史拼写）分取第一、第二元素。随后经SetDllElementManagerSuperIndex把超索引写入管理器条目的超索引位置。序偶Pair用毕必须ZeroElementFunction清零；清零序偶不释放其引用的管理器条目，条目本身仍需[ReleaseDllElementManager](ReleaseDllElementManager.md)释放。
