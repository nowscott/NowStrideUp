---
createDate: 2024-04-09 21:19:22
tags:
  - 刷题
  - python
---
## 描述

输入两个用字符串 str 表示的整数，求它们所表示的数之和。

数据范围： $1≤len(str)≤10000$ 

### 输入描述：

输入两个字符串。保证字符串只含有'0'~'9'字符

### 输出描述：

输出求和后的结果

## 高手代码
```python
a = input()
b = input()
if len(b) <= len(a):
	b = b.rjust(len(a),"0")
else:
	a = a.rjust(len(b),"0")
#先对齐补位

c = list(map(int,a[::-1]))
d = list(map(int,b[::-1]))
逆序按位相加

e = []
tag = 0 # 进位标志
for i in range(len(c)):
	if c[i] + d[i] + tag > 9:
		e.append(c[i] + d[i]  + tag - 10)
		tag = 1
	else:
		e.append(c[i] + d[i]  + tag)
		tag = 0
if tag: #溢出判断，最后溢出了则补1
	e.append(1)
print("".join([str(x) for x in e[::-1]]))
```
