---
createDate: 2024-04-04 18:23:35
---
`chr()` 是 Python 的内置函数之一，用于根据 Unicode 码点值返回对应的字符。下面是对 `chr()` 函数的详细解释：

### 语法
```python
chr(i)
```

- `i` 是一个表示 Unicode 码点值的整数。

### 返回值
- 返回表示 Unicode 码点值 `i` 的字符。

### 示例
```python
print(chr(65))  # Output: 'A'
print(chr(97))  # Output: 'a'
print(chr(8364))  # Output: '€'
print(chr(20013))  # Output: '中'
```

### 注意事项
- `chr()` 函数根据给定的 Unicode 码点值返回对应的字符。
- 对于 ASCII 码点值（0 到 127），`chr()` 函数返回对应的 ASCII 字符。
- 对于非 ASCII 码点值（大于 127），`chr()` 函数返回对应的 Unicode 字符。
- 如果给定的码点值超出了有效范围（0 到 0x10FFFF），会引发 ValueError 异常。

这个函数通常与 [[ord()]] 函数结合使用，`ord()` 可以获取字符的 Unicode 码点值，而 `chr()` 则可以根据 Unicode 码点值获取字符。这样就可以在字符和其对应的 Unicode 码点值之间进行转换。