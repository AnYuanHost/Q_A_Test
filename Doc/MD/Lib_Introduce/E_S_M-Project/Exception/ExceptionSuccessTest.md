# ExceptionSuccessTest

***

映射ExceptionSuccessTest接受异常集合（ExceptionSet）为定义域，布尔元素集合（BoolSet）为值域，定义如下：

```C++
Map ExceptionSuccessTest(&ExceptionSet, &BoolSet, ExceptionSuccessTestFunction);
```

***

## 案例：

```C++
try{

    ThrowSuccessFunction(EmptyElement, EmptyElement);

}catch(Element &ExcElement){

    Element BoolElement;
    NewBoolElementFunction(EmptyElement, BoolElement);

    ExceptionSuccessTestFunction(ExcElement, BoolElement);

    if(GetBoolElement(BoolElement)){

    }
}
```

在案例代码的try部分直接调用ThrowSuccess映射抛出异常，并在catch块中处理。检测其是否是“正常”异常。