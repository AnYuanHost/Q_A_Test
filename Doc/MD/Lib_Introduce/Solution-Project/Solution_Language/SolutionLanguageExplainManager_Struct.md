# SolutionLanguageExplainManager_Struct

***

命名空间SolutionLanguageExplainManager_Struct定义为：

    {
        namespace SolutionLanguageExplainManager_Struct {
            constexpr unsigned int SL_OrderSize = 8;
                constexpr unsigned int SL_FirstMap				= 0;
                constexpr unsigned int SL_SecoundMap			= 1;
                constexpr unsigned int SL_FirstMapParameter		= 2;
                constexpr unsigned int SL_SecoundMapParameter	= 3;
                constexpr unsigned int SL_FMPContext			= 4;
                constexpr unsigned int SL_SMPContext			= 5;
                constexpr unsigned int SL_LoginInformation		= 6;
                constexpr unsigned int SL_LogoutInformation		= 7;
            }
    }

解决方案语言描述管理结构（SolutionLanguageExplainManager_Struct）通过命名空间确定对于一个解决方案语言描述管理元素，应该如何解析其结构并操作其信息。解决方案语言描述管理元素以元素序列实现树结构的存储，可以通过命名空间指明的下标通过宏GetEleOrder来获取对应元素。

***

## 解决方案语言描述管理介绍：

    {
        namespace SolutionLanguageExplainManager_Struct {
            constexpr unsigned int SL_OrderSize = 8;

            // Solution Language Order Size
            // 解决方案语言描述管理序列尺寸，该数值用于记录解决方案语言描述管理元素的序列长度

                constexpr unsigned int SL_FirstMap				= 0;

                // Solution Language First Map
                // 解决方案语言描述管理第一图，该元素用于记录替换前的问答流图子图信息

                constexpr unsigned int SL_SecoundMap			= 1;

                // Solution Language Secound Map
                // 解决方案语言描述管理第二图，该元素用于记录替换后的问答流图子图信息

                constexpr unsigned int SL_FirstMapParameter		= 2;

                // Solution Language First Map Parameter
                // 解决方案语言描述管理第一图参数，该元素用于记录替换前问答流图的所有参数的信息

                constexpr unsigned int SL_SecoundMapParameter	= 3;

                // Solution Language Secound Map Parameter
                // 解决方案语言描述管理第二图参数，该元素用于记录替换后问答流图的所有参数的信息

                constexpr unsigned int SL_FMPContext			= 4;

                // Solution Language First Map Parameter Context
                // 解决方案语言描述管理第一图参数语境，该元素用于记录替换前问答流图的所有参数的语境信息

                constexpr unsigned int SL_SMPContext			= 5;

                // Solution Language Secound Map Parameter Context
                // 解决方案语言描述管理第二图参数语境，该元素用于记录替换后问答流图的所有参数的语境信息

                constexpr unsigned int SL_LoginInformation		= 6;

                // Solution Language Login Information
                // 解决方案语言描述管理注册参数信息，该元素用于记录子图替换时需要注册的参数

                constexpr unsigned int SL_LogoutInformation		= 7;

                // Solution Language Logout Information
                // 解决方案语言描述管理注销参数信息，该元素用于记录子图替换时需要注销的参数
            }
    }