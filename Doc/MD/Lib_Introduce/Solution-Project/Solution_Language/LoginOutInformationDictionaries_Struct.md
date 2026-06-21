# LoginOutInformationDictionaries_Struct

***

命名空间LoginOutInformationDictionaries_Struct定义为：

    {
        namespace LoginOutInformationDictionaries_Struct {
            constexpr unsigned int LIOID_Number		= 0;
            constexpr unsigned int LIOID_Order		= 1;
        }
    }

注册销信息字典结构（LoginOutInformationDictionaries_Struct）通过命名空间确定对于一个注册销信息字典元素，应该如何分析其结构并操作其信息。注册销信息字典元素以元素序列实现树结构的存储，可以通过命名空间指明的下标通过宏GetEleOrder来获取对应元素。

***

## 注册销信息字典介绍：

    {
        namespace LoginOutInformationDictionaries_Struct {
            constexpr unsigned int LIOID_Number		= 0;

            // Login Out Information Dictionaries Number
            // 注册销信息字典数量，该参数用于存储容器内数量

            constexpr unsigned int LIOID_Order		= 1;

            // Login Out Information Dictionaries Order
            // 注册销信息字典容器，该元素作为容器存储注册销信息
        }
    }