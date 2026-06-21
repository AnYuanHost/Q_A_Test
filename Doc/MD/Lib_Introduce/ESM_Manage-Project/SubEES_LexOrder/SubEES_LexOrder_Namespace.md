# SubEES_LexOrder

***

命名空间SubEES_LexOrder定义如下：

    {
        namespace SubEES_LexOrder {
	        constexpr unsigned int SEES_LO_SuperIndex		= 0;
	        constexpr unsigned int SEES_LO_Order			= 1;
	        constexpr unsigned int SEES_LO_Parameter		= 2;
			    constexpr unsigned int	SEES_LO_Occupied		=	0;
			    constexpr unsigned int	SEES_LO_Asc				=	1;
			    constexpr unsigned int	SEES_LO_PageSize		=	2;
			    constexpr unsigned int	SEES_LO_ExpandPage		=	3;
			    constexpr unsigned int	SEES_LO_RetainPage		=	4;
			    constexpr unsigned int	SEES_LO_PageEnd			=	5;
			    constexpr unsigned int	SEES_LO_End				=	6;
			    constexpr unsigned int	SEES_LO_LazySize		=	7;
        }
    }

子元素环境检索器字典序命名空间（SubEES_LexOrder, Lexicographical）通过命名空间确定对于一个字典序子元素环境检索器，应该如何解析其结构并操作其信息。字典序子元素环境检索器以元素序列实现树结构的存储，可以通过命名空间指明的下标通过宏GetEleOrder来获取对应元素。

在第一层结构，完成字典序子元素环境检索器的基本结构划分，字典序子元素环境检索器超索引、字典序子元素环境检索器序列（容器）以及字典序子元素环境检索器参数。其中，字典序子元素环境检索器超索引用于提供额外的辅助信息来完成深入的知识操作，在简单的运行环境下可以不做要求。

    {
         namespace SubEES_LO {
	        constexpr unsigned int SEES_LO_SuperIndex		= 0;

            // Sub Element Environment Searcher Lexicographical Order Super Index
            // 字典序子元素环境检索器超索引，用于补正更多的知识信息，便于深入操作

	        constexpr unsigned int SEES_LO_Order			= 1;

            // Sub Element Environment Searcher Lexicographical Order Order
            // 字典序子元素环境检索器序列，用于存储字典序信息到超索引信息的映射关系

	        constexpr unsigned int SEES_LO_Parameter		= 2;

            // Sub Element Environment Searcher Lexicograpgical Order Parameter
            // 字典序子元素环境检索器参数，用于提供运行所需各项参数
        }
    }

***

字典序子元素环境检索器不需要过多赘述，下面介绍字典序子元素环境检索器参数：

    {
        ...
			constexpr unsigned int	SEES_LO_Occupied		=	0;

            // Sub Element Environment Searcher Lexicograpgical Order Occupied
            // 字典序子元素环境检索器占用值，该参数用于记录子元素环境检索器是否在忙

			constexpr unsigned int	SEES_LO_Asc				=	1;

            // Sub Element Environment Searcher Lexicograpgical Order Ascending
            // 字典序子元素环境检索器升序值，该参数用于记录字典序子元素环境检索器字典序是否为升序

			constexpr unsigned int	SEES_LO_PageSize		=	2;

			// Sub Element Environment Searcher Lexicograpgical Order Page Size
			// 字典序子元素环境检索器页表尺寸数，该参数用于记录字典序子元素环境检索器页表容量

			constexpr unsigned int	SEES_LO_ExpandPage		=	3;

			// Sub Element Environment Searcher Lexicograpgical Order Expand Page
			// 字典序子元素环境检索器增加页表数，该参数用于记录字典序子元素环境检索器页表容器扩展时增加量

			constexpr unsigned int	SEES_LO_RetainPage		=	4;

			// Sub Element Environment Searcher Lexicograpgical Order Retain Page
			// 字典序子元素环境检索器保留页表数，该参数用于记录字典序子元素环境检索器页表容器保留空页表的数量量

			constexpr unsigned int	SEES_LO_PageEnd			=	5;

			// Sub Element Environment Searcher Lexicograpgical Order Page End 
			// 字典序子元素环境检索器末尾页下标，该参数用于记录字典序子元素环境检索器页表容器末尾页下标信息

			constexpr unsigned int	SEES_LO_End				=	6;

			// Sub Element Environment Searcher Lexicograpgical Order End
			// 字典序子元素环境检索器末尾下表，该参数用于记录字典序子元素环境检索器页表容器页内末尾下标信息

			constexpr unsigned int	SEES_LO_LazySize		=	7;

			// Sub Element Environment Searcher Lexicograpgical Order Lazy Size
			// 字典序子元素环境检索器置懒尺寸数，该参数用于记录字典序子元素环境检索器页表容器内置懒的空间大小信息
    }
