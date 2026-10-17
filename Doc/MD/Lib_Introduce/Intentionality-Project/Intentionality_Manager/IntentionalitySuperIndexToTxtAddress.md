# IntentionalitySuperIndexToTxtAddress

***

映射IntentionalitySuperIndexToTxtAddress接受超索引集合（SuperIndexSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map IntentionalitySuperIndexToTxtAddress(&SuperIndexSet, &NullElementSet, IntentionalitySuperIndexToTxtAddressFunction);
```

意向性超索引转文本地址映射（IntentionalitySuperIndexToTxtAddress）将定义域超索引信息解析为对应的文本地址（TxtAddress）信息，将地址信息的引用传递到值域空元素上。解析结果是文本地址的引用，不拷贝地址文本本身。

***

## 案例：

```C++
Element SuperIndexElement;
// Initialize SuperIndexElement as SuperIndexSet Element

Element TxtAddressElement;

IntentionalitySuperIndexToTxtAddressFunction(SuperIndexElement, TxtAddressElement);

// Use TxtAddressElement (Quote of TxtAddress)

ZeroElementFunction(EmptyElement, TxtAddressElement);
```

案例解释：定义域准备一个超索引元素，调用映射后，解析出的文本地址信息以引用形式挂在TxtAddressElement上。该值域结果只是地址信息的视图，使用完毕必须用ZeroElement解除；不得对它执行释放类操作，也不得在其后修改或释放SuperIndexElement，否则引用随之失效。
