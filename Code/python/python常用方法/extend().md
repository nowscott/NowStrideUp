---
createDate: 2024-03-31 20:25:49
tags:
  - python
  - 方法
---
`extend()` 是 Python 列表对象的一个方法，用于在列表末尾一次性添加另一个可迭代对象（例如另一个列表）中的所有元素。下面是对 `extend()` 方法的详细解释：

### 语法
```python
list.extend(iterable)
```

- `list` 是调用该方法的列表对象。
- `iterable` 是可迭代对象，例如列表、元组、集合等。

### 原地操作
`extend()` 方法是原地操作的，即直接修改原始列表，在列表末尾添加另一个可迭代对象中的所有元素，并且不会返回新的列表。

### 示例
```python
fruits = ['apple', 'banana', 'cherry']
more_fruits = ['orange', 'grape', 'watermelon']
fruits.extend(more_fruits)  # 在列表末尾添加 more_fruits 中的所有元素
print(fruits)  # Output: ['apple', 'banana', 'cherry', 'orange', 'grape', 'watermelon']
```

### 注意事项
- `extend()` 方法可以一次性添加多个元素到列表末尾，而不像 [[append()]] 方法只能添加一个元素。
- 要注意传递给 `extend()` 方法的参数必须是可迭代对象，例如列表、元组、集合等，否则会引发 TypeError。
- `extend()` 方法直接修改原始列表，因此原始列表会发生变化。
- 如果只想添加一个元素到列表末尾，可以使用 [[append()]] 方法。
- 如果要在列表中间插入另一个列表，可以使用切片和列表拼接操作。