# CoreKRSObject_Struct

***

命名空间CoreKRSObject_Struct定义了核心KRS对象结构位置常量（constexpr unsigned int），其成员如下：

| 常量 | 值 | 含义 |
| --- | --- | --- |
| CoreKRSObject_SuperIndex | 0 | 超索引位置 |
| CoreKRSObject_Dll | 1 | 动态库位置（Windows动态库元素 WinDll） |
| CoreKRSObject_Dictionaries | 2 | 符号表位置（历史命名，语义即符号表） |
| CoreKRSObject_SubEES | 3 | 子元素环境检索器位置 |
| CoreKRSObject_LoginSuperIndex | 4 | 登录超索引位置 |
| CoreKRSObject_LogoutSuperIndex | 5 | 登出超索引位置 |
| CoreKRSObject_OrderSize | 6 | 位置数量 |

核心KRS对象元素共 6 个位置（CoreKRSObject_OrderSize=6），依次为超索引、动态库、符号表、子元素环境检索器、登录超索引、登出超索引。通过宏 GetEleOrder(元素, 序号) 读取各位置，序号即上表常量，逐层访问示例见本节案例。位置 CoreKRSObject_Dictionaries 为**历史命名**：该槽位承载的核心元素是符号表，语义即符号表槽位，名称沿用早期草案而原样保留，详见[CoreKRSObject](CoreKRSObject.md)。

***

## 案例：

```C++
Element Object;
NewCoreKRSObjectFunction(EmptyElement, Object);

// 读取超索引位置（CoreKRSObject_SuperIndex）
Element SuperIndexQuote;
ZeroElementFunction(EmptyElement, SuperIndexQuote);
SuperIndexQuote |= GetEleOrder(Object, CoreKRSObject_Struct::CoreKRSObject_SuperIndex);
ZeroElementFunction(EmptyElement, SuperIndexQuote);

// 读取登录、登出超索引位置
SuperIndexQuote |= GetEleOrder(Object, CoreKRSObject_Struct::CoreKRSObject_LoginSuperIndex);
ZeroElementFunction(EmptyElement, SuperIndexQuote);
SuperIndexQuote |= GetEleOrder(Object, CoreKRSObject_Struct::CoreKRSObject_LogoutSuperIndex);
ZeroElementFunction(EmptyElement, SuperIndexQuote);

// 位置数量由 CoreKRSObject_OrderSize 给出，可直接作为遍历边界
for (unsigned int midI = 0; midI < CoreKRSObject_Struct::CoreKRSObject_OrderSize; midI++) {
    // GetEleOrder(Object, midI) 即第 midI 个位置
}

ReleaseCoreKRSObjectFunction(EmptyElement, Object);
```

案例中从核心KRS对象Object出发，经宏 GetEleOrder 与位置常量读取超索引、登录超索引与登出超索引三个位置；读出的都是对象内部子元素的借用引用，用毕以 ZeroElementFunction 成对解除，不得单独释放。位置数量由 CoreKRSObject_OrderSize 给出，可直接作为遍历边界。对象由[NewCoreKRSObject](NewCoreKRSObject.md)构造、由[ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)成对释放——构造与释放成对、引用与 Zero 成对。
