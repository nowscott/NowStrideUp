---
createDate: 2024-03-31 20:24:43
editDate: 2024-04-02 17:17:49
tags:
  - python
  - 方法
---
`append()` 是 Python 列表对象的一个方法，用于在列表末尾添加一个新的元素。下面是对 `append()` 方法的详细解释：

### 语法
```python
list.append(element)
```

- `list` 是调用该方法的列表对象。
- `element` 是要添加到列表末尾的新元素。

### 原地操作
`append()` 方法是原地操作的，即直接修改原始列表，在列表末尾添加新元素，并且不会返回新的列表。

### 示例
```python
fruits = ['apple', 'banana', 'cherry']
fruits.append('orange')  # 在列表末尾添加 'orange' 元素
print(fruits)  # Output: ['apple', 'banana', 'cherry', 'orange']
```

### 注意事项
- `append()` 方法只能一次添加一个元素到列表末尾，如果想要添加多个元素，可以使用 [[extend()]] 方法或者使用列表拼接操作。
- `append()` 方法直接修改原始列表，因此原始列表会发生变化。
- 如果要在列表的指定位置插入元素，可以使用 [[insert()]] 方法。
- 如果要添加的元素是一个可迭代对象（例如另一个列表），可以使用 [[extend()]]方法将其元素逐个添加到列表末尾。