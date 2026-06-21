# PollingDriven_Strcut

***

命名空间PollingDriven_Struct定义为：

    {
        namespace PollingDriven_Struct{
            constexpr unsigned int PD_NodeAddress		= 0;
            constexpr unsigned int PD_EES				= 1;
            constexpr unsigned int PD_State			    = 2;
            constexpr unsigned int PD_MapElement		= 3;
	            constexpr unsigned int PD_Map_Domain		= 0;
	            constexpr unsigned int PD_Map_Range		    = 1;
	            constexpr unsigned int PD_Map_Map			= 2;
            constexpr unsigned int PD_QuestionNode		= 4;
            constexpr unsigned int PD_UMapSet			= 5;
            constexpr unsigned int PD_PMapSet			= 6;
            constexpr unsigned int PD_Thread			= 7;
            constexpr unsigned int PD_Map				= 8;
	            constexpr unsigned int PD_EES_Map			= 0;
		            constexpr unsigned int PD_EES_Get			    = 0;
		            constexpr unsigned int PD_EES_Put				= 1;
		            constexpr unsigned int PD_EES_Occupy			= 2; 
		            constexpr unsigned int PD_EES_RelieveOccupy		= 3;
	            constexpr unsigned int PD_PMapSet_Map		= 1;
		            constexpr unsigned int PD_PMapSet_Select		= 0;
	            constexpr unsigned int PD_Thread_Map		= 2;
		            constexpr unsigned int PD_Thread_Active			= 0;
		            constexpr unsigned int PD_Thread_Test			= 1;
		            constexpr unsigned int PD_Thread_Release		= 2;
        }
    }

轮询机结构（PollingDriven_Struct）通过命名空间确定对于一个轮询机元素，应该如何解析其结构并操作其信息。轮询机以元素序列实现树结构的存储，可以通过命名空间指明的下标通过宏GetEleOrder来获取对应元素。

***

## 轮询机基本结构：

在第一层结构，完成轮询机的基本划分：轮询机节点地址、轮询机所处总元素环境检索器、轮询机状态、轮询机映射元素、轮询机问题状态、轮询机通用映射集、轮询机私有映射集、轮询机线程、轮询机映射集合。

    {
        namespace PollingDriven_Struct{

            constexpr unsigned int PD_NodeAddress = 0;

            // Polling Driven Node Address
            // 轮询机问答节点地址信息，该参数记录轮询机需要解释的节点位于原图的位置

            constexpr unsigned int PD_EES = 1;

            // Polling Driven Element Environment Searcher
            // 轮询机元素环境检索器，该元素记录轮询机发生的环境

            constexpr unsigned int PD_State = 2;

            // Polling Driven State
            // 轮询机状态，该参数记录轮询机的状态用于调控

            constexpr unsigned int PD_MapElement = 3;

            // Polling Driven Map Element
            // 轮询机可执行映射元素，该参数用于操作最终执行的原子问题的解答

            constexpr unsigned int PD_QuestionNode = 4;

            // Polling Driven Question Node
            // 轮询机问题节点，该参数用于操作对应的原子问题节点

            constexpr unsigned int PD_UMapSet = 5;

            // Polling Driven Universal Map Set
            // 轮询机通用映射集合，该参数用于记录解释可用的通用映射

            constexpr unsigned int PD_PMapSet = 6;

            // Polling Driven Private Map Set
            // 轮询机私有映射集合，该参数用于记录可用的轮询机解释私有映射集合

            constexpr unsigned int PD_Thread = 7;

            // Polling Driven Thread
            // 轮询机线程，该参数用于操作轮询机分配的线程

            constexpr unsigned int PD_Map = 8;

            // Polling Driven Map
            //轮询机映射集合，该参数用于记录轮询机所使用的映射
        }
    }

***

## 轮询机可执行映射结构：

    {
        {
            ...

            constexpr unsigned int PD_Map_Domain		= 0;

            // Polling Driven Map Domain
            // 轮询机可执行映射定义域，该参数用于操作可执行映射的定义域元素

	        constexpr unsigned int PD_Map_Range		    = 1;

            // Polling Driven Map Range
            // 轮询机可执行映射值域，该参数用于操作可执行映射的值域元素

	        constexpr unsigned int PD_Map_Map			= 2;

            // Polling Driven Map Map
            // 轮询机可执行映射映射，该参数用于操作可执行映射的映射元素

        }
    }

***

## 轮询机映射：

该部分用于提供通用的结构，以辅助轮询机完成各种操作。

    {
        {
            ...

            constexpr unsigned int PD_EES_Map			= 0;

            // Polling Driven Element Environment Searcher Map
            // 轮询机元素环境检索器映射集，该参数用于记录轮询机如何调用其绑定的元素环境检索器接口
		            
	        constexpr unsigned int PD_PMapSet_Map		= 1;

            // Polling Driven Private Map Set Map
            // 轮询机私有映射集合，该参数用于记录如何操作私有映射集来完成问题解释
            
	        constexpr unsigned int PD_Thread_Map		= 2;

            // Polling Driven Thread Map
            // 轮询机线程映射集合，该参数用于记录如何操作线程
        }
    }

***

### 轮询机元素环境检索器映射集：

    {
        {
            ...

            constexpr unsigned int PD_EES_Get			    = 0;

            // Polling Driven Element Environment Searcher Get
            // 轮询机元素环境检索器获取元素映射，该映射用于从元素环境检索器中获取对应的元素

		    constexpr unsigned int PD_EES_Put				= 1;

            // Polling Driven Element Environment Searcher Put
            // 轮询机元素环境检索器存入元素映射，该映射用于将元素存入元素环境检索器

		    constexpr unsigned int PD_EES_Occupy			= 2; 

            // Polling Driven Element Environment Searcher Occupy
            // 轮询机元素环境检索器占用映射，该映射用于轮询机占用元素环境检索器元素

		    constexpr unsigned int PD_EES_RelieveOccupy		= 3;

            // Polling Driven Element Environment Searcher Relieve Occupy
            // 轮询机元素环境检索器解除占用映射，该映射用于轮询机解除占用元素环境检索器元素

        }
    }

***

### 轮询机私有映射集：

    {
        {
            ...

            constexpr unsigned int PD_PMapSet_Select = 0;

            // Polling Driven Private Map Set Select
            // 轮询机私有映射集检索映射，用于从轮询机的私有映射集中检索

        }
    }

***

### 轮询机线程映射集：

    {
        {
            ...

            constexpr unsigned int PD_Thread_Active			= 0;

            // Polling Driven Thread Active
            // 轮询机线程执行映射，用于启动线程

		    constexpr unsigned int PD_Thread_Test			= 1;

            // Polling Driven Thread Test
            // 轮询机线程测试映射，用于检测线程状态

		    constexpr unsigned int PD_Thread_Release		= 2;

            // Polling Driven Thread Release
            // 轮询机线程释放映射，用于完成线程释放相关操作
        }
    }
    