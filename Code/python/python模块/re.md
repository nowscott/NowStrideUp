---
createDate: 2024-04-05 14:00:50
tags:
  - 模块
  - python
---
`re` 是 Python 标准库中的模块，提供了正则表达式的功能。正则表达式是一种强大的文本匹配和搜索工具，允许您通过模式匹配来查找、替换或分割字符串。下面是对 `re` 模块的详细解释：

### 导入模块
在使用之前，需要先导入 `re` 模块：
```python
import re
```

### 常用函数和方法
1. **search()**
   - `re.search(pattern, string, flags=0)`：在字符串中搜索指定的模式。如果找到匹配项，则返回匹配对象；否则返回 `None`。
   
2. **match()**
   - `re.match(pattern, string, flags=0)`：在字符串开头位置匹配指定的模式。如果找到匹配项，则返回匹配对象；否则返回 `None`。
   
3. **findall()**
   - `re.findall(pattern, string, flags=0)`：在字符串中查找所有符合模式的匹配项，并以列表形式返回。
   
4. **sub()**
   - `re.sub(pattern, repl, string, count=0, flags=0)`：使用指定的替换字符串 `repl` 替换字符串中符合模式的匹配项。可以通过 `count` 参数指定替换次数。

5. **split()**
   - `re.split(pattern, string, maxsplit=0, flags=0)`：根据指定的模式对字符串进行分割，并以列表形式返回分割后的子串。

### 正则表达式语法
正则表达式的语法非常灵活，用于描述文本模式。一些常用的元字符和符号包括：
- `.`：匹配任意单个字符（除了换行符）。
- `*`：匹配前一个字符的零次或多次。
- `+`：匹配前一个字符的一次或多次。
- `?`：匹配前一个字符的零次或一次。
- `^`：匹配字符串的开头。
- `$`：匹配字符串的结尾。
- `\d`：匹配任意数字字符。
- `\w`：匹配任意字母、数字或下划线字符。
- `\s`：匹配任意空白字符（空格、制表符、换行符等）。

### 示例
```python
import re

# 使用 search() 查找匹配项
match = re.search(r'\d+', 'Age: 25, Height: 180cm')
print(match.group())  # Output: '25'

# 使用 findall() 查找所有匹配项
matches = re.findall(r'\d+', 'Age: 25, Height: 180cm')
print(matches)  # Output: ['25', '180']

# 使用 sub() 替换匹配项
new_string = re.sub(r'\d+', 'XX', 'Age: 25, Height: 180cm')
print(new_string)  # Output: 'Age: XX, Height: XXcm'

# 使用 split() 分割字符串
parts = re.split(r',\s*', 'Age: 25, Height: 180cm, Weight: 75kg')
print(parts)  # Output: ['Age: 25', 'Height: 180cm', 'Weight: 75kg']
```

### 注意事项
- 使用正则表达式可以方便地进行字符串的匹配、搜索、替换和分割等操作。
- 正则表达式语法灵活，可以根据需要编写不同的模式来匹配不同的文本。
- 在使用正则表达式时，应注意特殊字符的转义和匹配规则，避免出现意外结果。