# 参考链接

* [Vue2官方 - 风格指南(opens new window)](https://v2.cn.vuejs.org/v2/style-guide/index.html)

* [有赞Vant4 - 风格指南](https://youzan.github.io/vant/#/zh-CN/style-guide)
    * [Vant2](https://vant-ui.github.io/vant/v2/#/zh-CN/style-guide)

* [AI前端Vue规范](https://lq782655835.github.io/blogs/team-standard/1.standard-ai-vue.html)



# Vue2规范

## 1. 组件数据

组件的 data 必须是一个函数。

```js
// bad
export default {
  data: {
    foo: 'bar',
  },
};

// good
export default {
  data() {
    return {
      foo: 'bar',
    };
  },
};
```



## 2. 单文件组件文件名称

单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。

```
// bad
mycomponent.vue
myComponent.vue

// good
my-component.vue
MyComponent.vue
```



## 3. 紧密耦合的组件名

和父组件紧密耦合的子组件应该以父组件名作为前缀命名。

```
// bad
components/
|- TodoList.vue
|- TodoItem.vue
└─ TodoButton.vue

// good
components/
|- TodoList.vue
|- TodoListItem.vue
└─ TodoListItemButton.vue
```



## 4. 自闭合组件

在单文件组件中没有内容的组件应该是自闭合的。

```html
<!-- bad -->
<my-component></my-component>

<!-- good -->
<my-component />
```



## 5. 指令缩写

指令缩写，用 `:` 表示 `v-bind:` ，用 `@` 表示 `v-on:`

```html
<!-- bad -->
<input v-bind:value="value" v-on:input="onInput" />

<!-- good -->
<input :value="value" @input="onInput" />
```



## 6. Props 名大小写

在声明 props 的时候，其命名应该始终使用 camelCase，而在模板中应该始终使用 kebab-case。

```js
// bad
export default {
  props: {
    'greeting-text': String,
  },
};

// good
export default {
  props: {
    greetingText: String,
  },
};

<!-- bad -->
<welcome-message greetingText="hi" />

<!-- good -->
<welcome-message greeting-text="hi" />
```



## 7. 组件属性顺序

标签的 Props 应该有统一的顺序，依次为 **指令、属性和事件**。

```html
<my-component
  v-if="if"
  v-show="show"
  v-model="value"
  ref="ref"
  :key="key"
  :text="text"
  @input="onInput"
  @change="onChange"
/>
```



## 8. 组件选项的顺序

组件选项应该有统一的顺序。

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



## 9. import引入顺序

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





# Vue2 项目目录结构

## 简要说明

- `main.js`主入口，`router.js`路由划分
- `plugins` 自己或第三方插件,包括但不限于components、directives、filters、third lib
- `pages` 所有路由页面。原则：轻page，重component
- `components` 所有组件。包括原子组件、业务公用组件、页面独有组件
- `server` api引入入口
- `assets` sass、图片资源入口，不常修改数据
- `utils` 工具文件夹
- `store` 标准vuex格式，非必须

## 详细说明

```js
project
└───src
│   │   app.vue    // 主页面
│   │   main.js    // 主入口
|   |   router.js  // 所有路由
│   │
│   |____assets    // css、image、svg等资源
│   |   |____css   // 所有sass资源
|   |   |    |  reset.scss       // 兼容各浏览器
|   |   |    |  global.scss      // 全局css
|   |   |    |  variable.scss    // sass变量和function等
│   |   |____img   // image图标库
|   |   |____svg   // svg图标库
|   |
|   |____components    // 组件
│   |   |____common    // common自注册组件
│   |        |____base // 原子组件(如果是引入第三方，该文件夹可省略)
│   |        |   ...   // 业务公用组件
│   |   |____entity    // entity页面组件
│   |   |____about     // about页面组件
|   |
|   |____pages     // UI层(原则：轻page，重component)
|   |   |____entity
|   |   |    |  list.vue      // 列表页
|   |   |    |  create.vue    // 新增页
|   |   |    |  edit.vue      // 修改页
|   |   | main.vue
|   |
|   |____plugins   // 自己或第三方插件
|   |   | index.js       // 插件入口文件
|   |   | directives.js  // 所有Vue指令
|   |   | filters.js  // 所有Vue过滤
|   |
|   |____server    // 接口层
|   |   | index.js   // 所有接口
|   |   | http.js  // axios二次封装
|   |
|   |____store     // vuex数据
|   |   | index.js
|   |
|   |____utils     // 工具层
|   |   | config.js// 配置文件，包括常量配置
|
└───public         // 公用文件，不经过webpack处理
│   │   favicon.ico
│   │   index.html
│   vue.config.js  // vue-cli3主配置
│   babel.config.js// babel配置
│   .eslintrc.js   // eslint配置
│   .prettierrc.js // perttier配置
│   package.json   // npm配置
│   README.md      // 项目说明
```
