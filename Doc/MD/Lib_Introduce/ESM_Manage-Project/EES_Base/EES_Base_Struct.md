# EES_Base_Struct

***

命名空间EES_Base_Struct定义如下：

    namespace EES_Base_Struct{
        constexpr unsigned int EESEnvironment       = 0;
        constexpr unsigned int EESSubEES            = 1;
            constexpr unsigned int SubEESSuperIndex         = 0;
            constexpr unsigned int SubEESEle                = 1;
            constexpr unsigned int SubEESMap                = 2;
              constexpr unsigned int SubEESMapSize            = 20;
                constexpr unsigned int SubEESLogin                 = 0;
                constexpr unsigned int SubEESSelect                = 1;
                constexpr unsigned int SubEESLogout                = 2;
                constexpr unsigned int SubEESSort                  = 3;
                constexpr unsigned int SubEESGetInf                = 4;
                constexpr unsigned int SubEESGetSuperIndex         = 5;
                constexpr unsigned int SubEESPutInf                = 6;
                constexpr unsigned int SubEESPutSuperIndex         = 7;
                constexpr unsigned int SubEESReadInf               = 8;
                constexpr unsigned int SubEESReadSuperIndex        = 9;
                constexpr unsigned int NewSubEESAddress            = 10;
                constexpr unsigned int FirstSubEESAddress          = 11;
                constexpr unsigned int ReleaseSubEESAddress        = 12;
                constexpr unsigned int FESubEESAddress             = 13;
                constexpr unsigned int NextSubEESAddress           = 14;
                constexpr unsigned int SubEESRetain                = 15;
                constexpr unsigned int SubEESDefragment            = 16;
                constexpr unsigned int SubEESOutTest               = 17;
                constexpr unsigned int SubEESGetOccupy             = 18;
                constexpr unsigned int SubEESPutOccupy             = 19;
        constexpr unsigned int SISOrder        = 2;
        constexpr unsigned int EESParameter    = 3;
            constexpr unsigned int SISParameter  = 0;
                constexpr unsigned int SISPageSize      = 0;
                constexpr unsigned int SISExpandSize    = 1;
                constexpr unsigned int SISRetainSize    = 2;
                constexpr unsigned int SISNextAddress   = 3;
                constexpr unsigned int SISPageEnd       = 4;
                constexpr unsigned int SISEnd           = 5;
                constexpr unsigned int SISLazySize      = 6;
        constexpr unsigned int EESGetMap        = 4;
            constexpr unsigned int SISMap           = 0;
              constexpr unsigned int SISMapSize      = 20;
                constexpr unsigned int SISTest              = 0;
                constexpr unsigned int SISNext              = 1;
                constexpr unsigned int SISSelect            = 2;
                constexpr unsigned int SISLogin             = 3;
                constexpr unsigned int SISLogout            = 4;
                constexpr unsigned int SISSort              = 5;
                constexpr unsigned int SISGetLeastSI        = 6;
                constexpr unsigned int SISRetain            = 7;
                constexpr unsigned int SISNewAddress        = 8;
                constexpr unsigned int SISFirstAddress      = 9;
                constexpr unsigned int SISSuccessAddress    = 10;
                constexpr unsigned int SISReleaseAddress    = 11;
                constexpr unsigned int SISGetFEAddress      = 12;
                constexpr unsigned int SISDefragment        = 13;
                constexpr unsigned int SISGetSuperIndex     = 14;
                constexpr unsigned int SISGetUInt           = 15;
                constexpr unsigned int SISPutSuperIndex     = 16;
                constexpr unsigned int SISPutUInt           = 17;
                constexpr unsigned int SISRelease           = 18;
                constexpr unsigned int SISFEAddress         = 19;
            constexpr unsigned int EEMap        = 1;
                constexpr unsigned int EEExpand         = 0;
                constexpr unsigned int EEReadElement    = 1;
                constexpr unsigned int EEGetElement     = 2;
                constexpr unsigned int EEPutElement     = 3;
                constexpr unsigned int EERetain         = 4;
                constexpr unsigned int EENewAddress     = 5;
                constexpr unsigned int EEReleaseAddress = 6;
                constexpr unsigned int EENextAddress    = 7;
    }

总元素环境检索器基本结构（EES_Base_Struct）通过命名空间确定对于一个总元素环境检索器元素，应该如何解析其结构并操作其信息。总元素环境检索器以元素序列实现树结构的存储，可以通过命名空间指明的下标通过宏GetEleOrder来获取对应元素。

在第一层结构，完成总元素环境检索器结构的基本划分，存储元素环境、子元素环境检索器管理、超索引检索序列、总元素检索器参数以及总元素环境检索器指令集。

    {
        namespace EES_Base_Struct{

            constexpr unsigned int EESEnvironment = 0;

            //Element Environment Searcher Environment
            //总元素环境检索器元素环境，实体元素容器，存储系统操作所用元素

            constexpr unsigned int EESSubEES = 1;

            //Element Environment Searcher Sub-Element Environment Searcher
            //子元素环境检索器（管理），管理所有子元素环境检索器，以此划分不同的语境，并将各语境的信息映射到超索引信息

            constexpr unsigned int SISOrder = 2;

            //Super Index Searcher Order
            //超索引检索序列，管理已分配的超索引信息，将超索引信息映射到元素环境具体的地址信息

            constexpr unsigned int EESParameter = 3;

            //Elemen Environment Searcher Parameter
            //总元素环境检索器参数，主要存储超索引检索序列相关参数以及其他总元素环境检索器运行所需参数

            constexpr unsigned int EESGetMap = 4;

            //Element Environment Searcher Get Map
            //总元素环境检索器获取映射（映射集/指令集），存储超索引环境检索器映射集合和元素环境映射集合，以及其他可能的指令集
        }
    }

***

元素环境EESEnvironment指明一个总元素环境检索器工作的元素环境。每一个总元素环境检索器都独占一个元素环境，允许各个语境在该元素环境上共同操作。如果需要跨工作环境进行操作，则应该使用专门的通信操作。

但元素环境并不能在智能体运行时通过宏解析的方式进行访问，一般会将其引用注册并写入到环境中，以方便一些可能的操作。

***

子元素环境检索器（管理）EESSubEES指明所有在元素环境上工作的子元素环境检索器。

子元素环境检索器是一个自定义的实体，其实体的构造和析构行为在智能体中由专门的映射操作进行。其被制定为一个特殊的信息容器，存储语境信息到超索引信息的映射关系，并按照接口要求提供一系列的操作要求。

子元素环境检索器（管理）则需要在总元素环境检索器结构下，为在其上工作的子元素环境检索器提供管理服务，包括基本的增删改查等操作。

子元素环境检索器（管理）相关定义如下：

    {
        namespace EES_Base_Struct{
            ...

                consetxpr unsigned int EESSubEES = 1;
                    //Index
                        constexpr unsigned int SubEESSuperIndex     = 0;
                        constexpr unsigned int SubEESEle            = 1;
                        constexpr unsigned int SubEESMap            = 2;

            ...
        }
    }

在序列子元素获取上，每一个语境都独占子元素环境检索器管理序列的一个元素，通过GetEleOrder(Ele, Index)获取后得到三元序列，其结构为：<SubEESSuperIndex, SubEESEle, SubEESMap>，其解释为：<子元素环境检索器超索引，子元素环境检索器元素，子元素环境检索器映射>。

子元素环境检索器超索引（SubEESSuperIndex）用于标识智能体系统如何选择子元素环境检索器，其通过该唯一分配的超索引信息来区分不同的语境环境。

子元素环境检索器元素（SubEESEle）存储管理容器，是一个实体元素，可以通过子元素环境检索器映射（集合）提供的映射进行操作。

子元素环境检索器映射（SubEESMap）提供一系列的操作，用于操作对应的子元素环境检索器元素。因为其运行逻辑受总元素环境检索器统一调度，所以其有统一的接口标准。在接口文档（）中，指明如何开发自己的子元素环境检索器。

***

超索引检索器（管理）序列（SISOrder）只存储超索引检索器容器，其不负责存储对应的参数信息和指令集，这一部分由总元素环境检索器负责管理。同时，因为超索引检索器与总元素环境检索器高度绑定，其构造和析构随总元素环境检索器对应操作进行。

***

总元素环境检索器参数（EESParameter）按照树结构存储信息，按对应下标通过宏GetEleOrder完成获取。在一般总元素环境检索器中，只需要为超索引检索器提供参数。

    {
        namespace EES_Base_Struct{
            ...
                
                constexpr unsigned int EESParameter = 3;
                    constexpr unsigned int SISParameter = 0;

            ...
        }
    }

***

超索引参数（SISParameter）相关参数介绍如下：

    {
        namespace EES_Base_Struct{
            ...

                constexpr unsigned int SISParameter = 0;

                    constexpr unsigned int SISPageSize = 0;

                    //超索引检索器页表长度，记录超索引检索器一页存储多少个数据信息

                    constexpr unsigned int SISExpandSize = 1;

                    //超索引检索器页表增加数量，记录超索引检索器扩容时扩充多少个空页

                    constexpr unsigned int SISRetainSize = 2;

                    //超索引检索器页表保留数量，记录超索引检索器缩容时应该保留多少个空页

                    constexpr unsigned int SISNextAddress = 3;

                    //超索引检索器下一地址，记录超索引检索器下一个可分配的超索引信息

                    constexpr unsigned int SISPageEnd = 4;
                    
                    //超索引检索器页末尾地址，记录超索引检索器已分配空间最后一页地址

                    constexpr unsigned int SISEnd = 5;

                    //超索引检索器末尾地址，记录超索引检索器检索器已分配空间页内的最后地址

                    constexpr unsigned int SISLazySize = 6;

                    //超索引检索器懒数量，记录超索引检索器已经置懒了多少插槽，以此判断是否进行碎片整理

            ...
        }
    }

***

总元素环境检索器获取映射（EESGetMap）按照树结构存储映射信息，一般结构中，存储超索引检索器映射指令集和元素环境映射指令集。总元素环境检索器固定的运行逻辑在超索引检索器层和元素环境层通过其提供的映射集完成操作。

    {
        namespace EES_Base_Struct{
            ...

                constexpr unsigned int EESGetMap = 4;

                    constexpr unsigned int SISMap = 0;

                    //超索引检索器映射集合，存储超索引检索器操作所需的映射，超索引检索器按该映射格式提供操作。

                    constexpr unsigned int EEMap = 1;

                    //元素环境映射集合，存储元素环境操作所需的映射，元素环境按该映射格式提供操作。

            ...
        }
    }
