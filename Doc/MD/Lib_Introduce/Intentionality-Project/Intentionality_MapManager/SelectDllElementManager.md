# SelectDllElementManager

***

映射SelectDllElementManager接受超索引集合（SuperIndexSet）为定义域，动态库元素管理器集合（DllElementManager）为值域，定义为：

```C++
Map SelectDllElementManager(&SuperIndexSet, &DllElementManager, SelectDllElementManagerFunction);
```

动态库元素管理器检索映射（SelectDllElementManager）以定义域元素携带的超索引为检索信息，在登记的管理器条目中按超索引匹配对应条目，将检索到的管理器条目转交赋值到值域元素上。检索的定位依据是条目的超索引位置（[DEM_SuperIndex](DllElementManager_Struct.md)），执行前应先经[超索引设置](SetDllElementManagerSuperIndex.md)完成登记。

***

## 案例：

```C++
Element SuperIndexElement;
// SuperIndexElement 为已登记的超索引

Element ManagerEntry;
ZeroElementFunction(EmptyElement, ManagerEntry);

SelectDllElementManagerFunction(SuperIndexElement, ManagerEntry);
// ManagerEntry 转交承载按超索引检索到的管理器条目

ZeroElementFunction(EmptyElement, ManagerEntry);
```

在案例代码中，以超索引元素SuperIndexElement为检索信息，通过SelectDllElementManager检索对应管理器条目并转交到ManagerEntry。转交语义意味着ManagerEntry取得该条目的持有权，使用完毕必须ZeroElementFunction清零；若检索所依据的登记结构已被释放，转交得到的条目即失效。检索、读取与释放的完整流程，跳转至[意向性映射管理器案例](Intentionality_MapManager_Case.md)。
