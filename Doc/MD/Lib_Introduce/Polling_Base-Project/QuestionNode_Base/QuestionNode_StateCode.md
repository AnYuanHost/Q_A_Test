# QuestionNode_StateCode

***

命名空间QuestionNode_StateCode定义为：

    {
        namespace QuestionNode_StateCode {
	        constexpr unsigned int QN_Zero				= 0;
	        constexpr unsigned int QN_Processed			= 1;
	        constexpr unsigned int QN_Tractable			= 2;
	        constexpr unsigned int QN_Pending			= 3;
	        constexpr unsigned int QN_Untractable		= 4;
	        constexpr unsigned int QN_Wait				= 5;
	        constexpr unsigned int QN_Success			= 6;
	        constexpr unsigned int QN_TraUntractable	= 7;
        }
    }

***

    {
        namespace QuestionNode_StateCode {

	        constexpr unsigned int QN_Zero				= 0;

            // Question Node Zero
            // 零状态，问答节点零状态，不代表任何信息

	        constexpr unsigned int QN_Processed			= 1;

            // Question Node Processed
            // 执行完成状态，代表问答节点已经执行完成

	        constexpr unsigned int QN_Tractable			= 2;

            // Question Node Tractable
            // 可执行状态，代表问答节点已经准备好，可以进行执行

	        constexpr unsigned int QN_Pending			= 3;

            // Question Node Pending
            // 等待状态，代表问答节点不存在未执行完成的前置节点，但不确定是否可以执行

	        constexpr unsigned int QN_Untractable		= 4;

            // Question Node Untractable
            // 不可执行状态，代表问答节点存在未执行完成的前置节点

	        constexpr unsigned int QN_Wait				= 5;

            // Question Node Wait
            // 等待状态，代表该节点进入轮询机准备处理状态

	        constexpr unsigned int QN_Success			= 6;

            // Question Node Success
            // 成功状态，该节点已在轮询机中处理完成，可以送入执行完成序列

	        constexpr unsigned int QN_TraUntractable	= 7;

            // Question Node Tra Untractable
            //可直接执行状态，该节点存在前置的未执行完成的节点，但当其不存在时不需要等待直接进入可执行态
            
        }
    }