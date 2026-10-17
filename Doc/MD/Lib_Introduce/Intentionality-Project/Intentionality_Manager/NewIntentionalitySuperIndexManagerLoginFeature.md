# NewIntentionalitySuperIndexManagerLoginFeature

***

映射NewIntentionalitySuperIndexManagerLoginFeature接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map NewIntentionalitySuperIndexManagerLoginFeature(&NullElementSet, &NullElementSet, NewIntentionalitySuperIndexManagerLoginFeatureFunction);
```

意向性超索引管理器登录特征新建映射（NewIntentionalitySuperIndexManagerLoginFeature）在值域空元素上构造意向性超索引管理器登录所需的登录特征结构，即一个 4 元素的元素序。构造完成后，值域元素即可配合[LoginPageIntentionalitySuperIndexManager](LoginPageIntentionalitySuperIndexManager.md)记录登录过程中的遍历状态，位置常量见[IntentionalitySuperIndexManagerLoginFeature](IntentionalitySuperIndexManagerLoginFeature.md)。

***

## 案例：

```C++
Element FeatureElement;

NewIntentionalitySuperIndexManagerLoginFeatureFunction(EmptyElement, FeatureElement);

// Initialize FeatureElement for Login

Element ManagerElement;
NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
// Initialize ManagerElement

Element AddressElement;
NewUIntElementFunction(EmptyElement, AddressElement);
LoginPageIntentionalitySuperIndexManagerFunction(ManagerElement, AddressElement);
// Use AddressElement

ZeroElementFunction(EmptyElement, AddressElement);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
ReleaseIntentionalitySuperIndexManagerLoginFeatureFunction(EmptyElement, FeatureElement);
```

案例解释：登录特征结构在独立元素上构造，与管理器本体分离，因此它的释放方式是专用的[ReleaseIntentionalitySuperIndexManagerLoginFeature](ReleaseIntentionalitySuperIndexManagerLoginFeature.md)，必须与新建成对。特征结构不随管理器释放而自动消失，跳过释放将造成元素序资源残留。完整的登录流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
