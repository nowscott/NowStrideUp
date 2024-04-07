---
createDate: 2024-04-02 16:08:05
tags:
  - 刷题
  - python
  - 字符串
---
## **描述**
写出一个程序，接受一个十六进制的数，输出该数值的十进制表示。
**数据范围：** 保证结果在 $1\le n \le 2^{31}-1$
### **输入描述：**
输入一个十六进制的数值字符串。
### **输出描述：**
输出该数值的十进制字符串。不同组的测试用例用\n隔开。
### **示例**
```python
输入：0xAA
输出：170
```
 ### **answer**
 ```python
 print(int(input(),16))
 ```
### **解释**
本题使用到 [[int()]] 的进制转换的功能
### **answer2**
```python
# 从用户输入获取十六进制字符串
hex_str = input()
# 定义十六进制数字集合
hex_digits = "0123456789ABCDEF"
# 初始化结果变量
res = 0
# 检查输入的字符串是否以"0x"开头
if hex_str[:2] == "0x":
    # 提取有效的十六进制部分
    hex_num = hex_str[2:]
    # 初始化权重
    power = len(hex_num) - 1
    # 遍历每个十六进制位并计算对应的十进制值
    for digit in hex_num:
        # 计算当前位的十进制值并累加到结果中
        res += hex_digits.index(digit.upper()) * (16 ** power)
        # 更新权重
        power -= 1
# 输出最终的十进制结果
print(res)
```
