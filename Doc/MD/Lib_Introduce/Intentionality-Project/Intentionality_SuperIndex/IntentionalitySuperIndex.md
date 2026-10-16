# IntentionalitySuperIndex

***

命名空间IntentionalitySuperIndex定义了现行意向性超索引类型编号常量（constexpr unsigned int），用于判定静态库元素的结构类型。

***

| 常量 | 值 | 说明 |
| --- | --- | --- |
| ISIOffset | 0xffff + 1 | 现行偏移基准，较旧版大 1 |
| ISIMI | 0 | 系统内置结构〈ISIMI〉的类型编号 |
| One_SuperIndex | 1 | 单一超索引 |
| CannedData | 2 | 预制数据 |
| SIIDI | 3 | 系统内置结构〈SIIDI〉的类型编号 |
| ShowStream | 4 | 显示流 |
| QAFMSMI | 5 | 系统内置结构〈QAFMSMI〉的类型编号 |
| QAFMSNSI | 6 | 系统内置结构〈QAFMSNSI〉的类型编号 |
| QAFMSILI | 7 | 系统内置结构〈QAFMSILI〉的类型编号 |
| QAFMSDI | 8 | 系统内置结构〈QAFMSDI〉的类型编号 |
| SBRQAFM | 9 | 系统内置结构〈SBRQAFM〉的类型编号 |
| SARQAFM | 10 | 系统内置结构〈SARQAFM〉的类型编号 |
| SRPI | 11 | 系统内置结构〈SRPI〉的类型编号 |
| FileAddress | 12 | 文件地址 |
| SLIPI | 13 | 系统内置结构〈SLIPI〉的类型编号 |
| SRCI | 15 | 系统内置结构〈SRCI〉的类型编号 |
| LanguageFile | 19 | 语言文件 |
| SLOPI | 25 | 系统内置结构〈SLOPI〉的类型编号 |
| SDMS | 34 | 系统内置结构〈SDMS〉的类型编号 |
| SolutionSet | 35 | 解集 |
| SDS | 36 | 系统内置结构〈SDS〉的类型编号 |
| E_Belong_S | 38 | 元素归属集合 |
| SolutionInformationManager | 39 | 解信息管理器 |
| SLEMMapInformation | 41 | SLEM映射信息 |
| ParameterFile | 44 | 参数文件 |

现行编号不连续，空缺编号（如 14、16～18、20～24、26～33、37、40、42～43）为预留或历史保留，不代表不存在对应结构。引用写法为 `IntentionalitySuperIndex::CannedData`，命名空间位于 Q_A 命名空间内。

***

典型用法为将元素结构的首位置与类型编号比较，以判定该元素的结构类型：

```C++
if (GetEleOrder(TestElement, 0) == IntentionalitySuperIndex::CannedData)
{
	// TestElement 为预制数据结构
}
```

通过宏 GetEleOrder 读取元素结构的首位置（序号 0），与本命名空间给出的类型编号比对，相等即表示该元素属于对应的系统内置结构。

***

本命名空间是旧版 Intentionality_SuperIndex_Old 的现行替代，偏移基准由 0xffff 提升为 0xffff + 1（即 0x10000），编号经重新规划且不再连续，两版编号不可混用，旧版编号见 [Intentionality_SuperIndex_Old](Intentionality_SuperIndex_Old.md)。本命名空间仅提供编号常量，不涉及内存管理。
