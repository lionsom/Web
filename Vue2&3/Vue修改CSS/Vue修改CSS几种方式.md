# 参考

[CSS中使用定义在html属性中的变量基础](https://blog.csdn.net/weichaoya/article/details/119327274)





### `--name:value` 方式

- 在`html`标签属性`style`中定义变量名和变量值，形式如 `--name:value`
- 在`css`中使用`var(--name)`

```html
<div class="box" style="--top:200px;--left:100"></div>

<style>
.box {
  width: 200px;
  height: 200px;
  background: #ccc;
  position: absolute;
  top: var(--top);
  left: calc(var(--left) * 1px);
}
</style>
```



### `data-name=vlaue` 方式

- 在`html`标签中定义，形式如 `data-name=vlaue`
- 在`css`中使用`attr(data-name)`

```html
<h1 data-text="悬崖上的金鱼姬">悬崖上的金鱼姬</h1>

<style>
h1::before {
	content: attr(data-text);
	position: absolute;
	top: 0;
	left: 0;
	text-shadow: -5px 5px 20px #333,
	             -10px 10px 30px #333, 
	             -20px 15px 40px #333,
	             -25px 20px 50px #333;
	z-index: -1;
}
</style>
```





# props

```html
// props
const props = defineProps({
  nodeWidth: {
    type: String,
    default: '2px',
  },
  nodeHeight: {
    type: String,
    default: '10px',
  },
  customFontSize: {
    type: String,
    default: '19px'
  },
  customNumberY: {
    type: String,
    default: '-90px'
  },
  BB: {
    type: String,
    default: 'translate(-19px, -90px)'
  }
});

<div style="background-color: #000;"
     :style="{ width: props.nodeWidth, height: props.nodeHeight }" >
</div>

<div class="number" 
     :style="{ fontSize: props.customFontSize, transform: props.BB }" >
</div> 
```



未验证

```html
<div class="number" 
     :style="{ fontSize: props.customFontSize, transform: props.BB }" 
     transform: `'translate(-19px, ${props.customNumberY})'` >
</div> 
```

