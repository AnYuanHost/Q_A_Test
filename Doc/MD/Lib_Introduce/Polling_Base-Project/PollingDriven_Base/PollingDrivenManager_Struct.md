# PollingDrivenManager_Struct

***

命名空间PollingDrivenManager_Struct定义为：

    {
        namespace PollingDrivenManager_Struct {
	        constexpr unsigned int PDOrder				= 0;
	        constexpr unsigned int PDOrderParameter		= 1;
		        constexpr unsigned int PDOrderPageSize			= 0;
		        constexpr unsigned int PDOrderExpandSize		= 1;
		        constexpr unsigned int PDOrderRetainSize		= 2;
		        constexpr unsigned int PDOrderEnd				= 3;
		        constexpr unsigned int PDOrderEmptySize			= 4;
        }
    }

轮询机管理结构（PollingDrivenManager_Struct）通过命名空间确定对于一个轮询机元素，应该如何解析其结构并操作其信息。轮询机管理以元素序列实现树结构的存储，可以通过命名空间指明的下标通过宏GetEleOrder来获取对应元素。

***

## 轮询机管理基本结构：

    { 
        namespace PollingDrivenManager_Struct {
	        constexpr unsigned int PDOrder				= 0;

            // Polling Driven Order
            // 轮询机序列，该元素记录所有管理下的轮询机

	        constexpr unsigned int PDOrderParameter		= 1;

            // Polling Driven Order Parameter
            // 轮询机管理序列，该元素用于记录管理用参数

		        constexpr unsigned int PDOrderPageSize			= 0;

                // Polling Driven Order Page Size
                // 轮询机序列页表尺寸，该参数用于记录页表大小

		        constexpr unsigned int PDOrderExpandSize		= 1;

                // Polling Driven Order Expand Size
                // 轮询机序列扩容尺寸，该参数用于记录扩容时增加的页数量

		        constexpr unsigned int PDOrderRetainSize		= 2;

                // Polling Driven Order Retain Size
                // 轮询机序列保留尺寸，该参数用于记录缩容时保留的页数量

		        constexpr unsigned int PDOrderEnd				= 3;

                // Polling Driven Order End
                // 轮询机序列末尾，该参数用于记录轮询机序列末尾地址

		        constexpr unsigned int PDOrderEmptySize			= 4;

                // Polling Driven Order Empty Size
                // 轮询机序列空尺寸，该参数用于记录轮询机空置的数量
        }
    }