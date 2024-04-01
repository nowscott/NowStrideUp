---
data: 2024-03-31T00:00:00.000Z
tags:
  - python
  - 方法
---

`count()` 方法是 Python 字符串对象的一个内置方法，用于计算字符串中指定子字符串出现的次数。下面是对 `count()` 方法的详细解释：

### 语法
```python
str.count(sub[, start[, end]])
```

- `str` 是调用该方法的字符串对象。
- `sub` 是要搜索的子字符串。
- `start` 是可选参数，表示开始搜索的起始位置，默认为 0。
- `end` 是可选参数，表示结束搜索的结束位置，默认为字符串的长度。

### 返回值
`count()` 方法返回一个整数，表示子字符串 `sub` 在字符串 `str` 中出现的次数。

### 示例
```python
sentence = "hello world, hello python, hello hello"
count_hello = sentence.count("hello")
print(count_hello)  # Output: 3
```

### 注意事项
- `count()` 方法是区分大小写的，因此大写和小写字符被视为不同的字符。
- 如果要忽略大小写进行计数，可以先使用 [[lower()]]或 [[upper()]]方法将字符串转换为统一大小写再使用 `count()` 方法。
- 如果指定了 `start` 和 `end` 参数，则 `count()` 方法只会在指定范围内搜索子字符串。