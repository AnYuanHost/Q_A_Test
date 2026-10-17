# EES_Base

***

该源文件作为整个元素环境管理的主文件，负责定义总元素环境检索器的结构和方法。同时，也会针对元素环境、子元素环境检索器实例等提供接口标准。接口标准有专用的文档，本文档不再赘述。

***

## 总元素环境检索器结构与定义：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [总元素环境检索器基本结构](EES_Base_Struct.md) | 命名空间 | 定义总元素环境检索器的结构解析位置常量 |
| [总元素环境检索器集合](ElementEnvironmentSearcher.md) | 集合 | 所有总元素环境检索器元素的集合 |
| [新建总元素环境检索器映射](NewElementEnvironmentSearcher.md) | 映射 | 在空元素上构造总元素环境检索器 |

***

## 超索引检索器基础结构与指令：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [超索引检索器](SuperIndexSearcher.md) | 集合 | 所有超索引检索器元素的集合 |
| [新建超索引检索器参数映射](NewEES_SISParameter.md) | 映射 | 构建超索引检索器运行所需参数并初始化 |
| [新建超索引检索器序列映射](NewEES_SISOrder.md) | 映射 | 在空元素上构建超索引检索器元素 |
| [新建超索引检索器映射映射](NewEES_SISMap.md) | 映射 | 在空元素上构建超索引检索器运行所需指令 |

***

## 元素环境操作指令：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [存总元素环境检索器元素环境映射](PutEESEnvironment.md) | 映射 | 向总元素环境检索器写入元素环境 |
| [获取总元素环境检索器元素环境映射](GetEESEnvironment.md) | 映射 | 从总元素环境检索器指定位置获取元素环境 |

***

## 子元素环境检索器管理操作指令：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [注册子元素环境检索器映射](LoginSubEESEES.md) | 映射 | 按索引在总元素环境检索器中注册子元素环境检索器 |
| [注销子元素环境检索器映射](LogoutSubEESEES.md) | 映射 | 在总元素环境检索器中注销索引对应的子元素环境检索器 |

***

## 总元素环境检索器操作元素映射：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [总元素环境检索器注册映射](LoginElementEnvironmentSearcher.md) | 映射 | 按索引信息在总元素环境检索器中完成注册 |
| [总元素环境检索器注销映射](LogoutElementEnvironmentSearcher.md) | 映射 | 按索引信息在总元素环境检索器中完成检索并注销 |
| [总元素环境检索器读取映射](ReadElementEnvironmentSearcher.md) | 映射 | 按索引检索并将对应元素引用读取到空元素 |
| [总元素环境检索器获取映射](GetElementEnvironmentSearcher.md) | 映射 | 按索引检索并将对应元素转交到空元素 |
| [总元素环境检索器存放映射](PutElementEnvironmentSearcher.md) | 映射 | 按索引将待操作元素存入总元素环境检索器对应位置 |
| [总元素环境检索器占用](OccupyElementEnvironmentSearcher.md) | 映射 | 将总元素环境检索器对应元素设置为占用状态 |
| [总元素环境检索器解除占用](RelieveOccupyElementEnvironmentSearcher.md) | 映射 | 将总元素环境检索器对应元素设置为非占用状态 |

***

## 总元素环境检索器基础指令：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [总元素环境检索器排序映射](SortElementEnvironmentSearcher.md) | 映射 | 对总元素环境检索器元素完成排序 |
| [总元素环境检索器碎片整理映射](DefragmentElementEnvironmnent.md) | 映射 | 对总元素环境检索器执行碎片整理 |
| [总元素环境检索器缩容映射](RetainElementEnvironmentSearcher.md) | 映射 | 对总元素环境检索器元素缩容 |
| [释放总元素环境检索器映射](ReleaseElementEnvironmentSearcher.md) | 映射 | 释放总元素环境检索器元素 |

***

## 超索引检索器相关指令：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [超索引检索器检索映射](SelectEES_SIS.md) | 映射 | 按超索引信息检索并返回地址 |
| [超索引检索器下一超索引映射](NextEES_SIS.md) | 映射 | 获取下一个可分配的超索引信息 |
| [超索引检索器注册映射](LoginEES_SIS.md) | 映射 | 在超索引检索器上注册并建立映射关系 |
| [超索引检索器注销映射](LogoutEES_SIS.md) | 映射 | 注销超索引信息并返回对应映射信息 |
| [超索引检索器排序映射](SortEES_SIS.md) | 映射 | 对绑定的超索引检索器排序 |
| [超索引检索器碎片整理映射](DefragmentEES_SIS.md) | 映射 | 对绑定的超索引检索器碎片整理 |
| [超索引检索器获取超索引映射](GetSuperIndexEES_SIS.md) | 映射 | 按地址获取超索引信息 |
| [总元素环境检索器获取无符号整型映射](GetUIntEES_SIS.md) | 映射 | 按地址获取无符号整型元素 |
| [总元素环境检索器读取无符号整型映射](ReadUIntEES_SIS.md) | 映射 | 按地址读取无符号整型元素 |
| [超索引检索器存超索引映射](PutSuperIndexEES_SIS.md) | 映射 | 按地址存放超索引信息 |
| [超索引检索器存无符号整型映射](PutUIntEES_SIS.md) | 映射 | 按地址存放无符号整型元素 |
| [超索引检索器获取最小超索引映射](EES_SISGetLeastSuperIndex.md) | 映射 | 计算碎片整理后允许的最小超索引 |
| [超索引检索器缩容映射](EES_SISRetain.md) | 映射 | 对绑定的超索引检索器缩容 |
| [超索引检索器下一地址映射](EES_SISAddressNext.md) | 映射 | 计算超索引检索器地址的下一地址 |
| [释放超索引检索器映射](ReleaseEES_SIS.md) | 映射 | 释放绑定的超索引检索器容器 |

***

## 补充文档：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [EES_Base_Case](EES_Base_Case.md) | - | - |
| [超索引检索器首个空地址映射](EES_SISFEAddress.md) | 映射 | - |
| [元素占用代码命名空间](ElementOccupy_Code.md) | 命名空间 | 定义元素占用状态代码常量 |
