# Serial_Parallel_State

***

命名空间Serial_Parallel_State定义为：

    {
        namespace Serial_Parallel_State {
                constexpr bool Serial_State = true;
                constexpr bool Parallel_State = false;
            }
    }

串并行状态命名空间（Serial_Parallel_State）定义解决方案语言判断图检测时串并行的检测。

***

## 串并行状态介绍：

    {
        namespace Serial_Parallel_State{
            constexpr bool Serial_State = true;

            // Serial State
            // 串行状态，该状态用于标识图结构串行部分

            constexpr bool Parallel_State = false;

            // Parallel State
            // 并行状态，该状态用于标识图结构并行部分
        }
    }