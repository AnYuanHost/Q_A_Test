# SetDllElementManagerDll

***

映射SetDllElementManagerDll接受元素序偶集合（OrderedPairSet）为定义域，其结构为：<全集, 动态库元素管理器集合>，其信息为：<Windows动态库元素，管理器>；空元素集合（NullElementSet）为值域，定义为：

```C++
Map SetDllElementManagerDll(&OrderedPairSet, &NullElementSet, SetDllElementManagerDllFunction);
```

动态库元素管理器动态库设置映射（SetDllElementManagerDll）取定义域序偶的第一元素（Windows动态库元素）与第二元素（动态库元素管理器条目），将Windows动态库元素写入管理器条目的动态库元素位置（[DEM_Dll](DllElementManager_Struct.md)）。值域空元素仅作为映射的出口，不产生返回内容。

***

## 案例：

```C++
Element Pair;
NewOrderedPairFunction(EmptyElement, Pair);

// Pair 登记序偶 <Windows动态库元素，管理器>：第一元素为 Windows动态库元素，第二元素为管理器条目
Element DllElement = GetPairFirstElement(Pair);
Element ManagerElement = GetPairSecoundElement(Pair);

SetDllElementManagerDllFunction(Pair, EmptyElement);
// 管理器条目的动态库元素位置写入该 Windows动态库元素

ZeroElementFunction(EmptyElement, Pair);
```

在案例代码中，经NewOrderedPairFunction构造序偶元素Pair，登记〈Windows动态库元素，管理器〉序偶，由GetPairFirstElement与GetPairSecoundElement（Secound是库的历史拼写）分取第一、第二元素。随后经SetDllElementManagerDll把Windows动态库元素写入管理器条目的动态库元素位置。序偶Pair用毕必须ZeroElementFunction清零；清零序偶不释放其引用的管理器条目与动态库元素，条目本身仍需[ReleaseDllElementManager](ReleaseDllElementManager.md)释放。关于动态库元素管理器的完整案例，跳转至[核心KRS库映射管理器案例](CoreKRSLib_MapManager_Case.md)。
