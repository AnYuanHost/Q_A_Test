# Stream_WinFile

***

本目录对应源文件 `Lib.h.cpp/Language_IO/h.cpp/Stream_WinFile.h`。Stream_WinFile 源文件在 Windows 文件上提供按文本格式的读写：本模块的"Windows 文件元素"即文件集合（FstreamSet）中的 std::fstream 元素（由 NewFstream 构造、OpenFstream/OpenFstreamByPara 打开），字符串载体沿用 Language 项目的字符串集合（StringSet），整批读写的载体沿用 E_S_M 的元素序集合（ElementOrderSet）。

***

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| [Windows 文件获取全量字符串映射](WinFileGetAllString.md) | 映射 | 从文件中按文本格式整批读出字符串并构造元素序 |
| [Windows 文件获取字符串映射](WinFileGetString.md) | 映射 | 从文件中按文本格式读出一个字符串 |
| [Windows 文件获取无符号整型映射](WinFileGetUInt.md) | 映射 | 从文件中按文本格式读出一个无符号整型 |
| [Windows 文件存入全量字符串映射](WinFilePutAllString.md) | 映射 | 把元素序中的各字符串依次按行写入文件 |
| [Windows 文件存入换行映射](WinFilePutLine.md) | 映射 | 向文件写入一个换行符 |
| [Windows 文件存入空格映射](WinFilePutSpace.md) | 映射 | 向文件写入一个空格字符 |
| [Windows 文件存入字符串映射](WinFilePutString.md) | 映射 | 把字符串文本写入文件的当前位置 |
| [Windows 文件存入无符号整型映射](WinFilePutUInt.md) | 映射 | 把无符号整型以十进制文本写入文件 |

***

参照：[Language 项目 Stream_Base 模块](../../Language-Project/Stream_Base/Stream_Base.md)（字符串、流元素的构造与转化）、[I_O 项目 File_Base 模块](../../I_O-Project/File_Base/File_Base.md)（文件元素的打开、关闭与释放）。
