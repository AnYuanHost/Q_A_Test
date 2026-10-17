# File_Base

***

该源文件提供文件相关的基础操作，主要建立在对std::fstream基础操作的封装之上。

***

## Fstream封装

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [获取文件元素宏](GetFstreamElement.md) | 宏 | 把封装的 Fstream 元素解析成 std::fstream 类 |
| [文件类型元素集合](FstreamSet.md) | 集合 | 所有封装 std::fstream 的文件类型元素组成的集合 |

***

## 文件元素基础操作1

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [新建文件映射](NewFstream.md) | 映射 | 在空元素上构造一个文件类型元素 |
| [打开文件映射](OpenFstream.md) | 映射 | 按默认参数打开文件元素 |
| [有参打开文件映射](OpenFstreamByPara.md) | 映射 | 按指定参数打开文件元素 |
| [关闭文件映射](CloseFstream.md) | 映射 | 关闭已打开的文件元素 |

***

## 文件元素指针操作

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [设置文件写偏移映射](SetFstreamSeekP.md) | 映射 | 设置文件写偏移 |
| [获取文件写偏移映射](GetFstreamTellP.md) | 映射 | 获取文件写偏移 |
| [设置文件读偏移映射](SetFstreamSeekG.md) | 映射 | 设置文件读偏移 |
| [获取文件读偏移映射](GetFstreamTellG.md) | 映射 | 获取文件读偏移 |

***

## 元素在文件中的操作

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [从文件获取元素映射](GetElementFromFstream.md) | 映射 | 从文件中按格式读出一个元素并在空元素上完成构造 |
| [置元素于文件映射](PutElementToFstream.md) | 映射 | 把全集元素按结构拷贝写入文件 |

***

## 文件元素基础操作2

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [清理文件映射](ClearFstream.md) | 映射 | 清除文件中的全部信息 |
| [释放文件映射](ReleaseFstream.md) | 映射 | 释放文件元素 |

***

## 补充文档：

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [GetStreamFromFstream](GetStreamFromFstream.md) | - | - |
