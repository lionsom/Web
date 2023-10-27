# Vue中的常量

## 1、常量的定义

一般我们会在一个单独的js文件中定义常量，如：

```js
// 角色性别
export const ROLE_GENDER = {
  MAN: {
    value: '0',
    desc: '男'
  },
  WOMAN: {
    value: '1',
    desc: '女'
  }
}
```

或：

```js
export const SYSTEM_NAME = 'RAYF管理系统'
export const SYSTEM_VERSION = '1.0'
```

如果需要使用，只需要在相应的页面加入 `import` 即可

```js
import { ROLE_GENDER } from '@/constant/module/gender'
import { SYSTEM_NAME, SYSTEM_VERSION } from '@/constant/module/system' 
```

> 但这样做有一个弊端，无法在页面上直接使用，只能在 `<script></script>` 内使用，如果想在页面内使用，不妨试试下面的方法。





# CSS中的常量

* 普通的CSS不行
* Less、Scss可以



下面是一个Less CSS的例子：

```less
@color: #4D926F;


// 导入头文件
@import '@/assets/css/constant/color.less';

#header {
  color: @color;
}

h2 {
  color: @color;
}
```



## 另外的方案

```html
.darkBackground {
   background: #123456;
}

.smallText {
   font-size: 8pt;
}

<div id="myDiv1" class="darkBackground smallText"></div>
<div id="myDiv2" class="darkBackground bigText"></div>
```

