# AddressCreaterManager_Struct

***

命名空间AddressCreaterManager_Struct定义为：

    {
        namespace AddressCreaterManager_Struct{
            constexpr unsigned int ACM_BaseAddress = 0;
        }
    }

地址生成器管理者结构（AddressCreaterManager_Struct）通过命名空间确定对于地址生成器管理者元素，应该如何分析其结构并操作其信息。地址生成器管理者以元素序列存储相关信息，可以通过命名空间指定的下标通过宏GetEleOrder来获取对应信息。

***

## 地址生成器管理者基本结构：

    {
        namespace AddressCreaterManager_Struct{
            constexpr unsigned int ACM_BaseAddress = 0;

            // Address Creater Manager Base Address
            // 地址生成器管理者基础地址，该元素用于记录可分配的地址信息
        }
    }
