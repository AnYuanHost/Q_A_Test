# ThrowException

***

映射ThrowException接受空元素集合（NullElementSet）为定义域，异常集合（ExceptionSet）为值域，定义为：

```C++
Map ThrowExceptyion(&NullElementSet, &ExceptionSet, ThrowExceptionFunction);
```

异常抛出映射（ThrowException）直接抛出值域异常元素。

***

## 案例：

```C++
try{
    Element ExcElement;
    NewUIntElementFunction(EmptyElement, ExcElement);

    GetUIntElement(ExcElement) = __LINE__;

    ThrowExceptionFunction(EmptyElement, ExcElement);
}catch(Element& ExcElement){
    if(UIntSetTest(ExcElement, UIntElement)){
        
    }
}
```

在案例中，创建异常信息元素ExcElement并将其构造为无符号整型，为其赋予行号信息并抛出。抛出的异常信息捕获后，可以通过catch块的ExcElement元素中检查其是否是无符号整型以及无符号整型值是否等于行号。