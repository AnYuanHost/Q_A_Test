# IntentionalityPathAscender_Struct

***

命名空间IntentionalityPathAscender_Struct定义了意向性路径攀升器的结构位置常量（constexpr unsigned int），其成员如下：

| 常量 | 值 | 含义 |
| --- | --- | --- |
| IPA_First | 0 | 首 |
| IPA_NextOrder | 1 | 下一个序 |
| IPA_Object | 2 | 意向性对象 |
| IPA_EES | 3 | 元素环境检索器 |
| IPA_SubEES | 4 | 子元素环境检索器 |

结构说明：路径攀升器元素共 5 个位置，整体作为沿意向性对象构成的路径攀升遍历的结构使用，通过宏GetEleOrder(元素, 序号) 访问各位置。位置 0 持有路径起点的意向性对象，位置 1 持有下一个序信息，位置 2 持有当前指向的意向性对象，位置 3 持有元素环境检索器（EES），位置 4 持有子元素环境检索器（SubEES）。本命名空间常量的引用写法为IntentionalityPathAscender_Struct::IPA_Object。

***

## 案例：

```C++
Element PathAscenderElement;

NewIntentionalityPathAscenderFunction(EmptyElement, PathAscenderElement);

// Initialize PathAscenderElement

unsigned int NextOrderPosition = GetUIntElement(GetEleOrder(PathAscenderElement, IntentionalityPathAscender_Struct::IPA_NextOrder));

ReleaseIntentionalityPathAscenderFunction(EmptyElement, PathAscenderElement);
```

案例解释：通过宏GetEleOrder取出位置上的元素，再用GetUIntElement读出其中的无符号整型内容，即可获知攀升器当前记录的下一个序信息；位置号一律引用本命名空间常量，不手写 0 到 4。关于攀升器的完整用法，跳转至[意向性路径攀升器案例](IntentionalityPathAscender_Case.md)。
