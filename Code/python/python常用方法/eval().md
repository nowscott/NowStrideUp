---
createDate: 2024-04-08 13:00:04
tags:
  - python
  - 方法
---
`eval()` 是 Python 的内置函数之一，用于执行字符串中的 Python 表达式或代码，并返回结果。下面是对 `eval()` 函数的详细解释：

### 语法
```python
eval(expression, globals=None, locals=None)
```

- `expression` 是要执行的字符串表达式或代码。
- `globals` 是一个可选参数，用于指定全局命名空间，如果提供了，则在执行 `expression` 时将使用该全局命名空间。
- `locals` 是一个可选参数，用于指定局部命名空间，如果提供了，则在执行 `expression` 时将使用该局部命名空间。

### 返回值
- 返回执行结果，可以是任何 Python 对象，如数字、字符串、列表、字典等。

### 示例
```python
x = 10
y = 20
result = eval('x + y')
print(result)  # Output: 30

expression = '[1, 2, 3, 4, 5]'
result = eval(expression)
print(result)  # Output: [1, 2, 3, 4, 5]

expression = '{"name": "Alice", "age": 30}'
result = eval(expression)
print(result)  # Output: {'name': 'Alice', 'age': 30}
```

### 注意事项
- `eval()` 函数可以执行字符串中的 Python 表达式或代码，并返回结果。
- 在使用 `eval()` 函数时要注意安全性问题，特别是当 `expression` 是由用户提供的时候。恶意用户可能会利用 `eval()` 执行恶意代码，因此应该避免直接将不可信的字符串传递给 `eval()`。
- 如果不确定字符串中的内容是否安全，最好不要使用 `eval()`，而是考虑使用其他方法来达到相同的目的。