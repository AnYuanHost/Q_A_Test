# InformationToIntentionalitySuperIndexManager

***

映射InformationToIntentionalitySuperIndexManager接受全集（UniversalSet）为定义域，意向性超索引管理器集合（IntentionalitySuperIndexManagerSet）为值域，定义为：

```C++
Map InformationToIntentionalitySuperIndexManager(&UniversalSet, &IntentionalitySuperIndexManagerSet, InformationToIntentionalitySuperIndexManagerFunction);
```

信息元素重建意向性超索引管理器映射（InformationToIntentionalitySuperIndexManager）将定义域展开的结构信息元素按管理器结构重建为意向性超索引管理器，恢复页数、页序与各页条目的位置关系并写入值域元素。重建完成后，值域元素即属于意向性超索引管理器集合（[IntentionalitySuperIndexManager](IntentionalitySuperIndexManager.md)），可以直接参与登录、登出与检索操作，重建结果由调用方接管。配对映射为[IntentionalitySuperIndexManagerToInformation](IntentionalitySuperIndexManagerToInformation.md)。

***

## 案例：

```C++
Element InformationElement;
// Initialize InformationElement as the expanded Structure Information of a Manager

Element ManagerElement;

InformationToIntentionalitySuperIndexManagerFunction(InformationElement, ManagerElement);

// Use ManagerElement

ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
ZeroElementFunction(EmptyElement, InformationElement);
```

案例解释：定义域准备一个已展开的结构信息元素，调用映射把结构信息重建到ManagerElement上，重建出的管理器即可接受页登录与超索引检索。重建结果由调用方持有，必须用[ReleaseIntentionalitySuperIndexManager](ReleaseIntentionalitySuperIndexManager.md)成对释放；信息元素是拷贝式输入，重建完成后即可用ZeroElement解除。信息与管理器的完整往返流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
