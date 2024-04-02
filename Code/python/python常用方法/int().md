---
createDate: 2024-03-31 10:56:38
editDate: 2024-04-02 17:30:46
tags:
  - 方法
  - python
---
`int()` 是 Python 的内置函数之一，用于将字符串或其他数据类型转换为整数类型。下面是对 `int()` 函数的详细解释：

### 语法
```python
int(x, base=10)
```

- `x` 是要转换为整数的对象，可以是字符串、浮点数、布尔值等。
- `base` 是可选参数，表示进制，默认为 10。

### 示例
1. 将字符串转换为整数：
```python
num_str = "123"
num_int = int(num_str)
print(num_int)  # Output: 123
```

2. 将浮点数转换为整数（会向下取整）：
```python
num_float = 3.14
num_int = int(num_float)
print(num_int)  # Output: 3
```

3. 将布尔值转换为整数（True 转换为 1，False 转换为 0）：
```python
bool_val = True
num_int = int(bool_val)
print(num_int)  # Output: 1
```

4. 指定进制进行转换：
```python
hex_str = "1A"
hex_int = int(hex_str, 16)  # 将十六进制字符串转换为整数
print(hex_int)  # Output: 26
```

### 注意事项
- 如果 `x` 是一个字符串，那么它必须是合法的整数字符串（例如 "123"）或者合法的表示整数的字符串（例如 "0 b 1010" 表示二进制数，"0 o 777" 表示八进制数，"0 x 1 A" 表示十六进制数）。
- 如果 `base` 参数未指定，默认按照十进制进行转换。
- 如果 `x` 无法转换为整数，或者转换结果超出了整数类型的表示范围，则会引发 ValueError 异常。