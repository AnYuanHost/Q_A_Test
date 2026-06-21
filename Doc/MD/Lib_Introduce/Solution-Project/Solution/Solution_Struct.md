# Solution_Struct

***

命名空间Solution_Struct定义：

    {
        namespace Solution_Struct {
            constexpr unsigned int SolutionOrderSize = 7;
                constexpr unsigned int SolutionState			= 0;
                constexpr unsigned int Solution_RemoveNode		= 1;
                constexpr unsigned int Solution_AddNode			= 2;
                constexpr unsigned int Solution_ResetANP		= 3;
                constexpr unsigned int Solution_ResetPNA		= 4;
                constexpr unsigned int Solution_LoginElement	= 5;
                constexpr unsigned int Solution_LogoutElement	= 6;
            }
    }

解决方案结构（Solution_Struct）通过命名空间确定对于一个解决方案元素，应该如何解析其结构并操作其信息。解决方案以元素序列实现树结构的存储，可以通过命名空间指明的下标通过宏GetEleOrder来获取对应元素。

***

## 解决方案结构：

    {
        namespace Solution_Struct {
            constexpr unsigned int SolutionOrderSize = 7;

            // Solution Order Size
            // 解决方案序列大小，该数值记录解决方案的序列的长度

                constexpr unsigned int SolutionState			= 0;

                // Solution State
                // 解决方案状态，该元素用于记录解决方案实际运行时状态

                constexpr unsigned int Solution_RemoveNode		= 1;

                // Solution Remove Node
                // 解决方案移除节点，该元素用于记录解决方案应该移除的节点的地址信息

                constexpr unsigned int Solution_AddNode			= 2;

                // Solution Add Node
                // 解决方案添加节点，该元素用于记录解决方案应该增加的节点
                
                constexpr unsigned int Solution_ResetANP		= 3;

                // Solution Reset Antecedent Node Post
                // 解决方案重设前置节点的后置信息，该元素用于记录解决方案应该如何调整前置节点的后置信息

                constexpr unsigned int Solution_ResetPNA		= 4;

                // Solution Reset Post Node Antecedent
                // 解决方案重设后置节点的前置信息，该元素用于记录解决方案应该如何调整后置节点的前置信息

                constexpr unsigned int Solution_LoginElement	= 5;

                // Solution Login Element
                // 解决方案注册元素，该元素用于记录解决方案需要注册哪些元素

                constexpr unsigned int Solution_LogoutElement	= 6;

                // Solution Logout Element
                // 解决方案注销映射，该元素用于记录解决方案需要注销哪些元素
        }
    }