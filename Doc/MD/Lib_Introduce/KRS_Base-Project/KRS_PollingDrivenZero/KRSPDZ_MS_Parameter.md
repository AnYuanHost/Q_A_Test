# KRSPDZ_MS_Parameter

***

命名空间KRSPDZ_MS_Parameter定义为：

    {
        namespace KRSPDZ_MS_Parameter {
	        constexpr unsigned int KRSPDZ_MS_MapNumber		= 5;
		        constexpr unsigned int KRSPDZ_MS_Replace			= 0;
		        constexpr unsigned int KRSPDZ_MS_RecyclePD			= 1;
		        constexpr unsigned int KRSPDZ_MS_AllotPD			= 2;
		        constexpr unsigned int KRSPDZ_MS_PushBack			= 3;
		        constexpr unsigned int KRSPDZ_MS_Recycle			= 4;
        }
    }

知识库零轮询机映射检索器参数（KRSPDZ_MS_Parameter）通过命名空间确定对于知识库零轮询机映射检索器元素，应该如何分析其结构并操作其信息。知识库零轮询机映射检索器参数以元素序列存储相关信息，可以通过命名空间指定的下标通过宏GetEleOrder来获取对应元素。

***

## 知识库零轮询机映射检索器参数介绍：

    {
        namespace KRSPDZ_MS_Parameter {
	        constexpr unsigned int KRSPDZ_MS_MapNumber		= 5;

            // Knowledge Representation System Polling Driven Zero Map Set Map Number
            // 知识库零轮询机映射集合数量，该数字记录该集合内映射元素数量

		        constexpr unsigned int KRSPDZ_MS_Replace			= 0;

                // Knowledge Representation System Polling Driven Zero Map Set Replace
                // 知识库零轮询机映射集合替换，该元素记录内循环中的替换映射

		        constexpr unsigned int KRSPDZ_MS_RecyclePD			= 1;

                // Knowledge Representation System Polling Driven Zero Map Set Recycle Polling Driven
                // 知识库零轮询机映射集合回收轮询机，该元素记录内循环中的回收轮询机映射

		        constexpr unsigned int KRSPDZ_MS_AllotPD			= 2;

                // Knowledge Representation System Polling Driven Zero Map Set Allot Polling Driven
                // 知识库零轮询机映射集合申请轮询机，该元素记录内循环中的申请轮询机映射

		        constexpr unsigned int KRSPDZ_MS_PushBack			= 3;

                // Knowledge Representation System Polling Driven Zero Map Set Push Back
                // 知识库零轮询机映射集合后推，该元素记录内循环中的问答流图后推映射

		        constexpr unsigned int KRSPDZ_MS_Recycle			= 4;

                // Knowledge Representation System Polling Driven Zero Map Set Recycle
                // 知识库零轮询机映射集合回收，该元素记录内循环中问答流图的回收映射
        }
    }