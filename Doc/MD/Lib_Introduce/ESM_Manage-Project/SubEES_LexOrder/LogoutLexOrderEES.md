# LogoutLexOrderEES

***

映射LogoutLexOrderEES接受元素序偶集合（OrderedPairSet）为定义域，空元素集合（NullElementSet）为值域，定义为：

    Map LogoutLexOrderEES(&OrderedPairSet， &NullElementSet, LogoutLexOrderEESFunction);

字典序子元素环境检索器注销映射（LogoutLexOrderEES）分析定义域元素序偶元素，其结构为：<StreamSet, LexOrderEES>，其信息为：<待注销流信息，字典序子元素环境检索器>。该映射在子元素环境检索器中检索待注销的信息，并在字典序子元素环境检索器中检索并注销。注销时会抛出对应的超索引信息，以方便下一层使用。

注销行为会在检索失败等情况下出现错误，并抛出异常。

关于如何完成字典序子元素环境检索器注销，跳转至[SubEES_LexOrder案例](SubEES_LexOrder_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
