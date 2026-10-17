# IntentionalitySuperIndexManagerSelect

***

映射IntentionalitySuperIndexManagerSelect接受超索引集合（SuperIndexSet）为定义域，无符号整型集合（UIntSet）为值域，定义为：

```C++
Map IntentionalitySuperIndexManagerSelect(&SuperIndexSet, &UIntSet, IntentionalitySuperIndexManagerSelectFunction);
```

意向性超索引管理器检索映射（IntentionalitySuperIndexManagerSelect）按定义域超索引在意向性超索引管理器中检索其所在页与位置，将检索到的页号与位置构成的地址信息赋值到值域无符号整型元素上。

如果没有检索到对应超索引，则赋值值域元素为UINT_MAX。

***

## 案例：

```C++
Element SuperIndexElement;
// Initialize SuperIndexElement as SuperIndexSet Element

Element AddressElement;
NewUIntElementFunction(EmptyElement, AddressElement);

IntentionalitySuperIndexManagerSelectFunction(SuperIndexElement, AddressElement);

if (GetUIntElement(AddressElement) != UINT_MAX)
{
	// Address Information Available
}

ZeroElementFunction(EmptyElement, AddressElement);
ZeroElementFunction(EmptyElement, SuperIndexElement);
```

案例解释：定义域准备一个超索引元素，检索结果写入AddressElement，取值为UINT_MAX时表示管理器中没有该超索引的登记记录，必须先判定再使用地址。地址只在本次检索结果有效，用ZeroElement解除；管理器本身的页结构不因检索而改变。完整的检索与遍历流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
