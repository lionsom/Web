

Flex布局/弹性布局：

* 是一种浏览器提倡的布局模型

* 布局网页更简单、灵活
* 避免浮动脱标的问题



![](images_flex/001.png)



# 主轴对齐方式

![](images_flex/002.png)

```html
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



# 侧轴对齐方法

![](images_flex/003.png)





# 伸缩比

![](images_flex/004.png)

```html
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





# 修改主轴方向

* flex-direction

![](images_flex/005.png)



```
display: flex;

/* 1. 先确定主轴方向; 2. 再选择对应的属性实现主轴或侧轴的对齐方式 */
/* 修改主轴方向: 列 */
flex-direction: column;

/* 视觉效果: 实现盒子水平居中 */
align-items: center;

/* 视觉效果: 垂直居中 */
justify-content: center;
```





# 弹性盒子换行

* flex-wrap

```
display: flex;

/* 默认值, 不换行 */
/* flex-wrap: nowrap; */

/* 弹性盒子换行 */
flex-wrap: wrap;
```



# 行对齐方式

* align-content

```
display: flex;

/* 调节行对齐方式 */
/* align-content: center; */
/* align-content: space-around; */
align-content: space-between;
```



















