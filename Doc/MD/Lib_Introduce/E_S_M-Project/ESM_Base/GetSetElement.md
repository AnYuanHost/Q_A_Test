# GetSetElement

***

宏GetSetElement定义如下：

```C++
#define GetSetElement(Ele) (*(Set*)(Ele.KeySpace))
```

宏GetSetElement用于获取被封装在元素中的集合信息，获取后可作为集合结构体进行操作。

***

## 案例：

```C++
Element SetElement;

//Initialize Set Element

Element Ele;

bool TestResult = GetSetElement(SetElement).TestFunction(Ele, SetElement);
```

在案例代码中，初始化SetElement时将集合信息按照固定操作封装，使用宏GetSetElement获取信息。所以后续可以通过该宏解析并使用集合结构体的TestFunction成员来判断元素是否属于集合。