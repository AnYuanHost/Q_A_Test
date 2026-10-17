# Intentionality_SuperIndex

***

该源文件定义意向性超索引类型编号常量（constexpr unsigned int），用于判定静态库元素的结构类型。文件不依赖其他头文件，仅包含两个版本的编号命名空间：旧版以 ISIOffset = 0xffff 为偏移基准，现行版以 ISIOffset = 0xffff + 1 为偏移基准。编号不连续，空缺编号为预留或历史保留。

***

## 超索引类型编号：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [旧版意向性超索引类型编号命名空间](Intentionality_SuperIndex_Old.md) | 命名空间 | 旧版意向性超索引类型编号常量 |
| [意向性超索引类型编号命名空间](IntentionalitySuperIndex.md) | 命名空间 | 现行版意向性超索引类型编号常量 |

***

在使用超索引类型编号时，可以使用源文件"All_Intentionality.h"直接引入所有源文件，也可以单独引入"Intentionality_SuperIndex.h"使用。典型用法为与元素结构的首位置比较以判定类型。
