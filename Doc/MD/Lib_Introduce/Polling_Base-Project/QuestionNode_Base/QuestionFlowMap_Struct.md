# QuestionFlowMap_Struct

***

命名空间QuestionFlowMap_Struct定义为：

    {
        namespace QuestionFlowMap_Struct {
	        constexpr unsigned int QFM_Order				= 0;
	        constexpr unsigned int QFM_FEAddress			= 1;
		        constexpr unsigned int QFM_ProcessedF				= 0;
		        constexpr unsigned int QFM_TractableF				= 1;
		        constexpr unsigned int QFM_PendingF					= 2;
		        constexpr unsigned int QFM_UntractableF				= 3;
		        constexpr unsigned int QFM_ProcessedE				= 4;
		        constexpr unsigned int QFM_TractableE				= 5;
		        constexpr unsigned int QFM_PendingE					= 6;
		        constexpr unsigned int QFM_UntractableE				= 7;
	        constexpr unsigned int QFM_Parameter			= 2;
		        constexpr unsigned int QFM_PageSize					= 0;
		        constexpr unsigned int QFM_ExpandSize				= 1;
		        constexpr unsigned int QFM_RetainSize				= 2;
		        constexpr unsigned int QFM_End						= 3;
		        constexpr unsigned int QFM_LazyNumber				= 4;
		        constexpr unsigned int QFM_FirstEmpty				= 5;
        }
    }

问答流图结构（QuestionFlowMap_Struct）通过命名空间确定对于一个问答流图元素，应该如何分析其结构并操作其信息。问答流图以元素序列实现、存储，可以通过命名空间指明的下标和通过宏GetEleOrder来获取对应元素。

***

## 问答流图基础结构：

    {
        namespace QuestionFlowMap_Struct{

            constexpr unsigned int QFM_Order            = 0;

            // Question Flow Map Order
            // 问答流图节点序列，该元素作为容器存储所有问答节点序列。

            constexpr unsigned int QFM_FEAddress        = 1;

            // Question Flow Map First End Address
            // 问答流图初始末尾地址，该元素用于记录问答流图四个序列的始末地址

            constexpr unsigned int QFM_Parameter        = 2;

            // Question Flow Map Parameter
            // 问答流图参数，该元素用于记录问答流图所需的所有参数

        }
    }

***

## 问答流图初始末尾地址

    {
        namespace QuestionFlowMap_Struct{
            ...

            constexpr unsigned int QFM_ProcessedF				= 0;

            // Question Flow Map Processed First
            // 问答流图已完成序列首地址，该参数用于记录已完成序列的首地址信息

		    constexpr unsigned int QFM_TractableF				= 1;

            // Question Flow Map Tractable First
            // 问答流图可执行序列首地址，该参数用于记录可执行序列的首地址信息

		    constexpr unsigned int QFM_PendingF					= 2;

            // Question Flow Map Pending First
            // 问答流图等待序列首地址，该参数用于记录等待序列的首地址信息

		    constexpr unsigned int QFM_UntractableF				= 3;

            // Question Flow Map Untractable First
            // 问答流图不可执行序列首地址，该参数用于记录不可执行序列的首地址信息

		    constexpr unsigned int QFM_ProcessedE				= 4;

            // Question Flow Map Processed End
            // 问答流图已完成序列末尾地址，该参数用于记录已完成序列的末尾地址信息

		    constexpr unsigned int QFM_TractableE				= 5;

            // Question Flow Map Tractable End
            // 问答流图可执行序列末尾地址，该参数用于记录可执行序列的末尾地址信息

		    constexpr unsigned int QFM_PendingE					= 6;

            // Question Flow Map Pending End
            // 问答流图等待序列末尾地址，该参数用于记录等待序列的末尾地址信息

		    constexpr unsigned int QFM_UntractableE				= 7;

            // Question Flow Map Untractable End
            // 问答流图不可执行序列末尾地址，该参数用于记录不可执行序列的末尾地址信息
        }
    }

***

## 问答流图参数

    {
        namespace QuestionFlowMap_Struct{

            ...

            constexpr unsigned int QFM_PageSize					= 0;

            // Question Flow Map Page Size
            // 问答流图页表尺寸，该参数记录容器的页表大小

		    constexpr unsigned int QFM_ExpandSize				= 1;

            // Question Flow Map Expand Size
            // 问答流图增容尺寸，该参数用于记录容器增容页数量

		    constexpr unsigned int QFM_RetainSize				= 2;

            // Question Flow Map Retain Size
            // 问答流图保留尺寸，该参数用于记录容器缩容时保留页数量

		    constexpr unsigned int QFM_End						= 3;

            // Question Flow Map End
            // 问答流图末尾地址，该参数用于记录容器末尾地址信息

		    constexpr unsigned int QFM_LazyNumber				= 4;

            // Question Flow Map Lazy Number
            // 问答流图置懒数量，该参数用于记录容器中置懒的槽位数量

		    constexpr unsigned int QFM_FirstEmpty				= 5;

            // Question Flow Map First Empty
            // 问答流图首空地址，该参数用于记录容器中第一个置懒槽位的地址信息
        }
    }

***
