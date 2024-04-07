---
createDate: 2024-04-02 16:10:31
tags:
  - 刷题
  - python
  - 基础数学
---
## 描述
写出一个程序，接受一个正浮点数值，输出该数值的近似整数值。如果小数点后数值大于等于 0.5 ,向上取整；小于 0.5 ，则向下取整。
**数据范围：** 保证输入的数字在 32 位浮点数范围内
### **输入描述：**
输入一个正浮点数值
### **输出描述：**
输出该数值的近似整数值
### **Answer**
```python
# 从用户输入获取一个浮点数
number = float(input())
# 将浮点数转换为整数部分
integer_part = int(number)
# 计算浮点数与整数部分的差值
decimal_part = number - float(integer_part)
# 根据差值判断是否要对整数部分进行四舍五入
if decimal_part >= 0.5:
    rounded_integer = integer_part + 1
else:
    rounded_integer = integer_part
# 输出四舍五入后的整数
print(rounded_integer)
```