---
createDate: 2024-04-30 22:33
tags: [模块, python]
---
## 引言

最近我开始学习如何使用 MoviePy 这个库，并打算写一篇介绍性的文章。

本文的内容主要来源于：[MoviePy官方文档](https://moviepy.readthedocs.io/en/latest/)

## 简介

MoviePy 是一个用于视频编辑的 Python 模块，可用于视频剪切、合并、插入标题、视频合成、视频处理或创建高级效果。它能够读取和写入常见的视频格式，包括 GIF。

以下是在 Jupyter Notebook 中使用 MoviePy 的实际效果：

![[演示效果.png]]

## 安装

使用 pip 安装 MoviePy 非常简单。如果您已经安装了 `pip`，只需在终端中输入以下命令：

``` bash
$ (sudo) pip install moviepy
```

MoviePy 依赖于 Python 模块 NumPy、Imageio、Decorator 和 Proglog。这些模块将在安装 MoviePy 时自动安装。MoviePy 应该适用于 Windows/macOS/Linux，并且要求使用 Python 3.6 或更高版本。

MoviePy 还依赖于 FFMPEG 软件来进行视频读写。您无需担心这一点，因为在首次使用 MoviePy 时，ImageIO 应该会自动下载/安装 FFMPEG（这个过程只需要几秒钟）。

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

#### 示例代码

在典型的 MoviePy 脚本中，您加载视频或音频文件，修改它们，将它们放在一起，然后将最终结果写入新的视频文件。举个例子，让我们加载我上次假期的视频，降低音量，在前十秒的视频中央添加标题，并将结果写入文件中：

```python
# 导入编辑视频片段所需的所有内容
from moviepy import *

# 加载 myHolidays.mp4，并选择子剪辑 00:00:50 - 00:00:60
clip = VideoFileClip("myHolidays.mp4").subclip(50,60)

# 减小音频音量（音量 x 0.8）
clip = clip.multiply_volume(0.8)

# 生成一个文本片段。您可以自定义字体、颜色等。
txt_clip = TextClip("我的2013假期", fontsize=70, color='white')

# 指定文本出现在屏幕中央，并持续 10 秒
txt_clip = txt_clip.with_position('center').with_duration(10)

# 将文本片段叠加在第一个视频片段上
video = CompositeVideoClip([clip, txt_clip])

# 将结果写入文件（有很多选项可用！）
video.write_videofile("myHolidays_edited.webm")
```

#### MoviePy 的工作原理

MoviePy 使用软件 ffmpeg 来读取和导出视频和音频文件。它还（可选）使用 ImageMagick 生成文本并写入 GIF 文件。Python 的快速数值库 Numpy 确保了不同媒体的处理。高级效果和增强功能使用 Python 的众多图像处理库（PIL、Scikit-image、scipy 等）中的一些。

![[工作原理.jpg]]

#### 基本概念

MoviePy 的中心对象是剪辑，可以是 AudioClip 或 VideoClip。它们可以被修改（剪切、减速、加暗……），也可以与其他剪辑混合以形成新的剪辑。您可以预览这些剪辑（使用 PyGame 或 IPython Notebook），并将它们渲染到文件中（如 MP4、GIF、MP3 等格式）。例如，VideoClip 可以由视频文件、图像、文本或自定义动画创建。它们可以具有音轨（即 AudioClip）和遮罩（一种特殊的 VideoClip，指示混合其他剪辑时应该隐藏的剪辑部分）。有关更多详细信息，请参阅创建和导出视频剪辑以及混合剪辑。

剪辑可以使用 MoviePy 的众多效果之一进行修改（例如 clip.resize(width="360")、clip.subclip(t1,t2) 或 clip.fx(vfx.black_white)），也可以使用用户实现的效果。MoviePy 实现了许多函数（例如 clip.fl、clip.fx 等），这使得编写自己的效果变得非常简单。有关更多信息，请参阅剪辑变换和效果。

此外，您还可以在 moviepy.video.tools 中找到一些高级功能，用于在视频中跟踪对象、绘制简单形状和颜色渐变（对于遮罩非常有用）、生成字幕和片尾字幕等。有关这些功能的描述，请参阅高级工具。

最后，虽然 MoviePy 没有图形用户界面，但有许多预览剪辑的方法，使您能够在以高质量渲染视频之前微调脚本并确保一切完美。请参阅如何高效使用 MoviePy。