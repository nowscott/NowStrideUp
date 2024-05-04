---
createDate: 2024-04-30 22:33
tags: [模块, python]
---
# 引言

最近我开始学习如何使用 MoviePy 这个库，并打算写一篇介绍性的文章。

本文的内容主要来源于：[MoviePy官方文档](https://moviepy.readthedocs.io/en/latest/)

# 简介

MoviePy 是一个用于视频编辑的 Python 模块，可用于视频剪切、合并、插入标题、视频合成、视频处理或创建高级效果。它能够读取和写入常见的视频格式，包括 GIF。

以下是在 Jupyter Notebook 中使用 MoviePy 的实际效果：

![[演示效果.png]]

# 安装

使用 pip 安装 MoviePy 非常简单。如果您已经安装了 `pip`，只需在终端中输入以下命令：

``` bash
$ (sudo) pip install moviepy
```

MoviePy 依赖于 Python 模块 NumPy、Imageio、Decorator 和 Proglog。这些模块将在安装 MoviePy 时自动安装。MoviePy 应该适用于 Windows/macOS/Linux，并且要求使用 Python 3.6 或更高版本。

MoviePy 还依赖于 FFMPEG 软件来进行视频读写。您无需担心这一点，因为在首次使用 MoviePy 时，ImageIO 应该会自动下载/安装 FFMPEG（这个过程只需要几秒钟）。

# MoviePy 入门

以下部分展示了开始使用 MoviePy 进行编辑所需的一切

## 快速演示

### 你是否需要 MoviePy？

以下是您可能需要使用 Python 编辑视频的几个原因：

- 您有很多视频需要以复杂的方式处理或合成。
- 您想要在 Web 服务器（Django、Flask 等）上自动创建视频或 GIF。
- 您想要自动执行繁琐的任务，例如标题插入、跟踪对象、剪辑场景、制作片尾字幕、字幕等。
- 您想要编写自己的视频效果来完成现有视频编辑器无法完成的任务。
- 您想要从另一个 python 库（Matplotlib、Mayavi、Gizeh、scikit-images...）生成的图像创建动画。

以下是 MoviePy 不是最佳解决方案的一些用途：

- 您只需要进行逐帧视频分析（使用面部检测或其他奇特的东西）。这可以通过 MoviePy 与其他库结合来完成，但实际上，只需使用 imageio、OpenCV 或 SimpleCV，这些是专门从事这些任务的库。
- 您只想转换视频文件，或将一系列图像文件转换为电影。在这种情况下，最好直接调用 ffmpeg （或 avconv 或 mencoder ...），它会比通过 MoviePy 更快、更节省内存。
### 优点和局限性

MoviePy 的开发考虑了以下目标：

- 简单直观。基本操作可以在一行中完成。代码简单易学，对于新手来说也很容易理解。
- 灵活的。您可以完全控制视频和音频的帧，并且创建自己的效果就像 Py 一样简单。
- 便携的。该代码使用非常常见的软件（Numpy 和 FFMPEG），并且可以在（几乎）任何具有（几乎）任何版本的 Python 的机器上运行。

对于限制：MoviePy（还）无法流式传输视频（从网络摄像头读取，或在远程机器上实时渲染视频），并且并不是真正为涉及电影的许多连续帧的视频处理而设计的（例如视频稳定，您'为此需要另一个软件）。如果您同时使用许多视频、音频和图像源（>100），您也可能会遇到内存问题，但这将在未来的版本中得到修复。

### 示例代码

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

### MoviePy 的工作原理

MoviePy 使用软件 ffmpeg 来读取和导出视频和音频文件。它还（可选）使用 ImageMagick 生成文本并写入 GIF 文件。Python 的快速数值库 Numpy 确保了不同媒体的处理。高级效果和增强功能使用 Python 的众多图像处理库（PIL、Scikit-image、scipy 等）中的一些。

![[工作原理.jpg]]

### 基本概念

MoviePy 的中心对象是剪辑，可以是 AudioClip 或 VideoClip。它们可以被修改（剪切、减速、加暗……），也可以与其他剪辑混合以形成新的剪辑。您可以预览这些剪辑（使用 PyGame 或 IPython Notebook），并将它们渲染到文件中（如 MP4、GIF、MP3 等格式）。例如，VideoClip 可以由视频文件、图像、文本或自定义动画创建。它们可以具有音轨（即 AudioClip）和遮罩（一种特殊的 VideoClip，指示混合其他剪辑时应该隐藏的剪辑部分）。有关更多详细信息，请参阅创建和导出视频剪辑以及混合剪辑。

剪辑可以使用 MoviePy 的众多效果之一进行修改（例如 clip.resize(width="360")、clip.subclip(t1,t2) 或 clip.fx(vfx.black_white)），也可以使用用户实现的效果。MoviePy 实现了许多函数（例如 clip.fl、clip.fx 等），这使得编写自己的效果变得非常简单。有关更多信息，请参阅剪辑变换和效果。

此外，您还可以在 moviepy.video.tools 中找到一些高级功能，用于在视频中跟踪对象、绘制简单形状和颜色渐变（对于遮罩非常有用）、生成字幕和片尾字幕等。有关这些功能的描述，请参阅高级工具。

最后，虽然 MoviePy 没有图形用户界面，但有许多预览剪辑的方法，使您能够在以高质量渲染视频之前微调脚本并确保一切完美。[请参阅如何高效使用 MoviePy。]()

## 混合剪辑

视频合成，也称为非线性编辑，是将多个剪辑组合在一起形成新的剪辑的过程。以下视频是使用 MoviePy 进行合成的一个很好的示例：

[视频链接](https://www.youtube.com/watch?v=rIehsqqYFEM)

在开始之前，请注意，视频剪辑通常包含音轨和遮罩，它们也是剪辑。当您将这些剪辑组合在一起时，最终剪辑的音轨和遮罩会自动根据各个剪辑的音轨和遮罩生成。因此，大多数情况下，您无需担心混合音频和遮罩的问题。

### 堆叠和连接剪辑

将剪辑放在一起的两种简单方法是连接它们（在一个长剪辑中一个接一个地播放它们）或堆叠它们（在一个较大的剪辑中将它们并排播放）。

连接是通过函数 concatenate_videoclips 完成的：

```python
from moviepy import VideoFileClip, concatenate_videoclips

clip1 = VideoFileClip("myvideo.mp4")
clip2 = VideoFileClip("myvideo2.mp4").subclip(50,60)
clip3 = VideoFileClip("myvideo3.mp4")

final_clip = concatenate_videoclips([clip1,clip2,clip3])
final_clip.write_videofile("my_concatenation.mp4")
```

final_clip 是一个剪辑，依次播放剪辑 1、2 和 3。请注意，剪辑不需要具有相同的尺寸。如果它们尺寸不同，它们将全部居中显示在一个足够大的剪辑中，以包含其中最大的一个，还可以选择填充边框的颜色。您还有许多其他选项（请参阅该函数的文档）。例如，您可以使用选项 transition=my_clip 在剪辑之间播放过渡剪辑。

堆叠是通过 clips_array 完成的：

```python
from moviepy import VideoFileClip, clips_array, vfx

clip1 = VideoFileClip("myvideo.mp4").margin(10) # 添加 10 像素的边框
clip2 = clip1.fx( vfx.mirror_x)
clip3 = clip1.fx( vfx.mirror_y)
clip4 = clip1.resize(0.60) # 缩小 60%

final_clip = clips_array([[clip1, clip2],
                          [clip3, clip4]])

final_clip.resize(width=480).write_videofile("my_stack.mp4")
```

您将获得一个类似以下的剪辑：

![[剪辑效果展示.jpg]]

### 复合视频剪辑

复合视频剪辑提供了一种非常灵活的方式来组合剪辑，但比 concatenate_videoclips 和 clips_array 更复杂。

```python
video = CompositeVideoClip([clip1, clip2, clip3])
```

现在 video 播放 clip1，然后在 clip1 上播放 clip2，在 clip1 和 clip2 上播放 clip3。例如，如果 clip2 和 clip3 与 clip1 具有相同的大小，则视频中只有位于顶部的 clip3 可见……除非 clip3 和 clip2 具有隐藏它们部分的遮罩。请注意，默认情况下，合成的大小与其第一个剪辑的大小相同（因为它通常是背景）。但是有时您可能希望在更大的合成中浮动剪辑，因此您可以指定最终合成的大小如下：

```python
video = CompositeVideoClip([clip1, clip2, clip3], size=(720, 460))
```

#### 开始和停止时间

在 CompositionClip 中，所有剪辑都在 clip.start 属性指定的时间开始播放。您可以按如下方式设置此开始时间：

```python
clip1 = clip1.with_start(5) # 在 5 秒后开始
```

因此，例如您的合成将如下所示：

```python
video = CompositeVideoClip([
	clip1, # 从 t=0 开始
    clip2.with_start(5), # 从 t=5s 开始
    clip3.with_start(9) # 从 t=9s 开始
]) 
```

在上面的示例中，也许 clip2 将在 clip1 结束之前开始。在这种情况下，您可以使 clip2 以一秒的淡入效果出现：

```python
video = CompositeVideoClip([
    clip1, # 从 t=0 开始
    clip2.with_start(5).crossfadein(1), # 从 t=5s 开始并淡入1秒
    clip3.with_start(9).crossfadein(1.5) # 从 t=9s 开始并淡入1.5秒
])
``` 
#### 设置剪辑位置

如果 clip2 和 clip3 小于 clip1，您可以通过设置它们的位置来决定它们在合成中的显示位置。这里我们指定剪辑左上角像素的坐标：

```python
video = CompositeVideoClip([
    clip1,
    clip2.with_position((45,150)),
    clip3.with_position((90,100))
])
```

有许多指定位置的方法：

```python
clip2.with_position((45,150)) # x=45, y=150 , 以像素为单位

clip2.with_position("center") # 自动居中

# clip2 水平居中，位于图片的顶部
clip2.with_position(("center","top"))

# clip2 垂直居中，位于图片的左侧
clip2.with_position(("left","center"))

# clip2 位于屏幕宽度的40%，高度的70%：
clip2.with_position((0.4,0.7), relative=True)

# clip2 的位置水平居中，向下移动！
clip2.with_position(lambda t: ('center', 50+t) )
```

在指定位置时，请记住 y 坐标的零点位于图片的顶部。

![[坐标示意图.jpg]]

#### 合成音频剪辑​​

当您将视频剪辑混合在一起时，MoviePy 会自动合成它们各自的音轨以形成最终剪辑的音轨，因此您无需担心自己合成这些音轨。

如果您想从多个音频源制作自定义音轨：音频剪辑可以使用 CompositeAudioClip 和 concatenate_audioclips 混合在一起：

```python
from moviepy import *
# ... 制作一些音频剪辑 aclip1, aclip2, aclip3
concat = concatenate_audioclips([aclip1, aclip2, aclip3])
compo = CompositeAudioClip([
    aclip1.multiply_volume(1.2), # 增加音量
    aclip2.with_start(5), # 从 t=5s 开始
    aclip3.with_start(9) # 从 t=9s 开始
])
``` 

这样可以根据需要自定义合成音频剪辑，以便满足特定的需求。

## 剪辑变换和效果

MoviePy 中的剪辑修改有几类：

1. **常见方法**：用于更改剪辑属性的常见方法，如 `clip.with_duration`、`clip.with_audio`、`clip.with_mask`、`clip.with_start` 等。
2. **已经实现的效果**：核心效果（如 `clip.subclip(t1, t2)`，保留 t1 和 t2 之间的剪辑）作为类方法实现。更高级和不太常见的效果（如 `loop`，使剪辑循环播放，或 `time_mirror`，使剪辑向后播放）放置在特殊模块 `moviepy.video.fx` 和 `moviepy.audio.fx` 中，并通过 `clip.fx` 方法应用。例如 `clip.fx(time_mirror)`（使剪辑向后播放）、`clip.fx(black_white)`（将剪辑转换为黑白），等等。
3. **您可以自己创造的效果**：您可以创建自定义效果，使用 `fx` 方法。

所有这些效果都具有一个共同点，即它们不是就地修改：它们不会修改原始剪辑，而是创建一个新剪辑，该剪辑是对前一个剪辑应用了更改的版本。例如：

```python
my_clip = VideoFileClip("some_file.mp4")
my_clip.with_start(t=5) # 不起作用，更改将丢失
my_new_clip = my_clip.with_start(t=5) # 好的！
```

另外，当您编写 `clip.resize(width=640)` 时，它不会立即将效果应用于剪辑的所有帧，而是仅应用于第一帧：所有其他帧只会在需要时（即当您将整个剪辑写入文件或预览时）进行调整大小。换句话说，创建新剪辑既不耗费时间也不耗费内存，所有计算都在最终渲染期间发生。

### MoviePy 中的时间表示

在 MoviePy 中，许多方法都接受时间作为参数。例如 `clip.subclip(t_start, t_end)` 方法可以在两个时间点之间剪切剪辑。对于这些方法，时间可以用秒表示（例如 `t_start=230.54`），也可以用一对（分钟、秒）表示（例如 `t_start=(3,50.54)`），或者用三元组（小时、分钟、秒）表示（例如 `t_start=(0,3,50.54)`），还可以用字符串表示（例如 `t_start='00:03:50.54'`）。

大多数情况下，如果未提供时间，MoviePy 会自动猜测。例如在 `clip.subclip(t_start=50)` 中，暗示着 `t_end` 对应于剪辑的结尾；在 `clip.subclip(t_end=20)` 中，暗示着 `t_start` 为 0。如果时间为负数，它被视为相对于剪辑结束的时间。例如，`clip.subclip(-20, -10)` 剪切的是距离剪辑结束前 20 秒到剪辑结束前 10 秒之间的部分。

### 更改剪辑属性的方法

假设您有一些函数实现了对剪辑的效果，即给定一个剪辑和一些参数，返回一个新剪辑：

```python
effect_1(clip, args1) -> new clip
effect_2(clip, args2) -> new clip
effect_3(clip, args3) -> new clip
```

其中 args 代表参数和/或关键字参数。要按顺序将这些函数应用于一个剪辑，您可能会编写类似于以下代码：

```python
newclip =  effect_3( effect_2( effect_1(clip, args3), args2), args1)
```

但这种方式不易阅读。为了更清晰的语法，您可以使用 `clip.fx`：

```python
newclip = (clip.fx(effect_1, args1)
               .fx(effect_2, args2)
               .fx(effect_3, args3))
```

好多了！在 moviepy.video.fx 和 moviepy.audio.fx 模块中已经实现了许多效果。如果相关，这些模块中的 fx 方法将自动应用于剪辑的声音和遮罩，这样您就不必担心修改它们。为了方便起见，这两个模块被加载为 vfx 和 afx，因此您可以这样写：

```python
from moviepy import *
clip = (VideoFileClip("myvideo.avi")
        .fx(vfx.resize, width=460)  # 调整大小（保持宽高比）
        .fx(vfx.multiply_speed, 2)  # 加倍速度
        .fx(vfx.multiply_color, 0.5))  # 变暗图像
```

为了方便使用，诸如 resize 之类的 fx 方法可以以更简单的方式调用：`clip.resize(...)` 而不是 `clip.fx(vfx.resize, ...)`。

### 创建自定义效果的方法

您可以使用自定义过滤器通过 clip.time_transform、clip.image_transform 等方式修改剪辑。

使用 clip.time_transform，您可以修改剪辑的时间线，例如：

```python
# 将剪辑的时间线加速三倍
modifiedClip1 = my_clip.time_transform(lambda t: 3*t)
# 让剪辑的时间线在 t=0s 和 t=2s 之间振荡播放
modifiedClip2 = my_clip.time_transform(lambda t: 1+sin(t))
```

现在，修改后的剪辑 modifiedClip1 的播放速度是原始剪辑的三倍，而 modifiedClip2 将在时间 t=0s 和 t=2s 之间振荡播放。需要注意的是，在最后一种情况下，您创建了一个持续时间无限的剪辑（目前这不是问题）。

使用 clip.image_transform，您可以修改剪辑的显示方式，例如：

```python
# 反转剪辑的绿色和蓝色通道
def invert_green_blue(image):
    return image[:,:,[0,2,1]]

modifiedClip = my_clip.image_transform(invert_green_blue)
```

最后，您可能希望同时考虑时间和帧图片来处理剪辑。这可以通过 clip.transform(filter) 方法实现。filter 必须是一个接受两个参数并返回图片的函数。第一个参数是 get_frame 方法（即给定时间的函数 gf(t) 返回该时间的剪辑帧），第二个参数是时间。例如：

```python
def scroll(get_frame, t):
    """
    返回当前帧的 '区域'。
    该区域的位置取决于时间。
    """
    frame = get_frame(t)
    frame_region = frame[int(t):int(t)+360,:]
    return frame_region

modifiedClip = my_clip.transform(scroll)
```

这将使剪辑向下滚动，高度恒定为 360 像素。

在编写新效果时，尽可能使用 time_transform 和 image_transform 而不是 transform。这样做的原因是，当这些效果应用于 ImageClip 时，MoviePy 将意识到这些方法不需要应用于每一帧，这将导致更快的渲染。

## 如何高效使用 MoviePy

使用 MoviePy 的最佳方式是与 IPython Notebook 结合使用：它使得预览剪辑更加容易（正如我们将在本节中看到的），具有自动补全功能，并且可以显示库的不同方法的文档。

### 应该使用 moviepy.editor 吗？

在 MoviePy 的旧版本中，通常建议从 moviepy.editor 中导入。但在 v2.0 及以上版本中，不再建议这样做，您应该通常直接从 moviepy 中导入（例如，from moviepy import VideoFileClip）。现在，只有在您使用 MoviePy 手动编辑视频时才应加载 moviepy.editor 模块。导入它将：

- 如果安装了 pygame，则启动 pygame 会话以启用 clip.show() 和 clip.preview()
- 如果在 IPython Notebook 中，则启用 clip.ipython_display()
- 如果安装了 Matplotlib，则启用 sliders()
### 何时关闭()剪辑

当您创建某些类型的剪辑实例 - 例如 VideoFileClip 或 AudioFileClip - MoviePy 会创建一个子进程并锁定文件。为了在使用完后释放这些资源，您应该调用 close() 方法。

这对于更复杂的应用程序更为重要，特别是在 Windows 上运行时。虽然 Python 的垃圾收集器最终应该为您清理资源，但关闭它们可以让它们更早地可用。

然而，如果您过早关闭剪辑，剪辑上的方法（以及从它派生的任何剪辑）将变得不安全。

因此，经验法则是：

- 一旦您使用完您构建的任何剪辑以及使用从该剪辑派生的任何剪辑，就可以调用 close() 。
- 即使您关闭 CompositeVideoClip 实例，您仍然需要关闭创建它的剪辑。
- 否则，如果您有一个通过从另一个剪辑派生而创建的剪辑（例如通过调用 with_mask() ），那么通常您不应该关闭它。关闭原始剪辑也会关闭副本。

剪辑充当上下文管理器。这意味着您可以将它们与 with 语句一起使用，并且即使存在异常，它们也会在块末尾自动关闭。

```python
with AudioFileClip("song.wav") as clip:
    raise NotImplementedError("稍后我将解决如何处理这首歌曲")
# clip.close() 隐式调用，因此 song.wav 文件的锁立即被释放。
```
### 预览剪辑的多种方式

当您编辑视频或尝试通过 MoviePy 实现效果时，通过反复试验生成视频可能会非常耗时。本节介绍了一些加快速度的技巧。

#### 剪辑保存

大多数情况下，只需要视频的一帧就足以告诉您是否正确操作。您可以将剪辑的一帧保存到文件中，方法如下：

```python
# 保存第一帧
my_clip.save_frame("frame.jpeg") 
# 保存 t=2s 处的帧
my_clip.save_frame("frame.png", t=2) 
```

#### 剪辑显示和预览

方法 `clip.show()` 和 `clip.preview()` 可以在 Pygame 窗口中预览剪辑。它们是最快的预览方式，因为剪辑是同时生成和显示的，并且对于获取像素的坐标或颜色非常有用。这些方法需要安装 PyGame 并使用 `moviepy.editor` 模块。

```python
# 在 Pygame 窗口中显示第一帧
my_clip.show() 
# 在 Pygame 窗口中显示 t=10.5s 处的帧
my_clip.show(10.5) 
# 以交互方式显示帧，点击后打印像素的位置和颜色
my_clip.show(10.5, interactive=True) 
```

```python
# 预览剪辑，默认帧率为 15fps
my_clip.preview() 
# 预览剪辑，帧率设置为 25fps
my_clip.preview(fps=25) 
# 预览剪辑，不生成/播放音频
my_clip.preview(fps=15, audio=False) 
```

#### IPython 显示

在 IPython Notebook 中显示剪辑非常方便，尤其是如果您不想使用 `clip.show()` 和 `clip.preview()`。您可以嵌入视频、图像和声音，可以来自文件或直接来自剪辑。

```python
# 嵌入视频、图像和声音
ipython_display(my_video_clip) 
ipython_display(my_imageclip) 
ipython_display(my_audio_clip) 
# 嵌入文件中的视频、图像和声音
ipython_display("my_picture.jpeg") 
ipython_display("my_video.mp4") 
ipython_display("my_sound.mp3") 
```

```python
# 将剪辑嵌入 IPython Notebook 中显示
my_video_clip.ipython_display()
```

您还可以提供任何有效的 HTML5 选项作为关键字参数，例如指定宽度、自动播放或循环。

重要的是，`ipython_display` 实际上将剪辑物理嵌入到您的笔记本中。优点是您可以移动或在线发布笔记本，视频仍然可以正常播放。缺点是笔记本的文件大小可能会变得非常大，但重新启动浏览器可以解决这个问题。
## 使用 matplotlib

### 定义自定义动画

MoviePy 允许您通过定义一个函数来生成自定义动画，该函数以 numpy 数组的形式返回动画给定时间的帧。

下面是此工作流程的示例：

```python
from moviepy import VideoClip

def make_frame(t):
    """返回时间 t 的帧图像。"""
    # ... 在此处使用任何库创建帧 ...
    return frame_for_time_t  # (Height x Width x 3) Numpy 数组

animation = VideoClip(make_frame, duration=3)  # 3 秒剪辑
```

然后可以通过通常的 MoviePy 方式导出该动画：

```python
# 导出为视频文件
animation.write_videofile("my_animation.mp4", fps=24)
# 导出为 GIF
animation.write_gif("my_animation.gif", fps=24)  # 通常较慢
```

### 简单的 matplotlib 示例

以下是使用 matplotlib 创建动画的示例：

```python
import matplotlib.pyplot as plt
import numpy as np
from moviepy import VideoClip
from moviepy.video.io.bindings import mplfig_to_npimage

x = np.linspace(-2, 2, 200)

duration = 2

fig, ax = plt.subplots()
def make_frame(t):
    ax.clear()
    ax.plot(x, np.sinc(x**2) + np.sin(x + 2*np.pi/duration * t), lw=3)
    ax.set_ylim(-1.5, 2.5)
    return mplfig_to_npimage(fig)

animation = VideoClip(make_frame, duration=duration)
animation.write_gif('matplotlib.gif', fps=20)
```

## 在 Jupyter Notebook 中工作

如果您在 Jupyter Notebook 中工作，则可以利用以下事实：VideoClips 可以通过 ipython_display 方法嵌入到 Notebook 的输出单元中。

以下是上述示例在 Jupyter Notebook 中的应用：

```python
import matplotlib.pyplot as plt
import numpy as np
from moviepy import VideoClip
from moviepy.video.io.bindings import mplfig_to_npimage

# 生成 x 值
x = np.linspace(-2, 2, 200)

# 动画持续时间
duration = 2

# 创建 Matplotlib 图形对象
fig, ax = plt.subplots()

# 定义生成帧的函数
def make_frame(t):
    ax.clear()
    # 绘制图形
    ax.plot(x, np.sinc(x**2) + np.sin(x + 2*np.pi/duration * t), lw=3)
    ax.set_ylim(-1.5, 2.5)
    # 将 Matplotlib 图形转换为 numpy 数组
    return mplfig_to_npimage(fig)

# 创建 VideoClip 对象
animation = VideoClip(make_frame, duration=duration)

# 将动画导出为 GIF 文件
animation.write_gif('matplotlib.gif', fps=20)
```