---
createDate: 2024-04-11 13:12
tags: [排序, 数组, 刷题, python]
---
## 描述

输入n个整数，找出其中最小的k个整数并按升序输出

本题有多组输入样例

数据范围：$1≤n≤1000$  ，输入的整数满足$1≤val≤10000$ 

### 输入描述：

第一行输入两个整数n和k

第二行输入一个整数数组

### 输出描述：

从小到大输出最小的k个整数，用空格分开。

## Answer
```python
n,k = map(int,input().split())
# 读取输入并将其分割成列表，然后使用列表解析将列表中的每个字符串转换为整数
num_list = [int(num) for num in input().split()]
# 对数字列表进行排序
num_list.sort()
# 将前 k 个元素转换为字符串，并用空格连接起来
res = ' '.join(map(str, num_list[:k]))
print(res)
```