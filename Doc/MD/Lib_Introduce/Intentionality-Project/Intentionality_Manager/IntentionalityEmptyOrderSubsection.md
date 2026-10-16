# IntentionalityEmptyOrderSubsection

***

映射IntentionalityEmptyOrderSubsection接受意向性空序集合（IntentionalityEmptyOrderSet）为定义域和值域，定义为：

```C++
Map IntentionalityEmptyOrderSubsection(&IntentionalityEmptyOrderSet, &IntentionalityEmptyOrderSet, IntentionalityEmptyOrderSubsectionFunction);
```

意向性空序分段映射（IntentionalityEmptyOrderSubsection）将定义域空序切分为子段，把分段结果构造为新的意向性空序置于值域。定义域空序保持原样，分段前需要先由[NewIntentionalityEmptyOrderSubsectionFeature](NewIntentionalityEmptyOrderSubsectionFeature.md)在独立元素上构造分段特征结构，供分段操作组织子段划分。

***

## 案例：

```C++
Element FeatureElement;
NewIntentionalityEmptyOrderSubsectionFeatureFunction(EmptyElement, FeatureElement);

// Initialize FeatureElement for Subsection

Element EmptyOrderElement;
NewIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
// Initialize EmptyOrderElement

Element SubsectionEmptyOrderElement;
IntentionalityEmptyOrderSubsectionFunction(EmptyOrderElement, SubsectionEmptyOrderElement);

// SubsectionEmptyOrderElement is a new EmptyOrder holding the Subsections

ReleaseIntentionalityEmptyOrderFunction(EmptyElement, SubsectionEmptyOrderElement);
ReleaseIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
ZeroElementFunction(EmptyElement, FeatureElement);
```

案例解释：先构造分段特征结构，再以原空序为定义域执行分段，分段结果在值域上新构造为独立空序，其定义域与值域都是空序本身。原空序与分段结果空序互不影响，必须分别用[ReleaseIntentionalityEmptyOrder](ReleaseIntentionalityEmptyOrder.md)释放，分段特征元素用ZeroElement解除；分段过程中不要修改分段特征结构，否则子段划分与特征内容不一致。完整的分段流程，跳转至[意向性空序案例](IntentionalityEmptyOrder_Case.md)。
