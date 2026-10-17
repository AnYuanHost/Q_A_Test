# UpdateIntentionalityPathAscender

***

映射UpdateIntentionalityPathAscender接受意向性路径攀升器集合（IntentionalityPathAscenderSet）为定义域，无符号整型集合（UIntSet）为值域，定义为：

```C++
Map UpdateIntentionalityPathAscender(&IntentionalityPathAscenderSet, &UIntSet, UpdateIntentionalityPathAscenderFunction);
```

意向性路径攀升器更新映射（UpdateIntentionalityPathAscender）依据攀升器当前指向的意向性对象（IPA_Object）、元素环境检索器（IPA_EES）与子元素环境检索器（IPA_SubEES）推进路径，刷新攀升器内部信息，即当前对象位置与下一个序位置，并把结果赋值到值域无符号整型元素上：0 表示成功推进，1 表示已至路径末端。

已至路径末端（值为 1）之后攀升器仍然有效，可重新设置起点与检索器继续使用。

***

## 案例：

```C++
Element ResultElement;
NewUIntElementFunction(EmptyElement, ResultElement);

UpdateIntentionalityPathAscenderFunction(PathAscenderElement, ResultElement);

if (GetUIntElement(ResultElement) == 0)
{
	// Advanced: the Current Object has been Refreshed
}
else
{
	// Reached the End of the Path (1)
}

ZeroElementFunction(EmptyElement, ResultElement);
ReleaseIntentionalityPathAscenderFunction(EmptyElement, PathAscenderElement);
```

案例解释：调用映射后攀升器内部信息被刷新，结果以 0 或 1 赋值到值域无符号整型元素上，调用方必须先判定再决定是否继续推进。刷新之后，此前通过[ReadIntentionalityPathAscender](ReadIntentionalityPathAscender.md)取得的引用随之失效，必须重新读取；结果元素用ZeroElementFunction解除。完整的更新与读取流程，跳转至[意向性路径攀升器案例](IntentionalityPathAscender_Case.md)。
