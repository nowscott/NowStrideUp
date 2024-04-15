---
createDate: 2024-04-12 12:48
tags: [刷题, 字符串, python]
---
## 描述

查找两个字符串a,b中的最长公共子串。若有多个，输出在字符串中最先出现的那个。

注：子串的定义：将一个字符串删去前缀和后缀（也可以不删）形成的字符串。请和“子序列”的概念分开！

数据范围：字符串长度$1≤length≤300$ 

进阶：时间复杂度：$O(n3)$ ，空间复杂度：$O(n)$   

### 输入描述：

输入两个字符串

### 输出描述：

返回重复出现的字符

## 示例
```0
输入：
abcdefghijklmnop
abcsafjklmnopqrstuvw
输出：
jklmnop
```
## 我的代码
```python
# 从输入中读取两个字符串
s1 = input()
s2 = input()
# 定义一个函数，返回两个字符串中长度较短的那个字符串
def shorter_string(str1, str2):
    return str1 if len(str1) <= len(str2) else str2
# 定义一个函数，返回两个字符串中长度较长的那个字符串
def longer_string(str1, str2):
    return str1 if len(str1) > len(str2) else str2
# 获取较短的字符串和较长的字符串
short_str = shorter_string(s1, s2)
long_str = longer_string(s1, s2)
# 初始化最大子串长度和结果字符串
max_len = 0
res = ''
# 在较短的字符串上进行双重循环，寻找所有可能的子串
for i in range(len(short_str)):
    for j in range(i, len(short_str)):
        # 如果较长的字符串中包含当前子串
        if long_str.find(short_str[i:j+1]) != -1:
            # 更新最大子串长度和结果字符串
            if max_len < j - i + 1:
                max_len = j - i + 1
                res = short_str[i:j+1]
# 输出最长公共子串
print(res)
```
## 高手代码
```python
while True:
    try:
        a, b = input(), input() # a保存短，b保存长
        if len(a) > len(b):
            a, b = b, a
        res = ''
        for i in range(0, len(a)):
            for j in range(i+1, len(a)):
                if a[i:j+1] in b and j+1-i > len(res):
                    res = a[i:j+1]
        print(res)
    except:
        break
```