# SetAddressManagerBaseAddress

***

映射SetAddressManagerBaseAddress接受无符号整型集合（UIntSet）为定义域，地址生成器管理集合（AddressCreaterManager）为值域，定义为：

    Map SetAddressManagerBaseAddress(&UIntSet, &AddressCreaterManager, SetAddressManagerBaseAddressFunction);

地址生成器管理设置基址映射（SetAddressManagerBaseAddress）将定义域无符号整型地址信息设置到值域地址生成器管理元素的基址信息上。

关于如何完成地址生成管理器基址设置，参考[AddressCreater案例](AddressCreater_Case.md)
