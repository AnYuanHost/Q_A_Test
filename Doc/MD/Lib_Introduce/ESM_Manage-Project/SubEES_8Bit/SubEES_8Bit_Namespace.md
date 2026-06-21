# SubEES_8Bit

***

命名空间SubEES_8Bit定义如下：

    {
        namespace SubEES_8Bit{
            constexpr unsigned int SEES_8Bit_SuperIndex     = 0;
            constexpr unsigned int SEES_8Bit_Order          = 1;
            constexpr unsigned int SEES_8Bit_Parameter      = 2;
                constexpr unsigned int SEES_8Bit_First          = 0;
                constexpr unsigned int SEES_8Bit_FirstLazy      = 1;
        }
    }

子元素环境检索器8比特（SubEES_8Bit）通过命名空间确定对于一个8比特子元素环境检索器，应该如何解析其结构并操作其信息。8比特子元素环境检索器以元素序列实现树结构的存储，可以通过命名空间指明的下标通过宏GetEleOrder来获取对应元素。

在第一层结构，完成8比特子元素环境检索器的基本结构划分，8比特子元素环境检索器超索引、8比特子元素环境检索器序列（容器）以及8比特子元素环境检索器参数。其中，8比特子元素环境检索器超索引用于提供额外的辅助信息来完成深入的知识操作，在简单的运行环境下可以不做要求。

    {
        namespace SubEES_8Bit{
            constexpr unsigned int SEES_8Bit_SuperIndex = 0;

            // Sub Element Environment Searcher 8 Bit Super Index
            // 8Bit子元素环境检索器超索引，用于补正更多的知识信息，便于深入操作

            constexpr unsigned int SEES_8Bit_Order = 1;

            // Sub Element Environment Searcher 8 Bit Order
            // 8Bit子元素环境检索器序列，用于存储8比特信息到超索引信息的映射关系

            constexpr unsigned int SEES_8Bit_Parameter = 2;
            
            // Sub Element Environment Searcher 8 Bit Parameter
            // 8Bit子元素环境检索器参数，用于提供运行所需各项参数
        }
    }

***

8比特子元素环境检索器容器不需要过多赘述，下面介绍8Bit子元素环境检索器参数：

    {
        ...

            constexpr unsigned int SEES_8Bit_First = 0;

            // Sub Element Environment Searcher First Address
            // 8比特子元素环境检索器第一地址，该参数用于记录8比特子元素环境检索器第一个已分配地址

            constexpr unsigned int SEES_8Bit_FirstLazy = 1;

            // Sub Element Environment Searcher First Lazy Address
            // 8比特子元素环境检索器第一置懒地址，该参数用于记录8比特子元素环境检索器第一个被置懒的地址
    }


因为8比特子元素环境检索器被设计为高效率检索器，使用定长容器设计，不需要页表等参数，故其参数量少。
