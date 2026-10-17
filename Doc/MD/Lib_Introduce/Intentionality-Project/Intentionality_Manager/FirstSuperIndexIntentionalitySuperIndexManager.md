# FirstSuperIndexIntentionalitySuperIndexManager

***

映射FirstSuperIndexIntentionalitySuperIndexManager接受意向性超索引管理器集合（IntentionalitySuperIndexManagerSet）为定义域，超索引集合（SuperIndexSet）为值域，定义为：

```C++
Map FirstSuperIndexIntentionalitySuperIndexManager(&IntentionalitySuperIndexManagerSet, &SuperIndexSet, FirstSuperIndexIntentionalitySuperIndexManagerFunction);
```

意向性超索引管理器首个超索引映射（FirstSuperIndexIntentionalitySuperIndexManager）把定义域管理器中登记的首个超索引引用传递到值域超索引元素上，作为遍历的起点。如果管理器中没有登记任何超索引，则值域为空元素。配对映射为[NextSuperIndexIntentionalitySuperIndexManager](NextSuperIndexIntentionalitySuperIndexManager.md)，两者配合完成遍历。

***

## 案例：

```C++
Element ManagerElement;

NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);

// Initialize ManagerElement with Registered SuperIndexes

Element FirstSuperIndexElement;
FirstSuperIndexIntentionalitySuperIndexManagerFunction(ManagerElement, FirstSuperIndexElement);

// FirstSuperIndexElement holds the First Registered SuperIndex, or is an Empty Element

ZeroElementFunction(EmptyElement, FirstSuperIndexElement);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
```

案例解释：首个超索引被引用传递到值域元素，值域元素只保存本次取回的引用，取回后即可用ZeroElement解除，管理器本身不受遍历影响。判定为非空元素才可使用该超索引，值域为空元素表示管理器内没有登记记录。完整的遍历写法，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
