---
createDate: 2024-04-01 12:38:40
editDate: 2024-04-02 17:30:44
tags:
  - 方法
  - python
---
`sorted()` 是 Python 的内置函数之一，用于对可迭代对象进行排序操作。下面是对 `sorted()` 函数的详细解释：

### 语法
```python
sorted(iterable, key=None, reverse=False)
```

- `iterable` 是要排序的可迭代对象，例如列表、元组、集合等。
- `key` 是可选参数，用于指定排序的关键字函数，例如 `key=len` 表示按照元素的长度进行排序。默认为 `None`，表示直接比较元素本身进行排序。
- `reverse` 是可选参数，表示是否反向排序，默认为 `False`，表示升序排序。若设置为 `True`，则表示降序排序。

### 示例
1. 对列表进行排序：
```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
sorted_numbers = sorted(numbers)
print(sorted_numbers)  # Output: [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]
```

2. 按照元素长度进行排序：
```python
words = ['apple', 'banana', 'cherry', 'orange']
sorted_words = sorted(words, key=len)
print(sorted_words)  # Output: ['apple', 'orange', 'banana', 'cherry']
```

3. 按照降序排序：
```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
sorted_numbers_desc = sorted(numbers, reverse=True)
print(sorted_numbers_desc)  # Output: [9, 6, 5, 5, 4, 3, 3, 2, 1, 1]
```

### 原地排序与返回新列表
- `sorted()` 函数返回一个新的列表，不修改原始列表。
- 如果需要对原始列表进行排序并修改原始列表，可以使用列表对象的 `sort()` 方法。

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3]
numbers.sort()
print(numbers)  # Output: [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]
```

### 自定义排序
可以通过指定 `key` 参数来实现自定义排序，例如按照字符串长度进行排序。也可以通过 `lambda` 函数来实现更复杂的自定义排序。

```python
words = ["apple", "banana", "cherry", "orange"]
sorted_words = sorted(words, key=lambda x: (len(x), x))
print(sorted_words)  # Output: ['apple', 'orange', 'banana', 'cherry']
```

### 注意事项
- `sorted()` 函数返回一个新的排序后的列表，不会修改原始列表。
- 可以通过指定 `key` 参数来实现自定义排序规则。
- 默认情况下，`sorted()` 函数按照元素的自然顺序进行排序，可以通过设置 `reverse=True` 实现降序排序。

## 区别
`   sorted()` 函数和列表对象的 [[sort()]] 方法都用于对列表进行排序，但它们有一些重要的区别：

1. **返回值：**
    
    - `sorted()` 函数返回一个新的已排序的列表，原始列表不变。
    - `sort()` 方法是对原列表进行就地排序，不返回新的列表。
2. **是否原地排序：**
    
    - `sorted()` 函数是不可变操作，不会修改原始列表，而是返回一个新的已排序列表。
    - `sort()` 方法是原地排序操作，会直接修改原始列表，不返回新的列表。
3. **适用对象：**
    
    - `sorted()` 函数可以用于任何可迭代对象（例如列表、元组、集合等），并返回一个新的列表。
    - `sort()` 方法只能用于列表对象，因为它是列表对象的方法，不能应用于其他类型的可迭代对象。
4. **参数灵活性：**
    
    - `sorted()` 函数的参数更灵活，可以通过 `key` 参数指定排序的关键字函数，也可以通过 `reverse` 参数指定是否进行降序排序。
    - `sort()` 方法也可以通过参数指定相同的功能，但是是直接作用于列表对象，而不是作为函数参数传递。

比较使用场景：

- 如果需要对一个列表进行排序，但同时又需要保留原始列表，可以使用 `sorted()` 函数。
- 如果希望就地修改原始列表，并且不需要保留原始顺序，可以使用列表对象的 `sort()` 方法。