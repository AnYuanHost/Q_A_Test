# CreateSuperIndexManagerInitializeInformation

***

映射CreateSuperIndexManagerInitializeInformation接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map CreateSuperIndexManagerInitializeInformation(&NullElementSet, &NullElementSet, CreateSuperIndexManagerInitializeInformationFunction);
```

意向性超索引管理器初始化信息构造映射（CreateSuperIndexManagerInitializeInformation）是意向性构造命名空间IntentionalityCreater中的构造映射，在值域空元素上一步构造意向性超索引管理器初始化所需的信息元素，一次给出管理器构造所需的全部初始化参数。构造出的信息元素属于全集（UniversalSet），可直接作为[CreateSuperIndexManagerIntentionality](CreateSuperIndexManagerIntentionality.md)的定义域输入。

***

## 案例：

```C++
Element InitializeInformationElement;

CreateSuperIndexManagerInitializeInformationFunction(EmptyElement, InitializeInformationElement);

// InitializeInformationElement now holds the Manager initialization information

Element SuperIndexManagerElement;
CreateSuperIndexManagerIntentionalityFunction(InitializeInformationElement, SuperIndexManagerElement);

ZeroElementFunction(EmptyElement, InitializeInformationElement);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, SuperIndexManagerElement);
```

案例解释：先在空元素上一步构造初始化信息，再以该信息元素为定义域调用意向性超索引管理器构造映射，一步得到值域上的管理器。初始化信息在管理器构造完成后即可用ZeroElementFunction解除，管理器本体由ReleaseIntentionalitySuperIndexManager成对释放，两者不可颠倒。
