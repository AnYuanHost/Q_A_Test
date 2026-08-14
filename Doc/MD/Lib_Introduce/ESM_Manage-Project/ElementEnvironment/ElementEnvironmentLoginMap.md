# ElementEnvironmentLoginMap

***

映射ElementEnvironmentLoginMap接受空元素集合（NullElementSet）为定义域和值域，定义如下：

```C++
Map ElementEnvironmentLoginMap(&NullElementSet, &NullElementSet, ElementEnvironmentLoginMapFunction);
```

元素环境注册映射映射（ElementEnvironmentLoginMap）在值域空元素上完成元素环境相关映射集的构建与赋值。该映射集将交由总元素环境检索器使用。

关于元素环境如何完成映射集注册，跳转至[元素环境案例](../EES_Manage_Case/Element_Environemnt_Case.md)。关于接口标准，参考[元素环境接口标准](../Environment_Interface/Environment_Interface.md)
