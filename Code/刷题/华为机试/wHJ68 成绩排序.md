---
createDate: 2024-04-12 13:55
tags: [排序, 刷题, python]
---
## 描述

给定一些同学的信息（名字，成绩）序列，请你将他们的信息按照成绩从高到低或从低到高的排列,相同成绩

都按先录入排列在前的规则处理。

```0
示例：
jack      70  
peter     96  
Tom       70  
smith     67
----------------
从高到低  成绩  
peter     96  
jack      70  
Tom       70  
smith     67
----------------
从低到高
smith     67
jack      70
Tom       70  
peter     96
注：0代表从高到低，1代表从低到高
```

数据范围：人数：$1≤n≤200$ 

进阶：时间复杂度： $O(nlog_2n)$ ，空间复杂度： $O(n)$ 

### 输入描述：

第一行输入要排序的人的个数n，第二行输入一个整数表示排序的方式，之后n行分别输入他们的名字和成绩，以一个空格隔开

### 输出描述：

按照指定方式输出名字和成绩，名字和成绩之间以一个空格隔开

## 示例
```0
输入：
3
0
fang 90
yang 50
ning 70
输出：
fang 90
ning 70
yang 50
-----------
输入：
3
1
fang 90
yang 50
ning 70
输出：
yang 50
ning 70
fang 90
```
## 我的代码
```python
n = int(input())
k = input()
dict = {}
while 1:
    try:
        str = input()
        grade = int(input().split()[1])
        dict[str] = grade
    except:
        break
if k:
    sorted_dict = sorted(dict.values(),reverse=True)
else:
    sorted_dict = sorted(dict.values())
for key in sorted_dict:
    print(key)
```
## 高手代码
```python
while 1:
    try:
        n = int(input())
        if input() == "0":
            flag = True
        else:
            flag = False
        ls = []
        for i in range(n):
            name,score = input().split()
            ls.append((name,int(score)))
            ls.sort(key=lambda x:x[1], reverse = flag )
        for x in ls:
            print(*x)
    except:
        break
```