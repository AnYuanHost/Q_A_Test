# Set
***
Set（集合）结构体，作为本框架的操作的发生环境，一切操作都发生在集合内。其结构定义如下：

    typedef bool (*SetTestFunction)(Element& Ele, Set& S);

    struct Set {
	    Element SetParameter;
	    SetTestFunction TestFunction;

	    Set();
	    Set(const Element& Ele, const SetTestFunction& Fun);
	    ~Set();
    };

SetTestFunction类型用于指明一类函数，这类函数判断一个元素是否属于一个集合。其参数Ele代表元素，S代表集合，即判断Ele元素是否属于集合S，返回布尔值用于后续的处理。
Set结构体的成员中，SetParameter用于在判断函数中提供额外信息，一些泛化的集合需要使用参数进行特化。
TestFunction用于判断元素和该集合的属于关系是否成立，其决定了集合的具体信息。
与元素不同的是，因为其基本不需要在运行过程中更改，所以其不需要额外操作。