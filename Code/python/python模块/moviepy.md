---
createDate: 2024-04-30 22:33
tags:
  - 模块
  - python
---
## 前言
最近要学习一下moviepy这个库的使用，顺便写一篇介绍文字来。
本文内容来源于：[https://moviepy.readthedocs.io/en/latest/](https://moviepy.readthedocs.io/en/latest/)
## 简介
Movie是一个视频编辑的python模块，可用于视频剪切、合并、标题插入、视频合成、视频处理或创建高级效果，它可以读取和写入常见的视频格式，包括GIF。

如下是它在Jupyter-notebook中的实际效果

![[演示效果.png]]
## 安装
使用 pip 的方法：如果您安装了 `pip` ，只需在终端中输入此内容
```bash
$ (sudo) pip install moviepy
```
MoviePy 依赖于 Python 模块 NumPy、Imageio、Decorator 和 Proglog，这些模块将在 MoviePy 安装过程中自动安装。它应该适用于 Windows/macOS/Linux，使用 Python 3.6+。

MoviePy依赖于FFMPEG软件来进行视频读写。您无需担心这一点，因为在您首次使用 MoviePy 时，ImageIO 应该会自动下载/安装 FFMPEG（需要几秒钟）

