---
createDate: 2024-04-08 14:42:20
tags:
  - 方法
  - python
---
`replace()` 是 Python 字符串对象的一个方法，用于将字符串中的指定子串替换为新的子串。下面是对 `replace()` 方法的详细解释：

### 方法语法
```python
str.replace(old, new[, count])
```

- `old` 是要被替换的子串。
- `new` 是要替换成的新子串。
- `count` 是可选参数，用于指定替换次数。如果指定了 `count`，则只替换前 `count` 个匹配项。

### 返回值
- 返回一个新的字符串，其中的 `old` 被替换成了 `new`。

### 示例
```python
# 将字符串中的 "apple" 替换为 "banana"
sentence = "An apple a day keeps the doctor away"
new_sentence = sentence.replace("apple", "banana")
print(new_sentence)  # Output: 'An banana a day keeps the doctor away'

# 将字符串中的前两个空格替换为逗号
sentence = "Hello  world  Python"
new_sentence = sentence.replace(" ", ",", 2)
print(new_sentence)  # Output: 'Hello,world, Python'
```

### 注意事项
- `replace()` 方法会创建一个新的字符串，并将指定的子串替换为新的子串。
- 如果 `count` 参数被指定，替换操作将只在字符串中前 `count` 个匹配项上执行。如果 `count` 参数未指定，则会替换所有匹配项。
- `replace()` 方法不会修改原始字符串，而是返回一个新的字符串。原始字符串保持不变。
- 如果要在原始字符串上进行就地替换，可以考虑使用 `str.translate()` 方法或正则表达式的替换。