# SolutionInformationManager_Struct

***

命名空间SolutionInformationManager_Struct定义为：

    {
        namespace SolutionInformationManager_Struct {
            constexpr unsigned int SIM_OrderSize = 23;
        
            constexpr unsigned int SIM_SuperIndex				= 0;
            constexpr unsigned int SIM_SLMSuperIndex			= 1;
        }
    }

解决方案信息管理结构（SolutionInformationManager_Struct）通过命名空间确定对于一个解决方案信息管理元素，应该如何分析其结构并操作其信息。解决方案信息管理以元素序列实现树结构的存储，可以通过命名空间指明的下标通过宏GetEleOrder来获取对应元素。

***

## 解决方案信息管理结构介绍：

    {
        namespace SolutionInformationManager_Struct {
            constexpr unsigned int SIM_OrderSize = 2;

            // Solution Information Manager Order Size
            // 解决方案信息管理序列大小，该数值用于记录解决方案信息管理元素的序列长度
        
            constexpr unsigned int SIM_SuperIndex				= 0;

            // Solution Information Manager Super Index
            // 解决方案信息管理超索引，该元素用于记录解决方案信息管理的超索引

            constexpr unsigned int SIM_SLMSuperIndex			= 1;

            // Solution Information Manager Solution Language Manager Super Index
            // 解决方案信息管理解决方案语言管理超索引，该元素用于记录解决方案语言管理的超索引信息
            
        }
    }