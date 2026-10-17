# IntentionalityCreater

***

命名空间IntentionalityCreater为意向性构造命名空间，集中提供一步到位构造意向性管理基础设施的构造映射：管理器初始化信息、意向性超索引管理器、初始意向性空序、带首个意向性对象的初始空序、预制数据意向性对象以及意向性超索引字典。

该命名空间不定义结构位置常量，其成员均为Map全局映射（真函数为同名Function），各自独立成文：

| 构造映射 | 产物 |
| --- | --- |
| [CreateSuperIndexManagerInitializeInformation](CreateSuperIndexManagerInitializeInformation.md) | 管理器初始化信息元素 |
| [CreateSuperIndexManagerIntentionality](CreateSuperIndexManagerIntentionality.md) | 意向性超索引管理器 |
| [CreateFirstEmptyOrder](CreateFirstEmptyOrder.md) | 初始意向性空序 |
| [CreateFirstEmptyOrderIntentionality](CreateFirstEmptyOrderIntentionality.md) | 初始空序与首个意向性对象 |
| [CreateCannedDataIntentioanlityObject](CreateCannedDataIntentioanlityObject.md) | 预制数据意向性对象（Map符号保留历史拼写） |
| [CreateSuperIndexIntentionalityDictionaries](CreateSuperIndexIntentionalityDictionaries.md) | 意向性超索引字典 |

***

## 案例：

关于构造映射的完整使用流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。

构造产物与New系映射的产物遵守同样的纪律：由构造映射产出的元素归属对应的结构集合，其释放必须交还给对应的Release映射，不得跨结构释放。
