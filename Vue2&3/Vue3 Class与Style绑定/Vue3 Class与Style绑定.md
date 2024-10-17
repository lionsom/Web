[Vue3 Class 与 Style 绑定 - 官网](https://cn.vuejs.org/guide/essentials/class-and-style)



# 速览

> 首先很重要的一点是 [v-bind](https://so.csdn.net/so/search?q=v-bind&spm=1001.2101.3001.7020): 引号内的是 ***JS表达式*** 而不是单纯一个值或者字符串。
>
> 另一点是，你需要保证动态的变量被vue所管理，能监听到变化

## 修改class属性

```vue
<!-- 三目表达式判断，提供的是类名-->
<div :class="isSquare ? 'square' : 'circular'"></div>
 
<div :class="[isChange ? 'blue' : 'red', isSquare ? 'square' : 'circular']"></div>
 
<!--布尔值-->
<!--给类名判断 true则加上这个类名-->
<div :class="{'square' : isSquare, 'square-color' : isColor}"></div>

<!--数组对象写法-->
<div class="hello" :class="[{'square' : isSquare}, {'square-color' : isColor}]"></div>
```



## 修改style属性

```vue
<!--字符串-->
<div class="container" :style="isSquare ? 'background-color: blue;' : ''"></div>


<!--模板字符串-->
<div class="container" :style="`background-color: ${isChange ? 'pink' : 'orange'}`"></div>
<!-- 或者这样 -->
<div class="container" :style="'background-color:' + `${isChange ? 'pink' : 'orange'}`"></div>


<div class="square" 
     :style="{'background-color' : isChange ? 'blue' : 'red', 
             'color':isChange?'white':'black'}">测试</div>
 
<div class="square" 
     :style="{'height' : data_height + 'px',
             'width' : data_width + 'px'}">测试</div>

<!--数组对象写法-->
<div class="square" :style="[{'background-color' : isChange ? 'blue' : 'red'},
                            {'color' : isChange ? 'blue' : 'red'}]"></div>
```







# 一、class - 绑定 HTML class

因为 `class` 和 `style` 都是 attribute，我们可以和其他 attribute 一样使用 `v-bind` 将它们和动态的字符串绑定。



## 1. 绑定对象

### 写法一：内联字面量的形式

```vue
<script>
const isActive = ref(true)
const hasError = ref(false)
</script>

<div
  class="static"
  :class="{ active: isActive, 'text-danger': hasError }"
></div>


// 渲染的结果会是：
<div class="static active"></div>
```

### 写法二：三目表达式

```vue
<script>
data() {
    return {
        _isIncrse: true,
        _incrseP: 'incrseP',
        _downP: 'downP'
    }
}
</script>

<div :class="_isIncrse ? _incrseP : _downP"></div>
<!-- OR -->
<div :class="_isIncrse ? 'incrseP' : 'downP'"></div>


<style>
.downP {
    color: red;
}
.incrseP {
    color: pink;
}
</style>
```

### 写法三：对象形式

```vue
<script>
const classObject = reactive({
  active: true,
  'text-danger': false
})
</script>

<div :class="classObject"></div>


// 渲染结果
<div class="active"></div>
```

### 写法四：返回对象的计算属性

```vue
<script>
const isActive = ref(true)
const error = ref(null)

const classObject = computed(() => ({
  active: isActive.value && !error.value,
  'text-danger': error.value && error.value.type === 'fatal'
}))
</script>

<div :class="classObject"></div>


// 渲染结果
<div class="active"></div>
```



## 2. 绑定数组

### 写法一：常量

```vue
<script>
const activeClass = ref('active')
const errorClass = ref('text-danger')
</script>

<div :class="[activeClass, errorClass]"></div>


// 渲染结果
<div class="active text-danger"></div>
```



### 写法二：三目表达式

```vue
<script>
const activeClass = ref('active')
const errorClass = ref('text-danger')
</script>

<div :class="[isActive ? activeClass : '', errorClass]"></div>


// 渲染结果
errorClass 会一直存在，但 activeClass 只会在 isActive 为真时才存在。
```



### 写法三：数组中嵌套对象

```vue
<script>
const activeClass = ref('active')
const errorClass = ref('text-danger')
</script>

<div :class="[{ [activeClass]: isActive }, errorClass]"></div>
```



## 3. 在组件上使用

直接看官网：https://cn.vuejs.org/guide/essentials/class-and-style#with-components



# 二、style - 绑定内联样式



## 1. 绑定对象

### 写法一：字符串 + 模板字符串



```
<!--字符串-->
<div class="container" :style="isSquare ? 'background-color: blue;' : ''"></div>


<!--模板字符串-->
<div class="container" :style="`background-color: ${isChange ? 'pink' : 'orange'}`"></div>
<!-- 或者这样 -->
<div class="container" :style="'background-color:' + `${isChange ? 'pink' : 'orange'}`"></div>

```



### 推荐：`camelCase` vs `kebab-cased` 

尽管推荐使用 `camelCase`，但 `:style` 也支持 `kebab-cased` 形式的 CSS 属性 key (对应其 CSS 中的实际名称)，例如：

```vue
<script>
const activeColor = ref('red')
const fontSize = ref(30)
</script>

<!-- 推荐：camelCase -->
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>

<!-- 支持：kebab-cased -->
<div :style="{ 'font-size': fontSize + 'px' }"></div>
```



### 写法二：三目表达式

```vue
<script>
const isActive = ref(true)
</script>

<div :style="{ paddingTop: isActive ? '106px' : '0px' }">
<!-- OR -->   
<div :style="paddingTop: isActive ? '106px' : '0px'">
```



### 写法三：样式对象

```vue
<script>
const styleObject = ref({
  color: 'red',
  fontSize: '30px'
})

const change = () => {
     styleObject.value = {
         color: 'red',
         fontSize: newCount + 'px'
     }
}
</script>

<div :style="styleObject"></div>
```



### 写法四：样式对象的计算属性

```vue
<script>
computed: {
    popoverStyle() {
      	const topGap = 20
      	const { showState, x, y } = this.$data
      	return {
        	top: `${~~y - topGap}px`,
        	left: `${~~x}px`,
        	display: showState ? 'block' : 'none'
      	}
    }
},
</script>

<div :style="popoverStyle"></div>
```



### 写法五：方法

```vue
<script>
methods: {
	setStyle(obj) {
      const {status} = obj;
      let styles = '';
      switch(status) {
        case '优': 
          styles = 'background: #3764FF;';
        break;
        case '良': 
          styles = 'background: #E9D807;color: #2E2E2E;';
        break;
        case '中': 
          styles = 'background: #F09614;';
        break;
        case '差': 
          styles = 'background: #FF401A;';
        break;
        default: break
      }
      return styles;
    },
}
</script>

<span :style="setStyle(item)">{{ item.status }}</span>
```



## 2. 绑定数组

### 写法一：常量

```vue
<div :style="[baseStyles, overridingStyles]"></div>
```



### 写法二：数组中嵌套对象

```vue
<div :style="[{ 'background-color': item.itemStyle.color }]"></div>
```



### 方法三：三目表达式

```vue
<div :style="[isHighlighted ? highlightedStyle : normalStyle, additionalStyle]" />
```





































