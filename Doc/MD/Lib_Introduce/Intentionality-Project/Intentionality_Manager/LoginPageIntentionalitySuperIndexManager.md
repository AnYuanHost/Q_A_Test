# LoginPageIntentionalitySuperIndexManager

***

映射LoginPageIntentionalitySuperIndexManager接受意向性超索引管理器集合（IntentionalitySuperIndexManagerSet）为定义域，无符号整型集合（UIntSet）为值域，定义为：

```C++
Map LoginPageIntentionalitySuperIndexManager(&IntentionalitySuperIndexManagerSet, &UIntSet, LoginPageIntentionalitySuperIndexManagerFunction);
```

意向性超索引管理器页登录映射（LoginPageIntentionalitySuperIndexManager）从定义域管理器中登录（分配）一个空闲条目，将分配到的页号与位置信息赋值到值域无符号整型元素上，该条目随即由空闲态进入工作态。配对映射为[LogoutPageIntentionalitySuperIndexManager](LogoutPageIntentionalitySuperIndexManager.md)。

如果没有空闲条目可供登录，则赋值值域元素为UINT_MAX。

***

## 案例：

```C++
Element ManagerElement;

NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);

// Initialize ManagerElement

Element AddressElement;
NewUIntElementFunction(EmptyElement, AddressElement);

LoginPageIntentionalitySuperIndexManagerFunction(ManagerElement, AddressElement);

if (GetUIntElement(AddressElement) == UINT_MAX)
{
	// No Free Entry
}
else
{
	// Address Information Available
	// Register a SuperIndex to this Entry

	LogoutPageIntentionalitySuperIndexManagerFunction(AddressElement, ManagerElement);
}

ZeroElementFunction(EmptyElement, AddressElement);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
```

案例解释：登录结果写入AddressElement，取值为UINT_MAX时表示管理器已无空闲条目，必须先判定再使用地址。页登录与页登出必须成对：每个成功的登录都要由[LogoutPageIntentionalitySuperIndexManager](LogoutPageIntentionalitySuperIndexManager.md)把同一地址登出归还，漏掉登出将使该条目永久占用、可用条目逐渐耗尽。完整的页登录与页登出流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
