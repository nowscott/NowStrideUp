---
createDate: 2024-04-05 00:00:14
tags:
  - 刷题
  - python
  - 字符串
  - 排序
---
描述
按照指定规则对输入的字符串进行处理。

**详细描述：**

第一步：将输入的两个字符串str1和str2进行前后合并。如给定字符串 "dec" 和字符串 "fab" ，合并后生成的字符串为 "decfab"

第二步：对合并后的字符串进行排序，要求为：下标为奇数的字符和下标为偶数的字符分别从小到大排序。这里的下标的意思是字符在字符串中的位置。注意排序后在新串中仍需要保持原来的奇偶性。例如刚刚得到的字符串“decfab”，分别对下标为偶数的字符'd'、'c'、'a'和下标为奇数的字符'e'、'f'、'b'进行排序（生成 'a'、'c'、'd' 和 'b' 、'e' 、'f'），再依次分别放回原串中的偶数位和奇数位，新字符串变为“abcedf”

第三步：对排序后的字符串中的'0'~'9'、'A'~'F'和'a'~'f'字符，需要进行转换操作。
转换规则如下：
对以上需要进行转换的字符所代表的十六进制用二进制表示并倒序，然后再转换成对应的十六进制大写字符（注：字符 a~f 的十六进制对应十进制的10~15，大写同理）。
如字符 '4'，其二进制为 0100 ，则翻转后为 0010 ，也就是 2 。转换后的字符为 '2'。
如字符‘7’，其二进制为 0111 ，则翻转后为 1110 ，对应的十进制是14，转换为十六进制的大写字母为 'E'。
如字符 'C'，代表的十进制是 12 ，其二进制为 1100 ，则翻转后为 0011，也就是3。转换后的字符是 '3'。
根据这个转换规则，由第二步生成的字符串 “abcedf” 转换后会生成字符串 "5D37BF"。

**数据范围：** 输入的字符串长度满足 1≤n≤100 

**输入描述：**
样例输入两个字符串，用空格隔开。

**输出描述：**
输出转化后的结果。

Answer
```python
def trans(c):
    # 将十六进制字符转换为反转后的大写十六进制字符
    binary_num = bin(int(c, 16))[2:].zfill(4)  # 将十六进制数转换为二进制数
    reversed_binary = binary_num[::-1]  # 反转二进制数
    hexadecimal_str = hex(int(reversed_binary, 2))[2:].upper()  # 将反转后的二进制数转换为十六进制字符串
    return hexadecimal_str

def sort_odd_even(s):
    # 对字符串中的奇数位和偶数位字符分别进行排序并按照原顺序组合成新字符串
    odd_chars = []  # 存放奇数位字符
    even_chars = []  # 存放偶数位字符
    for i in range(len(s)):
        if i % 2 == 0:  # 偶数位
            even_chars.append(s[i])
        else:  # 奇数位
            odd_chars.append(s[i])
    # 对奇数位和偶数位字符分别进行排序
    sorted_odd_chars = sorted(odd_chars)
    sorted_even_chars = sorted(even_chars)
    # 将排序后的字符按照原始顺序依次放回到原始字符串的对应位置中
    new_s = ''
    for i in range(len(s)):
        if i % 2 == 0:  # 偶数位
            new_s += sorted_even_chars.pop(0)
        else:  # 奇数位
            new_s += sorted_odd_chars.pop(0)
    return new_s

trans_list = '0123456789ABCDEFabcdef'  # 包含十六进制字符的字符串
input_list = input().split()  # 输入以空格分隔的字符串列表
input_str = ''.join([item for item in input_list])  # 将输入列表中的字符串连接为一个字符串
sorted_str = sort_odd_even(input_str)  # 对输入字符串的奇数位和偶数位字符分别排序并按照原顺序组合成新字符串
res = ''
for i in sorted_str:
    if i in trans_list:  # 如果字符是十六进制字符，则进行转换
        res += trans(i)
    else:  # 否则直接添加到结果字符串中
        res += i
print(res)  # 输出结果字符串
```

