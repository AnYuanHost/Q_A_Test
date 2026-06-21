# SolutionInformationDictionaries_Struct

***

命名空间SolutionInformationDictionaries_Struct定义为：

    {
        namespace SolutionInformationDictionaries_Struct {
            constexpr unsigned int SID_SuperIndex		= 0;
            constexpr unsigned int SID_Order			= 1;
            constexpr unsigned int SID_Parameter		= 2;
                constexpr unsigned int SID_PageSize		= 0;
                constexpr unsigned int SID_End			= 1;
                constexpr unsigned int SID_ExpandSize		= 2;
                constexpr unsigned int SID_RetainSize		= 3;
                constexpr unsigned int SID_EmptyNumber		= 4;
    
            constexpr unsigned int SID_OrderSize			= 1;
                constexpr unsigned int SID_Information			= 0;
        }    
    }

解决方案信息字典结构（SolutionInformationDictionaries_Struct）通过命名空间确定对于一个解决方案信息字典元素，应该如何分析其结构并操作其信息。解决方案信息字典以元素序列实现树结构的存储，可以通过命名空间指明的下标通过宏GetEleOrder来获取对应元素。

***

## 解决方案信息字典介绍：

    {
        namespace SolutionInformationDictionaries_Struct {
            constexpr unsigned int SID_SuperIndex		= 0;

            // Solution Information Dictionaries Super Index
            // 解决方案信息字典超索引，该元素用于更深入的知识操作

            constexpr unsigned int SID_Order			= 1;

            // Solution Information Dictionaries Order
            // 解决方案信息字典序列，该元素作为容器存储解决方案信息

            constexpr unsigned int SID_Parameter		= 2;

            // Solution Information Dictionaries Parameter
            // 解决方案信息字典参数，该元素用于提供运行时参数

                constexpr unsigned int SID_PageSize		    = 0;

                // Solution Information Dictionaries Page Size
                // 解决方案信息字典页表大小，该参数用于记录页表大小

                constexpr unsigned int SID_End			    = 1;

                // Solution Information Dictionaries End
                // 解决方案信息字典末尾，该参数用于记录容器末尾的地址

                constexpr unsigned int SID_ExpandSize		= 2;

                // Solution Information Dictionaries Expand Size
                // 解决方案信息字典扩展大小，该参数用于记录容器扩容时应增加的页表数

                constexpr unsigned int SID_RetainSize		= 3;

                // Solution Information Dictionaries Retain Size
                // 解决方案信息字典保留大小，该参数用于记录容器缩容时应保留的页表数

                constexpr unsigned int SID_EmptyNumber		= 4;

                // Solution Information Dictionaries Empty Number
                // 解决方案信息字典空数量，该参数用于记录容器置空的数量
    
            constexpr unsigned int SID_OrderSize			= 1;

            // Solution Information Dictionaries Order Size
            // 解决方案信息字典序列大小，该参数用于记录解决方案信息字典的槽位大小

                constexpr unsigned int SID_Information			= 0;

                // Solution Information Dictionaries Information
                // 解决方案信息字典信息，该槽位记录一个解决方案信息管理元素
        }    
    }