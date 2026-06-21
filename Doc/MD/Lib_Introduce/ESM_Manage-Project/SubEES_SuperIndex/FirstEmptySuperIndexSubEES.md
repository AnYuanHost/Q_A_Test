# FirstEmptySuperIndexSubEES

***

映射FirstEmptySuperIndexSubEES接受超索引子元素环境检索器集合（SuperIndexSubEES）为定义域，无符号整型集合（UIntSet）为值域，定义为：

    Map FirstEmptySuperIndexSubEES(&SuperIndexSubEES, &UIntSet, FirstEmptySuperIndexSubEESFunction);

超索引子元素环境检索器首个置空地址映射（FirstEmptySuperIndexSubEES）从定义域超索引子元素环境检索器中获取第一个被置懒的槽位的地址信息，并将其无符号整型值拷贝到值域无符号整型元素上。

关于如何完成超索引子元素环境检索器首个置懒元素地址获取，跳转至[SubEES_SuperIndex案例](SubEES_SuperIndex_Case.md)，或者[EES_Base案例](..\EES_Base\EES_Base_Case.md)。
