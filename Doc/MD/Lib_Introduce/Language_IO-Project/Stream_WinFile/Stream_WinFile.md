# Stream_WinFile

***

本目录对应源文件 `Lib.h.cpp/Language_IO/h.cpp/Stream_WinFile.h`。Stream_WinFile 源文件在 Windows 文件上提供按文本格式的读写：本模块的"Windows 文件元素"即文件集合（FstreamSet）中的 std::fstream 元素（由 NewFstream 构造、OpenFstream/OpenFstreamByPara 打开），字符串载体沿用 Language 项目的字符串集合（StringSet），整批读写的载体沿用 E_S_M 的元素序集合（ElementOrderSet）。

***

| 指令 | 说明 |
| --- | --- |
| [WinFileGetAllString](WinFileGetAllString.md) | 映射WinFileGetAllString接受文件集合（FstreamSet）为定义域，空元素集合（NullElementSet）为值域 |
| [WinFileGetString](WinFileGetString.md) | 映射WinFileGetString接受文件集合（FstreamSet）为定义域，字符串集合（StringSet）为值域 |
| [WinFileGetUInt](WinFileGetUInt.md) | 映射WinFileGetUInt接受文件集合（FstreamSet）为定义域，无符号整型集合（UIntSet）为值域 |
| [WinFilePutAllString](WinFilePutAllString.md) | 映射WinFilePutAllString接受元素序集合（ElementOrderSet）为定义域，文件集合（FstreamSet）为值域 |
| [WinFilePutLine](WinFilePutLine.md) | 映射WinFilePutLine接受空元素集合（NullElementSet）为定义域，文件集合（FstreamSet）为值域 |
| [WinFilePutSpace](WinFilePutSpace.md) | 映射WinFilePutSpace接受空元素集合（NullElementSet）为定义域，文件集合（FstreamSet）为值域 |
| [WinFilePutString](WinFilePutString.md) | 映射WinFilePutString接受流集合（StreamSet）为定义域，文件集合（FstreamSet）为值域 |
| [WinFilePutUInt](WinFilePutUInt.md) | 映射WinFilePutUInt接受无符号整型集合（UIntSet）为定义域，文件集合（FstreamSet）为值域 |

***

参照：[Language 项目 Stream_Base 模块](../../Language-Project/Stream_Base/Stream_Base.md)（字符串、流元素的构造与转化）、[I_O 项目 File_Base 模块](../../I_O-Project/File_Base/File_Base.md)（文件元素的打开、关闭与释放）。
