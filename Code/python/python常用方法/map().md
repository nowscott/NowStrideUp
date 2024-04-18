---
createDate: 2024-04-18 12:59
tags:
  - 方法
  - python
---
在Python中，`map()` 函数是用来将指定的函数应用于给定可迭代对象（如列表、元组等）的每个元素，并返回一个迭代器。这个迭代器包含所有元素在指定函数作用下的结果。`map()` 是对传统循环的一种高效、简洁的替代。

### 基本结构
```python
map(function, iterable)
```
- `function`: 一个函数，它接受一个参数并返回一个值。
- `iterable`: 一个可迭代对象。

### 返回值
返回一个迭代器，其内容是将 `function` 应用于 `iterable` 每个元素的结果。

### 使用示例
假设我们有一个数字列表，我们希望获取每个数字的平方：
```python
def square(x):
    return x**2

numbers = [1, 2, 3, 4, 5]
squared = map(square, numbers)
print(list(squared))  # 输出: [1, 4, 9, 16, 25]
```

`map()` 特别适合于需要对数据集合执行转换的情况，使代码更加简洁且易于理解。对于更复杂的逻辑，可以配合匿名函数 `lambda` 使用。