# ElementEnvironment

***

该源文件负责提供关于元素环境的定义以及一系列的操作方法。并且按照总元素环境检索器的接口标准进行适配。

***

## 元素环境定义：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [元素环境](ElementEnvironmentNamespace.md) | 命名空间 | 定义元素环境的结构解析位置常量 |
| [元素环境集合](ElementEnvironmentSet.md) | 集合 | 所有元素环境元素的集合 |

***

## 元素环境基础指令：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [新建元素环境映射](NewElementEnvironment.md) | 映射 | 在空元素上构造元素环境（含默认参数） |
| [元素环境设置超索引映射](ElementEnvironmentSetSuperIndex.md) | 映射 | 将超索引元素转交到元素环境对应位置 |
| [元素环境获取超索引映射](ElementEnvironmentGetSuperIndex.md) | 映射 | 从元素环境获取超索引元素 |
| [元素环境扩容映射](ElementEnvironmentExpand.md) | 映射 | 对元素环境扩容 |
| [元素环境读取元素映射](ElementEnvironmentReadElement.md) | 映射 | 按地址读取元素环境中的元素 |
| [元素环境获取元素映射](ElementEnvironmentGetElement.md) | 映射 | 按地址获取元素环境中的元素 |
| [元素环境存放元素映射](ElementEnvironmentPutElement.md) | 映射 | 按地址将元素存入元素环境 |
| [元素环境缩容映射](ElementEnvironmentRetain.md) | 映射 | 按指定数量对元素环境缩容 |
| [释放元素环境映射](ReleaseElementEnvironment.md) | 映射 | 释放元素环境元素 |

***

## 注册元素环境指令集：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [元素环境注册映射映射](ElementEnvironmentLoginMap.md) | 映射 | 构造并赋值元素环境相关映射集 |

***

## 补充文档：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [元素环境下一地址映射](ElementEnvironmentNextAddress.md) | 映射 | 计算元素环境的下一可分配地址 |
