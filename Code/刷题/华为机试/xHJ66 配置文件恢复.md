---
createDate: 2024-04-12 12:55
tags: [刷题, 字符串, python]
---
## 描述

![[HJ66 描述图片.png|309]]

为了简化输入，方便用户，以“最短唯一匹配原则”匹配（注：需从首字母开始进行匹配）：

1、若只输入一字串，则只匹配一个关键字的命令行。例如输入：r，根据该规则，匹配命令reset，执行结果为：reset what；输入：res，根据该规则，匹配命令reset，执行结果为：reset what；

2、若只输入一字串，但匹配命令有两个关键字，则匹配失败。例如输入：reb，可以找到命令reboot backpalne，但是该命令有两个关键词，所有匹配失败，执行结果为：unknown command

3、若输入两字串，则先匹配第一关键字，如果有匹配，继续匹配第二关键字，如果仍不唯一，匹配失败。

- 例如输入：r b，找到匹配命令reset board 和 reboot backplane，执行结果为：unknown command。
- 例如输入：b a，无法确定是命令**board add**还是**backplane abort**，匹配失败。

4、若输入两字串，则先匹配第一关键字，如果有匹配，继续匹配第二关键字，如果唯一，匹配成功。例如输入：bo a，确定是命令**board add**，匹配成功。

5、若输入两字串，第一关键字匹配成功，则匹配第二关键字，若无匹配，失败。例如输入：b addr，无法匹配到相应的命令，所以执行结果为：unknow command。

6、若匹配失败，打印“unknown command”

- 注意：有多组输入。
- 数据范围：数据组数：$1≤t≤800$ ，字符串长度 $1≤s≤20$ 
- 进阶：时间复杂度：$O(n)$ ，空间复杂度：$O(n)$ 

### 输入描述：

多行字符串，每行字符串一条命令

### 输出描述：

执行结果，每条命令输出一行

## 示例1
```0
输入：
reset
reset board
board add
board delet
reboot backplane
backplane abort
输出：
reset what
board fault
where to add
no board at all
impossible
install first
```