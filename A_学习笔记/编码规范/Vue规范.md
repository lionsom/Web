### [#](https://lq782655835.github.io/blogs/team-standard/1.standard-ai-vue.html#参考链接)参考链接

[Vue官方风格指南(opens new window)](https://cn.vuejs.org/v2/style-guide/index.html)

[有赞风格指南](https://youzan.github.io/vant/#/zh-CN/style-guide)



### [#](https://lq782655835.github.io/blogs/team-standard/1.standard-ai-vue.html#文件命名)文件命名

统一小写，多个单词作为文件名使用分隔符`-`

```js
// bad
EntityList.vue
entityList.vue

// good
entity-list.vue
```

### [#](https://lq782655835.github.io/blogs/team-standard/1.standard-ai-vue.html#紧密耦合的组件命名)紧密耦合的组件命名

和父组件紧密耦合的子组件应该以父组件名作为前缀命名

```js
// bad
components/
|- todo-list.vue
|- todo-item.vue
└─ todo-button.vue

// good
components/
|- todo-list.vue
|- todo-list-item.vue
└─ todo-list-item-button.vue
```

### [#](https://lq782655835.github.io/blogs/team-standard/1.standard-ai-vue.html#自闭合组件)自闭合组件

在单文件组件中没有内容的组件应该是自闭合的

```html
<!-- bad -->
<u-input></u-input>

<!-- good -->
<u-input />
```

### [#](https://lq782655835.github.io/blogs/team-standard/1.standard-ai-vue.html#指令缩写)指令缩写

用`:` 表示 `v-bind`: ，用`@`表示`v-on`

```html
<!-- bad -->
<input v-bind:value="value" v-on:input="onInput">

<!-- good -->
<input :value="value" @input="onInput">
```

### [#](https://lq782655835.github.io/blogs/team-standard/1.standard-ai-vue.html#组件数据)组件数据

组件的 data 必须是一个函数,并且建议在此不使用箭头函数

```js
// bad
export default {
  data: () => ({
    foo: 'bar'
  })
}

// good
export default {
  data () {
    return {
      foo: 'bar'
    }
  }
}
```

### [#](https://lq782655835.github.io/blogs/team-standard/1.standard-ai-vue.html#props命名)props命名

小驼峰命名。内容尽量详细，至少有默认值

```js
// bad
greeting-text: String

// good
greetingText: { type: String, default: ''}
```

### [#](https://lq782655835.github.io/blogs/team-standard/1.standard-ai-vue.html#组件属性顺序和分行规则)组件属性顺序和分行规则

顺序原则：重要属性放前面

顺序依据：依次`指令`->`props属性`-> `事件`->`dom属性(class有标记作用，除外)`

分行规则：放在一行，重要内容较多时，可放置2～3行

```html
<!-- bad -->
<u-select
    class="select"
    size="s"
    @select="searchEntity($event, row)"
    @blur="searchEntity($event, row)"
    v-model="row.variableId"
    :list="variableList" />

<!-- good -->
<u-select v-model="row.variableId" :list="variableList" size="s"
    @select="searchEntity($event, row)" @blur="searchEntity($event, row)" class="select" />
```

### [#](https://lq782655835.github.io/blogs/team-standard/1.standard-ai-vue.html#vue-api顺序)Vue API顺序

```js
export default {
    name: '',
    /*1. Vue扩展 */
    extends: '', // extends和mixins都扩展逻辑，需要重点放前面
    mixins: [],   
    components: {},
    /* 2. Vue数据 */
    props: {},
    model: { prop: '', event: '' }, // model 会使用到 props
    data () {
        return {}
    },
    computed: {},
    watch:{}, // watch 监控的是 props 和 data，有必要时监控computed
    /* 3. Vue资源 */
    filters: {},
    directives: {},
    /* 4. Vue生命周期 */
    created () {},
    mounted () {},
    destroy () {},
    /* 5. Vue方法 */
    methods: {}, // all the methods should be put here in the last
}
```

### [#](https://lq782655835.github.io/blogs/team-standard/1.standard-ai-vue.html#vue组件顶级标签顺序)Vue组件顶级标签顺序

顺序保持一致，且标签之间留有空行。template第一层级下四个空格，script和style第一层级都不加空格

```html
<template>
    <div></div>
</template>

<script>
export default {}
</script>

<style>
.app {}
</style>
```

### [#](https://lq782655835.github.io/blogs/team-standard/1.standard-ai-vue.html#import引入顺序-v1-1)import引入顺序 `V1.1`

原则：同等类型的放一起，优先放mixins和components等UI资源。忌随意放置

```js
// bad
import { getAllEntityList, getVariableGroup } from '@/server/api'
import { helpers } from 'vuelidate/lib/validators'
import { getRepeatLine } from '@/utils/common'
import { CloseModalMixin, InvalidCheckMixin } from '@/components/common/mixins'
import VSearchSelect from '@/components/variable/v-search-select'
import EModifyModal from '@/components/entity/e-modify-modal'
import { MODIFY_MODAL_TYPE } from '@/utils/config'
import { botIdLoc, custIdLoc } from '@/utils/locs'

// good
import { CloseModalMixin, InvalidCheckMixin } from '@/components/common/mixins'
import VSearchSelect from '@/components/variable/v-search-select'
import EModifyModal from '@/components/entity/e-modify-modal'
import { getAllEntityList, getVariableGroup } from '@/server/api'
import { helpers } from 'vuelidate/lib/validators'
import { MODIFY_MODAL_TYPE } from '@/utils/config'
import { getRepeatLine } from '@/utils/common'
import { botIdLoc, custIdLoc } from '@/utils/locs'
```

### [#](https://lq782655835.github.io/blogs/team-standard/1.standard-ai-vue.html#vue-复杂data加注释-分组-v1-1)Vue 复杂data加注释/分组 `V1.1`

data数据是连接View和Modal的基础，当ViewModal复杂时，建议进行注释并分组。另外，当data过于复杂时应考虑优化重构。

```js
// bad
data() {
    return {
        isOpenModal: false,
        list: [],
        groupList: [],
        searchParams: { groupId: '', searchParam: '', searchType: '' },
        pageParam: { currentPage: 1, pageSize: 50 },
        totalCount: 0,
        groupId: '',
        typeList: [],
        defaultType: 'paramName'
    }
}

// good
data() {
    return {
        variableList: [],
        groupList: [],
        typeList: [],

        /*
        * 查询参数
        * 组与组之间通过空行区分
        */
        searchParams: { groupId: '', searchParam: '', searchType: '', currentPage: 1, pageSize: 50 },
        totalCount: 0,
        defaultType: '',

        isOpenModal: false
    }
}
```





# Vue规范

## [单文件组件文件名的大小写](https://v2.cn.vuejs.org/v2/style-guide/index.html#单文件组件文件名的大小写强烈推荐)

**[单文件组件](https://v2.cn.vuejs.org/v2/guide/single-file-components.html)的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。**

反例

```
components/
|- mycomponent.vue
components/
|- myComponent.vue
```

好例子

```
components/
|- MyComponent.vue
components/
|- my-component.vue
```



## [基础组件名](https://v2.cn.vuejs.org/v2/style-guide/index.html#基础组件名强烈推荐)

**应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 `Base`、`App` 或 `V`。**

反例

```
components/
|- MyButton.vue
|- VueTable.vue
|- Icon.vue
```

好例子

```
components/
|- BaseButton.vue
|- BaseTable.vue
|- BaseIcon.vue

components/
|- AppButton.vue
|- AppTable.vue
|- AppIcon.vue

components/
|- VButton.vue
|- VTable.vue
|- VIcon.vue
```



## [单例组件名](https://v2.cn.vuejs.org/v2/style-guide/index.html#单例组件名强烈推荐)

**只应该拥有单个活跃实例的组件应该以 `The` 前缀命名，以示其唯一性。**

反例

```
components/
|- Heading.vue
|- MySidebar.vue
```

好例子

```
components/
|- TheHeading.vue
|- TheSidebar.vue
```



## [自闭合组件](https://v2.cn.vuejs.org/v2/style-guide/index.html#自闭合组件强烈推荐)

**在[单文件组件](https://v2.cn.vuejs.org/v2/guide/single-file-components.html)、字符串模板和 [JSX](https://v2.cn.vuejs.org/v2/guide/render-function.html#JSX) 中没有内容的组件应该是自闭合的——但在 DOM 模板里永远不要这样做。**

反例

```
<!-- 在单文件组件、字符串模板和 JSX 中 -->
<MyComponent></MyComponent>
<!-- 在 DOM 模板中 -->
<my-component/>
```

好例子

```
<!-- 在单文件组件、字符串模板和 JSX 中 -->
<MyComponent/>
<!-- 在 DOM 模板中 -->
<my-component></my-component>
```



## [模板中的组件名大小写](https://v2.cn.vuejs.org/v2/style-guide/index.html#模板中的组件名大小写强烈推荐)

**对于绝大多数项目来说，在[单文件组件](https://v2.cn.vuejs.org/v2/guide/single-file-components.html)和字符串模板中组件名应该总是 PascalCase 的——但是在 DOM 模板中总是 kebab-case 的。**

反例

```
<!-- 在单文件组件和字符串模板中 -->
<mycomponent/>
<!-- 在单文件组件和字符串模板中 -->
<myComponent/>
<!-- 在 DOM 模板中 -->
<MyComponent></MyComponent>
```

好例子

```
<!-- 在单文件组件和字符串模板中 -->
<MyComponent/>
```

```
<!-- 在 DOM 模板中 -->
<my-component></my-component>
```

或者

```
<!-- 在所有地方 -->
<my-component></my-component>
```



## [Prop 名大小写](https://v2.cn.vuejs.org/v2/style-guide/index.html#Prop-名大小写强烈推荐)

**在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 [JSX](https://v2.cn.vuejs.org/v2/guide/render-function.html#JSX) 中应该始终使用 kebab-case。**

反例

```
props: {
  'greeting-text': String
}
<WelcomeMessage greetingText="hi"/>
```

好例子

```
props: {
  greetingText: String
}
<WelcomeMessage greeting-text="hi"/>
```





