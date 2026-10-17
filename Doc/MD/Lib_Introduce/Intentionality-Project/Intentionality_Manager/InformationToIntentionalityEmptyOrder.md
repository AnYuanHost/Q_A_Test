# InformationToIntentionalityEmptyOrder

***

映射InformationToIntentionalityEmptyOrder接受全集（UniversalSet）为定义域，意向性空序集合（IntentionalityEmptyOrderSet）为值域，定义为：

```C++
Map InformationToIntentionalityEmptyOrder(&UniversalSet, &IntentionalityEmptyOrderSet, InformationToIntentionalityEmptyOrderFunction);
```

信息元素重建意向性空序映射（InformationToIntentionalityEmptyOrder）将定义域展开的结构信息元素重建为空序，恢复空序的分段有序结构并写入值域元素。重建完成后，值域元素即属于意向性空序集合（[IntentionalityEmptyOrder](IntentionalityEmptyOrder.md)），可以直接参与登录、登出与合并操作。

***

## 案例：

```C++
Element InformationElement;
// Initialize InformationElement as expanded Structure Information

Element EmptyOrderElement;

InformationToIntentionalityEmptyOrderFunction(InformationElement, EmptyOrderElement);

// Use EmptyOrderElement

ReleaseIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
ZeroElementFunction(EmptyElement, InformationElement);
```

案例解释：定义域准备一个展开的结构信息元素，调用映射把其中的分段信息重建为空序。重建结果是独立结构而非信息元素的引用，信息元素随即可用ZeroElement解除；重建出的空序由调用方持有，必须用[ReleaseIntentionalityEmptyOrder](ReleaseIntentionalityEmptyOrder.md)释放。关于信息互转的完整流程，跳转至[意向性空序案例](IntentionalityEmptyOrder_Case.md)。
