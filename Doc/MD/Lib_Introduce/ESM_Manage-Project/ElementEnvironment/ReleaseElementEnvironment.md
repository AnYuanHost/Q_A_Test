# RelaseElementEnvironment

***

映射ReleaseElementEnvironment接受空元素集合（NullElementSet）为定义域，元素环境集合（ElementEnvironmentSet）为值域，定义如下：

```C++
Map ReleaseElementEnvironment(&NullElementSet, &ElementEnvironmentSet,
ReleaseElementEnvironmentFunction);
```

释放元素环境映射（ReleaseElementEnvironment）将值域元素环境元素释放。

关于元素环境如何完成释放，跳转至[元素环境案例](../EES_Manage_Case/Element_Environemnt_Case.md)。
