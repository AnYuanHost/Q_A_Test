# DataToCoreKRSManager

***

映射DataToCoreKRSManager接受流集合（StreamSet）为定义域，核心KRS管理器集合（CoreKRSManager）为值域，定义为：

```C++
Map DataToCoreKRSManager(&StreamSet, &CoreKRSManager, DataToCoreKRSManagerFunction);
```

数据构造核心KRS管理器映射（DataToCoreKRSManager）分析定义域流元素提供的数据，以此还原值域管理器元素。还原内容与 [CoreKRSManagerToData](CoreKRSManagerToData.md) 的转化结果一一对应：先读回头部四位 [项数, 页容量, 扩容量, 保留容量] 并就位于参数位置（[CoreKRSManager_Struct](CoreKRSManager_Struct.md) 的 CoreKRS_PageSize、CoreKRS_End、CoreKRS_ExpandSize、CoreKRS_RetainSize），按 PageNumber = End / PageSize + ExpandSize 重建分页登记表并逐页就位；再按项数逐项构造信息体、把流中的超索引经 StreamGetElementFunction 写回信息体的超索引位置（CoreKRSObject_SuperIndex），并新建状态码子位置、写入流中的状态码。

值域必须以 [NewCoreKRSManager](NewCoreKRSManager.md) 预先构造的管理器为落点。还原只补回超索引与状态码：运行期数据不还原，重建后信息体的动态链接库位置（CoreKRSObject_Dll）与符号表位置（CoreKRSObject_Dictionaries）为空，须再经 Windows 模块与 [SetCoreKRSObjectDictionaries](SetCoreKRSObjectDictionaries.md) 补齐。本映射与 CoreKRSManagerToData 互逆成对：数据两侧必须由同一版本的管理器结构生成与解析。流元素只被读取，使用完毕清零；还原出的管理器由 [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) 成对释放。

***

## 案例：

```C++
// ManagerStream: StreamSet element holding serialized manager data

Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);

DataToCoreKRSManagerFunction(ManagerStream, ManagerElement);
// 还原登记项：信息体仅带超索引，动态库与符号表为空

ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：先以 NewCoreKRSManager 构造空管理器作为值域落点，再用 ManagerStream 提供的数据还原分页参数与逐项的超索引、状态码。重建后的信息体只补回超索引，其动态库与独立维护的符号表为空，须另行补齐后方可完整调度（补齐见 [SetCoreKRSObjectDictionaries](SetCoreKRSObjectDictionaries.md)）。流元素只被读取、以 ZeroElementFunction 清零；还原出的管理器由 [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) 成对释放。序列化见 [CoreKRSManagerToData](CoreKRSManagerToData.md)，完整链路见[核心KRS管理器集合](CoreKRSManager.md)。
