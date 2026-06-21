# ReleaseFstream
***
映射ReleaseFstream接受空元素集合（NullElementSet）为定义域，文件集合（FstreamSet）为值域，定义如下：

    Map ReleaseFstream(&NullElementSet, &FstreamSet, ReleaseFstreamFunction);

释放文件映射（ReleaseFstream）将值域文件元素释放。