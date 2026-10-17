# Intentionality_Manager

***

该源文件为庞杂系统提供意向性对象的管理基础设施：意向性对象的文件读写与文本地址解析，以及围绕意向性攀升器、意向性空序、意向性超索引管理器、意向性超索引字典、意向性路径攀升器五大结构的全套操作映射。这些结构共同承担意向性网络的地址分配、超索引检索、持久化与遍历职责。

***

## 模块顶层映射：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [意向性超索引转文本地址映射](IntentionalitySuperIndexToTxtAddress.md) | 映射 | 把超索引信息解析为对应的文本地址 |
| [意向性对象文件读取映射](FstreamReadIntentionalityObject.md) | 映射 | 从文件读取意向性对象并重建 |
| [意向性对象文件写入映射](FstreamWriteIntentionalityObject.md) | 映射 | 把意向性对象序列化写入文件 |

***

## 意向性攀升器组：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [意向性攀升器结构](IntentionalityAscender_Struct.md) | 命名空间 | 意向性攀升器的结构位置常量 |
| [意向性攀升器集合](IntentionalityAscender.md) | 集合 | 所有意向性攀升器元素组成的集合 |
| [意向性攀升器新建映射](NewIntentionalityAscender.md) | 映射 | 在空元素上构造一个空的意向性攀升器 |
| [设置意向性攀升器元素序映射](SetIntentionalityAscenderOrder.md) | 映射 | 把元素序写入攀升器的元素序位置 |
| [设置意向性攀升器元素环境检索器映射](SetIntentionalityAscenderEES.md) | 映射 | 把元素环境检索器写入攀升器的检索器位置 |
| [设置意向性攀升器子元素环境检索器超索引映射](SetIntentionalityAscenderSubEESSuperIndex.md) | 映射 | 把子元素环境检索器超索引写入攀升器 |
| [下一个意向性攀升器映射](NextIntentionalityAscender.md) | 映射 | 把攀升器推进至下一个序位置 |
| [意向性攀升器清零映射](ZeroIntentionalityAscender.md) | 映射 | 清零复位攀升器的各位置内容 |
| [意向性攀升器释放映射](ReleaseIntentionalityAscender.md) | 映射 | 释放攀升器及其持有的全部资源 |
| [文本流转换为意向性攀升器元素序映射](StreamToIntentionalityAscenderOrder.md) | 映射 | 把文本流解析为攀升器的元素序 |
| [意向性攀升器元素序转文本流映射](IntentionalityAscenderOrderToStream.md) | 映射 | 把攀升器的当前元素序编码为文本流 |
| [意向性攀升器元素序释放映射](ReleaseIntentionalityAscenderOrder.md) | 映射 | 释放攀升器持有的元素序 |

***

## 意向性空序组：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [意向性空序集合](IntentionalityEmptyOrder.md) | 集合 | 所有意向性空序元素组成的集合 |
| [意向性空序新建映射](NewIntentionalityEmptyOrder.md) | 映射 | 在空元素上构造一个空的意向性空序 |
| [意向性空序文件读取映射](FstreamReadIntentionalityEmptyOrder.md) | 映射 | 从文件读取空序并重建 |
| [意向性空序文件写入映射](FstreamWriteIntentionalityEmptyOrder.md) | 映射 | 把空序序列化写入文件 |
| [信息元素重建意向性空序映射](InformationToIntentionalityEmptyOrder.md) | 映射 | 把结构信息元素重建为空序 |
| [意向性空序展开为信息元素映射](IntentionalityEmptyOrderToInformation.md) | 映射 | 把空序展开为结构信息元素 |
| [意向性空序登录映射](LoginIntentionalityEmptyOrder.md) | 映射 | 从空序中登录一个空闲位置并返回其地址 |
| [意向性空序登出映射](LogoutIntentionalityEmptyOrder.md) | 映射 | 把地址代表的位置登出并归还到空序 |
| [意向性空序释放映射](ReleaseIntentionalityEmptyOrder.md) | 映射 | 释放空序及其持有的分段结构资源 |
| [意向性空序加权筛选映射](IntentionalityEmptyOrderWeightedScreen.md) | 映射 | 按权重条件筛选空序中的空闲位置 |
| [意向性空序合并序映射](IntentionalityEmptyOrderMergeOrder.md) | 映射 | 把两个空序合并为一个有序空序 |
| [意向性空序登出合并映射](IntentionalityEmptyOrderLogoutMerge.md) | 映射 | 归还位置并对空序执行合并整理 |
| [意向性空序分段映射](IntentionalityEmptyOrderSubsection.md) | 映射 | 把空序切分为子段 |
| [意向性空序分段特征新建映射](NewIntentionalityEmptyOrderSubsectionFeature.md) | 映射 | 在空元素上构造空序分段特征结构 |

***

## 意向性超索引管理器组：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [意向性超索引管理器结构](IntentionalitySuperIndexManager_Struct.md) | 命名空间 | 意向性超索引管理器的结构位置常量 |
| [意向性超索引管理器集合](IntentionalitySuperIndexManager.md) | 集合 | 所有意向性超索引管理器元素组成的集合 |
| [意向性超索引管理器新建映射](NewIntentionalitySuperIndexManager.md) | 映射 | 在空元素上构造一个空的意向性超索引管理器 |
| [意向性超索引管理器文件读取映射](FstreamReadIntentionalitySuperIndexManager.md) | 映射 | 从文件读取管理器并重建 |
| [信息元素重建意向性超索引管理器映射](InformationToIntentionalitySuperIndexManager.md) | 映射 | 把结构信息元素重建为意向性超索引管理器 |
| [意向性超索引管理器展开为信息元素映射](IntentionalitySuperIndexManagerToInformation.md) | 映射 | 把管理器的页数、页序与各页条目展开为结构信息元素 |
| [意向性超索引管理器参数更新映射](IntentionalitySuperIndexManagerUpdateParameter.md) | 映射 | 按参数信息更新管理器各页的空位数与分配数 |
| [意向性超索引管理器检索映射](IntentionalitySuperIndexManagerSelect.md) | 映射 | 按超索引检索其所在页与位置 |
| [意向性超索引管理器加权筛选映射](IntentionalitySuperIndexManagerWeightedScreen.md) | 映射 | 按权重条件筛选管理器中的页与位置 |
| [意向性超索引管理器合并序映射](IntentionalitySuperIndexManagerMergeOrder.md) | 映射 | 把两个管理器的序信息合并为一个管理器 |
| [意向性超索引管理器合并页映射](IntentionalitySuperIndexManagerMergePage.md) | 映射 | 合并整理指定页的空闲条目 |
| [意向性超索引管理器页登录映射](LoginPageIntentionalitySuperIndexManager.md) | 映射 | 从管理器中登录一个空闲条目并返回其页号与位置 |
| [意向性超索引管理器页登出映射](LogoutPageIntentionalitySuperIndexManager.md) | 映射 | 归还指定条目使其重新成为空闲条目 |
| [意向性超索引管理器分段映射](PageIntentionalitySuperIndexManagerSubsection.md) | 映射 | 把管理器的页结构切分为子段 |
| [意向性超索引管理器文件写入映射](FstreamWriteIntentionalitySuperIndexManager.md) | 映射 | 把管理器序列化写入文件 |
| [意向性超索引管理器首个超索引映射](FirstSuperIndexIntentionalitySuperIndexManager.md) | 映射 | 获取管理器中登记的首个超索引 |
| [意向性超索引管理器下一个超索引映射](NextSuperIndexIntentionalitySuperIndexManager.md) | 映射 | 把登记位置推进到下一个超索引 |
| [意向性超索引管理器越界测试映射](OutTestIntentionalitySuperIndexManager.md) | 映射 | 测试地址相对管理器页结构是否越界 |
| [意向性超索引管理器释放映射](ReleaseIntentionalitySuperIndexManager.md) | 映射 | 释放管理器及其持有的全部页序资源 |

***

## 登录特征组：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [意向性超索引管理器登录特征结构](IntentionalitySuperIndexManagerLoginFeature.md) | 命名空间 | 意向性超索引管理器登录特征的结构常量 |
| [意向性超索引管理器登录特征新建映射](NewIntentionalitySuperIndexManagerLoginFeature.md) | 映射 | 在空元素上构造登录特征结构（4 元素序） |
| [意向性超索引管理器登录特征释放映射](ReleaseIntentionalitySuperIndexManagerLoginFeature.md) | 映射 | 释放登录特征结构 |

## 一二合并特征组：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [意向性超索引一二合并特征结构](IntentionalitySuperIndex_1_2_MergeFeature.md) | 命名空间 | 意向性超索引一二合并特征的结构常量 |
| [意向性超索引一二合并特征新建映射](NewIntentionalitySuperIndex_1_2_MergeFeature.md) | 映射 | 在空元素上构造一二合并特征结构（4 元素序） |
| [意向性超索引一二合并特征释放映射](ReleaseIntentionalitySuperIndex_1_2_MergeFeature.md) | 映射 | 释放一二合并特征结构 |

## 登出特征组：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [意向性超索引管理器登出特征结构](IntentionalitySuperIndexManagerLogoutFeature.md) | 命名空间 | 意向性超索引管理器登出特征的结构常量 |
| [意向性超索引管理器登出特征新建映射](NewIntentionalitySuperIndexManagerLogoutFeature.md) | 映射 | 在空元素上构造登出特征结构（5 元素序） |
| [意向性超索引管理器登出特征释放映射](ReleaseIntentionalitySuperIndexManagerLogoutFeature.md) | 映射 | 释放登出特征结构 |

***

## 超索引序组：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [意向性超索引序集合](IntentionalitySuperIndexOrder.md) | 集合 | 所有意向性超索引序元素组成的集合 |

***

## 意向性构造组（IntentionalityCreater）：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [意向性构造命名空间](IntentionalityCreater.md) | 命名空间 | 提供一步到位构造意向性管理基础设施的构造映射 |
| [意向性超索引管理器初始化信息构造映射](CreateSuperIndexManagerInitializeInformation.md) | 映射 | 构造意向性超索引管理器的初始化信息元素 |
| [意向性超索引管理器构造映射](CreateSuperIndexManagerIntentionality.md) | 映射 | 一步构造完整的意向性超索引管理器 |
| [首个意向性空序构造映射](CreateFirstEmptyOrder.md) | 映射 | 构造初始空序 |
| [意向性首个空序构造映射](CreateFirstEmptyOrderIntentionality.md) | 映射 | 构造初始空序并创建与之关联的首个意向性对象 |
| [预制数据意向性对象构造映射](CreateCannedDataIntentioanlityObject.md) | 映射 | 构造预制数据意向性对象（Map 符号保留历史拼写） |
| [意向性超索引字典构造映射](CreateSuperIndexIntentionalityDictionaries.md) | 映射 | 一步构造意向性超索引字典 |

***

## 意向性超索引字典组：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [意向性超索引字典结构](IntentionalitySuperIndexDictionaries_Struct.md) | 命名空间 | 意向性超索引字典的结构位置常量 |
| [意向性超索引字典集合](IntentionalitySuperIndexDictionaries.md) | 集合 | 所有意向性超索引字典元素组成的集合 |
| [意向性超索引字典新建映射](NewIntentionalitySuperIndexDictionaries.md) | 映射 | 在空元素上构造一个空的意向性超索引字典 |
| [意向性超索引字典超索引设置映射](SetIntentionalitySuperIndexDictionariesSuperIndex.md) | 映射 | 把超索引写入字典的超索引位置 |
| [意向性超索引字典序设置映射](SetIntentionalitySuperIndexDictionariesOrder.md) | 映射 | 把序信息写入字典的序位置 |
| [意向性超索引字典系统登录映射](SystemLoginIntentionalitySuperIndexDictionaries.md) | 映射 | 把字典登记入系统字典表单 |
| [意向性超索引字典系统登出映射](SystemLogoutIntentionalitySuperIndexDictionaries.md) | 映射 | 把字典从系统字典表单中注销 |
| [意向性超索引字典文件写入映射](FstreamPutIntentionalitySuperIndexDictionaries.md) | 映射 | 把字典序列化写入文件 |
| [意向性超索引字典释放映射](ReleaseIntentionalitySuperIndexDictionaries.md) | 映射 | 释放字典及其内部资源 |
| [意向性超索引字典成员测试映射](IntentionalitySuperIndexDictionariesInTest.md) | 映射 | 测试超索引是否属于指定字典 |
| [意向性超索引字典转信息映射](IntentionalitySuperIndexDictionariesToInformation.md) | 映射 | 把字典展开为结构信息元素 |
| [信息转意向性超索引字典映射](InformationToIntentionalitySuperIndexDictionaries.md) | 映射 | 把结构信息元素重建为意向性超索引字典 |
| [意向性超索引管理器转字典映射](IntentionalitySuperIndexManagerToDictionaries.md) | 映射 | 从管理器中提取完整的意向性超索引字典 |

***

## 意向性超索引字典管理器组：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [意向性超索引字典管理器结构](IntentionalitySuperIndexDictionariesManager_Struct.md) | 命名空间 | 意向性超索引字典管理器的结构位置常量 |
| [意向性超索引字典管理器集合](IntentionalitySuperIndexDictionariesManager.md) | 集合 | 所有意向性超索引字典管理器元素组成的集合 |
| [意向性超索引字典管理器新建映射](NewIntentionalitySuperIndexDictionariesManager.md) | 映射 | 在空元素上构造一个空的意向性超索引字典管理器 |
| [意向性超索引字典管理器释放映射](ReleaseIntentionalitySuperIndexDictionariesManager.md) | 映射 | 释放字典管理器及其内部资源 |

***

## 意向性路径攀升器组：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [意向性路径攀升器结构](IntentionalityPathAscender_Struct.md) | 命名空间 | 意向性路径攀升器的结构位置常量 |
| [意向性路径攀升器集合](IntentionalityPathAscender.md) | 集合 | 所有意向性路径攀升器元素组成的集合 |
| [意向性路径攀升器新建映射](NewIntentionalityPathAscender.md) | 映射 | 在空元素上构造一个空的意向性路径攀升器 |
| [意向性路径攀升器元素环境检索器设置映射](SetIntentionalityPathAscenderEES.md) | 映射 | 把元素环境检索器写入攀升器的检索器位置 |
| [意向性路径攀升器子元素环境检索器设置映射](SetIntentionalityPathAscenderSubEES.md) | 映射 | 把子元素环境检索器写入攀升器的子检索器位置 |
| [意向性路径攀升器起点设置映射](SetIntentionalityPathAscenderFirst.md) | 映射 | 把意向性对象设置为路径起点 |
| [意向性路径攀升器下一个序设置映射](SetIntentionalityPathAscenderNextOrder.md) | 映射 | 把序信息写入攀升器的下一个序位置 |
| [意向性路径攀升器更新映射](UpdateIntentionalityPathAscender.md) | 映射 | 按当前指向推进路径并刷新攀升器内部信息 |
| [意向性路径攀升器读取映射](ReadIntentionalityPathAscender.md) | 映射 | 读取攀升器当前指向的意向性对象 |
| [意向性路径攀升器释放映射](ReleaseIntentionalityPathAscender.md) | 映射 | 释放攀升器及其持有的全部资源 |

***

## 案例：

| 名称 | 说明 |
| --- | --- |
| [意向性攀升器案例](IntentionalityAscender_Case.md) | 本例覆盖意向性攀升器的完整流程：新建攀升器、写入元素序与检索器、元素序与文本流互转、推进攀升器、清零复位与释放，演示一个攀升器从构造到归还的完整生命周期。攀升器的各位置含义见[IntentionalityAscender_Struct](IntentionalityAscender_Struct.md)。 |
| [意向性空序案例](IntentionalityEmptyOrder_Case.md) | 本例覆盖意向性空序的完整流程：新建与释放空序、登录与登出位置、加权筛选与合并、切分子段、以及空序与文件、结构信息之间的互转，演示空序作为地址分配回收核心结构的一次完整使用。空序的集合定义见[IntentionalityEmptyOrder](IntentionalityEmptyOrder.md)。 |
| [意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md) | 本例覆盖意向性超索引管理器的完整流程：构造与释放管理器、页登录与页登出分配回收条目、按超索引检索地址信息、以首个/下一个超索引配对遍历、合并与分段整理页结构、以及管理器与文件、结构信息之间的互转，演示管理器以页为单位管理超索引地址信息的一次完整使用。管理器的集合定义见[IntentionalitySuperIndexManager](IntentionalitySuperIndexManager.md)，结构位置常量见[IntentionalitySuperIndexManager_Struct](IntentionalitySuperIndexManager_Struct.md)。 |
| [意向性超索引字典案例](IntentionalitySuperIndexDictionaries_Case.md) | 本例覆盖意向性超索引字典的完整流程：一步构造与新建、写入超索引与序、系统登录与登出、成员测试、字典与结构信息互转、由意向性超索引管理器提取字典以及文件写入，演示一本字典从构造到归还的完整生命周期。字典的集合定义见[IntentionalitySuperIndexDictionaries](IntentionalitySuperIndexDictionaries.md)，各位置含义见[IntentionalitySuperIndexDictionaries_Struct](IntentionalitySuperIndexDictionaries_Struct.md)。 |
| [意向性路径攀升器案例](IntentionalityPathAscender_Case.md) | 本例覆盖意向性路径攀升器的完整流程：新建与释放攀升器、设置路径起点与两个检索器、写入下一个序、更新推进路径、读取当前意向性对象，演示一个攀升器从构造到归还的完整生命周期。攀升器的集合定义见[IntentionalityPathAscender](IntentionalityPathAscender.md)，各位置含义见[IntentionalityPathAscender_Struct](IntentionalityPathAscender_Struct.md)。 |

***

在使用意向性管理模块时，可以使用源文件"All_Intentionality.h"直接引入所有源文件，也可以单独引入"Intentionality_Manager.h"使用。
