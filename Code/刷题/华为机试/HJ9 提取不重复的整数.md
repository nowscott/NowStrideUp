---
createDate: 2024-04-02 16:13:09
tags:
  - 刷题
  - python
  - 数组
  - 哈希
---
## **描述**
输入一个 int 型整数，按照从右向左的阅读顺序，返回一个不含重复数字的新的整数。
保证输入的整数最后一位不是 0 。

**数据范围：**  $1\le n \le 10^8$

### **输入描述：**
输入一个int型整数

### **输出描述：**
按照从右向左的阅读顺序，返回一个不含重复数字的新的整数

### **Answer**
```python
# 从用户输入获取一个整数
n = int(input())
# 计算输入整数的位数
l = len(str(n))
# 初始化一个空字符串，用于存储输入整数中不重复的数字
res = ''
# 从个位开始逐位提取数字，并将不重复的数字添加到结果字符串中
for i in range(1, l+1):
    # 获取当前位上的数字
    k = n % 10
    # 如果当前位上的数字在结果字符串中不存在，则添加到结果字符串中
    if str(k) not in res:
        res += str(k)
    # 将输入整数除以10向右移动一位
    n = int(n / 10)
# 输出结果字符串，即输入整数中不重复的数字
print(res)
```
