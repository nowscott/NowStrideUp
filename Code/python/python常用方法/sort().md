---
createDate: 2024-03-31 20:20:44
tags:
  - 方法
  - python
---
`sort()` 是 Python 中列表对象的一个方法，用于对列表中的元素进行排序。下面是对 `sort()` 方法的详细解释：

### 语法
```python
list.sort(key=None, reverse=False)
```

- `list` 是调用该方法的列表对象。
- `key` 是可选参数，表示用于排序的比较函数。默认为 `None`，表示按照元素的原始顺序进行排序。
- `reverse` 是可选参数，表示是否反向排序，默认为 `False`，表示升序排序。若设置为 `True`，则表示降序排序。

### 原地排序
`sort()` 方法是原地排序的，即直接修改原始列表，而不返回一个新的排序后的列表。

### 示例
```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
numbers.sort()  # 默认按升序排序
print(numbers)  # Output: [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]

numbers.sort(reverse=True)  # 按降序排序
print(numbers)  # Output: [9, 6, 5, 5, 4, 3, 3, 2, 1, 1]
```

### 自定义排序
可以通过指定 `key` 参数来实现自定义排序，例如按照字符串长度进行排序：
```python
words = ["apple", "banana", "cherry", "orange"]
words.sort(key=len)
print(words)  # Output: ['apple', 'orange', 'banana', 'cherry']
```

### 注意事项
- `sort()` 方法会直接修改原始列表，因此原始列表的顺序会改变。
- 如果需要对列表进行排序但不想修改原始列表，可以使用 [[sorted()]] 函数来生成一个新的排序后的列表。
- 如果列表中的元素类型不可比较（例如包含了不同类型的元素），则会抛出 `TypeError` 异常。