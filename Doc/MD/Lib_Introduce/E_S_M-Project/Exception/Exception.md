# Exception

***

该源文件提供基本的异常元素，以及相关的异常处理手段。

***

## 异常集合：

| 指令 | 说明 |
| --- | --- |
| [ExceptionSet](ExceptionSet.md) | 集合ExceptionSet为所有异常信息的集合 |

***

## 抛出异常映射：

| 指令 | 说明 |
| --- | --- |
| [ThrowException](ThrowException.md) | 映射ThrowException接受空元素集合（NullElementSet）为定义域，异常集合（ExceptionSet）为值域 |

***

## 一般异常代码：

| 指令 | 说明 |
| --- | --- |
| [ExceptionCode](ExceptionCode/ExceptionCode.md) | 命名空间ExceptionCode定义异常信息的常用代码，用于提供基础的异常信息。 |

***

## 成功异常相关映射：

| 指令 | 说明 |
| --- | --- |
| [ThrowSuccess](ThrowSuccess.md) | 映射ThrowSuccess接受空元素集合（NullElementSet）为定义域和值域 |
| [ExceptionSuccessTest](ExceptionSuccessTest.md) | 映射ExceptionSuccessTest接受异常集合（ExceptionSet）为定义域，布尔元素集合（BoolSet）为值域 |
