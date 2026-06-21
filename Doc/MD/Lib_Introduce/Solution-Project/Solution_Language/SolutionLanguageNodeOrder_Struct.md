# SolutionLanguageNodeOrder_Struct

***

命名空间SolutionLanguageNodeOrder_Struct定义为：

    {
        namespace SolutionLanguageNodeOrder_Struct {
                constexpr unsigned int SLNO_Order			= 0;
                constexpr unsigned int SLNO_Parameter		= 1;
                    constexpr unsigned int SLNO_PageSize		= 0;
                    constexpr unsigned int SLNO_End				= 1;
                    constexpr unsigned int SLNO_ExpandSize		= 2;
            }
    }

解决方案语言节点序列结构（SolutionLanguageNodeOrder_Struct）通过命名空间确定对于一个解决方案语言节点序列元素，应该如何解析其结构并操作其信息。解决方案语言节点序列以元素序列实现树结构的存储，可以通过命名空间指明的下标通过宏GetEleOrder来获取对应元素。

***

## 解决方案语言节点序列介绍：

    {
        namespace SolutionLanguageNodeOrder_Struct {
                constexpr unsigned int SLNO_Order			= 0;

                // Solution Language Node Order Order
                // 解决方案语言节点序列_序列，该元素作为容器存储解决方案语言节点

                constexpr unsigned int SLNO_Parameter		= 1;

                // Solution Language Node Order Parameter
                // 解决方案语言节点序列参数，该元素用于存储运行所需的参数

                    constexpr unsigned int SLNO_PageSize		= 0;

                    // Solution Language Node Order Page Size
                    // 解决方案语言节点序列页表大小，该参数用于存储容器页表大小

                    constexpr unsigned int SLNO_End				= 1;

                    // Solution Language Node Order End
                    // 解决方案语言节点序列末尾，该参数用于记录容器末尾

                    constexpr unsigned int SLNO_ExpandSize		= 2;

                    // Solution Language Node Order Expand Size
                    // 解决方案语言节点序列拓展数量，该参数用于记录容器扩容时增加的页数量
            }
    }