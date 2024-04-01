---
data: 2023-07-20
tags:
  - ssp
---

# Badge制作指北——手把手教你制作Badge

## 前前言

本文并非正规指南，看完本文只能保证你可以像我一样做出各种各样的Badge，但深层原理并不会讲解，也不会教你如何在自己的服务器上渲染自己的Badge。

## 前言

标题中的Badge，是什么意思呢？

你或许也见过类似这种的小图标：

![截屏2023-07-19 21.05.13](https://nowpic.oss-cn-shenzhen.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2023-07-19%2021.05.13.png)

点击的时候还会跳转到其他的链接。

不知道你是否像我第一次见到这类图标时一样，觉得这小东西蛮有意思，利用很小的一部分空间就简洁地说明了很多事。

## 介绍 Badge

最开始我以为这只是一张带着链接的图片，但是深挖之后发现，这确实是一张带着链接的图片，只不过这张图片是实时渲染出来的。

事实上你所看到的大部分Badge都来自[badge/shields](https://github.com/badges/shields)这个项目,这是一个开源项目，提供了一个用于生成badge的工具和服务，旨在帮助开发人员和项目所有者在GitHub项目中创建各种样式和内容的自定义徽章。（后文我就用徽章来代替Badge）

![截屏2023-07-19 21.25.32](https://nowpic.oss-cn-shenzhen.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2023-07-19%2021.25.32.png)

这个项目的核心功能是通过生成svg格式的徽章，来展示各种项目指标和状态，这些指标可以包括构建状态、代码覆盖率、下载数量、版本号等等。

同时因为这是一张图片，所以也可以用来画点其他的东西，例如：

![Static Badge](https://img.shields.io/badge/porn-hub-ff9000?labelColor=black)

不开玩笑，这个小徽章能做的事还是非常多的，接下来正式进入教学。

## 组成

看起来徽标只是分成了左右两个部分，但实际上还有更多的内容。

首先是左侧的label，一般会在label上表明这个徽章是做什么的，接着把具体要展示的数值放在右侧的message上。

在Label中可以显示一个logo，并且可以调节logo的颜色，然后徽章两侧的颜色也都可以通过labelColor和color来调节，整体的风格style也可以选择一个预设。

还有通过cacheSeconds参数来确定保存在缓存中的时间，可以通过延长在缓存中的时间来减小服务器的压力，也可以通过缩减在缓存中的时间来快速响应。

最后在这个徽章上附上要跳转的link，整个徽章的组成就是这些了。

注意：就我目前所学来看，左侧的label是可以没有的，而右侧的message是一定存在的。

## 简单制作

了解了组成之后，那么就可以开始制作了。

![image-20230719221059952](https://nowpic.oss-cn-shenzhen.aliyuncs.com/img/image-20230719221059952.png)

制作徽章是通过[shields.io](https://shields.io)这个网站进入的，点击Get started，就可以开始制作了。

进入之后默认是到静态徽章（没有数据需要更新的徽章）的页面，入门我们先尝试做一个静态徽章。

现在看到左侧这部分（今晚测试用Google Chrome不知道为啥出不来右边这部分，换到Safari就没问题了）：

![截屏2023-07-19 22.12.40](https://nowpic.oss-cn-shenzhen.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2023-07-19%2022.12.40.png)

这部分要填写的就是徽章内容，按照label、message、color这样的顺序进行填写。

其中用`-`分隔不同的内容，用`_`或`%20`来代替空格，如果你想要输入一个真的`-`，那么用两个`--`来表示一个真的`-`

例如：当我输入`Now--Scott-Happy_birthday-red`，点击Execute，就生成了如下图标：

![Static Badge](https://img.shields.io/badge/Now--Scott-Happy_birthday-red)

此时我们就学会的最基础的静态徽章的制作。

在上一部分我说过，label是可以省略的，怎么体现呢？

那就是当我只输入两个内容，例如：`Happy_birthday-red`，这个时候并不会因为缺少一个内容报错，而是生成如下图标：

![Static Badge](https://img.shields.io/badge/Happy_birthday-red)

但是message和color是不可缺少的，不然就会404报错。

学会了基础的制作以后，让我们来试试在基础上增加一些内容。

![image-20230719223217651](https://nowpic.oss-cn-shenzhen.aliyuncs.com/img/image-20230719223217651.png)

点击这里，让我们看看其他参数的设置会带来怎样的效果。

例如我做出如下的设置：

<img src="https://nowpic.oss-cn-shenzhen.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2023-07-19%2022.43.49.png" alt="截屏2023-07-19 22.43.49" style="zoom:33%;" />

得到的结果就是这样：

![Static Badge](https://img.shields.io/badge/%E5%90%83%E4%BA%86%E5%90%97-%E6%82%A8%EF%BC%9F-93b5cf?style=for-the-badge&logo=fanfou&logoColor=f8e8c1)

简单制作部分到这里就结束了，其余的参数可以自行设置练习。

## 高阶制作

说成高阶制作，其实也没高阶到哪里去（自嘲）。

这部分主要讲的是这个项目支持配置的内容，非常的丰富，可以通过预设，加上修改几个简单的参数，就做好一个徽章。

还是回到这个网站刚进来的界面，这次看左边这一列：

![image-20230719225322513](https://nowpic.oss-cn-shenzhen.aliyuncs.com/img/image-20230719225322513.png)

这其中包含了非常多的预设，我拿[Analysis/GitHub top language](https://shields.io/badges/git-hub-top-language)来举例：

我是需要输入两个信息：

![截屏2023-07-19 22.56.57](https://nowpic.oss-cn-shenzhen.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2023-07-19%2022.56.57.png)

就可以得到这样一个徽标：

![GitHub top language](https://img.shields.io/github/languages/top/NowScott/IndWebIndex)

这个页面中的预设非常多，涵盖GitHub上的很多内容，还有一些其他的内容，剩余的部分就留给大家自行探索吧，临时需要哪个找不到了可以在右上角进行检索。

## 拓展

像徽章这种类似的实时变化的图片链接其实还有很多，我也只是接触了一小部分，接下来我就给大家介绍一下这两个：

第一个是这个[Star History](https://github.com/star-history/star-history)

网址是：[star-history](https://star-history.com/)

通过这个网站你可以做出这样的手绘风格的图片，用来记录获得星星的历史。

![star-history-2023719](https://nowpic.oss-cn-shenzhen.aliyuncs.com/img/star-history-2023719.png)

第二个是[github-profile-summary-cards](https://github.com/vn7n24fzkq/github-profile-summary-cards)

网址是：[github-profile-summary-cards](https://github-profile-summary-cards.vercel.app/demo.html)

通过这个网站，我们可以做出这样的效果图，放在个人主页也是蛮好的。

![截屏2023-07-19 23.23.53](https://nowpic.oss-cn-shenzhen.aliyuncs.com/img/%E6%88%AA%E5%B1%8F2023-07-19%2023.23.53.png)

## 相关Markdown语法

在Markdown中，直接插入图片是：`![描述文字](图片链接)`

而插入链接的方法是：`[描述文字](网页链接)`

那么将两者结合起来，做为一个图片链接，就是这样:` [![描述文字](图片链接)](网页链接)`

没错，就是将两者结合。

而且在Markdown中实际上是支持链接引用的，这可以让你的链接更加简洁易读，同时也可以在一处一起修改和设置所有被引用的链接。

具体的语法如下：

```markdown
[引用名]: 链接 "注释"
[baidu]: https://www.baidu.com "baidu-url"
```

因此，当你声明完图片链接和网页链接，就可以使用这样的形式来设置一个徽章

`[![描述文字][image-url]][web-url]`(后面两个换成对应的引用名)

这样可以使你的README.md文件在代码模式下更易读，也更容易修改。

同时，Markdown也是支持HTML的代码的，可以通过一些HTML代码来让你的徽章更加美观，在此就不多说了。

## 结尾

如果你通过我的文章有多学到一点知识，那我的目的就达成了。

如果发现本文有什么错误可以在评论区发出来，我会虚心接受并及时改正。

