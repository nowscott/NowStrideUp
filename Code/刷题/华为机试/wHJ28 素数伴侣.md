---
createDate: 2024-04-11 11:24
tags: [查找, 排序, 刷题, python]
---
## 描述

题目描述

若两个正整数的和为素数，则这两个正整数称之为“素数伴侣”，如2和5、6和13，它们能应用于通信加密。现在密码学会请你设计一个程序，从已有的 N （ N 为偶数）个正整数中挑选出若干对组成“素数伴侣”，挑选方案多种多样，例如有4个正整数：2，5，6，13，如果将5和6分为一组中只能得到一组“素数伴侣”，而将2和5、6和13编组将得到两组“素数伴侣”，能组成“素数伴侣”最多的方案称为“最佳方案”，当然密码学会希望你寻找出“最佳方案”。

### 输入:

有一个正偶数 n ，表示待挑选的自然数的个数。后面给出 n 个具体的数字。

### 输出:

输出一个整数 K ，表示你求得的“最佳方案”组成“素数伴侣”的对数。

**数据范围：** 1≤n≤100 ，输入的数据大小满足 2≤val≤30000

### 输入描述：

输入说明

1 输入一个正偶数 n

2 输入 n 个整数

### 输出描述：

求得的“最佳方案”组成“素数伴侣”的对数。

## 示例
```0
输入：
4
2 5 6 13
输出：
2
---------------
输入：
2
3 6
输出：
0
```

## answer
```python
def is_prime(num):
    """判断一个数是否为素数"""
    if num <= 1:
        return False
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True
def find_pairs(nums, used, idx):
    """
    回溯法寻找最多的素数伴侣对数
    Args:
    nums: 待挑选的数字列表
    used: 记录数字是否被使用过的布尔列表
    idx: 当前回溯的索引位置
    Returns:
    最多的素数伴侣对数
    """
    if idx >= len(nums):
        return 0
    count = 0
    for i in range(idx, len(nums)):
        if not used[i]:
            used[i] = True
            for j in range(i + 1, len(nums)):
                if not used[j] and is_prime(nums[i] + nums[j]):
                    used[j] = True
                    # 递归搜索下一对数字对
                    count = max(count, 1 + find_pairs(nums, used, i + 1))
                    used[j] = False  # 回溯，恢复状态
            used[i] = False  # 回溯，恢复状态
    return count
n = int(input())
nums = list(map(int, input().split()))
used = [False] * n
max_pairs = find_pairs(nums, used, 0)
print(max_pairs)
```

## 高手代码
```python
import math
def check(num): #判断是否是素数
    for i in range(2,int(math.sqrt(num)) + 2): #除去1和本身的数没有其他的因子称为素数，但其实检验到int(math.sqrt(num)) + 1即可（数学证明略），不然会超时
        if(num % i == 0):
            return False
    return True

def find(odd, visited, choose, evens): #配对的过程
    for j,even in enumerate(evens):  
        if check(odd+even) and not visited[j]: #如果即能配对，这两个数之前没有配过对（即使两个不能配对visit值为0，但是也不能过是否是素数这一关，所以visit就可以
        看为两个能配对的素数是否能配对）
            visited[j] = True #代表这两个数能配对
            if choose[j]==0 or find(choose[j],visited,choose,evens): #如果当前奇数没有和任何一个偶数现在已经配对，那么认为找到一组可以连接的，如果当前的奇数
            已经配对，那么就让那个与之配对的偶数断开连接，让他再次寻找能够配对的奇数
                choose[j] = odd #当前奇数已经和当前的偶数配对
                return True 
    return False 如果当前不能配对则返回False

while True:
    try:
        num = int(input())
        a = input()
        a = a.split()
        b = []
        count = 0
        for i in range(len(a)):
            a[i] = int(a[i])
        evens = []
        odds = []
        for i in a: #将输入的数分为奇数和偶数
            if(i % 2 == 0):
                odds.append(i)
            else:
                evens.append(i)
        choose = [0]*len(evens) #choose用来存放当前和这个奇数配对的那个偶数
        for odd in odds:
            visited = [False]*len(evens) #visit用来存放当前奇数和偶数是否已经配过对
            if find(odd,visited,choose,evens):
                count += 1
        print(count)
    except:
        break
```