# NextAddressCreaterManager

***

映射NextAddressCreaterManager接受地址生成器管理集合（AddressCreaterManager）为定义域，无符号整型集合（UIntSet）为值域，定义为：

    Map NextAddressCreaterManager(&AddressCreaterManager, &UIntSet, NextAddressCreaterManagerFunction);

地址生成器管理下一地址映射（NextAddressCreaterManager）在定义域地址生成器管理元素中生成下一地址，将其值赋值到值域无符号整型元素上，并且后推地址生成器管理元素。

关于如何获取地址生成管理器下一地址，参考[AddressCreater案例](AddressCreater_Case.md)
