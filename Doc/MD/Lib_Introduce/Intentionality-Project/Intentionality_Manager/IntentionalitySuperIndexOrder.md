# IntentionalitySuperIndexOrder

***

集合IntentionalitySuperIndexOrder为所有意向性超索引序元素的集合，定义为：

```C++
Set IntentionalitySuperIndexOrder(EmptyElement, IntentionalitySuperIndexOrderTest);
```

意向性超索引序集合（IntentionalitySuperIndexOrder）由所有意向性超索引序元素组成，用于登记超索引的排序信息，支撑管理器与字典的有序检索。意向性超索引序保存超索引之间的排序信息，是意向性超索引字典（[IntentionalitySuperIndexDictionaries](IntentionalitySuperIndexDictionaries.md)）中序位置的内容：字典按超索引登记对应的序信息，管理器按页登记超索引，两者配合完成有序检索。

***

## 案例：

```C++
Element OrderElement;
// Initialize OrderElement as IntentionalitySuperIndexOrder Element

if (IntentionalitySuperIndexOrderTest(OrderElement, IntentionalitySuperIndexOrder))
{
	// OrderElement is an Element of IntentionalitySuperIndexOrder
}

ZeroElementFunction(EmptyElement, OrderElement);
```

案例解释：序元素通过判定函数检验其是否属于意向性超索引序集合，判定为真即可参与字典序位置的写入与检索。序元素在使用完毕后用ZeroElement解除，不产生管理器侧的释放责任。关于超索引序在检索与遍历中的配合，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
