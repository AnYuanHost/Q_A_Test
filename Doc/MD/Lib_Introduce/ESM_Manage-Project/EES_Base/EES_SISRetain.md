# EES_SISRetain

***

映射EES_SISRetain接受空元素集合（NullElementSet）为定义域，总元素环境检索器集合（ElementEnvironmentSearcher）为值域，定义如下：

    Map EES_SISRetain(&NullElementSet, &ElementEnvironmentSearcher, EES_SISRetainFunction);

超索引检索器缩容映射（EES_SISRetain）在与值域总元素环境检索器绑定的超索引检索器上完成缩容操作。

缩容操作应该在碎片整理后进行，即超索引检索器缩容映射应该紧跟在超索引检索器碎片整理映射后执行。

在该映射执行操作过程中，可能的错误异常信息将会被抛出，经打包处理后最后由总元素环境检索器相关映射完成处理。

关于如何使用该映射完成超索引检索器缩容，跳转至[EES_Base案例](EES_Base_Case.md)。
