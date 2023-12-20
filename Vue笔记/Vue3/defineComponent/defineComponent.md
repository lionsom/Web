# vue3中defineComponent 的作用详解

### defineComponent基本用法

[vue3](https://so.csdn.net/so/search?q=vue3&spm=1001.2101.3001.7020) 中，新增了 defineComponent ，它并没有实现任何的逻辑，只是把接收的 Object 直接返回，它的存在是完全让传入的整个对象获得对应的类型，它的存在就是完全为了服务 TypeScript 而存在的。

我都知道普通的组件就是一个普通的对象，既然是一个普通的对象，那自然就不会获得自动的提示，

```javascript
import { defineComponent } from 'vue'
 
const component = {
  name: 'Home',
  props:{
    data: String,
  },
  setup // 没有该有的提示，这非常的不友好
}
 
export default component
```

但是当我们加上 defineComponent（） 之后，就完全不一样了，可以获得自动提示，[vue2](https://so.csdn.net/so/search?q=vue2&spm=1001.2101.3001.7020)、vue3的自动提示都有

```javascript
import { defineComponent } from 'vue'

const component = {
  name: 'Home',
  props:{
    data: String,
  },
  setup () {
    // setup 可接受两个参数，一个props，和 context
  }
}

export default component
```

接下来看看 setup 中的两个参数 props 与 context ,

- props指组件传递来的参数，并且ts可以推论出props的类型.props也就是 vue2 中组件中的 props
- context 有三个属性 attrs slots emit 分别对应vue2中的attrs属性、slots插槽、$emit发送事件

```javascript
import { defineComponent } from 'vue'

const component = {
  name: 'Home',
  props:{
    data: String,
  },
  setup（props, context）{
    // props.data
    // context.attrs    context.slots    context.emit 
  }
}

export default component
```



### 扩展知识

vue3之组件结构(defineComponent,setup函数)

在vue3中,对组件整体结构做一些调整,先看一个组件案例:

```javascript
import {ref, reactive, defineComponent, Ref, onMounted} from "vue";
import {settingsStore} from "/@/store/module/settings";
import {IRoleList} from "/@/interface/role/list.interface";
import {IHttpResult} from "/@/interface/common.interface";
import { ILogListParams } from "/@/interface/settings/log.interface";

export default defineComponent({
   name: "LogList",
   setup() {
       const logList: Ref<IRoleList[]> = ref([]);
       const columns = [
       	...
       ];

       const pagination = ref({
            "show-quick-jumper": true,
            total: 100,
            current: 1,
            "show-size-changer": true,
            "show-total": (total: number, range: number[]) => `${range[0]}-${range[1]} 共 ${total} 条`,
            "pageSize": 10
       });
       const columnsList = ref(columns);
       const params: ILogListParams = reactive({
           page: 1,
           pageSize: 10
       });

       onMounted(() => {
           findLogList();
       });
       /*查询日志列表*/
       const findLogList = () => {
           settingsStore.findLogList(params).then((res: IHttpResult) => {
               const data = res.data;
               pagination.value.total = data.total;
               logList.value = data.list;
           });
       };
       /*修改状态*/
       const onChange = (pagination: {current: number, pageSize: number}) => {
           params.page = pagination.current;
           params.pageSize = pagination.pageSize;
       };
       /*删除*/
       const onDelete = (id: number) => {
           alert(id);
       };
      return {
          columnsList,
          logList,
          onDelete,
          onChange,
          pagination
      };
   }
});
```

从上面组件代码中,可以看出在vue3中没有this对象, 所有的逻辑代码都写在setup方法里面，若是要在[HTML模板](https://so.csdn.net/so/search?q=HTML模板&spm=1001.2101.3001.7020)页面中使用变量或者方法, 需要在setup方法return出去.

setup是Vue3 的一大特性函数, 它有几个特性:

1. setup函数是处于 生命周期函数 beforeCreate 和 Created 两个钩子函数之间的函数
2. setup函数是 Composition API（组合API）的入口
3. 在setup函数中定义的变量和方法最后都是需要 return 出去的 不然无法再模板中使用

setup函数的注意点：
vue3虽然支持vue2.x版本的写法,但也有一些要注意的地方

1. 由于在执行 setup函数的时候，还没有执行 Created 生命周期方法，所以在 setup 函数中，无法使用 data 和 methods 的变量和方法
2. 由于我们不能在 setup函数中使用 data 和 methods，所以 Vue 为了避免我们错误的使用，直接将 setup函数中的this修改成了 undefined
3. setup函数只能是同步的不能是异步的
    （1）上面的组件中用defineComponent包裹了组件;
    （2）defineComponent函数，只是对setup函数进行封装，返回options的对象；
    （3）defineComponent最重要的是：在TypeScript下，给予了组件 正确的参数类型推断 。
    ![在这里插入图片描述](https://img-blog.csdnimg.cn/73409647b27c45efb974a35c8b8c94af.png)
    （4）defineComponent可以给组件的setup方法准确的参数类型定义.
    （5）defineComponent 可以接受显式的自定义 props 接口或从属性验证对象中自动推断
    （6）defineComponent 可以正确适配无 props、数组 props 等形式
    （7）引入 defineComponent() 以正确推断 setup() 组件的参数类型

文章知识点与官方知识档案匹配，可进一步学习相关知识

[Vue入门技能树](https://edu.csdn.net/skill/vue/?utm_source=csdn_ai_skill_tree_blog)[首页](https://edu.csdn.net/skill/vue/?utm_source=csdn_ai_skill_tree_blog)[概览](https://edu.csdn.net/skill/vue/?utm_source=csdn_ai_skill_tree_blog)
