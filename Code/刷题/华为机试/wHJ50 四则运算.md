---
createDate: 2024-04-11 11:24
tags: [基础数学, 刷题, 栈, 字符串, python]
---
## 描述

输入一个表达式（用字符串表示），求这个表达式的值。

保证字符串中的有效字符包括 `[‘0’-‘9’],‘+’,‘-’, ‘*’,‘/’ ,‘(’， ‘)’,‘[’, ‘]’,‘{’ ,‘}’`。

且表达式一定合法。

数据范围：表达式计算结果和过程中满足 $∣val∣≤1000$，字符串长度满足 $1≤n≤1000$ 

### 输入描述：

输入一个算术表达式

### 输出描述：

得到计算结果

## 示例
```0
输入：
3+2*{1+2*[-4/(8-6)+7]}
输出：
25
```

### answer1

使用[[eval()]]函数

```python
# 读取输入并替换字符
s = input().replace("{", "(").replace("}", ")").replace("[", "(").replace("]", ")")
# 使用 eval() 函数计算表达式，并转换结果为整数类型
result = int(eval(s))
# 打印计算结果
print(result)
```
### answer2

使用栈

```python

```

## 高手答案

```python
st = input().replace('[','(').replace(']',')').replace('{','(').replace('}',')')
def func(i):
    nums = []
    flag = None
    while i < len(st):
        num = 0
        if st[i] == '(':
            i, num = func(i+1)
        if flag == ')': 
            return i, sum(nums)
        
        while i < len(st) and st[i].isdigit():
            num = num*10 + int(st[i])
            i += 1
        if not nums: 
            nums.append(num) 
        if flag == '+':
            nums.append(num)
        elif flag == '-':
            nums.append(-num)
        elif flag == '*':
            nums.append(nums.pop()*num)
        elif flag == '/':
            nums.append(nums.pop()//num)        
        if i < len(st): flag = st[i] 
        i += 1
    return i, sum(nums)
        
print(func(0)[1])
```