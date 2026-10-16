# DllElementManager

***

集合DllElementManager为所有动态库元素管理器的集合，定义为：

```C++
Set DllElementManager(EmptyElement, DllElementManagerTest);
```

动态库元素管理器集合（DllElementManager）由所有动态库元素管理器元素组成，用于登记来自 DLL 的元素，按超索引完成 Windows动态库元素的定位与读取。管理器元素共 4 个位置，通过宏 GetEleOrder(元素, 序号) 读取，各位置含义如下：

- 超索引位置（[DEM_SuperIndex](DllElementManager_Struct.md)）：登记该条目对应的超索引；
- 序位置（DEM_Order）：一个 DEM_OrderSize=2 的结构，含信息（DEM_Information）与元素（DEM_Element）两个子位置；
- 动态库元素位置（DEM_Dll）：持有 Windows动态库元素（WinDll）；
- 参数位置（DEM_Parameter）：以 DEM_End 结尾的参数结构。

***

## 案例：

关于动态库元素管理器集合的构造、超索引与动态库设置、检索、读取与释放，跳转至[意向性映射管理器案例](Intentionality_MapManager_Case.md)。
