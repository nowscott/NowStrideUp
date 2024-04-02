---
createDate: 2024-04-02 16:11:04
editDate: 2024-04-02 17:30:31
tags:
  - 刷题
  - python
  - 哈希
---
**描述**
数据表记录包含表索引index和数值value（int范围的正整数），请对表索引相同的记录进行合并，即将相同索引的数值进行求和运算，输出按照index值升序进行输出。

**提示:**
0 <= index <= 11111111
1 <= value <= 100000

**输入描述：**
先输入键值对的个数n（1 <= n <= 500）
接下来n行每行输入成对的index和value值，以空格隔开

**输出描述：**
输出合并后的键值对（多行）

**示例**
```
输入：4
	 0 1
	 0 2
	 1 2
	 3 4
输出：0 3
	 1 2
	 3 4
```

**Answer**
```python
# 从用户输入获取一个整数，表示要输入的键值对数量
n = int(input())
# 创建一个空字典，用于存储键值对
res_dict = {}
# 循环读取键值对并存储到字典中
for i in range(n):
    input_str = input()  # 获取用户输入的键值对字符串
    input_list = input_str.split()  # 将输入的字符串按空格分割成列表
    key = int(input_list[0])  # 获取键（第一个元素）
    value = int(input_list[1])  # 获取值（第二个元素）
    
    # 检查键是否已存在于字典中，如果存在则累加值，否则添加新键值对
    if key in res_dict:
        res_dict[key] += value
    else:
        res_dict[key] = value
# 对字典的键进行排序
sorted_keys = sorted(res_dict.keys())
# 遍历排序后的键列表，并按顺序输出键值对
for key in sorted_keys:
    # 使用格式化字符串输出键值对
    print("{0} {1}".format(key, res_dict[key]))

```
本题使用字典来存放键值对，使用 [[sorted()]] 方法对字典中的内容进行排序