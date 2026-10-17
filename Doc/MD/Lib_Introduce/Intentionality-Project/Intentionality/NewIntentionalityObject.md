# NewIntentionalityObject

***

映射NewIntentionalityObject接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map NewIntentionalityObject(&NullElementSet, &NullElementSet, NewIntentionalityObjectFunction);
```

意向性对象新建映射（NewIntentionalityObject）在值域空元素上构造一个空的意向性对象。

构造完成后，值域元素即属于意向性对象集合（[IntentionalityObjectSet](IntentionalityObjectSet.md)），可以接受其他意向性对象映射的操作。

***

## 案例：

```C++
Element IntentionalityObjectElement;

NewIntentionalityObjectFunction(EmptyElement, IntentionalityObjectElement);

// Initialize IntentionalityObjectElement

ReleaseIntentionalityObjectFunction(EmptyElement, IntentionalityObjectElement);
```

在案例代码中，构造空元素IntentionalityObjectElement，通过映射NewIntentionalityObject在其上构造意向性对象。使用完毕后，必须使用[ReleaseIntentionalityObject](ReleaseIntentionalityObject.md)成对释放；若跳过释放直接令元素析构，将造成意向性对象内部资源泄漏。
