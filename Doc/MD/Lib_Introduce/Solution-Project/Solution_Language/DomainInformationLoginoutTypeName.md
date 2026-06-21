# DomainInformationLoginoutTypeName

***

命名空间DomainInformationLoginoutTypeName定义为：

    {
        namespace DomainInformationLoginoutTypeName {
                extern const char* Login_TypeName;
                extern const char* Logout_TypeName;
                extern const char* Common_TypeName;
                extern const char* LoginOut_TypeName;
        
                constexpr unsigned int Login_Type		= 0;
                constexpr unsigned int Logout_Type		= 1;
                constexpr unsigned int Common_Type		= 2;
                constexpr unsigned int LoginOut_Type	= 3;
            }
    }

域信息注册销类型名称（DomainInformationLoginoutTypeName）用于提供域信息注册销类型在文件等流中的字符描述，主要用于检索等行为。

***

    {
        namespace DomainInformationLoginoutTypeName {
                extern const char* Login_TypeName;

                // Login Type Name
                // 注册类型名称，用于指定注册类型

                extern const char* Logout_TypeName;

                // Logout Type Name
                // 注销类型名称，用于指定注销类型

                extern const char* Common_TypeName;

                // Common Type Name
                // 普通类型名称，用于指定普通类型

                extern const char* LoginOut_TypeName;

                // Login Out Type Name
                // 注册销类型名称，用于指定注册销类型
        
                constexpr unsigned int Login_Type		= 0;

                // Login Type
                // 注册类型，该类型标注的信息需要进行注册

                constexpr unsigned int Logout_Type		= 1;

                // Logout Type
                // 注销类型，该类型标注的信息需要进行注销

                constexpr unsigned int Common_Type		= 2;

                // Common Type
                // 普通类型，该类型标注的信息不进行操作

                constexpr unsigned int LoginOut_Type	= 3;

                // Login Out Type
                // 注册销类型，该类型标注的信息需要进行注册和注销
            }
    }