---
createDate: 2024-04-11 11:24
tags: [刷题, 字符串, python]
---
## **描述：**

计算字符串最后一个单词的长度，单词以空格隔开，字符串长度小于5000。（注：字符串末尾不以空格为结尾）

### **输入描述：**

输入一行，代表要计算的字符串，非空，长度小于5000。

### **输出描述：**

输出一个整数，表示输入字符串最后一个单词的长度。

### **示例：**
```python
输入：hello nowcoder
输出：8
说明：最后一个单词为nowcoder，长度为8
```

### **answer：**
```python
print(len(input().split()[-1]))
```

**解释：**
接收用户输入并通过 [[split()]] 方法将其分割成单词列表，[-1] 表示取列表中最后一个单词，然后使用 len() 函数获取最后一个单词的长度，并将结果打印出来。