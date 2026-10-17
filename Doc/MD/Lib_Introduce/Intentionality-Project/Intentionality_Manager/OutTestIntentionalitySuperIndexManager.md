# OutTestIntentionalitySuperIndexManager

***

映射OutTestIntentionalitySuperIndexManager接受元素序偶集合（OrderedPairSet）为定义域，布尔集合（BoolSet）为值域，定义为：

```C++
Map OutTestIntentionalitySuperIndexManager(&OrderedPairSet, &BoolSet, OutTestIntentionalitySuperIndexManagerFunction);
```

意向性超索引管理器越界测试映射（OutTestIntentionalitySuperIndexManager）分析定义域元素序偶元素，其结构为：<UIntSet, IntentionalitySuperIndexManagerSet>，其信息为：<地址信息，意向性超索引管理器>。测试地址信息相对管理器页结构是否越界，将测试结果真或假赋值到值域布尔元素上。测试只读取定义域管理器的页结构，不改变管理器内容。

***

## 案例：

```C++
Element ManagerElement;

NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
// Initialize ManagerElement

Element TestPair;
NewOrderedPairFunction(EmptyElement, TestPair);

// Initialize Address Information (UIntSet) in GetPairFirstElement(TestPair)
GetPairSecoundElement(TestPair) &= ManagerElement;

Element BoolElement;

OutTestIntentionalitySuperIndexManagerFunction(TestPair, BoolElement);

// Read the Result in BoolElement as True or False

ZeroElementFunction(EmptyElement, BoolElement);
ZeroElementFunction(EmptyElement, TestPair);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
```

案例解释：序偶的第一元素是待测试的地址信息，第二元素是以引用接入的管理器。测试结果落在值域布尔元素上，判定为真即表示该地址越界、不可使用。测试不产生新的管理器，序偶与结果元素用ZeroElement解除，管理器由[ReleaseIntentionalitySuperIndexManager](ReleaseIntentionalitySuperIndexManager.md)释放。使用地址前先做越界测试的完整流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
