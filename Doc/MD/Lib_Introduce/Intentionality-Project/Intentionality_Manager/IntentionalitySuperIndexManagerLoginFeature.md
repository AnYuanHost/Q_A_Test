# IntentionalitySuperIndexManagerLoginFeature

***

命名空间IntentionalitySuperIndexManagerLoginFeature定义了意向性超索引管理器登录特征的结构常量，其中结构长度与位置常量为 constexpr unsigned int，其成员如下：

| 常量 | 值 | 含义 |
| --- | --- | --- |
| ISIMLF_Length | 4 | 结构长度 |
| ISIMLF_First | 0 | 首 |
| ISIMLF_End | 1 | 末 |
| ISIMLF_MergeOrder | 2 | 合并序 |
| ISIMLF_PageEnd | 3 | 页末 |

结构说明：登录特征是一个 4 元素的元素序，用于登录过程中的遍历状态记录，序内 4 个位置依次为首（ISIMLF_First=0）、末（ISIMLF_End=1）、合并序（ISIMLF_MergeOrder=2）、页末（ISIMLF_PageEnd=3），ISIMLF_Length=4 标定该元素序的长度。访问方式为宏GetEleOrder(元素, 序号)。本命名空间常量的引用写法为IntentionalitySuperIndexManagerLoginFeature::ISIMLF_First；本命名空间与[IntentionalitySuperIndexManagerLogoutFeature](IntentionalitySuperIndexManagerLogoutFeature.md)的常量前缀同为ISIMLF，必须靠命名空间名区分。

***

## 案例：

```C++
Element FeatureElement;

NewIntentionalitySuperIndexManagerLoginFeatureFunction(EmptyElement, FeatureElement);

// Initialize FeatureElement for Login

unsigned int FeatureLength = IntentionalitySuperIndexManagerLoginFeature::ISIMLF_Length;
unsigned int PageEnd = GetUIntElement(GetEleOrder(FeatureElement, IntentionalitySuperIndexManagerLoginFeature::ISIMLF_PageEnd));

ReleaseIntentionalitySuperIndexManagerLoginFeatureFunction(EmptyElement, FeatureElement);
```

案例解释：登录特征先由[NewIntentionalitySuperIndexManagerLoginFeature](NewIntentionalitySuperIndexManagerLoginFeature.md)构造，长度常量ISIMLF_Length可直接作为遍历边界，位置内容通过宏GetEleOrder读出。登录结束后由[ReleaseIntentionalitySuperIndexManagerLoginFeature](ReleaseIntentionalitySuperIndexManagerLoginFeature.md)成对释放。完整的登录流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
