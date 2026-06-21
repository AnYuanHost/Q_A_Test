# KRSPollingDrivenZero_Struct

***

命名空间KRSPollingDrivenZero_Struct定义为：

    {
        namespace KRSPollingDrivenZero_Struct {
            constexpr unsigned int KRSPDZ_OrderNumber = 9;
                constexpr unsigned int KRSPDZ_QuestionMap		= 0;
                constexpr unsigned int KRSPDZ_EES				= 1;
                constexpr unsigned int KRSPDZ_PDOrder			= 2;
                constexpr unsigned int KRSPDZ_ActiveMap			= 3;
                constexpr unsigned int KRSPDZ_UMapSet			= 4;
                constexpr unsigned int KRSPDZ_PMapSet			= 5;
                constexpr unsigned int KRSPDZ_RecursionOrder	= 6;
                    constexpr unsigned int KRSPDZ_RecursionGraph		= 0;
                    constexpr unsigned int KRSPDZ_RecursionState		= 1;
                constexpr unsigned int KRSPDZ_SolutionManager   = 7;
                constexpr unsigned int KRSPDZ_Map				= 8;
                    constexpr unsigned int KRSPDZ_EES_Map				= 0;
                        constexpr unsigned int KRSPDZ_EES_Get					= 0;
                        constexpr unsigned int KRSPDZ_EES_Put					= 1;
                        constexpr unsigned int KRSPDZ_EES_Occupy				= 2;
                        constexpr unsigned int KRSPDZ_EES_RelieveOccupy			= 3;
                        constexpr unsigned int KRSPDZ_EES_Login					= 4;
                        constexpr unsigned int KRSPDZ_EES_Logout				= 5;
                    constexpr unsigned int KRSPDZ_PMapSet_Map			= 1;
                        constexpr unsigned int KRSPDZ_PMapSet_Select			= 0;
                    constexpr unsigned int KRSPDZ_Thread_Map			= 2;
                        constexpr unsigned int KRSPDZ_Thread_Active				= 0;
                        constexpr unsigned int KRSPDZ_Thread_Test				= 1;
                        constexpr unsigned int KRSPDZ_Thread_Release			= 2;
        
            }
    }

知识库零轮询机结构（KRSPollingDrivenZero_Struct）通过命名空间确定对于知识库零轮询机元素，应该如何分析其结构并操作其信息。知识库零轮询机以元素序列树存储相关信息，可以通过命名空间指定下标通过宏GetEleOrder来获取对应元素。

***

## 知识库零轮询机基础结构：

    {
        namespace KRSPollingDrivenZero_Struct {
            constexpr unsigned int KRSPDZ_OrderNumber = 9;

            // Knowledge Representation Syetem Polling Driven Zero Order Number
            // 知识表达系统（知识库）零轮询机序列数量，该数字记录基础结构序列内元素数

                constexpr unsigned int KRSPDZ_QuestionMap		= 0;

                // Knowledge Representation System Polling Driven Question Map
                // 知识库零轮询机问答流图，该元素用于存储操作的问答流图

                constexpr unsigned int KRSPDZ_EES				= 1;

                // Knowledge Representation System Polling Driven Zero Element Environment Searcher
                // 知识库零轮询机元素环境检索器，该元素用于存储工作在知识库上的检索器

                constexpr unsigned int KRSPDZ_PDOrder			= 2;

                // Knowledge Representation System Polling Driven Zero Polling Driven Order
                // 知识库零轮询机轮询机序列，该元素用于完成轮询机管理

                constexpr unsigned int KRSPDZ_ActiveMap			= 3;

                // Knowledge Representataion System Polling Driven Zero Active Map
                // 知识库零轮询机可执行映射，该元素用于承担内循环的映射执行

                constexpr unsigned int KRSPDZ_UMapSet			= 4;

                // Knowledge Representation System Polling Driven Universal Map Set
                // 知识库零轮询机通用映射集合，该元素用于记录零轮询机所使用的通用映射

                constexpr unsigned int KRSPDZ_PMapSet			= 5;

                // Knowledge Representation System Polling Driven Private Map Set
                // 知识库零轮询机私有映射集合，该元素用于记录零轮询机所使用的私有映射

                constexpr unsigned int KRSPDZ_RecursionOrder	= 6;

                // Knowledge Representation System Polling Dirven Recursion Order
                // 知识库零轮询机递归序列，该元素用于记录零轮询机内循环递归所需的信息

                constexpr unsigned int KRSPDZ_SolutionManager   = 7;

                // Knowledge Representation Syetem Polling Dirven Zero Solution Manager
                // 知识库零轮询机解决方案管理，该元素用于管理生成的各个解决方案

                constexpr unsigned int KRSPDZ_Map				= 8;

                // Knowledge Representation System Polling Driven Zero Map
                // 知识库零轮询机映射集合，该元素用于记录知识库零轮询机所使用的映射集合
            }
    }

***

## 知识库零轮询机内循环参数：

    {
        namespace KRSPollingDrivenZero_Struct{
            ...

            constexpr unsigned int KRSPDZ_RecursionGraph = 0;

            // Knowledge Representation System Polling Driven Zero Recursion Graph
            // 知识库零轮询机递归图，该元素记录内循环发生的问答流图

            constexpr unsigned int KRSPDZ_RecursionState = 1;

            // Knowledge Representation System Polling Driven Zero Recursion State
            // 知识库零轮询机递归状态，该元素记录内循环状态
        }
    }

***

## 知识库零轮询机映射集合

    {
        namespace KRSPollingDrivenZero_Struct{
            ...

            constexpr unsigned int KRSPDZ_EES_Map				= 0;

            // Knowledge Representation System Polling Driven Zero Element Environment Searcher Map
            // 知识库零轮询机元素环境检索器映射，该元素用于存储元素环境检索器相关操作

                constexpr unsigned int KRSPDZ_EES_Get					= 0;

                // Knowledge Representation System Polling Driven Zero Element Environmet Searcher Map
                // 知识库零轮询机元素环境检索器获取映射，该元素用于从元素环境检索器中获取

                constexpr unsigned int KRSPDZ_EES_Put					= 1;

                // Knowledge Representation System Polling Driven Zero Element Environment Searcher Put
                // 知识库零轮询机元素环境检索器存放映射，该元素用于在元素环境检索器中存入

                constexpr unsigned int KRSPDZ_EES_Occupy				= 2;

                // Knowledge Representation System Polling Driven Zero Element Environment
                Searcher Occupy
                // 知识库零轮询机元素环境检索器占用映射，该元素用于在元素环境检索器中占用 

                constexpr unsigned int KRSPDZ_EES_RelieveOccupy			= 3;

                // Knowledge Representation System Polling Driven Zero Element Environment Searcher Relieve Occupy
                // 知识库零轮询机元素环境检索器解除占用映射，该元素用于在元素环境检索器中解除占用

                constexpr unsigned int KRSPDZ_EES_Login					= 4;

                // Knowledge Representation System Polling Driven Zero Element Environment Searcher Login
                // 知识库零轮询机元素环境检索器注册映射，该元素用于在元素环境检索器中完成元素注册

                constexpr unsigned int KRSPDZ_EES_Logout				= 5;

                // Knowledge Representation System Polling Driven Zero Element Environment Searcher Logout
                // 知识库零轮询机元素环境检索器注销映射，该元素用于在元素环境检索器中完成元素注销

            constexpr unsigned int KRSPDZ_PMapSet_Map			= 1;

            // Knowledge Representation System Polling Driven Zero Private Map Set Map
            // 知识库零轮询机私有映射集合映射，该元素用于零轮询机私有映射集合操作

                constexpr unsigned int KRSPDZ_PMapSet_Select			= 0;

                // Knowledge Representation System Polling Driven Zero Private Map Set Select
                // 知识库零轮询机私有映射集合检索映射，该元素用于在私有映射集合中完成检索

            constexpr unsigned int KRSPDZ_Thread_Map			= 2;

            // Knowledge Representation System Polling Driven Zero Thread Map
            // 知识库零轮询机线程映射，该元素用于零轮询机线程操作

                constexpr unsigned int KRSPDZ_Thread_Active				= 0;

                // Knowledge Representation System Polling Driven Zero Thread Active
                // 知识库零轮询机线程执行映射，该元素用于启动线程

                constexpr unsigned int KRSPDZ_Thread_Test				= 1;

                // Knowledge Representation System Polling Driven Zero Thread Test
                // 知识库零轮询机线程测试映射，该元素用于检测线程状态

                constexpr unsigned int KRSPDZ_Thread_Release			= 2;

                // Knowledge Representation System Polling Driven Zero Release
                // 知识库零轮询机线程释放映射，该元素用于释放线程
        }
    }