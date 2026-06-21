# SolutionFactory_Struct

***

命名空间SolutionFactory_Struct定义为：

    {
        namespace SolutionFactory_Struct {
            constexpr unsigned int SF_SolutionInformation			= 0;
            constexpr unsigned int SF_MatchMap						= 1;
            constexpr unsigned int SF_ParameterInformation			= 2;
            constexpr unsigned int SF_Solution						= 3;
            constexpr unsigned int SF_InformationCreaterSuperIndex	= 4;
        }    
    }

解决方案工厂结构（SolutionFactory_Struct）用于确定对于一个解决方案工厂元素，如何分析其结构并操作其信息。解决方案工厂元素以元素序列实现树结构的存储，可以通过命名空间指明的下标通过宏GetEleOrder获取对应元素。

***

## 解决方案工厂结构介绍：

    {
        namespace SolutionFactory_Struct {
            constexpr unsigned int SF_SolutionInformation			= 0;

            // Solution Factory Solution Information
            // 解决方案工厂解决方案信息，该元素用于记录解决方案构造所需信息

            constexpr unsigned int SF_MatchMap						= 1;

            // Solution Factory Match Map
            // 解决方案工厂匹配图，该元素用于记录解决方案发生的问答流图子图

            constexpr unsigned int SF_ParameterInformation			= 2;

            // Solution Factory Parameter Information
            // 解决方案工厂参数信息，该元素用于记录运行时所需的参数

            constexpr unsigned int SF_Solution						= 3;

            // Solution Factory Solution
            // 解决方案工厂解决方案，该元素用于存储解决方案产品

            constexpr unsigned int SF_InformationCreaterSuperIndex	= 4;

            // Solution Factory Information Creater Super Index
            // 解决方案工厂信息生成超索引，该元素用于存储信息生成所需的启发超索引
        }    
    }