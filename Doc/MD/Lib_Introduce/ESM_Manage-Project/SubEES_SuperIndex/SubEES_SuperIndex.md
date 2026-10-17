# SubEES_SuperIndex

***

超索引子元素环境检索器是子元素环境检索器的一种，其负责管理超索引信息到中间层超索引信息的映射关系。超索引子元素环境检索器不允许重复的映射关系，其按照超索引大小顺序排序，属于变长容器。

***

## 超索引子元素环境检索器结构与定义：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [超索引子元素环境检索器结构命名空间](SuperIndexSubEES_Struct.md) | 命名空间 | 确定超索引子元素环境检索器的结构解析位置常量 |
| [超索引子元素环境检索器集合](SuperIndexSubEES.md) | 集合 | 所有超索引子元素环境检索器元素的集合 |

***

## 超索引子元素环境检索器基础指令一：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [超索引子元素环境检索器检索映射](SelectSuperIndexSubEES.md) | 映射 | 按超索引信息检索并返回地址 |
| [超索引子元素环境检索器排序映射](SortSuperIndexSubEES.md) | 映射 | 对超索引子元素环境检索器排序 |
| [新建超索引子元素环境检索器默认参数映射](NewSuperIndexSubEESDefaultParameter.md) | 映射 | 构造默认的超索引子元素环境检索器参数 |
| [新建超索引子元素环境检索器映射](NewSuperIndexSubEES.md) | 映射 | 按元素序列中的参数构造超索引子元素环境检索器 |

***

## 超索引子元素环境检索器数据操作指令：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [超索引子元素环境检索器获取信息映射](GetInformationSuperIndexSubEES.md) | 映射 | 按地址获取检索超索引信息 |
| [超索引子元素环境检索器获取超索引映射](GetSuperIndexSuperIndexSubEES.md) | 映射 | 按地址获取超索引信息 |
| [超索引子元素环境检索器存入信息映射](PutInformationSuperIndexSubEES.md) | 映射 | 按地址写入信息 |
| [超索引子元素环境检索器存入超索引信息映射](PutSuperIndexSuperIndexSubEES.md) | 映射 | 按地址写入超索引信息 |
| [超索引子元素环境检索器读取信息映射](ReadInformationSuperIndexSubEES.md) | 映射 | 按地址读取检索超索引信息 |
| [超索引子元素环境检索器超索引读取映射](ReadSuperIndexSuperIndexSubEES.md) | 映射 | 按地址读取超索引信息 |
| [超索引子元素环境检索器获取占用映射](GetOccupySuperIndexSubEES.md) | 映射 | 按地址获取占用情况 |
| [超索引子元素环境检索器设置占用映射](SetOccupySuperIndexSubEES.md) | 映射 | 按地址设置占用信息 |

***

## 超索引子元素环境检索器基础指令二：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [超索引子元素环境检索器注册映射](LoginSuperIndexSubEES.md) | 映射 | 按超索引信息注册并插入排序 |
| [超索引子元素环境检索器注销映射](LogoutSuperIndexSubEES.md) | 映射 | 检索并注销超索引，抛出对应超索引 |
| [超索引子元素环境检索器碎片整理映射](DefragmentSuperIndexSubEES.md) | 映射 | 对超索引子元素环境检索器碎片整理 |
| [超索引子元素环境检索器缩容映射](RetainSuperIndexSubEES.md) | 映射 | 对超索引子元素环境检索器缩容 |

***

## 超索引子元素环境检索器地址操作指令：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [超索引子元素环境检索器首个置空地址映射](FirstEmptySuperIndexSubEES.md) | 映射 | 获取首个置懒槽的地址 |
| [超索引子元素环境检索器下一地址映射](NextAddressSuperIndexSubEES.md) | 映射 | 计算超索引子检索器的下一地址 |

  
***

## 超索引子元素环境检索器基础指令三：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [超索引子元素环境检索器释放映射](ReleaseSuperIndexSubEES.md) | 映射 | 释放超索引子元素环境检索器 |

***

## 超索引子元素环境检索器越界测试指令：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [超索引子元素环境检索器越界测试映射](SuperIndexSubEESOutTest.md) | 映射 | 判断超索引子检索器地址是否越界 |

***

## 超索引子元素环境检索器指令集注册指令：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [超索引子元素环境检索器注册指令集映射](LoginSuperIndexSubEESMapSet.md) | 映射 | 构造超索引子元素环境检索器指令包 |
