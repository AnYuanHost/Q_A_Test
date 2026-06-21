# ElementEnvironment

***

命名空间ElementEnvironment定义如下：

    namespace ElementEnvironment{
        constexpr unsigned int EleEnvSuperIndex         = 0;
        constexpr unsigned int EleEnvOrder              = 1;
        constexpr unsigned int EleEnvParameter          = 2;
            constexpr unsigned int EleEnvPageSize           = 0;
            constexpr unsigned int EleEnvPageEnd            = 1;
            constexpr unsigned int EleEnvEnd                = 2;
            constexpr unsigned int EleEnvPageExpand         = 3;
            constexpr unsigned int EleEnvPageRetain         = 4;
    }

元素环境（结构）（ElementEnvironment）通过命名空间确定对于一个元素环境，应该如何解析其结构并操作其信息。元素环境以元素序列实现树结构的存储，可以通过命名空间指明的下标通过宏GetEleOrder来获取对应元素。

在第一层结构，完成元素环境的基本结构划分，元素环境超索引、元素环境序列（容器）以及元素环境参数。其中，元素环境超索引用于提供额外的辅助信息来完成深入的知识操作，在简单的运行环境下可以不做要求。

    {
        namespace ElementEnvironment{
            constexpr unsigned int EleEnvSuperIndex = 0;

            //Element Environment Super Index
            //元素环境超索引，用于补正更多的知识信息，以进行更深入的操作

            constexpr unsigned int EleEnvOrder = 1;

            //Element Environment Order
            //元素环境序列，构建容器存储所有的元素实体

            constexpr unsigned int EleEnvParameter = 2;

            //Element Environment Parameter
            //元素环境参数，存储元素环境运行时所需的所有参数
        }
    }

元素环境超索引以及元素环境容器不过多赘述，下面介绍元素环境参数：

    {
        namespace ElementEnvironment{
            ...

                constexpr unsigned int EleEnvPageSize = 0;

                //元素环境页表长度，记录元素环境页表一页存储的元素数量

                constexpr unsigned int EleEnvPageEnd = 1;

                //元素环境末页，记录元素环境最后一页的下标地址

                constexpr unsigned int EleEnvEnd = 2;

                //元素环境页末，记录元素环境最后一页的末尾的下标地址

                constexpr unsigned int EleEnvPageExpand = 3;

                //元素环境扩展页数量，记录元素环境扩展时增加的页数量

                constexpr unsigned int EleEnvPageRetain = 4;

                //元素环境保留页数量，记录元素环境缩容时应保留的页数量

            ...
        }
    }
