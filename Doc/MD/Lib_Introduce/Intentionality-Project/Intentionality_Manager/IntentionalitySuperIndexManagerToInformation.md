# IntentionalitySuperIndexManagerToInformation

***

映射IntentionalitySuperIndexManagerToInformation接受意向性超索引管理器集合（IntentionalitySuperIndexManagerSet）为定义域，全集（UniversalSet）为值域，定义为：

```C++
Map IntentionalitySuperIndexManagerToInformation(&IntentionalitySuperIndexManagerSet, &UniversalSet, IntentionalitySuperIndexManagerToInformationFunction);
```

意向性超索引管理器展开为信息元素映射（IntentionalitySuperIndexManagerToInformation）将定义域意向性超索引管理器的页数、页序与各页条目展开为结构信息元素写入值域，展开结果是扁平的结构信息，可由[InformationToIntentionalitySuperIndexManager](InformationToIntentionalitySuperIndexManager.md)重建回等价的管理器。展开不改变定义域管理器的内容，定义域保持原样。

***

## 案例：

```C++
Element ManagerElement;

NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);

// Initialize ManagerElement

Element InformationElement;
IntentionalitySuperIndexManagerToInformationFunction(ManagerElement, InformationElement);

Element RebuiltManagerElement;
InformationToIntentionalitySuperIndexManagerFunction(InformationElement, RebuiltManagerElement);

// Use RebuiltManagerElement

ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, RebuiltManagerElement);
ZeroElementFunction(EmptyElement, InformationElement);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
```

案例解释：先构造管理器，再展开为信息元素，最后由信息元素重建出等价管理器，三步构成一次完整往返。原管理器与重建管理器在值域上各自独立，必须分别用[ReleaseIntentionalitySuperIndexManager](ReleaseIntentionalitySuperIndexManager.md)释放；中间的信息元素用ZeroElement解除，展开是拷贝式操作，原管理器的内容不受影响。完整的互转流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
