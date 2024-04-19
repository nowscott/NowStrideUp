import os
import re
import urllib.parse

def natural_sort_key(s):
    """返回按自然顺序排序时用于排序的键"""
    return [int(text) if text.isdigit() else text.lower() for text in re.split(r'(\d+)', s)]

def generate_directory_tree(directory, depth=0, ignored_folders=set(), ignored_files=set(), base_path="."):
    tree = ""
    files = os.listdir(directory)
    directories = [f for f in files if os.path.isdir(os.path.join(directory, f))]
    files = [f for f in files if os.path.isfile(os.path.join(directory, f)) and f not in ignored_files]
    directories.sort(reverse=True)  # 倒序排序文件夹
    files.sort(key=natural_sort_key, reverse=True)  # 倒序排序文件
    for d in directories:
        if d not in ignored_folders:
            tree += "  " * depth + "- {}\n".format(d)
            tree += generate_directory_tree(os.path.join(directory, d), depth + 1, ignored_folders, ignored_files, base_path)      
    for f in files:
        relative_path = os.path.relpath(os.path.join(directory, f), base_path)
        relative_path = urllib.parse.quote(relative_path)  # 将路径中的空格转换为%20
        relative_path = relative_path.replace('%5C', '/')  # 将路径中的 %5C 替换为正斜杠
        tree += "  " * depth + "- [{}]({})\n".format(f, relative_path)
    return tree

# 获取当前文件夹下的所有文件
current_directory = os.getcwd()

# 指定要忽略的文件夹和文件
ignored_folders = {'.github', 'Temp', '.git','.obsidian','asset','.trash'}  
ignored_files = {'toc.py', '.DS_Store', 'README.md', '.gitignore'}

# 读取README.md文件内容
try:
    with open('README.md', 'r',encoding='utf-8') as readme_file:
        readme_content = readme_file.read()
    print("成功打开 README.md 文件")
except FileNotFoundError:
    print("找不到 README.md 文件")
    raise

# 找到目录列表的开始和结束位置
start_index = readme_content.find("### 目录")
end_index = readme_content.find("### 结束", start_index + 1)

# 生成目录树
directory_tree = generate_directory_tree(current_directory, ignored_folders=ignored_folders, ignored_files=ignored_files, base_path=current_directory)

# 更新README.md文件内容
updated_readme_content = readme_content[:start_index + len("### 目录") + 1] + "\n" + directory_tree + readme_content[end_index:]
# 将更新后的内容写回README.md文件
try:
    with open('README.md', 'w',encoding='utf-8') as readme_file:
        readme_file.write(updated_readme_content)
except Exception as e:
    print("写入更新到 README.md 文件时出错:", e)
    raise