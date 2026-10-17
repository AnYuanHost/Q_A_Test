# LoginEESMap

***

映射LoginEESMap接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map LoginEESMap(&NullElementSet, &NullElementSet, LoginEESMapFunction);
```

元素环境检索器登录映射（LoginEESMap）按照元素环境检索器提供的接口标准在值域空元素上注册对应的登录映射，供轮询驱动零的登录登出操作取用，对应结构位置为`PollingDrivenZero_Struct::PDZ_EES_Map`下的`PDZ_EES_Login`与`PDZ_EES_Logout`。

登录与登出成对：注册的登录映射须与登出映射同时有效，登录使位置进入工作态、登出使位置离开工作态，二者缺一不可。

***

## 案例：

```C++
// 注册元素环境检索器的登录映射
LoginEESMapFunction(EmptyElement, EmptyElement);

Element EES;
NewElementEnvironmentSearcherFunction(EmptyElement, EES);

// 登录：占用位置、进入工作态
LoginElementEnvironmentSearcherFunction(EmptyElement, EES);

// 登出：归还位置、离开工作态，与登录成对
LogoutElementEnvironmentSearcherFunction(EmptyElement, EES);

ReleaseElementEnvironmentSearcherFunction(EmptyElement, EES);
```

案例中先注册登录映射，再在元素环境检索器上依次登录与登出，二者成对出现；收尾以释放元素环境检索器收场，构造与释放成对。在轮询驱动零一侧的登录登出入口见PollingDrivenZeroLogInOut（文档未生成）。
