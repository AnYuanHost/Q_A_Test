# SubEES_8Bit_Code

***

命名空间SubEES_8Bit_Code定义如下：

```C++
namespace SubEES_8Bit_Code{
	constexpr unsigned int System_SuperIndex					= 0;

    constexpr unsigned int Quote_ElementEnvironmentSearcher     = 1;
    constexpr unsigned int Quote_ElementEnvironment             = 2;
    constexpr unsigned int Quote_PollingDrivenZero              = 3;
    constexpr unsigned int Quote_SolutionManager                = 4;
    constexpr unsigned int Quote_IntentionalityAllotor          = 5;
    constexpr unsigned int Quote_CoreKRSSuperIndex              = 6;
	constexpr unsigned int Quote_AddressCreaterManager			= 7;
}
```

8比特子元素环境检索器代码（SubEES_8Bit_Code）通过命名空间定义系统用8比特子元素环境检索器操作代码。通过该代码赋值，以此完成对系统用8比特子元素环境检索器的各种元素完成操作。

***

## 代码含义

在代码中使用系统层得8比特子元素环境检索器时，按照指定的标准使用。

```C++
namespace SubEES_8Bit_Code{
	constexpr unsigned int System_SuperIndex					= 0;

    // 系统超索引，该数值用于初始化系统8比特子检索器的超索引检索信息

    constexpr unsigned int Quote_ElementEnvironmentSearcher     = 1;

    // 元素环境检索器，与零轮询机绑定的元素环境检索器元素的引用

    constexpr unsigned int Quote_ElementEnvironment             = 2;

    // 元素环境，与总元素环境检索器绑定的元素环境元素的引用

    constexpr unsigned int Quote_PollingDrivenZero              = 3;

    // 零轮询机，与智能体绑定的零轮询机元素的引用

    constexpr unsigned int Quote_SolutionManager                = 4;

    // 解决方案管理，与零轮询机绑定的解决方案管理元素的引用，该管理用于提供子图替换的全部信息

    constexpr unsigned int Quote_IntentionalityAllotor          = 5;

    // 知识库意向性申请者，记录知识库意向性管理的元素的引用

    constexpr unsigned int Quote_CoreKRSSuperIndex              = 6;

    // 内核知识库超索引，该元素记录内核知识库所在语境的超索引，用于寻找内核知识库

	constexpr unsigned int Quote_AddressCreaterManager			= 7;

    // 地址分配器，与零轮询机绑定的解决方案地址分配器元素，所有的解决方案请求新的节点都在这里完成

}
```
