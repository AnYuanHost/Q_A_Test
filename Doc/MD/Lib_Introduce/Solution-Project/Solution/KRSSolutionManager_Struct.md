# KRSSolutionManager_Struct

***

命名空间KRSSolutionManager_Struct定义为：

    {
        namespace KRSSolutionManager_Struct {
                constexpr unsigned int KRSSolutionOrder			= 0;
                constexpr unsigned int KRSSolutionParameter		= 1;
                    constexpr unsigned int KRSSolutionOrderPageSize		= 0;
                    constexpr unsigned int KRSSolutionOrderExpandSize	= 1;
                    constexpr unsigned int KRSSolutionOrderRetainSize	= 2;
                    constexpr unsigned int KRSSolutionOrderEnd			= 3;
                    constexpr unsigned int KRSSolutionOrderEmptySize	= 4;
        }
    }

知识库解决方案管理结构（KRSSolutionManager）通过命名空间确定对于一个解决方案管理元素，应该如何解析其结构并操作其信息。钟斯库解决方案管理以元素序列实现树结构的存储，可以通过命名空间指定的下标通过宏GetEleOrder完成操作。

***

##  知识库解决方案管理基本结构：

    {
        namespace KRSSolutionManager_Struct{
            constexpr usnigned int KRSSolutionOrder = 0;

            // Knowledge Representation System Solution Order
            // 知识库解决方案序列，该元素作为容器存储所有解决方案

            constexpr unsigned int KRSSolutionParameter = 1;

            // Knowledge Representation System Solution Parameter
            // 知识库解决方案管理参数，该元素用于记录运行所需的参数
        }
    }

***

## 知识库解决方案管理参数：

    {
        namespace KRSSolutionManager_Struct{
            ...

            constexpr unsigned int KRSSolutionOrderPageSize = 0;

            // Knowledge Representation System Solution Order Page Size
            // 知识库解决方案序列页表大小，该元素用于记录容器中页表的大小

            constexpr unsigned int KRSSolutionExpandSize = 1;

            // Knowledge Representation System Solution Expand Size
            // 知识库解决方案序列拓展页数量，该元素用于记录容器扩容时增加页数量

            constexpr unisgned int KRSSolutionRetainSize = 2;

            // Knowledge Representation System Solution Retain Size
            // 知识库解决方案序列保留页数量，该元素用于记录容器缩容时保留页数量

            constexpr unsigned int KRSSolutionEnd = 3;

            // Knowledge Representation System Solution End
            // 知识库解决方案容器末尾，该元素用于记录容器末尾地址

            constexpr unsigned int KRSSolutionEmptySize = 4;

            // Knowledge Representation System Solution Empty Size
            // 知识库解决方案容器置空大小，该匀速用于记录容器内已置空的数量
        }
    }