# SolutionLanguageContextDictionaries_Struct

***

命名空间SolutionLanguageContextDictionaries_Struct定义为：

    {
        namespace SolutionLanguageContextDictionaries_Struct {
            constexpr unsigned int SLCD_PageOrder =		0;
            constexpr unsigned int SLCD_Parameter =		1;
                constexpr unsigned int SLCD_PageSize			= 0;
                constexpr unsigned int SLCD_ExpandSize			= 1;
                constexpr unsigned int SLCD_End					= 2;
        
                constexpr unsigned int SLCD_OrderSize = 3;
                constexpr unsigned int SLCD_Information			= 0;
                constexpr unsigned int SLCD_SuperIndex			= 1;
                constexpr unsigned int SLCD_BaseInformation		= 2;
        }
    }

解决方案语言语境字典结构（SolutionLanguageContextDictionaries_Struct）通过命名空间确定对于一个解决方案语言语境字典元素，应该如何解析其结构并操作其信息。解决方案语言语境字典元素以元素序列实现树结构的存储，可以通过命名空间指明的下标通过宏GetEleOrder来获取对应元素。

***

## 解决方案语言语境字典介绍：

    {
        namespace SolutionLanguageContextDictionaries_Struct {

                constexpr unsigned int SLCD_PageOrder =		0;

                // Solution Language Context Dictionaries Page Order
                // 解决方案语言语境字典页表序列，该元素作为容器来存储信息

                constexpr unsigned int SLCD_Parameter =		1;

                // Solution Language Context Dictionaries Parameter
                // 解决方案语言语境字典参数，该元素用于记录运行所需的各种参数

                    constexpr unsigned int SLCD_PageSize			= 0;

                    // Solution Language Context Dictionaries Page Size
                    // 解决方案语言语境字典页大小，该参数用于记录容器种页的大小

                    constexpr unsigned int SLCD_ExpandSize			= 1;

                    // Solution Language Context Dictionaries Expand Size
                    // 解决方案语言语境字典拓展数量，该参数用于记录容器拓展时的大小

                    constexpr unsigned int SLCD_End					= 2;

                    // Solution Language Context Dictionaries End
                    // 解决方案语言语境字典末尾地址，该参数用于记录容器末尾
        
                    constexpr unsigned int SLCD_OrderSize = 3;

                    // Solution Language Context Dictionaries Order Size
                    // 解决方案语言语境字典序列大小，该数值记录语境字典的一组信息的长度

                    constexpr unsigned int SLCD_Information			= 0;

                    // Solution Language Context Dictionaries Information
                    // 解决方案语言语境字典信息，该数值标记语境基础信息

                    constexpr unsigned int SLCD_SuperIndex			= 1;

                    // Solution Language Context Dictionaries Super Index
                    // 解决方案语言语境字典超索引，该数值标记语境超索引信息

                    constexpr unsigned int SLCD_BaseInformation		= 2;

                    // Solution Language Context Dictionaries Base Information
                    // 解决方案语言语境字典基础信息，该数值标记语境基础信息
            }
    }
