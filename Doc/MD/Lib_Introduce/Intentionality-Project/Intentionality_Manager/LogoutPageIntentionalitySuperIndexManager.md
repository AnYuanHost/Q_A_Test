# LogoutPageIntentionalitySuperIndexManager

***

映射LogoutPageIntentionalitySuperIndexManager接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map LogoutPageIntentionalitySuperIndexManager(&OrderedPairSet, &NullElementSet, LogoutPageIntentionalitySuperIndexManagerFunction);
```

意向性超索引管理器页登出映射（LogoutPageIntentionalitySuperIndexManager）分析定义域元素序偶元素，其结构为：<UIntSet, IntentionalitySuperIndexManagerSet>，其信息为：<页号与位置信息，意向性超索引管理器>。按页号与位置信息归还指定条目，使其重新成为可登录的空闲条目，归还结果直接写回定义域管理器，值域元素不承载返回内容。配对映射为[LoginPageIntentionalitySuperIndexManager](LoginPageIntentionalitySuperIndexManager.md)。

***

## 案例：

```C++
Element ManagerElement;

NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
// Initialize ManagerElement

Element LogoutPair;
NewOrderedPairFunction(EmptyElement, LogoutPair);

// Initialize Address Information (UIntSet) in GetPairFirstElement(LogoutPair)
GetPairSecoundElement(LogoutPair) &= ManagerElement;

LogoutPageIntentionalitySuperIndexManagerFunction(LogoutPair, EmptyElement);

// The Entry in ManagerElement returns to the Free List

ZeroElementFunction(EmptyElement, LogoutPair);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
```

案例解释：序偶的第一元素是页登录分配到的页号与位置信息，第二元素是以引用接入的管理器。归还发生在定义域管理器内部，因此值域用空元素接收即可，不产生新的释放责任；序偶用ZeroElement解除，管理器最终由[ReleaseIntentionalitySuperIndexManager](ReleaseIntentionalitySuperIndexManager.md)释放。必须归还来自同一管理器上一次成功登录的地址，归还错误地址将破坏该页的条目状态。完整的页登录与页登出流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
