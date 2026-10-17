# IntentionalitySuperIndexManager_Struct

***

命名空间IntentionalitySuperIndexManager_Struct定义了意向性超索引管理器的结构位置常量（constexpr unsigned int），其成员如下：

| 常量 | 值 | 含义 |
| --- | --- | --- |
| ISIManager_PageNumber | 0 | 页数 |
| ISIManager_PageOrder | 1 | 页序 |
| ISIManager_PageSize | 18 | 每页条目数（结构尺寸常量） |
| ISIMPage_SuperIndex | 0 | 页内：超索引 |
| ISIMPage_Page | 1 | 页内：页信息 |
| ISIMPage_EmptyNumber | 2 | 页内：空位数 |
| ISIMPage_AllotNumber | 3 | 页内：分配数 |

结构说明：管理器元素共 2 个位置，位置 0（ISIManager_PageNumber）记录页数，位置 1（ISIManager_PageOrder）持有页序；页序中每个页元素包含 ISIManager_PageSize=18 个条目，每个条目 4 个位置——超索引（ISIMPage_SuperIndex=0）、页信息（ISIMPage_Page=1）、空位数（ISIMPage_EmptyNumber=2）、分配数（ISIMPage_AllotNumber=3）。访问方式为宏GetEleOrder(元素, 序号)。本命名空间常量的引用写法为IntentionalitySuperIndexManager_Struct::ISIMPage_SuperIndex。

***

## 案例：

```C++
Element ManagerElement;

NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);

// Initialize ManagerElement

unsigned int PageNumber = GetUIntElement(GetEleOrder(ManagerElement, IntentionalitySuperIndexManager_Struct::ISIManager_PageNumber));
unsigned int PageSize = IntentionalitySuperIndexManager_Struct::ISIManager_PageSize;

// Iterate the PageOrder at IntentionalitySuperIndexManager_Struct::ISIManager_PageOrder
// Read each Entry with GetEleOrder(Entry, IntentionalitySuperIndexManager_Struct::ISIMPage_SuperIndex)

ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
```

案例解释：通过宏GetEleOrder取出位置上的元素，再用GetUIntElement读出其中的无符号整型内容，即可获知管理器的页数；ISIManager_PageSize 是编译期常量，可直接作为每页条目数使用，页内四个位置的访问写法与之相同。关于管理器的完整用法，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
