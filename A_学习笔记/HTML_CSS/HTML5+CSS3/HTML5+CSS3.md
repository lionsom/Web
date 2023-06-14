# 过渡 transition 

```css
<style>
    div {
        width: 200px;
        height: 100px;
        background-color: pink;
        
        /* transition: 变化的属性 花费时间 运动曲线 何时开始; */
        /* transition: width .5s ease 0s, height .5s ease 1s; */
        
        /* 如果想要写多个属性，利用逗号进行分割 */
        /* transition: width .5s, height .5s; */
        
        /* 如果想要多个属性都变化，属性写all就可以了 */
        /* transition: height .5s ease 1s; */
        
        /* 谁做过渡，给谁加 */
        transition: all 0.5s;
    }
    div:hover {
        width: 400px;
        height: 200px;
        background-color: skyblue;
    }
</style>
```



# 2D转换 transform

转换（transform）是CSS3中具有颠覆性的特征之一，可以实现元素的位移、旋转、缩放等效果

* 移动：translate
* 旋转：rotate
* 缩放：scale



## 移动 translate

```css
transform: translate(x,y); 或者分开写
transform: translateX(n);
transform: translateY(n);

/* 鼠标移入到父盒子，son改变位置 */
.father:hover .son {
    transform: translate(100px, 50px);

    /* 百分比: 盒子自身尺寸的百分比 */
    transform: translate(100%, 50%);

    transform: translate(-100%, 50%);

    /* 只给出一个值表示x轴移动距离 */
    transform: translate(100px);

    transform: translateY(100px);
}
```



### 元素居中

```css
.son {
    position: absolute;
    left: 50%;
    top: 50%;
    
    /* 方式一：margin */
    margin-left: -100px;
    margin-top: -50px;

    /* 方式二：transform */
    transform: translate(-50%, -50%);

    width: 203px;
    height: 100px;
    background-color: pink;          
}
```



## 旋转 rotate

* rotate里面跟度数， 单位是 deg  比如  rotate(45deg)
* 角度为正时，顺时针，负时，为逆时针
* 默认旋转的中心点是元素的中心点

```
transform:rotate(度数)
```



### 设置旋转中心点

2D 转换中心点 transform-origin



## 缩放 scale

* 注意其中的x和y用逗号分隔
* transform:scale(1,1) ：宽和高都放大一倍，相对于没有放大
* transform:scale(2,2) ：宽和高都放大了2倍
* transform:scale(2) ：只写一个参数，第二个参数则和第一个参数一样，相当于 scale(2,2)
* transform:scale(0.5,0.5)：缩小
* sacle缩放最大的优势：可以设置转换中心点缩放，默认以中心点缩放的，而且不影响其他盒子

```css
transform:scale(x,y);
```





# 渐变

```css
.box {
    width: 300px;
    height: 200px;
    
    /* 彩虹 */
    background-image: linear-gradient(
        pink,
        green,
        hotpink
    );
    
    /* 透明 -> 半透明 */
    background-image: linear-gradient(
        transparent,
        rgba(0,0,0, .6)
    );
}
```





# 3D转换 transform



#动画 animation

动画（animation）是CSS3中具有颠覆性的特征之一，可通过设置多个节点来精确控制一个或一组动画，常用来实现复杂的动画效果。

















