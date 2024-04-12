---
createDate: 2024-04-11 11:24
tags: [基础数学, 刷题, 思维, 搜索, python]
---
## 描述

问题描述：数独（Sudoku）是一款大众喜爱的数字逻辑游戏。玩家需要根据9X9盘面上的已知数字，推算出所有剩余空格的数字，并且满足**每一行、每一列、每一个3X3****粗线宫内**的数字均含1-9，并且不重复。

例如：

输入

![[HJ44 数独输入.png|485]]

输出

![[HJ44 数独输出.png|485]]

数据范围：输入一个 9*9 的矩阵

### 输入描述：

包含已知数字的9X9盘面数组\[空缺位以数字0表示]

### 输出描述：

完整的9X9盘面数组

## 示例
```0
输入：
0 9 2 4 8 1 7 6 3
4 1 3 7 6 2 9 8 5
8 6 7 3 5 9 4 1 2
6 2 4 1 9 5 3 7 8
7 5 9 8 4 3 1 2 6
1 3 8 6 2 7 5 9 4
2 7 1 5 3 8 6 4 9
3 8 6 9 1 4 2 5 7
0 4 5 2 7 6 8 3 1
输出：
5 9 2 4 8 1 7 6 3
4 1 3 7 6 2 9 8 5
8 6 7 3 5 9 4 1 2
6 2 4 1 9 5 3 7 8
7 5 9 8 4 3 1 2 6
1 3 8 6 2 7 5 9 4
2 7 1 5 3 8 6 4 9
3 8 6 9 1 4 2 5 7
9 4 5 2 7 6 8 3 1
```
## （大佬答案）
```python
def is_valid(all_numbers, row, col):
    # 检查行和列是否有重复数字
    for i in range(9):
        if all_numbers[row][i] == all_numbers[row][col] and i != col:
            return False
        if all_numbers[i][col] == all_numbers[row][col] and i != row:
            return False
    # 获取当前单元格所属的3x3子网格的左上角单元格坐标
    start_row, start_col = 3 * (row // 3), 3 * (col // 3)
    # 遍历当前单元格所属的3x3子网格
    for i in range(3):
        for j in range(3):
            # 检查当前单元格所属的3x3子网格中是否有重复数字，同时排除当前单元格本身
            if all_numbers[start_row + i][start_col + j] == all_numbers[row][col] and ((start_row + i) != row or (start_col + j) != col):
                return False  # 如果有重复数字，返回False
    return True  # 如果没有重复数字，返回True
def solve_sudoku(all_numbers):
    # 递归地尝试填充数字
    for row in range(9):
        for col in range(9):
            if all_numbers[row][col] == 0:  # 如果当前位置为空
                for num in '123456789':  # 尝试1到9的数字
                    all_numbers[row][col] = int(num)  # 填充数字
                    # 如果填充的数字满足要求且继续填充下一个空格成功
                    if is_valid(all_numbers, row, col) and solve_sudoku(all_numbers):
                        return True
                    all_numbers[row][col] = 0  # 回溯，清空当前位置，尝试下一个数字
                else:
                    return False  # 如果没有数字能够满足要求，返回False
    return True  # 如果所有位置都填充完毕，返回True
# 主循环
while True:
    try:
        sudoku_board = []
        for i in range(9):
            sudoku_board.append([int(x) for x in input().split()])  # 输入数独矩阵
        solve_sudoku(sudoku_board)  # 调用函数填充数独
        for j in range(9):
            print(' '.join([str(x) for x in sudoku_board[j]]))  # 打印填充后的数独矩阵
    except:
        break  # 当捕获到异常时退出循环
```
