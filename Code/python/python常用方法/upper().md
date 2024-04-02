---
createDate: 2024-03-31 8:16:54
editDate: 2024-04-02 5:12:46
link: https://nowscott.notion.site/upper-d3a27fbe184244d0bd301246c1267e26
notionID: d3a27fbe-1842-44d0-bd30-1246c1267e26
tags:
  - 方法
  - python
---
`upper()` 是 Python 字符串对象的一个内置方法，用于将字符串中的所有小写字母转换为大写字母，并返回转换后的字符串副本。下面是对 `upper()` 方法的详细解释：

### 语法
```python
str.upper()
```

- `str` 是调用该方法的字符串对象。

### 返回值
`upper()` 方法返回一个新的字符串，其中所有的小写字母都被转换为大写字母，而原始字符串不变。

### 示例
```python
text = "hello World"
upper_text = text.upper()
print(upper_text)  # Output: "HELLO WORLD"
```

### 注意事项
- `upper()` 方法只会转换小写字母为大写字母，对于非字母字符、大写字母或者非英文字符不做改变。
- 方法返回的是一个新的字符串副本，原始字符串本身不会改变。
- 这个方法常用于对字符串进行大小写不敏感的比较或处理，以及将字符串统一转换为大写形式。