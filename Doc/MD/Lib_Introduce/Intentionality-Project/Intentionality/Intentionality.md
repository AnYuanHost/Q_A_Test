# Intentionality

***

该源文件为庞杂系统提供意向性对象的基础操作：意向性对象集合的判定，以及围绕质性（指向信息）的新建、释放、检索、添加、移除、质料读取、质料获取、质料存入与排序九项映射。

意向性对象是意向性网络的节点，节点本身不附带符号属性；与符号相关的一切检索均围绕超索引信息与地址信息展开。

***

## 意向性对象相关指令集：

***

| 指令 | 说明 |
| --- | --- |
| [IntentionalityObjectSet](IntentionalityObjectSet.md) | 集合IntentionalityObjectSet为所有意向性对象的集合 |
| [NewIntentionalityObject](NewIntentionalityObject.md) | 映射NewIntentionalityObject接受空元素集合（NullElementSet）为定义域和值域 |
| [ReleaseIntentionalityObject](ReleaseIntentionalityObject.md) | 映射ReleaseIntentionalityObject接受空元素集合（NullElementSet）为定义域，意向性对象集合（IntentionalityObjectSet）为值域 |
| [SelectIntentionalityObject](SelectIntentionalityObject.md) | 映射SelectIntentionalityObject接受元素序偶集合（OrderedPairSet）为定义域，无符号整型集合（UIntSet）为值域 |
| [AddIntentionalityObject](AddIntentionalityObject.md) | 映射AddIntentionalityObject接受超索引集合（SuperIndexSet）为定义域，意向性对象集合（IntentionalityObjectSet）为值域 |
| [RemoveIntentionalityObject](RemoveIntentionalityObject.md) | 映射RemoveIntentionalityObject接受超索引集合（SuperIndexSet）为定义域，意向性对象集合（IntentionalityObjectSet）为值域 |
| [ReadIntentionalityObject](ReadIntentionalityObject.md) | 映射ReadIntentionalityObject接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [GetIntentionalityObject](GetIntentionalityObject.md) | 映射GetIntentionalityObject接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [PutIntentionalityObject](PutIntentionalityObject.md) | 映射PutIntentionalityObject接受元素序偶集合（OrderedPairSet）为定义域，意向性对象集合（IntentionalityObjectSet）为值域 |
| [SortIntentionalityObject](SortIntentionalityObject.md) | 映射SortIntentionalityObject接受空元素集合（NullElementSet）为定义域，意向性对象集合（IntentionalityObjectSet）为值域 |

  
***

## 意向性对象案例

| 指令 | 说明 |
| --- | --- |
| [意向性对象t案例](IntentionalityObject_Case.md) | 本例覆盖意向性基础模块的全部映射：构造意向性对象、添加与检索质性、存入与读取质料、排序与释放，演示一个意向性对象的完整生命周期。 |

***

在使用意向性基础模块时，可以使用源文件"All_Intentionality.h"直接引入所有源文件，也可以单独引入"Intentionality.h"使用。
