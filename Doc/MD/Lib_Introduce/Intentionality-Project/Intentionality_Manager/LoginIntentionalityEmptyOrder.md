# LoginIntentionalityEmptyOrder

***

映射LoginIntentionalityEmptyOrder接受意向性空序集合（IntentionalityEmptyOrderSet）为定义域，无符号整型集合（UIntSet）为值域，定义为：

```C++
Map LoginIntentionalityEmptyOrder(&IntentionalityEmptyOrderSet, &UIntSet, LoginIntentionalityEmptyOrderFunction);
```

意向性空序登录映射（LoginIntentionalityEmptyOrder）从定义域空序中登录（占用）一个空闲位置，将分配到的地址信息赋值到值域无符号整型元素上，该位置随即离开空序、进入工作态。配对映射为[LogoutIntentionalityEmptyOrder](LogoutIntentionalityEmptyOrder.md)。

如果没有空闲位置可供登录，则赋值值域元素为UINT_MAX。

***

## 案例：

```C++
Element EmptyOrderElement;
NewIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);

// Initialize EmptyOrderElement

Element AddressElement;
NewUIntElementFunction(EmptyElement, AddressElement);

LoginIntentionalityEmptyOrderFunction(EmptyOrderElement, AddressElement);

if (GetUIntElement(AddressElement) == UINT_MAX)
{
	// No Free Position
}
else
{
	// Address Information Available
	LogoutIntentionalityEmptyOrderFunction(AddressElement, EmptyOrderElement);
}

ZeroElementFunction(EmptyElement, AddressElement);
ReleaseIntentionalityEmptyOrderFunction(EmptyElement, EmptyOrderElement);
```

案例解释：登录结果写入AddressElement，取值为UINT_MAX时表示空序中已无空闲位置，必须先判定再使用地址。登录与登出必须成对：每个成功的登录都要由LogoutIntentionalityEmptyOrder把同一地址登出归还，漏掉登出将使该位置永久离开空序、可用地址逐渐耗尽。完整的登录与登出流程，跳转至[意向性空序案例](IntentionalityEmptyOrder_Case.md)。
