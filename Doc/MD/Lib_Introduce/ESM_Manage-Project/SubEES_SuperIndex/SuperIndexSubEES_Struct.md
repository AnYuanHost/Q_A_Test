# SuperIndexSubEES_Struct

***

命名空间SuperIndexSubEES_Struct定义为：

    {
        namespace SuperIndexSubEES_Struct{
		    constexpr unsigned int		SEES_SI_SuperIndex		= 0;
		    constexpr unsigned int		SEES_SI_Order			= 1;
		    constexpr unsigned int		SEES_SI_Parameter		= 2;
			    constexpr unsigned int		SEES_SI_Occupied		= 0;
			    constexpr unsigned int		SEES_SI_Asc				= 1;
			    constexpr unsigned int		SEES_SI_PageSize		= 2;
			    constexpr unsigned int		SEES_SI_ExpandPage		= 3;
			    constexpr unsigned int		SEES_SI_RetainPage		= 4;
			    constexpr unsigned int		SEES_SI_End				= 5;
			    constexpr unsigned int		SEES_SI_LazySize		= 6;
        }
    }

超索引子元素环境检索器结构命名空间（SuperIndexSubEES_Struct）通过命名空间确定对于一个超索引子元素环境检索器，应该如何解析器结构并操作其信息。超索引子元素环境检索器以元素序列实现树结构的存储，可以通过命名空间指明的下标，并通过宏GetEleOrder来获取对应元素。

在第一层结构，完成超索引子元素环境检索器的基本结构划分，超索引子元素环境检索器超索引、超索引子元素环境检索器序列（容器）以及超索引子元素环境检索器参数。其中，超索引子元素环境检索器超索引用于提供额外的辅助信息来完成深入的知识操作，在简单的运行环境下可以不做要求。

    {
        namespace SuperIdnexSubEES_Struct{
            constexpr unsigned int SEES_SI_SuperIndex       = 0;

            // Sub Element Environment Searcher Super Index Super Index
            // 超索引子元素环境检索器超索引，用于补正更多的知识信息，便于深入操作

            constexpr unsigned int SEES_SI_Order            = 1;

            // Sub Element Environment Searcher Super Index Order
            // 超索引子元素环境检索器序列，用于存储超索引信息到超索引信息的映射关系

            constexpr unsigned int SEES_SI_Parameter        = 2;

            // Sub Element Environment Searcher Super Index Parameter
            // 超索引子元素环境检索器参数，用于提供运行所需各项参数
        }
    }

***

超索引子元素环境检索器参数介绍：

    {
        ...
            constexpr unsigned int SEES_SI_Occupied         = 0;

            // Sub Element Environment Searcher Super Index Occupied
            // 超索引子元素环境检索器占用值，该参数用于记录超索引子元素环境检索器是否在忙

			constexpr unsigned int	SEES_SI_Asc				= 1;

            // Sub Element Environment Searcher Super Index Ascending
            // 超索引子元素环境检索器升序值，该参数用于记录超索引子元素环境检索器超索引是否为升序

			constexpr unsigned int	SEES_SI_PageSize		= 2;

            // Sub Element Environment Searcher Super Index Page Size
            // 超索引子元素环境检索器页表容量值，该参数用于记录超索引子元素环境检索器页表容量

			constexpr unsigned int	SEES_SI_ExpandPage		= 3;

            // Sub Element Environment Searcher Super Index Expand Page
            // 超索引子元素环境检索器扩展页表数量，该参数用于记录超索引子元素环境检索器页表扩展时增加量

			constexpr unsigned int	SEES_SI_RetainPage		= 4;

            // Sub Element Environment Searcher Super Index Retain Page
            // 超索引子元素环境检索器保留页表数量，该参数用于记录超索引子元素环境检索器页表缩容时保留页数量

			constexpr unsigned int	SEES_SI_End				= 5;

            // Sub Element Enviornment Searcher Super Index End
            // 超索引子元素环境检索器末尾地址信息，该参数用于记录超索引子元素环境检索器容器的末尾元素的地址信息

			constexpr unsigned int	SEES_SI_LazySize		= 6;

            // Sub Element Environment Searcher Super Index Lazy Size
            // 超索引子元素环境检索器置懒数量，该参数用于记录超索引子元素环境检索器容器置懒的空间大小
    }