# ReleaseAddressCreaterManager

***

映射ReleaseAddressCreaterManager接受空元素集合（NullElementSet）为定义域，地址生成器管理集合（AddressCreaterManager）为值域，定义为：

    Map ReleaseAddressCreaterManager(&NullElementSet, &AddressCreaterManager, ReleaseAddressCreaterManagerFunction);

释放地址生成器管理映射（ReleaseAddressCreaterManager）分析并释放值域地址生成器管理元素。

关于如何释放地址生成管理器，参考[AddressCreater案例](AddressCreater_Case.md)
