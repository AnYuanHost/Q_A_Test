# Node_State_Stream

***

命名空间Node_State_Stream定义为：

    {
        namespace Node_State_Stream {
                extern const char* NE_Tractable_Name;
                extern const char* NE_Pending_Name;
                extern const char* NE_Untractable_Name;
                extern const char* NE_TraUntractable_Name;
            }
    }

节点状态流信息（Node_State_Stream）用于提供节点的各个状态在文件等流中的字符描述，主要用于检索等行为。

***

## 节点状态流信息定义：

    {
        namespace Node_State_Stream {
                const char* NE_Tractable_Name = "Tractable";

                // Node Element Tractable Name
                // 节点元素可执行名称，用于记录可执行状态的字符串表达

                const char* NE_Pending_Name = "Pending";

                // Node Element Pending Name
                // 节点元素等待名称，用于记录等待状态的字符串表达

                const char* NE_Untractable_Name = "Untractable";

                // Node Element Untractable Name
                // 节点元素不可执行名称，用于记录不可执行状态的字符串表达

                const char* NE_TraUntractable_Name = "TraUntractable";

                // Node Element TraUntractable Name
                // 节点元素可直接执行状态，用于记录可直接执行状态的字符串表达
            }
    }