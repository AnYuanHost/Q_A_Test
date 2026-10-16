# ElementEnvironment

***

该源文件负责提供关于元素环境的定义以及一系列的操作方法。并且按照总元素环境检索器的接口标准进行适配。

***

## 元素环境定义：

| 指令 | 说明 |
| --- | --- |
| [ElementEnvironment](ElementEnvironmentNamespace.md) | 命名空间ElementEnvironment |
| [ElementEnvironmentSet](ElementEnvironmentSet.md) | 集合ElementEnvironmentSet为所有元素环境的集合 |

***

## 元素环境基础指令：

| 指令 | 说明 |
| --- | --- |
| [NewElementEnvironment](NewElementEnvironment.md) | 映射NewElementEnvironment接受空元素集合（NullElementSet）为定义域和值域 |
| [ElementEnvironmentSetSuperIndex](ElementEnvironmentSetSuperIndex.md) | 映射ElementEnvironmentSetSuperIndex接受超索引集合（SuperIndexSet）为定义域，元素环境集合（ElementEnvironmentSet）为值域 |
| [ElementEnvironmentGetSuperIndex](ElementEnvironmentGetSuperIndex.md) | 映射ElementEnvironmentGetSuperIndex接受元素环境集合（ElementEnvironmentSet）为定义域，空元素集合（NullElementSet）为值域 |
| [ElementEnvironmentExpand](ElementEnvironmentExpand.md) | 映射ElementEnvironmentExpand接受空元素集合（NullElementSet）为定义域，元素环境集合（ElementEnvironmentSet）为值域 |
| [ElementEnvironmentReadElement](ElementEnvironmentReadElement.md) | 映射ElementEnvironmentReadElement接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [ElementEnvironmentGetElement](ElementEnvironmentGetElement.md) | 映射ElementEnvironmentHGetElement接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域 |
| [ElementEnvironmentPutElement](ElementEnvironmentPutElement.md) | 映射ElementEnvironmentPutElement接受元素序偶集合（OrderedPairSet）为定义域，元素环境集合（ElementEnvironmentSet）为值域 |
| [ElementEnvironmentRetain](ElementEnvironmentRetain.md) | 映射ElementEnvironmentRetain接受无符号整型集合（UIntSet）为定义域，元素环境集合（ElementEnvironmentSet）为值域 |
| [ReleaseElementEnvironment](ReleaseElementEnvironment.md) | 映射ReleaseElementEnvironment接受空元素集合（NullElementSet）为定义域，元素环境集合（ElementEnvironmentSet）为值域 |

***

## 注册元素环境指令集：

| 指令 | 说明 |
| --- | --- |
| [ElementEnvironmentLoginMap](ElementEnvironmentLoginMap.md) | 映射ElementEnvironmentLoginMap接受空元素集合（NullElementSet）为定义域和值域 |

***

## 补充文档：

| 指令 | 说明 |
| --- | --- |
| [ElementEnvironmentNextAddress](ElementEnvironmentNextAddress.md) | 映射ElementEnvironmentNextAddress接受元素环境集合（ElementEnvironmentSet）为定义域，无符号整型集合（&UIntSet）为值域 |
