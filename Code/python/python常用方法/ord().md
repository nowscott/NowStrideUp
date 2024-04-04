---
createDate: 2024-04-04 18:21:48
tags:
  - 方法
  - python
---
`ord()` 是 Python 的内置函数之一，用于获取字符的 Unicode 码点值。下面是对 `ord()` 函数的详细解释：

### 语法
```python
ord(c)
```

- `c` 是要获取 Unicode 码点值的字符。

### 返回值
- 返回表示字符 `c` 的 Unicode 码点值的整数。

### 示例
```python
print(ord('A'))  # Output: 65
print(ord('a'))  # Output: 97
print(ord('€'))  # Output: 8364
print(ord('中'))  # Output: 20013
```

### 注意事项
- `ord()` 函数返回给定字符的 Unicode 码点值，这个值是一个整数。
- 对于 ASCII 字符，Unicode 码点值与 ASCII 码对应，例如大写字母 'A' 对应的 Unicode 码点值为 65，小写字母 'a' 对应的 Unicode 码点值为 97。
- 对于非 ASCII 字符（如中文、特殊符号等），Unicode 码点值会更大，可以通过 `ord()` 函数来获取其值。
- 如果要根据 Unicode 码点值获取对应的字符，可以使用 [[chr() ]]函数。例如 `chr(65)` 返回大写字母 'A'。