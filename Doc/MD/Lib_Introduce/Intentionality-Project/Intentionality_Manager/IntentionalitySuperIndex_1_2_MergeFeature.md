# IntentionalitySuperIndex_1_2_MergeFeature

***

命名空间IntentionalitySuperIndex_1_2_MergeFeature定义了意向性超索引一二合并特征的结构常量，其中结构长度与位置常量为 constexpr unsigned int、合并阈值为 constexpr double，其成员如下：

| 常量 | 值 | 含义 |
| --- | --- | --- |
| ISIMF_Length | 4 | 结构长度 |
| ISIMF_Last | 0 | 末 |
| ISIMF_Next | 1 | 下一个 |
| ISIMF_Merge | 2 | 合并 |
| ISIMF_Zero | 3 | 清零 |
| ISIMF_MergeThreshold | 0.3 | 合并阈值（double） |

结构说明：一二合并特征是一个 4 元素的元素序，用于超索引一二合并过程中的状态记录，序内 4 个位置依次为末（ISIMF_Last=0）、下一个（ISIMF_Next=1）、合并（ISIMF_Merge=2）、清零（ISIMF_Zero=3），ISIMF_Length=4 标定该元素序的长度；ISIMF_MergeThreshold=0.3 是 double 常量，用于判定是否触发合并。访问方式为宏GetEleOrder(元素, 序号)。本命名空间常量的引用写法为IntentionalitySuperIndex_1_2_MergeFeature::ISIMF_MergeThreshold。

***

## 案例：

```C++
Element FeatureElement;

NewIntentionalitySuperIndex_1_2_MergeFeatureFunction(EmptyElement, FeatureElement);

// Initialize FeatureElement for the 1-2 Merge

unsigned int FeatureLength = IntentionalitySuperIndex_1_2_MergeFeature::ISIMF_Length;
double MergeThreshold = IntentionalitySuperIndex_1_2_MergeFeature::ISIMF_MergeThreshold;

ReleaseIntentionalitySuperIndex_1_2_MergeFeatureFunction(EmptyElement, FeatureElement);
```

案例解释：一二合并特征先由[NewIntentionalitySuperIndex_1_2_MergeFeature](NewIntentionalitySuperIndex_1_2_MergeFeature.md)构造，ISIMF_Length 可直接作为遍历边界，ISIMF_MergeThreshold 作为阈值参与合并判定，位置内容通过宏GetEleOrder读出。合并结束后由[ReleaseIntentionalitySuperIndex_1_2_MergeFeature](ReleaseIntentionalitySuperIndex_1_2_MergeFeature.md)成对释放。完整的合并流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
