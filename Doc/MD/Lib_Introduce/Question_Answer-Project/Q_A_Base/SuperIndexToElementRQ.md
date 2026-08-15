# SuperIndexToElementRQ

***

映射SuperIndexToElementRQ接受超索引集合（SuperIndexSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map SuperIndexToElementRQ(&SuperIndexSet, &NullElementSet, SuperIndexToElementRQFunction);
```

***

超索引转实际问题元素映射（SuperIndexToElementRQ）在静态库公开的映射表单中，按照超索引检索信息查找对应的实际问题元素，并将其引用传递到值域空元素上。

***

## 案例

```C++
Element SuperIndexElement;
Element MapElement;

// Initialize SuperIndexElement

SuperIndexToElementRQFunction(SuperIndexElement, MapElement);

// MapElement Execute

ZeroElementFunction(EmptyElement, MapElement);
```

在该案例中，获取到可用于静态库公开的映射表单的超索引检索信息SuperIndexElement后，便可以调用转换映射从表单中完成查询，将结果置于元素MapElement上。最终，需要使用ZeroElement映射解除映射。