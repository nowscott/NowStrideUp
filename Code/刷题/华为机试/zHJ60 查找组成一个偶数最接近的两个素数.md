---
createDate: 2024-04-12 11:47
tags: [查找, 基础数学, 穷举, 刷题, python]
---
## 描述

任意一个偶数（大于2）都可以由2个素数组成，组成偶数的2个素数有很多种情况，本题目要求输出组成指定偶数的两个素数差值最小的素数对。

数据范围：输入的数据满足$4≤n≤1000$

### 输入描述：

输入一个大于2的偶数

### 输出描述：

从小到大输出两个素数

## 示例
```0
输入：
20
输出：
7
13
------------
输入：
4
输出：
2
2
```
## 我的代码
```python
def isprime(n):
    if n == 1:
        return 1
    for i in range(2,n):
        if n%i==0:
            return 0
    return 1
n = int(input(""))
wid = n//2
res = 1
for i in range(n//2+1):
    if isprime(i) and isprime(n-i):
        wid = n-2*i
        res = i
print(res)
print(n-res)
```
## 高手代码
```python
while True:
    try:
        n = int(input())
        prime = []
        for i in range(int(n/2), 1,-1):
            for x in range(2,i):
                if i%x == 0 or (n-i)%x == 0:
                    break
            else:
                prime.append(i)
        print(prime[0])
        print(n-prime[0])
    except:
        break
```
