# ReadIntentionalityPathAscender

***

映射ReadIntentionalityPathAscender接受意向性路径攀升器集合（IntentionalityPathAscenderSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map ReadIntentionalityPathAscender(&IntentionalityPathAscenderSet, &NullElementSet, ReadIntentionalityPathAscenderFunction);
```

意向性路径攀升器读取映射（ReadIntentionalityPathAscender）读取攀升器当前指向的意向性对象（IPA_Object），将其引用传递到值域空元素上。读取不拷贝意向性对象，值域元素只是该对象的引用视图，不因此取得对象的所有权。

引用随攀升器推进而失效：[UpdateIntentionalityPathAscender](UpdateIntentionalityPathAscender.md)每推进一次，此前取得的引用即失效，必须重新读取。使用完毕必须用ZeroElementFunction解除该引用。

***

## 案例：

```C++
Element QuoteElement;

ReadIntentionalityPathAscenderFunction(PathAscenderElement, QuoteElement);

// QuoteElement is a Quote of the Current IntentionalityObject

// ... Use QuoteElement

ZeroElementFunction(EmptyElement, QuoteElement);

Element ResultElement;
NewUIntElementFunction(EmptyElement, ResultElement);
UpdateIntentionalityPathAscenderFunction(PathAscenderElement, ResultElement);

ZeroElementFunction(EmptyElement, ResultElement);
```

案例解释：读取结果是当前意向性对象的引用，直接传递到值域空元素上，用完用ZeroElementFunction解除。最易错的两步：一是把引用元素当作自有元素释放——它只是视图，必须且只能Zero；二是在攀升器推进之后继续使用旧引用——它已经失效，必须重新调用本映射读取。完整的读取与推进流程，跳转至[意向性路径攀升器案例](IntentionalityPathAscender_Case.md)。
