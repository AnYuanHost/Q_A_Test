# IntentionalityEmptyOrderToInformation

***

映射IntentionalityEmptyOrderToInformation接受意向性空序集合（IntentionalityEmptyOrderSet）为定义域，全集（UniversalSet）为值域，定义为：

```C++
Map IntentionalityEmptyOrderToInformation(&IntentionalityEmptyOrderSet, &UniversalSet, IntentionalityEmptyOrderToInformationFunction);
```

意向性空序展开为信息元素映射（IntentionalityEmptyOrderToInformation）将定义域意向性空序展开为结构信息元素写入值域，展开结果是扁平的序结构信息，可由[InformationToIntentionalityEmptyOrder](InformationToIntentionalityEmptyOrder.md)重建回等价的空序。

***

## 案例：

```C++
Element EmptyOrderElement;
NewIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);

// Initialize EmptyOrderElement

Element InformationElement;

IntentionalityEmptyOrderToInformationFunction(EmptyOrderElement, InformationElement);

// Use InformationElement

ZeroElementFunction(EmptyElement, InformationElement);
ReleaseIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
```

案例解释：映射只读取空序的分段结构，把展开结果写入独立的信息元素，不改变定义域空序，也不转移它的所有权。展开结果是拷贝而非引用，空序后续的登录、登出与释放都不影响已展开的信息；信息元素用ZeroElement解除，空序由[ReleaseIntentionalityEmptyOrder](ReleaseIntentionalityEmptyOrder.md)释放。关于信息互转的完整流程，跳转至[意向性空序案例](IntentionalityEmptyOrder_Case.md)。
