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
s1 = input()
s2 = input()
def ishort(s1,s2):
    return s1 if len(s1)<=len(s2) else s2
def islong(s1,s2):
    return s1 if len(s1)>len(s2) else s2
ss = ishort(s1,s2)
l = len(ss)
sl = islong(s1,s2)
maxl = 0
res = ''
for i in range(l):
    for j in range(i,l):
        if len(sl.split(ss[i:i+l-j]))==2:
            if maxl<len(ss[i:i+l-j]):
                maxl = len(ss[i:i+l-j])
                res = ss[i:i+l-j]
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