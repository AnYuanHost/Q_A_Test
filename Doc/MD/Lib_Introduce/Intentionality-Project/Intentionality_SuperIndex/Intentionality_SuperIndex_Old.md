# Intentionality_SuperIndex_Old

***

命名空间Intentionality_SuperIndex_Old定义了旧版意向性超索引类型编号常量（constexpr unsigned int），用于判定静态库元素的结构类型。

***

| 常量 | 值 | 说明 |
| --- | --- | --- |
| ISIOffset | 0xffff | 旧版偏移基准 |
| EmptyIntentionality | 0 | 意向性空类型 |
| SBIIAOI | 1 | 系统内置结构〈SBIIAOI〉的类型编号 |
| CannedData | 2 | 预制数据 |
| SBCNMI | 3 | 系统内置结构〈SBCNMI〉的类型编号 |
| SBCNSI | 4 | 系统内置结构〈SBCNSI〉的类型编号 |
| SBCNII | 5 | 系统内置结构〈SBCNII〉的类型编号 |
| SBCNILI | 6 | 系统内置结构〈SBCNILI〉的类型编号 |
| SBILI | 7 | 系统内置结构〈SBILI〉的类型编号 |
| SBIAOI | 8 | 系统内置结构〈SBIAOI〉的类型编号 |
| SBCNISI | 9 | 系统内置结构〈SBCNISI〉的类型编号 |
| SBCNISEESI | 10 | 系统内置结构〈SBCNISEESI〉的类型编号 |
| SBCNIII | 11 | 系统内置结构〈SBCNIII〉的类型编号 |
| SBILSI | 12 | 系统内置结构〈SBILSI〉的类型编号 |
| SBILSEESI | 13 | 系统内置结构〈SBILSEESI〉的类型编号 |
| SBILII | 14 | 系统内置结构〈SBILII〉的类型编号 |
| GPIS | 15 | 系统内置结构〈GPIS〉的类型编号 |
| GPISEES | 16 | 系统内置结构〈GPISEES〉的类型编号 |
| GPII | 17 | 系统内置结构〈GPII〉的类型编号 |
| SBICNMI | 18 | 系统内置结构〈SBICNMI〉的类型编号 |
| SBICNSI | 19 | 系统内置结构〈SBICNSI〉的类型编号 |
| SBICNII | 20 | 系统内置结构〈SBICNII〉的类型编号 |
| SBICNILI | 21 | 系统内置结构〈SBICNILI〉的类型编号 |
| SBICNISI | 22 | 系统内置结构〈SBICNISI〉的类型编号 |
| SBICNISEESI | 23 | 系统内置结构〈SBICNISEESI〉的类型编号 |
| SBICNIII | 24 | 系统内置结构〈SBICNIII〉的类型编号 |
| HDC | 25 | 系统内置结构〈HDC〉的类型编号 |
| SBIILI | 26 | 系统内置结构〈SBIILI〉的类型编号 |
| SBIILSI | 27 | 系统内置结构〈SBIILSI〉的类型编号 |
| SBIILSEESI | 28 | 系统内置结构〈SBIILSEESI〉的类型编号 |
| SBIILII | 29 | 系统内置结构〈SBIILII〉的类型编号 |
| SBRI | 30 | 系统内置结构〈SBRI〉的类型编号 |
| SBRISI | 31 | 系统内置结构〈SBRISI〉的类型编号 |
| SBRISEESI | 32 | 系统内置结构〈SBRISEESI〉的类型编号 |
| SBRIII | 33 | 系统内置结构〈SBRIII〉的类型编号 |
| SBRLI | 34 | 系统内置结构〈SBRLI〉的类型编号 |
| SBRLISI | 35 | 系统内置结构〈SBRLISI〉的类型编号 |
| SBRLISEESI | 36 | 系统内置结构〈SBRLISEESI〉的类型编号 |
| SBRLIII | 37 | 系统内置结构〈SBRLIII〉的类型编号 |
| GAIO | 38 | 系统内置结构〈GAIO〉的类型编号 |
| ISIAI | 39 | 系统内置结构〈ISIAI〉的类型编号 |

旧版编号连续取值，从 EmptyIntentionality（0）至 ISIAI（39），每个编号对应一种系统内置结构。引用写法为 `Intentionality_SuperIndex_Old::CannedData`，命名空间位于 Q_A 命名空间内。

***

典型用法为将元素结构的首位置与类型编号比较，以判定该元素的结构类型：

```C++
if (GetEleOrder(TestElement, 0) == Intentionality_SuperIndex_Old::CannedData)
{
	// TestElement 为预制数据结构
}
```

通过宏 GetEleOrder 读取元素结构的首位置（序号 0），与本命名空间给出的类型编号比对，相等即表示该元素属于对应的系统内置结构。

***

旧版编号以 ISIOffset（0xffff）为偏移基准，现行版本以 IntentionalitySuperIndex 命名空间为准，见 [IntentionalitySuperIndex](IntentionalitySuperIndex.md)。本命名空间仅提供编号常量，不涉及内存管理。
