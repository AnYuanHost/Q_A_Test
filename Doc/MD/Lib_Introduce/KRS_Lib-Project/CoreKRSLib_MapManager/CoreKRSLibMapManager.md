# CoreKRSLibMapManager

***

集合CoreKRSLibMapManager为所有核心KRS库映射管理器的集合，定义为：

```C++
Set CoreKRSLibMapManager(EmptyElement, CoreKRSLibMapManagerTest);
```

核心KRS库映射管理器集合（CoreKRSLibMapManager）由所有核心KRS库映射管理器元素组成，用于管理静态库映射表单的排序与结构信息，支撑静态库的快速检索。管理器元素共 2 个位置，通过宏 GetEleOrder(元素, 序号) 读取，各位置含义如下：

- 序位置（[IMM_Order](CoreKRSLibMapManager_Struct.md)）：一个 IMM_OrderSize=2 的结构，含信息（IMM_Information）与元素类别（IMM_ElementCategory）两个子位置；
- 参数位置（IMM_Parameter）：以 IMM_End 结尾的参数结构，承载映射表单的参数信息。

***

## 案例：

关于核心KRS库映射管理器集合的构造、登记、排序、结构写入与释放，跳转至[核心KRS库映射管理器案例](CoreKRSLib_MapManager_Case.md)。
