# RQNDCMDPD_Domain

***

命名空间RQNDCMDPD_Domain定义为：

    {
        namespace RQNDCMDPD_Domain {
	        constexpr unsigned int QuestionTreeNode		= 0;
	        constexpr unsigned int EES					= 1;
	        constexpr unsigned int DomainUInt			= 2;
	        constexpr unsigned int EESParameter			= 3;
	        constexpr unsigned int EESPutMap			= 4;
	        constexpr unsigned int EESRelieveOccupyMap	= 5;
        }
    }

问答节点迭代析构轮询机可执行映射域映射_定义域（RQNDCMDPD_Domain, RecursionQuestionNodeDestructMapDomainPollingDriven_Domain）通过命名空间确定问答节点迭代析构轮询机可执行映射域映射的定义域格式。

***

该命名空间内参数具体信息为：

    {
        namespace RQNDMDPD_Domain{

            constexpr unsigned int QuestionTreeNode			= 0;

            // 问答节点域信息树节点

            constexpr unsigned int EES						= 1;

            // 元素环境检索器，解释发生的环境

            constexpr unsigned int DomainUInt				= 2;

            // 通用无符号整型，避免重复注册开销

            constexpr unsigned int EESParameter				= 3;

            // 元素环境检索器检索用参数，避免重复注册开销

            constexpr unsigned int EESPutMap				= 4;

            // 元素环境检索器存放映射引用

            constexpr unsigned int EESRelieveOccupyMap		= 5;

            // 元素环境检索器解除占用映射引用
        }
    }

***

关于如何使用该命名空间，跳转至[PollingDriven_Base案例](PollingDriven_Base_Case.md)
