---
createDate: 2024-04-08 13:04:00
tags:
  - 方法
  - python
---
`join()` 是 Python 字符串对象的一个方法，用于将可迭代对象中的字符串元素连接成一个新的字符串。下面是对 `join()` 方法的详细解释：

### 方法语法
```python
separator.join(iterable)
```

- `separator` 是连接各个字符串时使用的分隔符。
- `iterable` 是包含字符串的可迭代对象，如列表、元组等。

### 返回值
- 返回一个由可迭代对象中的字符串元素连接而成的新字符串。

### 示例
```python
words = ["Hello", "World", "Python"]
result = " ".join(words)
print(result)  # Output: 'Hello World Python'

numbers = ["1", "2", "3", "4", "5"]
result = "-".join(numbers)
print(result)  # Output: '1-2-3-4-5'
```

### 注意事项
- `join()` 方法通过指定的分隔符将可迭代对象中的字符串连接起来。
- 分隔符可以是任何字符串，例如空格、逗号、短横线等。
- `join()` 方法通常用于将列表或元组中的字符串连接成一个新的字符串。
- 如果可迭代对象中包含非字符串元素，需要先将其转换为字符串才能使用 `join()` 方法连接。