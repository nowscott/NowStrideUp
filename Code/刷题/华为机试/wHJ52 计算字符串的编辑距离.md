---
createDate: 2024-04-11 11:24
tags: [动态规划, 刷题, 字符串, python]
---
## 描述

Levenshtein 距离，又称编辑距离，指的是两个字符串之间，由一个转换成另一个所需的最少编辑操作次数。许可的编辑操作包括**将一个字符替换成另一个字符，插入一个字符，删除一个字符**。编辑距离的算法是首先由俄国科学家 Levenshtein 提出的，故又叫 Levenshtein Distance 。

例如：

字符串A: abcdefg

字符串B: abcdef

通过增加或是删掉字符 ”g” 的方式达到目的。这两种方案都需要一次操作。把这个操作所需要的次数定义为两个字符串的距离。

要求：

给定任意两个字符串，写出一个算法计算它们的编辑距离。

数据范围：给定的字符串长度满足 $1≤len(str)≤1000$ 

### 输入描述：

每组用例一共2行，为输入的两个字符串

### 输出描述：

每组用例输出一行，代表字符串的距离

## 示例
```0
输入：
abcdefg
abcdef
输出：
1
```

## 高手代码
```python
#动态规划经典题目
#nowcoder不能导入numpy模块，只能手工创建二维数组
#重点注意二维数据的创建方法，重点注意其横竖坐标，注意注意
#dp = [[1 for i in range(n+1)] for j in range(m+1)]，横坐标是 n, 竖坐标是m
while True:
    try:
        str1 = input()
        str2 = input()
        m = len(str1)
        n = len(str2)
        
        dp = [[1 for i in range(n+1)] for j in range(m+1)]#重点注意二维数据的创建方法，重点注意其横竖坐标，注意注意
        for i in range(n+1):
            dp[0][i] = i
        for j in range(m+1):
            dp[j][0] = j
            
        for i in range(1,m+1):
            for j in range(1,n+1): 
                if str1[i-1] == str2[j-1]:#如果当前两个字母相同，则跳过，步数不增加
                    dp[i][j]=dp[i-1][j-1]
                else:  #如果两个字母不同，则有三种方式可以达成，删除、插入、替换，选择最小的前状态，步数加1
                    dp[i][j] = min(dp[i-1][j-1],dp[i][j-1],dp[i-1][j])+1
        print(dp[m][n])
    except:
        break
```