# DomainInformationTypeName

***

命名空间DomainInformationTypeName定义为：

    {
        namespace DomainInformationTypeName {
            extern const char* String_TypeName;
            extern const char* UInt_TypeName;
            extern const char* SuperIndex_TypeName;
            extern const char* Bool_TypeName;
            extern const char* EmptyElement_TypeName;
        }
    }

域信息类型名称（DomainInformationTypeName）用于提供域信息类型在文件等流中的字符描述，主要用于检索等行为。

***

## 域信息类型名称定义

    {
        namespace DomainInformationTypeName {
                const char* String_TypeName = "String";

                // String Type Name
                // 字符串类型名称，用于指定字符串类型

                const char* UInt_TypeName = "UInt";

                // Unsigned Int Type Name
                // 无符号整型类型名称，用于指定无符号整型类型

                const char* SuperIndex_TypeName = "SuperIndex";

                // Super Index Type Name
                // 超索引类型名称，用于指定超索引类型

                const char* Bool_TypeName = "Bool";

                // Bool Type Name
                // 布尔类型名称，用于指定布尔类型

                const char* EmptyElement_TypeName = "EmptyElement";

                // Empty Element Type Name
                // 空元素类型名称，用于指定空元素
            }
    }