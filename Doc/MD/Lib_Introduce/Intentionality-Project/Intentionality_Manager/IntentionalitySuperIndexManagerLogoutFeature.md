# IntentionalitySuperIndexManagerLogoutFeature

***

命名空间IntentionalitySuperIndexManagerLogoutFeature定义了意向性超索引管理器登出特征的结构常量，其中结构长度与位置常量为 constexpr unsigned int，其成员如下：

| 常量 | 值 | 含义 |
| --- | --- | --- |
| ISIMLF_Length | 5 | 结构长度 |
| ISIMLF_Subsection | 0 | 分段 |
| ISIMLF_Merge | 1 | 合并 |
| ISIMLF_Last | 2 | 末 |
| ISIMLF_End | 3 | 末尾 |
| ISIMLF_Side | 4 | 侧 |

结构说明：登出特征是一个 5 元素的元素序，用于登出过程中的整理状态记录，序内 5 个位置依次为分段（ISIMLF_Subsection=0）、合并（ISIMLF_Merge=1）、末（ISIMLF_Last=2）、末尾（ISIMLF_End=3）、侧（ISIMLF_Side=4），ISIMLF_Length=5 标定该元素序的长度。访问方式为宏GetEleOrder(元素, 序号)。本命名空间常量的引用写法为IntentionalitySuperIndexManagerLogoutFeature::ISIMLF_Subsection；本命名空间与[IntentionalitySuperIndexManagerLoginFeature](IntentionalitySuperIndexManagerLoginFeature.md)的常量前缀同为ISIMLF，必须靠命名空间名区分。

***

## 案例：

```C++
Element FeatureElement;

NewIntentionalitySuperIndexManagerLogoutFeatureFunction(EmptyElement, FeatureElement);

// Initialize FeatureElement for Logout

unsigned int FeatureLength = IntentionalitySuperIndexManagerLogoutFeature::ISIMLF_Length;
unsigned int MergeFlag = GetUIntElement(GetEleOrder(FeatureElement, IntentionalitySuperIndexManagerLogoutFeature::ISIMLF_Merge));

ReleaseIntentionalitySuperIndexManagerLogoutFeatureFunction(EmptyElement, FeatureElement);
```

案例解释：登出特征先由[NewIntentionalitySuperIndexManagerLogoutFeature](NewIntentionalitySuperIndexManagerLogoutFeature.md)构造，长度常量ISIMLF_Length可直接作为整理遍历的边界，位置内容通过宏GetEleOrder读出。登出结束后由[ReleaseIntentionalitySuperIndexManagerLogoutFeature](ReleaseIntentionalitySuperIndexManagerLogoutFeature.md)成对释放。完整的登出流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
