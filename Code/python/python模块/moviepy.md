---
createDate: 2024-04-30 22:33
tags: [模块, python]
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

## MoviePy 入门

以下部分展示了开始使用 MoviePy 进行编辑所需的一切

### 快速演示

#### 你是否需要 MoviePy？

以下是您可能需要使用 Python 编辑视频的几个原因：

- 您有很多视频需要以复杂的方式处理或合成。
- 您想要在 Web 服务器（Django、Flask 等）上自动创建视频或 GIF。
- 您想要自动执行繁琐的任务，例如标题插入、跟踪对象、剪辑场景、制作片尾字幕、字幕等。
- 您想要编写自己的视频效果来完成现有视频编辑器无法完成的任务。
- 您想要从另一个 python 库（Matplotlib、Mayavi、Gizeh、scikit-images...）生成的图像创建动画。

以下是 MoviePy 不是最佳解决方案的一些用途：

- 您只需要进行逐帧视频分析（使用面部检测或其他奇特的东西）。这可以通过 MoviePy 与其他库结合来完成，但实际上，只需使用 imageio、OpenCV 或 SimpleCV，这些是专门从事这些任务的库。
- 您只想转换视频文件，或将一系列图像文件转换为电影。在这种情况下，最好直接调用 ffmpeg （或 avconv 或 mencoder ...），它会比通过 MoviePy 更快、更节省内存。
#### 优点和局限性

MoviePy 的开发考虑了以下目标：

- 简单直观。基本操作可以在一行中完成。代码简单易学，对于新手来说也很容易理解。
- 灵活的。您可以完全控制视频和音频的帧，并且创建自己的效果就像 Py 一样简单。
- 便携的。该代码使用非常常见的软件（Numpy 和 FFMPEG），并且可以在（几乎）任何具有（几乎）任何版本的 Python 的机器上运行。

对于限制：MoviePy（还）无法流式传输视频（从网络摄像头读取，或在远程机器上实时渲染视频），并且并不是真正为涉及电影的许多连续帧的视频处理而设计的（例如视频稳定，您'为此需要另一个软件）。如果您同时使用许多视频、音频和图像源（>100），您也可能会遇到内存问题，但这将在未来的版本中得到修复。
