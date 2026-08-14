# ESM_Manage项目

***

ESM_Manage项目负责向智能体提供一系列的元素管理工具，包括静态管理和动态管理两部分。静态管理主要负责对静态库各个元素的追踪，以方便内核快速调用相关指令及静态元素。动态管理则负责智能体运行时动态分配的元素的管理。

***

### 元素环境检索器基础模块：

* [EES_Base](EES_Base/EES_Base.md)

***

### 元素环境模块：

* [ElementEnvironment](ElementEnvironment/ElementEnvironment.md)

***

### 内核用子元素环境检索器模块：

* [SubEES_8Bit](SubEES_8Bit/SubEES_8Bit.md)
* [SubEES_LexOrder](SubEES_LexOrder/SubEES_LexOrder.md)
* [SubEES_SuperIndex](SubEES_SuperIndex/SubEES_SuperIndex.md)

***

### 元素环境检索器接口标准：

* [元素环境接口标准](Environment_Interface/Environment_Interface.md)
* [子元素环境检索器接口标准](Sub_EES_Interface/Sub_EES_Interface.md)

***

## 案例：

* [总元素环境检索器基础案例](EES_Manage_Case/EES_Base_Case.md)
* [超索引检索器案例](EES_Manage_Case/SuperIndex_Searcher_Case.md)
* [元素环境案例](EES_Manage_Case/Element_Environment_Case.md)
* [子元素环境检索器测试案例](EES_Manage_Case/Sub_EES_Test_Case.md)
* [8比特子检索器测试案例](EES_Manage_Case/8Bit_Sub_EES_Test_Case.md)
* [字典序子检索器测试案例](EES_Manage_Case/LexOrder_Sub_EES_Test_Case.md)
* [超索引子检索器测试案例](EES_Manage_Case/SuperIndex_Sub_EES_Test_Case.md)

***

## 使用规范：

在使用ESM_Manage库时，可以使用源文件 “All_ESM_Manage.h" 直接引入所有源文件，也可以单独引入单个文件来使用。整个ESM_Manage项目打包成一个lib库，链接时会导入所有源文件。

***
