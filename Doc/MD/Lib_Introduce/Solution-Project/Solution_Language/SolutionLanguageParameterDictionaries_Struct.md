# SolutionLanguageParameterDictionaries_Struct

***

命名空间SolutionLanguageParameterDictionaries_Struct定义为：

    {
        namespace SolutionLanguageParameterDictionaries_Struct {
                constexpr unsigned int SLPD_Order			= 0;
                constexpr unsigned int SLPD_Parameter		= 1;
                    constexpr unsigned int SLPD_PageSize		= 0;
                    constexpr unsigned int SLPD_End				= 1;
                    constexpr unsigned int SLPD_ExpandSize		= 2;
        
                    constexpr unsigned int SLPD_OrderSize = 5;
                    constexpr unsigned int SLPD_LanguageParameter		= 0;
                    constexpr unsigned int SLPD_BaseInformation			= 1;
                    constexpr unsigned int SLPD_ContextInformation		= 2;
                    constexpr unsigned int SLPD_LoginOutState			= 3;
                    constexpr unsigned int SLPD_Information				= 4;
            }
    }

解决方案语言参数字典结构（SolutionLanguageParameterDictionaries_Struct）通过命名空间确定对于一个解决方案语言参数字典元素，应该如何分析其结构并操作其信息。解决方案语言参数字典以元素序列实现树结构的存储，可以通过命名空间指明的下标通过宏GetEleOrder来获取对应元素。

***

## 解决方案语言参数字典结构介绍：

    {
        namespace SolutionLanguageParameterDictionaries_Struct{
            constexpr unsigned int SLPD_Order = 0;

            // Solution Language Parameter Dictionaries Order
            // 解决方案语言参数字典序列，该元素用于存储语言参数元素

            constexpr unsigned int SLPD_Parameter = 1;

            // Solution Language Parameter Dictionaries Parameter
            // 解决方案语言参数字典参数，该元素用于提供运行时参数

                constexpr unsigned int SLPD_PageSize = 0;

                // Solution Language Parameter Dictionaries Page Size
                // 解决方案语言参数字典页表大小，该参数记录容器的页表大小

                constexpr unsigned int SLPD_End = 1;

                // Solution Language Parameter Dictionaries End
                // 解决方案语言参数字典末尾，该参数记录容器末尾地址信息

                constexpr unsigned int SLPD_ExpandSize = 2;

                // Solution Language Parameter Dictionaries Expand Size
                // 解决方案语言字典拓展大小，该参数记录容器扩展时增加页数量
        }
    }

***

## 解决方案语言参数字典组成

    {
        namespace SolutionLanguageParameterDictionaries_Struct {
            ...

            constexpr unsigned int SLPD_OrderSize = 5;

            // Solution Language Parameter Dictionaries Order Size
            // 解决方案参数字典_序列大小，该数值记录一个解决方案参数的序列长度

            constexpr unsigned int SLPD_LanguageParameter		= 0;

            // Solution Language Parameter Dictionaries Language Parameter
            // 解决方案参数字典语言参数，

            constexpr unsigned int SLPD_BaseInformation			= 1;

            // Solution Language Parameter Dictionaries Base Information
            // 解决方案参数字典基础信息，该元素用于信息生成器

            constexpr unsigned int SLPD_ContextInformation		= 2;

            // Solution Language Parameter Dictionaries Context Information
            // 解决方案参数字典上下文信息，该元素用于确定语境信息

            constexpr unsigned int SLPD_LoginOutState			= 3;

            // Solution Language Parameter Dictionaries Login Out State
            // 解决方案参数字典注册注销状态，该元素用于确定是否进行注册注销

            constexpr unsigned int SLPD_Information				= 4;

            // Solution Language Parameter Dictionaries Information
            // 解决方案参数字典信息，该元素用于记录最终运行时使用的信息
        }
    }