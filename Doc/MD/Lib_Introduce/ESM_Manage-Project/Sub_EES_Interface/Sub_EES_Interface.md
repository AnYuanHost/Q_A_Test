# 子元素环境检索器接口标准

***

总元素环境检索器只负责管理子元素环境检索器元素，而不负责管理其内部怎么实现。只要子元素环境检索器按照接口标准提供映射，便可以完成整个操作。庞杂系统提供了三个子检索器，其中两个的差别只是检索信息不同，所以本标准以超索引子检索器和8比特子检索器来举例。超索引子检索器是变长容器，8比特子检索器是固定长度容器。

子元素检索器需要维护从检索信息集合到超索引集合的映射关系，其中超索引集合用于中间层的超索引检索器检索使用。

本标准的设立建立在总元素环境检索器的运行逻辑上，如果优化或者调整运行逻辑，便可以按照逻辑来修改标准。这也导致了一个问题，在代码中编写时需要经常性地引入总元素环境检索器的结构命名空间，来获取接口标准的顺序。

在初始版本中，总元素环境检索器按照自身的要求提出了下面的所有标准。首先，方法接口统一按照映射的形式，每一个接口都要求按照对应的标准提供映射元素。总元素环境检索器获取接口对应的映射后，便可以直接使用解析宏等方式完成操作。而子元素环境检索器的实体则需要作为元素，转交到总元素环境检索器的固定位置上，那里会专门预留一个元素的插槽。

在具体实现上，总元素环境检索器为接口提供了一个元素序列插槽，要求元素环境模块要按照相应的顺序注册映射即可。下面按照该顺序逐个介绍接口。

***

## 接口总览及顺序：

子元素环境检索器需要完成以下20个映射：

```C++
namespace EES_Base_Struct{

    constexpr unsigned int		SubEESLogin				= 0;

    // 子检索器注册映射，申请一个新的插槽

    constexpr unsigned int		SubEESSelect			= 1;

    // 子检索器检索映射，检索子检索器检索信息，返回地址信息

    constexpr unsigned int		SubEESLogout			= 2;

    // 子检索器注销映射，将一个插槽注销并置懒

    constexpr unsigned int		SubEESSort				= 3;

    // 子检索器排序映射，按照顺序重新排列元素

    constexpr unsigned int		SubEESGetInf			= 4;

    // 子检索器获取信息映射，按照地址从子检索器中获取检索信息

    constexpr unsigned int		SubEESGetSuperIndex		= 5;

    // 子检索器获取超索引映射，按照地址从子检索器中获取超索引信息

    constexpr unsigned int		SubEESPutInf			= 6;

    // 子检索器存入信息映射，按照地址向子检索器存入检索信息

    constexpr unsigned int		SubEESPutSuperIndex		= 7;

    // 子检索器存入超索引映射，按照地址向子检索器存入检索信息

    constexpr unsigned int		SubEESReadInf			= 8;

    // 子检索器读取信息映射，按照地址从子检索器中读取检索信息

    constexpr unsigned int		SubEESReadSuperIndex	= 9;

    // 子检索器读取超索引映射，按照地址从子检索器中读取超索引信息

    constexpr unsigned int		NewSubEESAddress		= 10;

    // 新建子检索器地址映射，构造子检索器地址元素

    constexpr unsigned int		FirstSubEESAddress		= 11;

    // 子检索器第一地址映射，计算子检索器地址元素的第一个地址

    constexpr unsigned int		ReleaseSubEESAddress	= 12;

    // 释放子检索器地址映射，释放子检索器地址元素

    constexpr unsigned int		FESubEESAddress			= 13;

    // 子检索器第一空地址映射，获取子检索器第一个置懒的插槽地址

    constexpr unsigned int		NextSubEESAddress		= 14;

    // 子检索器下一地址映射，计算子检索器中一个地址的下一地址

    constexpr unsigned int		SubEESRetain			= 15;

    // 子检索器缩容映射，缩小子检索器容器大小

    constexpr unsigned int		SubEESDefragment		= 16;

    // 子检索器碎片整理映射，在子检索器上完成碎片整理

    constexpr unsigned int		SubEESOutTest			= 17;

    // 子检索器地址越界测试映射，判断地址是否越界

    constexpr unsigned int		SubEESGetOccupy			= 18;

    // 子检索器获取占用映射，按照地址获取插槽的占用情况

    constexpr unsigned int		SubEESPutOccupy			= 19;

    // 子检索器设置占用映射，按照地址设置插槽的占用情况
}
```

***

### 一些需要指明的集合

在整个接口标准中，不但需要确立映射的标准，还需要确定这些映射所使用的集合。接口标准使用到的集合包括：

- 子元素环境检索器集合（容器集合）
- 无符号整型集合（地址集合）
- 超索引集合（子检索器映射结果）

<p>

- 超索引集合（超索引子检索器检索信息）
- 8比特集合（8比特子检索器检索信息）

***

### 子元素检索器注册映射接口

子元素检索器注册映射接受元素序偶集合为定义域，其结构为<检索信息集合，超索引集合>，接受容器集合为值域。该映射将检索信息和超索引的映射注册到值域容器中。例如原始版本中使用的超索引子检索器注册映射，和8比特子检索器注册映射：

```C++
Map LoginSuperIndexSubEES(&OrderedPairSet, &SuperIndexSubEES, LoginSuperIndexSubEESFunction);

Map Login8BitSearcher(&OrderedPairSet, &_8BitSearcher, Login8BitSearcherFunction);
```

两个子检索器的映射在定义域上的差别在于检索信息不同，超索引子检索器映射的定义域结构为<超索引集合，超索引集合>，8比特子检索器映射的定义域结构为<8比特集合，超索引集合>。

总元素环境检索器在注册元素时子检索器层调用该映射。其中，子检索器注册信息由外部直接提供，超索引信息来自中间层超索引检索器注册映射的分配结果。调用该映射，完成最后的注册。

***

### 子元素检索器检索映射接口

子元素检索器检索映射接受元素序偶集合为定义域，其结构为<检索信息集合，容器集合>，接受地址集合为值域。该映射按照检索信息在容器中完成检索，并将匹配的地址信息存放到值域地址元素中。例如原始版本中使用的超索引子检索器检索映射，和8比特子检索器检索映射：

```C++
Map SelectSuperIndexSubEES(&OrderedPairSet, &UIntSet, SelectSuperIndexSubEESFunction);

Map Select8BitSearcher(&OrderedPairSet, &UIntSet, Select8BitSearcherFunction);
```

两个子检索器的映射在定义域上的差别在于检索信息不同，超索引子检索器映射的定义域结构为<超索引集合，超索引集合>，8比特子检索器映射的定义域结构为<8比特集合，超索引集合>。

总元素环境检索器在检索子检索器层等情况下调用该映射。其中子检索器检索信息由外部提供。调用该映射检索到子检索器地址，以方便后续的操作。

***

### 子元素检索器注销映射接口

子元素检索器注销映射接受元素序偶集合为定义域，结构为<检索信息集合，容器集合>，接受空元素集合为值域。该映射按照检索信息在容器元素中完成注销，并将检索信息对应的超索引元素拷贝到值域元素上。例如原始版本中使用的超索引子检索器注销映射和8比特子检索器注销映射：

```C++
Map LogoutSuperIndexSubEES(&OrderedPairSet, &NullElementSet, LogoutSuperIndexSubEESFunction);

Map Logout8BitSearcher(&OrderedPairSet, &NullElementSet, Logout8BitSearcherFunction);
```

两个子检索器的映射在定义域上的差别在于检索信息不同，超索引子检索器映射的定义域结构为<超索引集合，超索引子检索器集合>，8比特子检索器映射的定义域结构为<8比特集合，8比特子检索器集合>。

总元素环境检索器在注销时的子检索器层调用该映射。其中子检索器检索信息由外部提供。调用该映射获得的超索引信息，将用于中间层超索引检索器的注销行为。

***

### 子元素检索器排序映射接口

子元素检索器排序映射接受空元素集合为定义域，容器集合为值域。该映射在值域容器元素上进行排序。排序既需要按照检索信息进行排序，也需要将置懒的槽位按照超索引信息进行排序。例如原始版本中使用的超索引子检索器排序映射和8比特子检索器排序映射：

```C++
Map SortSuperIndexSubEES(&NullElementSet, &SuperIndexSubEESS, SortSuperIndexSubEESFunction);

Map Sort8BitSearcher(&NullElementSet, &_8BitSearcher, Sort8BitSearcherFunction);
```

总元素环境检索器在排序时的子检索器层调用该映射，完成子检索器层所有子检索器的排序工作。

***

### 子元素检索器获取信息映射接口

子元素检索器获取信息映射接受元素序偶集合，其结构为<地址集合，容器集合>，接受空元素集合为值域。该映射按照地址信息从容器元素中获取对应的检索信息，将其转交传递到值域空元素上。例如原始版本中使用的超索引子检索器获取信息映射和8比特子检索器获取信息映射：

```C++
Map GetInformationSuperIndexSubEES(&OrderedPairSet, &NullElementSet, GetInformationSuperIndexSubEESFunction);

Map Get8BitIn8BitSearcher(&OrderedPairSet, &NullElementSet, Get8BitIn8BitSearcherFunction);
```

总元素检索器在获取子元素检索器检索信息时调用该映射，例如用于交换数据。

***

### 子元素检索器获取超索引映射接口

子元素检索器获取超索引映射接受元素序偶集合，其结构为<地址集合，容器集合>，接受空元素集合为值域。该映射按照地址信息从容器元素中获取对应的超索引信息，将其转交传递到值域空元素上。例如原始版本中使用的超索引子检索器获取超索引映射和8比特子检索器获取超索引映射：

```C++
Map GetSuperIndexSuperIndexSubEES(&OrderedPairSet, &NullElementSet, GetSuperIndexSuperIndexSubEESFunction);

Map GetSuperIndexIn8BitSearcher(&OrderedPairSet, &NullElementSet, GetSuperIndexIn8BitSearcherFunction);
```

总元素检索器在获取子元素检索器超索引时调用该映射，例如用于交换数据。

***

### 子元素检索器存放信息映射接口

子元素检索器存放信息映射接受元素序偶集合，其结构为<地址集合，检索信息集合>，接受容器集合为值域。该映射按照地址信息将检索信息转交传递到值域容器的指定槽位上。例如原始版本中使用的超索引子检索器存放信息映射和8比特子检索器存放信息映射：

```C++
Map PutInformationSuperIndexSubEES(&OrderedPairSet, &SuperIndexSubEES, PutInformationSuperIndexSubEESFunction);

Map Put8BitTo8BitSearcher(&OrderedPairSet, &_8BitSearcher, Put8BitTo8BitSearcherFunction);
```

总元素检索器在存放子元素检索器检索信息时调用该映射，例如用于交换数据。

***

### 子元素检索器存放超索引映射接口

子元素检索器存放超索引映射接受元素序偶集合，其结构为<地址集合，超索引集合>，接受容器集合为值域。该映射按照地址信息将超索引元素转交传递到值域容器的指定槽位上。例如原始版本中使用的超索引子检索器存放超索引映射和8比特子检索器存放超索引映射：

```C++
Map PutSuperIndexSuperIndexSubEES(&OrderedPairSet, &SuperIndexSubEES, PutSuperIndexSuperIndexSubEESFunction);

Map PutSuperIndexTo8BitSearcher(&OrderedPairSet, &_8BitSearcher, PutSuperIndexTo8BitSearcherFunction);
```

总元素检索器在存放子元素检索器超索引时调用该映射，例如用于交换数据。

***

### 子元素检索器读取信息映射接口

子元素检索器读取信息映射接受元素序偶集合，其结构为<地址集合，容器集合>，接受空元素集合为值域。该映射按照地址信息从容器元素中读取对应的检索信息，将其引用传递到值域空元素上。例如原始版本中使用的超索引子检索器读取信息映射和8比特子检索器读取信息映射：

```C++
Map ReadInformationSuperIndexSubEES(&OrderedPairSet, &NullElementSet, ReadInformationSuperIndexSubEESFunction);

Map Read8BitIn8BitSearcher(&OrderedPairSet, &NullElementSet, Read8BitIn8BitSearcherFunction);
```

总元素检索器在读取子元素检索器检索信息时调用该映射，例如用于遍历等。

***

### 子元素检索器读取超索引映射接口

子元素检索器读取超索引映射接受元素序偶集合，其结构为<地址集合，容器集合>，接受空元素集合为值域。该映射按照地址信息从容器元素中读取对应的超索引信息，将其转交传递到值域空元素上。例如原始版本中使用的超索引子检索器读取超索引映射和8比特子检索器读取超索引映射：

```C++
Map ReadSuperIndexSuperIndexSubEES(&OrderedPairSet, &NullElementSet, ReadSuperIndexSuperIndexSubEESFunction);

Map ReadSuperIndexIn8BitSearcher(&OrderedPairSet, &NullElementSet, ReadSuperIndexIn8BitSearcherFunction);
```

总元素检索器在读取子元素检索器超索引时调用该映射，例如用于遍历和检测等。

***

### 新建子元素检索器地址映射接口

新建子元素检索器器映射接受空元素集合为定义域和值域。该映射在值域空元素上构造地址元素。例如超索引子检索器和8比特子检索器都采用无符号整型作为地址，这里均使用新建无符号整型：

```C++
Map NewUIntElement(&NullElementSet, &NullElementSet, NewUIntElementFunction);
```

总元素环境检索器在使用子元素检索器地址元素前，都需要声明并构造，此时需要调用该映射完成构造。

***

### 子元素检索器第一地址映射接口

子元素检索器第一地址映射接受空元素集合为定义域，地址集合为值域。该映射将值域地址元素初始化为第一个地址。例如超索引子检索器和8比特子检索器所使用的无符号整型置零映射：

```C++
Map UIntZero(&NullElementSet, &UIntSet, UIntZeroFunction);
```

总元素环境检索器在遍历子检索器时需要初始化地址信息，在完成构造后调用该映射完成初始化。

***

### 释放子元素检索器地址映射接口

释放子元素检索器地址映射接受空元素集合为定义域，地址集合为值域。该映射释放值域地址元素。例如超索引子检索器和8比特子检索器所使用的释放元素映射：

```C++
Map ReleaseElement(&NullElementSet, &UIntSet, ReleaseElementFunction);
```

总元素环境检索器在使用完子检索器地址后，需要主动释放，调用该映射完成释放。

***

### 子元素检索器第一空地址映射接口

子元素检索器第一空地址映射接受容器集合为定义域，地址集合为值域。该映射需要从定义域容器元素中获取到第一个置懒槽位的地址。例如超索引子检索器第一空地址映射和8比特子检索器第一空地址映射：

```C++
Map FirstEmptySuperIndexSubEES(&SuperIndexSubEES, &UIntSet, FirstEmptySuperIndexSubEESFunction);

Map FirstEmpty8BitSearcherAddress(&_8BitSearcher, &UIntSet, FirstEmpty8BitSearcherAddressFunction);
```

需要注意，计算第一个空地址的计算并不一定适用于所有情况。进行计算时，保证了子检索器元素已经完成了碎片整理。即总元素环境检索器在调用该映射时，保证所有非置懒的槽位排在置懒槽位前面。或者下一地址映射保证计算可以在置懒

总元素环境检索器在遍历子检索器内插槽时需要计算起始地址，调用该映射获得子元素检索器容器的第一个插槽。

***

### 子元素检索器下一地址映射接口

子元素检索器下一地址映射接受元素序偶集合为定义域，其结构为<地址集合，容器集合>，接受地址集合为值域。该映射根据容器元素提供的信息，计算定义域地址元素的下一个地址元素。例如原始版本中超索引子检索器下一地址映射和8比特子检索器下一地址映射：

```C++
Map NextAddressSuperIndexSubEES(&OrderedPairSet, &UIntSet, NextAddressSuperIndexSubEESFunction);

Map Next8BitSearcherAddress(&OrderedPairSet, &UIntSet, Next8BitSearcherAddressFunction);
```

这里需要注意一个歧义。因为庞杂系统使用普遍的置懒的设计，所以在计算地址时就有了歧义。一般而言，在一个有序的容器中，地址的下一地址是固定的。但是在置懒设计中，下一地址的计算被分成了计算下一个置懒元素的地址和计算下一个非置懒元素的地址。只是在总元素环境检索器的运行逻辑中，没有进行置懒设计的子检索器方法依然符合接口标准。

总元素环境检索器在遍历子检索器内插槽时需要不断计算下一地址，调用该映射完成计算。

***

### 子元素检索器缩容映射接口

子元素检索器缩容映射接受地址集合为定义域，容器集合为值域。该映射根据定义域地址信息，计算子元素检索器最终需要保留的空间并缩容。例如超索引子检索器缩容映射和8比特子检索器缩容映射：

```C++
Map RetainSuperIndexSubEES(&UIntSet, &SuperIndexSubEES, RetainSuperIndexSubEESFunction);

Map Retain8BitSearcher(&UIntSet, &_8BitSearcher, Retain8BitSearcherFunction);
```

总元素环境检索器在缩容时的子检索器层，需要将所有容器缩容，分别调用该映射完成缩容。总元素环境检索器在运行逻辑中会获取首空地址，需要保证子检索器可以依靠该信息完成缩容。

***

### 子元素检索器碎片整理映射接口

子元素检索器碎片整理映射接受空元素集合为定义域，容器集合为值域。该映射在值域容器元素上进行存储空间的碎片整理，例如超索引子检索器碎片整理映射和8比特子检索器适用的空映射：

```C++
Map DefragmentSuperIndexSubEES(&NullElementSet, &SuperIndexSubEES, DefragmentSuperIndexSubEESFunction);

Map EmptyMap(&UniversalSet, &UniversalSet, EmptyMapFunction);
```

因为8比特子检索器作为特殊的固定长度容器，无法进行碎片整理，所以传入空映射。

总元素环境检索器在碎片整理映射时的子检索器层，需要调用该映射完成所有子检索器的缩容。

***

### 子元素检索器越界测试映射接口

子元素检索器越界测试映射接受元素序偶集合为定义域，其结构为<地址集合，容器集合>，接受布尔集合为值域。该映射检测地址元素在容器元素中是否越界，并将检测结果赋值给值域布尔元素。例如超索引子检索器越界测试映射和8比特子检索器越界测试映射：

```C++
Map SuperIndexSubEESOutTest(&OrderedPairSet, &BoolSet, SuperIndexSubEESOutTestFunction);

Map _8BitSearcherOutTest(&OrderedPairSet, &BoolSet, _8BitSearcherOutTestFunction);
```

总元素检索器在测试地址是否合法时需要进行判断，调用该映射完成测试。

***

### 子元素检索器获取占用映射接口

子元素检索器获取占用映射接受元素序偶集合为定义域，其结构为<地址集合，容器集合>，接受布尔类型集合为值域。该映射按照地址信息从容器对应槽位获取其占用状态，并将值赋给值域布尔元素。例如超索引子检索器获取占用映射和8比特子检索器获取占用映射：

```C++
Map GetOccupySuperIndexSubEES(&OrderedPairSet, &BoolSet, GetOccupySuperIndexFunction);

Map GetOccupy8BitSearcher(&OrderedPairSet, &BoolSet, GetOccupy8BitSearcherFunction);
```

轮询机制需要检测元素占用情况时，调用该映射以获取占用状态。

***

### 子元素检索器设置占用映射接口

子元素环境检索器设置占用映射接受元素序偶集合为定义域，其结构为<地址集合，布尔集合>，接受容器集合为值域。该映射按照地址信息，将占用状态写入到值域容器集合的指定槽位上。例如超索引子检索器设置占用映射和8比特子检索器设置占用映射：

```C++
Map PutOccuptSuperIndexSubEES(&OrderedPairSet, &SuperIndexSubEES, PutOccupySuperIndexSubEESFunction);

Map PutOccupy8BitSearcher(&OrderedPairSet, &_8BitSearcher, PutOccupt8BitSearcherFunction);
```

轮询机制需要设置元素占用情况时，调用该映射以设置占用状态。

***

## 关于注册标准

总元素环境检索器在子元素检索器管理层中预留了槽位，只需要将对应的映射元素存放到槽位上，在运行时便可以直接调用。总元素环境检索器提供的方法里则要求子元素检索器模块按照一定的顺序，将映射元素打包成元素序列。总元素环境检索器在注册子元素环境检索器时，会直接将打包好的映射包直接转交到对应槽位。

以原始版本中超索引子检索器和8比特子检索器所使用的映射集注册映射为例，在实际使用中需要按以下步骤完成注册开发：

### 1. 使用总元素环境检索器命名空间

因为该标准所使用的宏定义在总元素环境检索器结构命名空间（EES_Base_Struct）中，所以在构建时需要主动引入该命名空间。

```C++
using namespace EES_Base_Struct;
```

### 2. 构造包体

这一步需要构造元素序列，即映射集的包（MapPackage），并在每一个插槽上都赋予映射元素大小。因为每一个插槽都是统一的映射元素，且原映射未经过封装，所以在构造时统一赋值。

```C++
Element MapPackage;

Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);

GetUIntElement(UIntElement) = SubEESMapSize;
UIntNewElementOrderFunction(UIntElement, MapPackage);

for(unsigned int midI = 0;midI < EEMapSize;midI++){
    GetEleOrder(MapPackage, midI).Size = sizeof(Map);
}
```

### 3. 完成映射引用传递

完成包体的构造后，只需要将映射结构的地址赋值即可。

超索引子检索器：

```C++
GetEleOrder(Range, SubEESLogin			).KeySpace = (char*)&LoginSuperIndexSubEES;
GetEleOrder(Range, SubEESSelect			).KeySpace = (char*)&SelectSuperIndexSubEES;
GetEleOrder(Range, SubEESLogout			).KeySpace = (char*)&LogoutSuperIndexSubEES;
GetEleOrder(Range, SubEESSort			).KeySpace = (char*)&SortSuperIndexSubEES;
GetEleOrder(Range, SubEESGetInf			).KeySpace = (char*)&GetInformationSuperIndexSubEES;
GetEleOrder(Range, SubEESGetSuperIndex	).KeySpace = (char*)&GetSuperIndexSuperIndexSubEES;
GetEleOrder(Range, SubEESPutInf			).KeySpace = (char*)&PutInformationSuperIndexSubEES;
GetEleOrder(Range, SubEESPutSuperIndex	).KeySpace = (char*)&PutSuperIndexSuperIndexSubEES;
GetEleOrder(Range, SubEESReadInf		).KeySpace = (char*)&ReadInformationSuperIndex;
GetEleOrder(Range, SubEESReadSuperIndex	).KeySpace = (char*)&ReadSuperIndexSuperIndexSubEES;
GetEleOrder(Range, NewSubEESAddress		).KeySpace = (char*)&NewUIntElement;
GetEleOrder(Range, FirstSubEESAddress	).KeySpace = (char*)&UIntZero;
GetEleOrder(Range, ReleaseSubEESAddress	).KeySpace = (char*)&ReleaseElement;
GetEleOrder(Range, FESubEESAddress		).KeySpace = (char*)&FirstEmptySuperIndexSubEES;
GetEleOrder(Range, NextSubEESAddress	).KeySpace = (char*)&NextAddressSuperIndexSubEES;
GetEleOrder(Range, SubEESRetain			).KeySpace = (char*)&RetainSuperIndexSubEES;
GetEleOrder(Range, SubEESDefragment		).KeySpace = (char*)&DefragmentSuperIndexSubEES;
GetEleOrder(Range, SubEESOutTest		).KeySpace = (char*)&SuperIndexSubEESOutTest;
GetEleOrder(Range, SubEESGetOccupy		).KeySpace = (char*)&GetOccupySuperIndexSubEES;
GetEleOrder(Range, SubEESPutOccupy		).KeySpace = (char*)&GetOccupySuperIndexSubEES;
```

8比特子检索器：

```C++
GetEleOrder(Range, SubEESLogin          ).KeySpace = (char*)&Login8BitSearcher;
GetEleOrder(Range, SubEESSelect         ).KeySpace = (char*)&Select8BitSearcher;
GetEleOrder(Range, SubEESLogout         ).KeySpace = (char*)&Logout8BitSearcher;
GetEleOrder(Range, SubEESSort           ).KeySpace = (char*)&Sort8BitSearcher;
GetEleOrder(Range, SubEESGetInf         ).KeySpace = (char*)&Get8BitIn8BitSearcher;
GetEleOrder(Range, SubEESGetSuperIndex  ).KeySpace = (char*)&GetSuperIndexIn8BitSearcher;
GetEleOrder(Range, SubEESPutInf         ).KeySpace = (char*)&Put8BitTo8BitSearcher;
GetEleOrder(Range, SubEESPutSuperIndex  ).KeySpace = (char*)&PutSuperIndexTo8BitSearcher;
GetEleOrder(Range, SubEESReadInf        ).KeySpace = (char*)&Read8BitIn8BitSearcher;
GetEleOrder(Range, SubEESReadSuperIndex ).KeySpace = (char*)&ReadSuperIndexIn8BitSearcher;
GetEleOrder(Range, NewSubEESAddress     ).KeySpace = (char*)&NewUIntElement;
GetEleOrder(Range, FirstSubEESAddress   ).KeySpace = (char*)&First8BitSearcherAddress;
GetEleOrder(Range, ReleaseSubEESAddress ).KeySpace = (char*)&ReleaseElement;
GetEleOrder(Range, FESubEESAddress      ).KeySpace = (char*)&FirstEmpty8BitSearcherAddress;
GetEleOrder(Range, NextSubEESAddress    ).KeySpace = (char*)&Next8BitSearcherAddress;
GetEleOrder(Range, SubEESRetain         ).KeySpace = (char*)&Retain8BitSearcher;
GetEleOrder(Range, SubEESDefragment     ).KeySpace = (char*)&EmptyMap;
GetEleOrder(Range, SubEESOutTest        ).KeySpace = (char*)&_8BitSearcherOutTest;
GetEleOrder(Range, SubEESGetOccupy      ).KeySpace = (char*)&GetOccupy8BitSearcher;
GetEleOrder(Range, SubEESPutOccupy      ).KeySpace = (char*)&SetOccupy8BitSearcher;
```

***

### 4. 另一种实现

在一些情况下，映射作为结构存在，没有经过元素封装。但在另一些情况下，映射已经完成了封装。那么便不需要再按照这种赋值的写法来完成，而是直接使用引用传递来完成赋值。

***

## 注册

完整的注册流程需要参考总元素环境检索器注册子检索器环境映射。映射接受元素序列集合为定义域，其结构为<超索引集合，元素容器集合，映射包集合>，接受总元素环境检索器集合为值域。该映射解析总元素环境检索器元素结构，将定义域的子检索器容器元素和映射包元素转交传递到对应槽位。

```C++
Map LoginSubEESEES(&ElementOrderSet, &ElementEnvironmentSearcher, LoginSubEESEESFunction);
```

需要注意，这个时候总元素环境检索器已经分配了子检索器的超索引。这里调用注册需要封装到三元元素序列中，一般可以按照以下流程即可完成注册：

```C++
Element UIntElement;
NewUIntElementFunction(EmptyElement, UIntElement);
Element ParaOrder;
GetUIntElement(UIntElement) = 3;
UIntNewElementOrderFunction(UIntElement, ParaOrder);

GetEleOrder(ParaOrder, 0) &= SubEES_SuperIndex;
GetEleOrder(ParaOrder, 1) &= SubEESElement;
GetEleOrder(ParaOrder, 2) &= MapPackage;
LoginSubEESEESFunction(ParaOrder, EESElement);
```

需要注意，注册步骤仅包括将子检索器注册到总元素环境检索器中。子检索器元素 SubEESElement 以及映射包元素 MapPackage 都需要事先完成构造，而超索引检索信息 SubEES_SuperIndex 也需要事先分配。这也意味着在拓展时，可以任意设计容器以及构造思路，因为接口标准只关注这么一小部分的规范。
