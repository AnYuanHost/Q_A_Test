# LoginCoreKRSManager

***

映射LoginCoreKRSManager接受核心KRS对象集合（CoreKRSObject）为定义域，核心KRS管理器集合（CoreKRSManager）为值域，定义为：

```C++
Map LoginCoreKRSManager(&CoreKRSObject, &CoreKRSManager, LoginCoreKRSManagerFunction);
```

核心KRS管理器登录映射（LoginCoreKRSManager）把定义域上的知识库信息体（[CoreKRSObject](CoreKRSObject.md)）转交装配（operator&=）进值域管理器分页登记表的新项，即以信息体的超索引位置（CoreKRSObject_SuperIndex）为登记键，把信息体写入该项的信息体子位置（[CoreKRSManager_Struct](CoreKRSManager_Struct.md) 的 CoreKRS_Object），并把该项的状态码子位置（CoreKRS_State）初始化为 CoreKRSObject_Usable（可用）。转交语义意味着信息体的持有权归管理器新项，定义域上的来源元素随即被置空，此后不得再对来源元素清零或释放。登记完成后追加末尾标志（CoreKRS_End 自增）并调用 [SortCoreKRSManager](SortCoreKRSManager.md)，使空位沉向前端、实有项按超索引升序排在后段。

登记表容量不足时（End/PageSize 处页已满）按扩容量（CoreKRS_ExpandSize）增页，扩容中旧页表逐页转交进新页表后释放。若同一超索引已在管理器中（重复登录），则抛出异常（throw Element），此时定义域元素保持可用、未被转交。配对映射为 [LogoutCoreKRSManager](LogoutCoreKRSManager.md)：登录一次对应一次注销。

***

## 案例：

```C++
Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);

Element ObjectElement;
NewCoreKRSObjectFunction(EmptyElement, ObjectElement);

Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);
GetUIntElement(UIntElement) = 20;

Element SuperIndexElement;
UIntToSuperIndexFunction(UIntElement, SuperIndexElement);
// 经 SetCoreKRSObjectSuperIndex 把 SuperIndexElement 写入 ObjectElement 的超索引位置

LoginCoreKRSManagerFunction(ObjectElement, ManagerElement);
// 信息体转交装配进管理器新项，ObjectElement 被置空，状态进入 CoreKRSObject_Usable

LogoutCoreKRSManagerFunction(SuperIndexElement, ManagerElement);
// 按超索引注销该项，信息体与状态置空

ReleaseElementFunction(EmptyElement, SuperIndexElement);
ReleaseElementFunction(EmptyElement, UIntElement);
ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：定义域是待登录的信息体、值域是目标管理器；调用映射后信息体转交装配进管理器新项，状态自动置为 CoreKRSObject_Usable。转交与清零成对：定义域来源 ObjectElement 已被置空，此后不得再对它清零或释放，注销由 [LogoutCoreKRSManager](LogoutCoreKRSManager.md) 按超索引完成（登录与注销成对）；同一超索引重复登录会抛出异常。超索引元素与无符号元素由本方释放，管理器由 [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) 成对释放。信息体构造与释放见 [NewCoreKRSObject](NewCoreKRSObject.md) 与 [ReleaseCoreKRSObject](ReleaseCoreKRSObject.md)。
