# IntentionalityAscender_Struct

***

命名空间IntentionalityAscender_Struct定义了意向性攀升器的结构位置常量（constexpr unsigned int），其成员如下：

| 常量 | 值 | 含义 |
| --- | --- | --- |
| IA_Order_Size | 0 | 元素序长度 |
| IA_Order_Index | 1 | 当前序号 |
| IA_Order | 2 | 元素序 |
| IA_EES | 3 | 元素环境检索器 |
| IA_SubEES_SuperIndex | 4 | 子元素环境检索器超索引 |

结构说明：攀升器元素共 5 个位置，整体作为沿超索引层级向上攀升的遍历结构使用，通过宏GetEleOrder(元素, 序号) 访问各位置。位置 0 与位置 1 记录元素序的长度与当前推进到的序号，位置 2 持有元素序本体，位置 3 持有元素环境检索器（EES），位置 4 持有子元素环境检索器超索引（SubEES 的 SuperIndex）。本命名空间常量的引用写法为IntentionalityAscender_Struct::IA_Order。

***

## 案例：

```C++
Element AscenderElement;
NewIntentionalityAscenderFunction(EmptyElement, AscenderElement);

// Initialize AscenderElement

unsigned int OrderIndex = GetUIntElement(GetEleOrder(AscenderElement, IntentionalityAscender_Struct::IA_Order_Index));
unsigned int OrderSize = GetUIntElement(GetEleOrder(AscenderElement, IntentionalityAscender_Struct::IA_Order_Size));

ZeroIntentionalityAscenderFunction(EmptyElement, AscenderElement);
ReleaseIntentionalityAscenderFunction(EmptyElement, AscenderElement);
```

案例解释：通过宏GetEleOrder取出当前位置上的元素，再用GetUIntElement读出其中的无符号整型内容，即可获知攀升器的当前序号与元素序长度。关于攀升器的完整用法，跳转至[意向性攀升器案例](IntentionalityAscender_Case.md)。
