# LoginEES_SIS

***

映射LoginEES_SIS接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElmeentSet）为值域，定义如下：

    Map LoginEES_SIS(&OrderedPairSet, &NullElementSet, LoginEES_SISFunction);

超索引检索器注册映射（LoginEES_SIS）分析定义域序偶元素，其格式为：<UIntSet, ElementEnvironmentSearcher>，其信息为：<元素环境注册值, 总元素环境检索器>。在与总元素环境检索器绑定的超索引检索器上完成注册，并将元素环境注册值拷贝到对应位置，构建出映射关系。同时，将注册得到的超索引信息拷贝到值域空元素上。

在该映射执行操作过程中，可能的错误异常信息将会被抛出，经打包处理后最后由总元素环境检索器相关映射完成处理。

关于如何使用该映射完成超索引检索器注册，跳转至[EES_Base案例](EES_Base_Case.md)。
