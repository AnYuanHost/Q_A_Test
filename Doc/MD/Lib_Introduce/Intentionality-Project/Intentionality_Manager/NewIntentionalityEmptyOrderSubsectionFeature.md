# NewIntentionalityEmptyOrderSubsectionFeature

***

映射NewIntentionalityEmptyOrderSubsectionFeature接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map NewIntentionalityEmptyOrderSubsectionFeature(&NullElementSet, &NullElementSet, NewIntentionalityEmptyOrderSubsectionFeatureFunction);
```

意向性空序分段特征新建映射（NewIntentionalityEmptyOrderSubsectionFeature）在值域空元素上构造意向性空序分段操作所需的分段特征结构。构造完成后，该特征元素即可配合[IntentionalityEmptyOrderSubsection](IntentionalityEmptyOrderSubsection.md)组织子段划分。

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

ReleaseIntentionalityEmptyOrderFunction(EmptyElement, SubsectionEmptyOrderElement);
ReleaseIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
ZeroElementFunction(EmptyElement, FeatureElement);
```

案例解释：分段特征结构在独立元素上构造，与空序本体分离，因此它的清理方式是ZeroElement清零复位。本模块未提供分段特征的专用释放映射，分段结束后必须执行ZeroElement解除，跳过清零将造成特征结构内容残留于宿主元素。完整的分段流程，跳转至[意向性空序案例](IntentionalityEmptyOrder_Case.md)。
