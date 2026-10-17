# NewIntentionalitySuperIndexManagerLogoutFeature

***

映射NewIntentionalitySuperIndexManagerLogoutFeature接受空元素集合（NullElementSet）为定义域和值域，定义为：

```C++
Map NewIntentionalitySuperIndexManagerLogoutFeature(&NullElementSet, &NullElementSet, NewIntentionalitySuperIndexManagerLogoutFeatureFunction);
```

意向性超索引管理器登出特征新建映射（NewIntentionalitySuperIndexManagerLogoutFeature）在值域空元素上构造意向性超索引管理器登出所需的登出特征结构，即一个 5 元素的元素序。构造完成后，值域元素即可配合[LogoutPageIntentionalitySuperIndexManager](LogoutPageIntentionalitySuperIndexManager.md)记录登出过程中的整理状态，位置常量见[IntentionalitySuperIndexManagerLogoutFeature](IntentionalitySuperIndexManagerLogoutFeature.md)。

***

## 案例：

```C++
Element FeatureElement;

NewIntentionalitySuperIndexManagerLogoutFeatureFunction(EmptyElement, FeatureElement);

// Initialize FeatureElement for Logout

Element ManagerElement;
NewIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
// Initialize ManagerElement

Element LogoutPair;
NewOrderedPairFunction(EmptyElement, LogoutPair);
// Initialize Address Information (UIntSet) in GetPairFirstElement(LogoutPair)
GetPairSecoundElement(LogoutPair) &= ManagerElement;

LogoutPageIntentionalitySuperIndexManagerFunction(LogoutPair, EmptyElement);

ZeroElementFunction(EmptyElement, LogoutPair);
ReleaseIntentionalitySuperIndexManagerFunction(EmptyElement, ManagerElement);
ReleaseIntentionalitySuperIndexManagerLogoutFeatureFunction(EmptyElement, FeatureElement);
```

案例解释：登出特征结构在独立元素上构造，与管理器本体分离，因此它的释放方式是专用的[ReleaseIntentionalitySuperIndexManagerLogoutFeature](ReleaseIntentionalitySuperIndexManagerLogoutFeature.md)，必须与新建成对；条目的归还由页登出映射写回管理器，两者的释放与归还责任互不替代。跳过特征释放将造成元素序资源残留。完整的登出流程，跳转至[意向性超索引管理器案例](IntentionalitySuperIndexManager_Case.md)。
