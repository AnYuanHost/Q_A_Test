# NextSuperIndexIntentionalitySuperIndexManager

***

映射NextSuperIndexIntentionalitySuperIndexManager接受意向性超索引管理器集合（IntentionalitySuperIndexManagerSet）为定义域，超索引集合（SuperIndexSet）为值域，定义为：

```C++
Map NextSuperIndexIntentionalitySuperIndexManager(&IntentionalitySuperIndexManagerSet, &SuperIndexSet, NextSuperIndexIntentionalitySuperIndexManagerFunction);
```

意向性超索引管理器下一个超索引映射（NextSuperIndexIntentionalitySuperIndexManager）把定义域管理器的登记位置推进到下一个超索引，将该超索引引用传递到值域超索引元素上。如果已至登记末端，则值域为空元素。与[FirstSuperIndexIntentionalitySuperIndexManager](FirstSuperIndexIntentionalitySuperIndexManager.md)配对完成遍历，推进过程不修改管理器的页结构。

***

## 案例：

```C++
Element ManagerElement;

NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);

// Initialize ManagerElement with Registered SuperIndexes

Element SuperIndexElement;
FirstSuperIndexIntentionalitySuperIndexManagerFunction(ManagerElement, SuperIndexElement);

// SuperIndexElement holds the First Registered SuperIndex

NextSuperIndexIntentionalitySuperIndexManagerFunction(ManagerElement, SuperIndexElement);

// SuperIndexElement advances to the Next SuperIndex, or is an Empty Element at the End

ZeroElementFunction(EmptyElement, SuperIndexElement);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
```

案例解释：先用首个超索引映射取回起点，再反复调用下一个映射推进，每次推进都把新的超索引引用覆盖到同一个值域元素上。值域为空元素即表示已至登记末端，此时停止推进；值域元素只保存当前一次取回的引用，用ZeroElement解除，管理器最终由[ReleaseIntentionalitySuperIndexManager](ReleaseIntentionalitySuperIndexManager.md)释放。完整的遍历写法，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
