# CoreKRSLibMapManager_TypeName

***

命名空间CoreKRSLibMapManager_TypeName定义了核心KRS库映射管理器类型名称常量，提供元素（Element）、集合（Set）、映射（Map）三种结构的类型名称字符串与类型编号，定义为：

```C++
namespace CoreKRSLibMapManager_TypeName {
	extern const char* Element_TypeName;
	extern const char* Set_TypeName;
	extern const char* Map_TypeName;

	constexpr unsigned int Element_Type		= 0;
	constexpr unsigned int Set_Type			= 1;
	constexpr unsigned int Map_Type			= 2;
}
```

常量分两部分：extern 声明的类型名称字符串（Element_TypeName、Set_TypeName、Map_TypeName），与 constexpr 常量的类型编号（Element_Type、Set_Type、Map_Type）。类型编号用于映射管理器的结构信息标注——[核心KRS库映射管理器结构写入映射](FstreamStructCoreKRSLibMapManager.md)将管理器的结构信息序列化写入文件时，在管理器条目序结构的元素类别子位置（[IMM_ElementCategory](CoreKRSLibMapManager_Struct.md)）写入类型编号，写入内容附带对应的类型名称字符串。

***

## 案例：

```C++
Element ManagerElement;

unsigned int TypeNumber = GetUIntElement(
    GetEleOrder(GetEleOrder(ManagerElement, CoreKRSLibMapManager_Struct::IMM_Order),
                CoreKRSLibMapManager_Struct::IMM_ElementCategory));

if (TypeNumber == CoreKRSLibMapManager_TypeName::Map_Type) {
    // 该条目登记的是一个映射，其类型名称字符串为 CoreKRSLibMapManager_TypeName::Map_TypeName
}
```

案例中读出管理器条目的元素类别子位置上的类型编号，与 Map_Type 比对，据此确定该条目登记的结构类别，映射类别的类型名称字符串取 Map_TypeName。元素类别与集合类别同理，分别对应 Element_Type 与 Set_Type。
