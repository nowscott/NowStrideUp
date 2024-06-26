---
createDate: 2024-04-11 11:24
tags: [链表, 刷题, 双指针, python]
---
## 描述

输入一个单向链表，输出该链表中倒数第k个结点，链表的倒数第1个结点为链表的尾指针。

链表结点定义如下：

```python
struct ListNode
{
    int m_nKey;
    ListNode* m_pNext;
};
```

正常返回倒数第k个结点指针，异常返回空指针.

**要求：**

**(1)正序构建链表;**

**(2)构建后要忘记链表长度。**

数据范围：链表长度满足$1≤n≤1000$，$k≤n$，链表中数据满足$0≤val≤10000$ 

本题有多组样例输入。

### 输入描述：

输入说明

1 输入链表结点个数

2 输入链表的值

3 输入k的值

### 输出描述：

输出一个整数

### answer1

直接当做数组来做

```python
while True:
    try:
        # 读取输入：整数 l，字符串 s，整数 k
        l = int(input())  # 第一个输入为整数 l
        s = input().split()  # 第二个输入为字符串 s，使用 split() 方法将其分割为列表
        k = int(input())  # 第三个输入为整数 k
        # 打印结果：如果 k 不为零，打印 s[l - k]，否则打印 0
        print(s[l - k] if k else 0)
    except:
        # 捕获异常并跳出循环
        break
```
### answer2

链表做法

```python

```

## 高手链表
```python
class Node(object):
    def __init__(self, val=0):
        self.val = val
        self.next = None


while True:
    try:
        l, s, k, head = int(input()), list(map(int, input().split())), int(input()), Node()
        while k:
            head.next = Node(s.pop())
            head = head.next
            k -= 1
        print(head.val)
    except:
        break
```