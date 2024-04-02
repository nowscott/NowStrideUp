---
createDate: 2024-04-01 12:08:04
editDate: 2024-04-02 5:12:48
tags:
  - 方法
  - python
---
`str()` 是 Python 的内置函数之一，用于将对象转换为字符串类型。下面是对 `str()` 函数的详细解释：

### 语法
```python
str(object='')
```

- `object` 是要转换为字符串的对象。如果未提供任何参数，则返回空字符串。

### 示例
1. 将整数转换为字符串：
```python
num_int = 123
num_str = str(num_int)
print(num_str)  # Output: '123'
```

2. 将浮点数转换为字符串：
```python
num_float = 3.14
num_str = str(num_float)
print(num_str)  # Output: '3.14'
```

3. 将布尔值转换为字符串：
```python
bool_val = True
bool_str = str(bool_val)
print(bool_str)  # Output: 'True'
```

4. 将其他数据类型转换为字符串：
```python
list_data = [1, 2, 3]
list_str = str(list_data)
print(list_str)  # Output: '[1, 2, 3]'
```

### 注意事项
- `str()` 函数会尝试调用对象的 `__str__()` 方法来获取字符串表示形式。如果对象没有实现 `__str__()` 方法，则会返回对象的默认字符串表示（通常是对象的类和内存地址）。
- 对于自定义的类，可以通过实现 `__str__()` 方法来自定义对象的字符串表示形式，以便在使用 `str()` 函数时得到符合期望的输出。
- 如果需要将对象转换为字节字符串（bytes 类型），可以使用 `bytes()` 函数。