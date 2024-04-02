---
createDate: 2024-04-01 12:31:41
editDate: 2024-04-02 17:30:52
tags:
  - 模块
  - python
---
`random` 是 Python 标准库中的一个模块，用于生成伪随机数。下面是对 `random` 模块的详细解释：

### 导入模块
在使用之前，需要先导入 `random` 模块：
```python
import random
```

### 常用功能
1. **生成随机数**
   - `random.random()`：生成一个介于 0 和 1 之间的随机浮点数。
   - `random.randint(a, b)`：生成一个介于 a 和 b 之间的随机整数（包括 a 和 b）。
   - `random.uniform(a, b)`：生成一个介于 a 和 b 之间的随机浮点数（包括 a 和 b）。
   ```python
   import random
   print("Random float between 0 and 1:", random.random())
   print("Random integer between 1 and 10:", random.randint(1, 10))
   print("Random float between 2.5 and 5.5:", random.uniform(2.5, 5.5))
   ```

2. **随机选择**
   - `random.choice(seq)`：从序列 `seq` 中随机选择一个元素。
   - `random.choices(seq, k=n)`：从序列 `seq` 中随机选择 `n` 个元素组成新的列表。
   ```python
   import random
   colors = ['red', 'green', 'blue']
   print("Random color:", random.choice(colors))
   print("Random sample of 2 colors:", random.choices(colors, k=2))
   ```

3. **洗牌操作**
   - `random.shuffle(lst)`：随机打乱列表 `lst` 的顺序。
   ```python
   import random
   numbers = [1, 2, 3, 4, 5]
   random.shuffle(numbers)
   print("Shuffled numbers:", numbers)
   ```

4. **种子设置**
   - `random.seed(seed=None)`：设置随机数种子，用于生成确定性的随机数序列。如果不设置种子，默认使用系统时间作为种子。
   ```python
   import random
   random.seed(42)  # 设置随机数种子为固定值 42
   print("Random integer with seed 42:", random.randint(1, 100))
   ```

### 注意事项
- `random` 模块提供了生成伪随机数的功能，使用伪随机算法生成随机数序列。
- 在需要产生确定性的随机数序列时，可以使用 `random.seed()` 方法设置随机数种子，同样的种子会产生同样的随机数序列。
- 使用随机数生成前，需要先导入 `random` 模块，并根据需要选择合适的随机数生成函数。