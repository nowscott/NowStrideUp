---
data: 2024-03-31T00:00:00.000Z
tags:
  - python
  - 方法
---
`insert()` 是 Python 列表对象的一个方法，用于在指定位置插入一个新的元素。下面是对 `insert()` 方法的详细解释：

### 语法
```python
list.insert(index, element)
```

- `list` 是调用该方法的列表对象。
- `index` 是要插入新元素的位置，即插入后新元素的索引。
- `element` 是要插入的新元素。

### 原地操作
`insert()` 方法是原地操作的，即直接修改原始列表，在指定位置插入新元素，并且不会返回新的列表。

### 示例
```python
fruits = ['apple', 'banana', 'cherry']
fruits.insert(1, 'orange')  # 在索引 1 处插入 'orange' 元素
print(fruits)  # Output: ['apple', 'orange', 'banana', 'cherry']
```

### 注意事项
- `insert()` 方法可以在列表中的任意位置插入新元素，而不限于末尾或者开头。
- 如果指定的索引超出了列表的范围，`insert()` 方法会将新元素插入到列表的末尾。
- `insert()` 方法直接修改原始列表，因此原始列表会发生变化。
- 如果要在列表末尾添加新元素，可以使用 append() 方法；如果要一次性添加多个元素，可以使用[[extend()]] 方法。
- 要注意索引的合法范围，以避免索引越界的情况。