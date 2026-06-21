# SolutionDictionariesManager_Struct

***

命名空间SolutionDictionariesManager_Struct定义为：

    {
        namespace SolutionDictionariesManager_Struct {
            constexpr unsigned int SDM_Order			= 0;
            constexpr unsigned int SDM_Parameter		= 1;
                constexpr unsigned int SDM_End			= 0;
                constexpr unsigned int SDM_PageSize		= 1;
                constexpr unsigned int SDM_ExpandSize		= 2;
                constexpr unsigned int SDM_RetainSize		= 3;
                constexpr unsigned int SDM_EmptyNumber		= 4;
    
            constexpr unsigned int SDM_OrderSize = 3;
                constexpr unsigned int SDM_SuperIndex		= 0;
                constexpr unsigned int SDM_Dictionaries	= 1;
                constexpr unsigned int SDM_Manager		= 2;
        }    
    }

解决方案字典管理结构（SolutionDictionariesManager_Struct）用于确定对于一个解决方案字典管理元素，应该如何分析其结构并操作其信息。解决方案字典管理元素以元素序列实现树结构的存储，可以通过命名空间指明的下标通过宏GetEleOrder获取对应元素。

***

## 解决方案字典管理介绍：

    {
        namespace SolutionDictionariesManager_Struct {
            constexpr unsigned int SDM_Order			= 0;

            // Solution Dictionaries Manager Order
            // 解决方案字典管理序列，该元素作为容器存储相关解决方案字典信息

            constexpr unsigned int SDM_Parameter		= 1;

            // Solution Dictionaries Manager Parameter
            // 解决方案字典管理参数，该元素记录运行所需的参数信息

                constexpr unsigned int SDM_End			= 0;

                // Solution Dictionaries Manager End
                // 解决方案字典管理末尾，该元素记录容器的末尾地址

                constexpr unsigned int SDM_PageSize		= 1;

                // Solution Dictionaries Manager Page Size
                // 解决方案字典管理页表大小，该参数记录页表大小

                constexpr unsigned int SDM_ExpandSize		= 2;

                // Solutio Dictionaries Manager Expand Size
                // 解决方案字典管理拓展页数，该参数记录容器拓展时增长的页数

                constexpr unsigned int SDM_RetainSize		= 3;

                // Solution Dictionaries Manager Retain Size
                // 解决方案字典管理保留页数，该参数记录容器缩容时保留的页数

                constexpr unsigned int SDM_EmptyNumber		= 4;

                // Solution Dictionaries Manager Empty Number
                // 解决方案字典管理空数量，该参数记录容器内置空的数量
    
            constexpr unsigned int SDM_OrderSize = 3;

            // Solution Dictionaries Manager Order Size
            // 解决方案字典管理序列尺寸，该数值记录解决方案字典管理的槽位大小

                constexpr unsigned int SDM_SuperIndex	= 0;

                // Solution Dictionaries Manager Super Index
                // 解决方案字典管理超索引，该元素记录解决方案语言表达管理字典的超索引信息

                constexpr unsigned int SDM_Dictionaries	= 1;

                // Solution Dictionaries Manager Dictionaries
                // 解决方案字典管理字典，该元素记录解决方案语言表达管理字典

                constexpr unsigned int SDM_Manager		= 2;

                // Solution Dictionaries Manager Manager
                // 解决方案字典管理管理，该元素记录解决方案语言表达管理字典对应的实例管理
        }    
    }