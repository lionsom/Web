# flex是什么？

Flex布局/弹性布局：

* 是一种浏览器提倡的布局模型
* 布局网页更简单、灵活
* 避免浮动脱标的问题



`flex`是一个用于创建灵活的布局的CSS属性。它是CSS3中的一个模块，用于实现弹性盒子布局（Flexbox Layout）。通过使用`flex`属性，可以轻松地控制元素在容器内的布局方式和空间分配。

Flexbox布局模型通过在容器和其中的项目之间建立弹性关系来实现布局。容器是指应用Flexbox布局的父元素，而项目则是容器内部的子元素。通过使用不同的`flex`属性值，可以定义项目的大小、顺序和对齐方式。

以下是一些常用的`flex`属性值：

- `flex-grow`：定义项目在空间分配中的扩展比例，如果所有项目具有相同的值，则它们将平均分配剩余空间。
- `flex-shrink`：定义项目在空间不足时的收缩比例。
- `flex-basis`：定义项目的初始大小。
- `flex-direction`：定义项目的排列方向，可以是水平方向（`row`）或垂直方向（`column`）。
- `flex-wrap`：定义项目是否换行。
- `justify-content`：定义项目在主轴上的对齐方式。
- `align-items`：定义项目在交叉轴上的对齐方式。
- `align-self`：定义单个项目在交叉轴上的对齐方式，覆盖`align-items`。

使用`flex`属性可以创建响应式布局，适应不同屏幕尺寸和设备。Flexbox布局非常灵活且易于使用，成为了现代Web开发中常用的布局技术之一。



# flex使用场景限制

> 大部分场景推荐使用flex。
>
> 需要兼容低版本的IE等浏览器的 不建议使用flex。

![](images/006.png)



# flex介绍与使用

![](images/001.png)



## 1. 主轴对齐方式 - justify-content

![](images/002.png)

```css
display: flex;

/* 1.靠左 */
justify-content: flex-start;

/* 2.靠右 */
justify-content: flex-end;

/* 3.居中 */
justify-content: center;

/* 4.间距在弹性盒子(子级)之间 */
justify-content: space-between;

/* 5.所有地方的间距都相等 */
justify-content: space-evenly;

/* 间距加在子级的两侧 */
/* 视觉效果: 子级之间的距离是父级两头距离的2倍 */
justify-content: space-around;
```



## 2. 侧轴对齐方法 - align-items / align-self

![](images/003.png)



## 3. 伸缩比

![](images/004.png)

```css
.box div:nth-child(1) {
    /* width: 50px; */
    flex: 2;
}

.box div:nth-child(2) {
    /* 占用父级剩余尺寸的份数 */
    flex: 3;
}

.box div:nth-child(3) {
    flex: 1;
}
```



## 4. 修改主轴方向 - flxe-direction

* flex-direction

![](images/005.png)



```css
display: flex;

/* 1. 先确定主轴方向; 2. 再选择对应的属性实现主轴或侧轴的对齐方式 */
/* 修改主轴方向: 列 */
flex-direction: column;

/* 视觉效果: 实现盒子水平居中 */
align-items: center;

/* 视觉效果: 垂直居中 */
justify-content: center;
```



## 5. 弹性盒子换行 - flex-wrap

```css
display: flex;

/* 默认值, 不换行 */
/* flex-wrap: nowrap; */

/* 弹性盒子换行 */
flex-wrap: wrap;
```



## 6. 行对齐方式 - align-content

```css
display: flex;

/* 调节行对齐方式 */
/* align-content: center; */
/* align-content: space-around; */
align-content: space-between;
```



















