# QuestionFlowMap_ReplacePackage

***

命名空间QuestionFlowMap_ReplacePackage定义为：

    {
        namespace QuestionFlowMap_ReplacePackage {
	        constexpr unsigned int Package_RemoveNode		= 0;
	        constexpr unsigned int Package_AddNode			= 1;
	        constexpr unsigned int Package_ResetANP			= 2;
	        constexpr unsigned int Package_ResetPNA			= 3;
	        constexpr unsigned int Package_LoginElement		= 4;
	        constexpr unsigned int Package_LogoutElement	= 5;
        }
    }

问答流图替换包（QuestionFlowMap_ReplacePackage）通过命名空间确定对于一个问答流图替换包，应该如何分析其结构并操作其信息。问答流图替换包元素以元素序列实现、存储，可以通过命名空间指明的下标和通过宏GetEleOrder来获取对应元素。

***

## 问答流图替换包结构

    {
        namespace QuestionFlowMap_ReplacePackage {

	        constexpr unsigned int Package_RemoveNode		= 0;

            // Package Remove Node
            // 包移除节点，该元素记录应该被移除的节点的地址信息

	        constexpr unsigned int Package_AddNode			= 1;

            // Package Add Node
            // 包添加节点，该元素记录应该添加的节点信息

	        constexpr unsigned int Package_ResetANP			= 2;

            // Package Reset Antecedent Node Post
            // 包前置节点的后置信息重设，该元素记录前置节点元素的后置节点重设信息

	        constexpr unsigned int Package_ResetPNA			= 3;

            // Package Reset Post Node Antecendet
            // 包后置节点的前置信息重设，该元素记录后置节点元素的前置节点重设信息

	        constexpr unsigned int Package_LoginElement		= 4;

            // Package Login Element
            // 包注册元素信息，该元素记录待注册的元素信息

	        constexpr unsigned int Package_LogoutElement	= 5;

            // Package Logout Element
            // 包注销元素信息，该元素记录待注销的元素信息
            
        }
    }