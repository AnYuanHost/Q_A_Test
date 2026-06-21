# SolutionLanguageExplainManagerDictionaries_Struct

***

命名空间SolutionLanguageExplainManagerDictionaries_Struct定义为：

    {
        namespace SolutionLanguageExplainManagerDictionaries_Struct {
            constexpr unsigned int SLEMD_Order			= 0;
            constexpr unsigned int SLEMD_Parameter		= 1;
                constexpr unsigned int SLEMD_End            = 0;
        
            constexpr unsigned int SLEMD_OrderSize		= 2;
                constexpr unsigned int SLEMD_SuperIndex		= 0;
                constexpr unsigned int SLEMD_Manager		= 1;
        }
    }

解决方案语言表达管理字典结构（SolutionLanguageExplainManagerDictionaries_Struct）通过命名空间确定对于一个解决方案语言表达管理字典元素，应该如何分析其结构并操作其信息。解决方案语言管理字典以元素序列实现树结构的存储，可以通过命名空间指明的下标通过宏GetEleOrder获取对应的元素。

***

## 解决方案语言表达管理字典介绍：

    {
        namespace SolutionLanguageExplainManagerDictionaries_Struct {
            constexpr unsigned int SLEMD_Order			= 0;

            // Solution Language Explain Manager Dictionaries Order
            // 解决方案语言描述管理字典序列，该元素作为容器存储相关字典信息

            constexpr unsigned int SLEMD_Parameter			= 1;

            // Solution Language Explain Manager Dictionaries Parameter
            // 解决方案语言描述管理字典参数，该元素用于记录运行所需参数

                constexpr unsigned int SLEMD_End            = 0;

                // Solution Language Explain Manager Dictionaries End
                // 解决方案语言管理字典末尾，该参数用于记录容器末尾地址
    
            constexpr unsigned int SLEMD_OrderSize		= 2;

            // Solution Language Explain Manager Dictionaries Order Size
            // 解决方案语言描述管理字典序列尺寸，该数值记录字典一个检索对序列的长度

                constexpr unsigned int SLEMD_SuperIndex		= 0;

                // Solution Language Explain Manager Dictionaries Super Index
                // 解决方案语言表达管理字典超索引，该元素记录可以检索到对应解决方案语言表达管理的超索引信息

                constexpr unsigned int SLEMD_Manager		= 1;

                // Solution Language Explain Manager Dictionaries Manager
                // 解决方案语言表达管理字典管理者，该元素记录对应的解决方案语言表达元素
        }    
    }