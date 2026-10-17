# Intentionality

***

该源文件为庞杂系统提供意向性对象的基础操作：意向性对象集合的判定，以及围绕质性（指向信息）的新建、释放、检索、添加、移除、质料读取、质料获取、质料存入与排序九项映射。

意向性对象是意向性网络的节点，节点本身不附带符号属性；与符号相关的一切检索均围绕超索引信息与地址信息展开。

***

## 意向性对象相关指令集：

***

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [意向性对象集合](IntentionalityObjectSet.md) | 集合 | 所有意向性对象元素组成的集合 |
| [意向性对象新建映射](NewIntentionalityObject.md) | 映射 | 在空元素上构造一个空的意向性对象 |
| [意向性对象释放映射](ReleaseIntentionalityObject.md) | 映射 | 释放意向性对象并回收其质性与质料资源 |
| [意向性对象检索映射](SelectIntentionalityObject.md) | 映射 | 按超索引检索意向性对象中的质性地址 |
| [意向性对象添加映射](AddIntentionalityObject.md) | 映射 | 向意向性对象添加质性指向信息并分配地址 |
| [意向性对象移除映射](RemoveIntentionalityObject.md) | 映射 | 移除意向性对象中的质性指向信息并回收地址 |
| [意向性对象质料读取映射](ReadIntentionalityObject.md) | 映射 | 按地址读取意向性对象中的质料 |
| [意向性对象质料获取映射](GetIntentionalityObject.md) | 映射 | 按地址获取意向性对象中的质料 |
| [意向性对象质料存入映射](PutIntentionalityObject.md) | 映射 | 按地址把质料写入意向性对象 |
| [意向性对象排序映射](SortIntentionalityObject.md) | 映射 | 对意向性对象排序以优化检索 |

  
***

## 意向性对象案例

| 名称 | 说明 |
| --- | --- |
| [意向性对象t案例](IntentionalityObject_Case.md) | 本例覆盖意向性基础模块的全部映射：构造意向性对象、添加与检索质性、存入与读取质料、排序与释放，演示一个意向性对象的完整生命周期。 |

***

在使用意向性基础模块时，可以使用源文件"All_Intentionality.h"直接引入所有源文件，也可以单独引入"Intentionality.h"使用。
