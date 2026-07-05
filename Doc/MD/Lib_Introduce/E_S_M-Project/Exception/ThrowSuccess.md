# ThrowSuccess

***

映射ThrowSuccess接受空元素集合（NullElementSet）为定义域和值域，定义如下：

```C++
Map ThrowSuccess(&NullElementSet, &NullElementSet, ThrowSuccessFunction);
```

抛出成功映射（ThrowSuccess）直接抛出一个代码为成功的异常信息元素，该元素可以通过映射ExceptionSuccessTest的检测。

案例参考映射[ExceptionSuccessTest](ExceptionSuccessTest.md)的案例。