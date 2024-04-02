---
createDate: 2024-04-02 16:31:59
tags:
  - 方法
  - python
---
`isalpha()` 是 Python 字符串对象的一个方法，用于检查字符串是否全由字母组成（包括英文字母和 Unicode 字母）。下面是对 `isalpha()` 方法的详细解释：

### 方法语法
```python
str.isalpha()
```

- `str` 是要检查的字符串对象。

### 返回值
- 如果字符串中所有字符都是字母，并且字符串不为空，则返回 `True`。
- 否则，返回 `False`。

### 示例
```python
word1 = "Hello"
word2 = "123"
word3 = "Python3"
print(word1.isalpha())  # Output: True
print(word2.isalpha())  # Output: False (包含数字)
print(word3.isalpha())  # Output: False (包含数字和特殊字符)
```

### 注意事项
- `isalpha()` 方法返回布尔值，用于检查字符串是否全由字母组成。
- 空字符串不被视为由字母组成，因此 `"".isalpha()` 返回 `False`。
- 除了英文字母外，Unicode 字母也被视为字母，例如希腊字母、俄罗斯字母等都属于字母字符。