# CoreKRSManagerToData

***

映射CoreKRSManagerToData接受核心KRS管理器集合（CoreKRSManager）为定义域，空元素集合（NullElementSet）为值域，定义为：

```C++
Map CoreKRSManagerToData(&CoreKRSManager, &NullElementSet, CoreKRSManagerToDataFunction);
```

核心KRS管理器数据转化映射（CoreKRSManagerToData）分析定义域管理器元素，把其内部信息转化为数据流元素，置于值域空元素上。流结构固定为：头部四位 [项数, 页容量, 扩容量, 保留容量]（各 unsigned int），随后逐项 [超索引, 状态码]——超索引按元素实测长度写入（StreamPutElementFunction），状态码按 unsigned int 写入。仅序列化非空登记项，空位跳过，头部“项数”即实有登记项数；页容量、扩容量、保留容量取自参数位置（[CoreKRSManager_Struct](CoreKRSManager_Struct.md) 的 CoreKRS_PageSize、CoreKRS_ExpandSize、CoreKRS_RetainSize）。转化结果为可落盘的连续数据，随进程重启后由 [DataToCoreKRSManager](DataToCoreKRSManager.md) 还原，两者互逆成对。

运行期数据不序列化：信息体的动态链接库句柄（CoreKRSObject_Dll）与符号表（CoreKRSObject_Dictionaries）不写入流——流中每项只保留超索引与状态码。转化只读取管理器本体，不修改其内容，管理器仍由 [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) 成对释放，结果数据流元素使用完毕由 ReleaseElementFunction 释放。

***

## 案例：

```C++
Element ManagerElement;
NewCoreKRSManagerFunction(EmptyElement, ManagerElement);
// 已登录若干信息体

Element ManagerStream;
NewUIntElementFunction(EmptyElement, ManagerStream);
CoreKRSManagerToDataFunction(ManagerElement, ManagerStream);
// ManagerStream 承载序列化后的登记数据（仅超索引与状态码，不含 DLL 句柄与符号表）

ReleaseElementFunction(EmptyElement, ManagerStream);
ReleaseCoreKRSManagerFunction(EmptyElement, ManagerElement);
```

案例解释：先把管理器的实有登记项序列化到 ManagerStream：头部四项为项数与分页参数，随后逐项写入超索引与状态码；空位被跳过，运行期的 DLL 句柄与符号表不写入。序列化不改变管理器内容，但两侧仍须成对收尾：数据流以 ReleaseElementFunction 释放，管理器由 [ReleaseCoreKRSManager](ReleaseCoreKRSManager.md) 与 [NewCoreKRSManager](NewCoreKRSManager.md) 成对释放（构造与释放成对）。还原见 [DataToCoreKRSManager](DataToCoreKRSManager.md)，完整链路见[核心KRS管理器集合](CoreKRSManager.md)。
