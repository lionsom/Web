* Vue-18n官网：https://vue-i18n.intlify.dev/





## 安装

```sh
$ pnpm add vue-i18n@10
```



# 配置

`main.ts` 引入

```js
import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  // something vue-i18n options here ...
})

const app = createApp({
  // something vue options here ...
})

app.use(i18n)
app.mount('#app')

// 挂载到全局，DOM上能使用$t使用
app.config.globalProperties.$t = i18n.global.t    // 后来发现这个不用自己写
```



# 应用

## html

```html
<template>
  <div :style="{ boxShadow: 'var(--el-box-shadow-lighter)' }" id="topBar">
    <span class="vertical-middle">{{ $t('common.label1') }}</span>
  </div>
</template>
```



## ts

https://blog.csdn.net/Cxiaomu/article/details/131706383

但是，在ts中，直接使用是不行的，需要另外引入，setup 有两种写法。

### setup() 方法

```tsx
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n' // 多语言


export default defineComponent({
  name: 'LeftMenu',
  setup() {
    const { t } = useI18n() // t方法取出，t('code')使用
    const menuList = [
      { id: '1', icon: 'Connection', title: t('tenant.label1'), path: '/tenant' }, 
      { id: '2', icon: 'Iphone', title: t('android.label1'), path: '/android' },
      { id: '3', icon: 'Iphone', title: t('androidManage.label1'), path: '/androidManage' },
      { id: '4', icon: 'Iphone', title: t('orderManage.label1'), path: '/orderManage' }
    ]
    return {
      menuList
    }
  },

})

</script>
```

### setup 语法糖

```tsx
<script setup lang="ts">
import { defineComponent, ref } from 'vue';
    
import { useI18n } from 'vue-i18n' // 多语言
const { t } = useI18n() // t方法取出，t('code')使用
    
const menuList = [
  { id: '1', icon: 'Connection', title: t('tenant.label1'), path: '/tenant' }, 
  { id: '2', icon: 'Iphone', title: t('android.label1'), path: '/android' },
  { id: '3', icon: 'Iphone', title: t('androidManage.label1'), path: '/androidManage' },
  { id: '4', icon: 'Iphone', title: t('orderManage.label1'), path: '/orderManage' }
]

</script>
```



### 额外方法

https://juejin.cn/post/7148755385145360392

1. 在ts中使用全局方法$t

```js
import { getCurrentInstance } from "vue";
const { appContext : { config: { globalProperties } } } = getCurrentInstance();  // 这里可以根据需要写个hook
console.log(globalProperties.$t('pleaseSelectNation'))
```

在html中的使用就比较正常了：

```html
<span>{{ $t("nation") }}</span>
```



## 纯js、ts文件 - 无法处理多语言切换

```js
let AA = computed(() => {
  // return dataSourceAA
  return [
    {
      id: '1',
      level: 0,
      title: translate('navi.home'),
      children: []
    },
    {
      id: '2',
      level: 0,
      title: translate('navi.surveySummary'),
      children: []
    },
    {
      id: '3',
      level: 0,
      title: translate('navi.generalOverview'),
      children: []
    }
  ]
})
```









# 使用动态传值

https://blog.csdn.net/lijiahui_/article/details/126591197









# 国际化插件

https://blog.csdn.net/qq_41860203/article/details/138421041



## 1. 在项目中创建一个国际化插件的文件i18n.ts

```typescript
<!-- plugins/i18n.ts -->
export const i18nPlugin = {
    install(app: any, option: any) {
        app.config.globalProperties.$t = (key: string) => {
            return key.split(".").reduce((o, k) => {
                if (o) return o[k];
            }, option[localStorage.getItem("language") || "zhCN"]);
        } 
    }
}
```

## 2. 创建语言模块json

```typescript
<!-- assets/i18n/zh-CN.json -->
{
    "project": {
        "projectName": "项目名称"
    }
}
<!-- assets/i18n/en-US.json -->
{
    "project": {
        "projectName": "project name"
    }
}
```

## 3. 注册插件

```typescript
import zhCN from "./assets/i18n/zh-CN.json";
import enUS from "./assets/i18n/en-US.json";
import { i18nPlugin } from "./plugins/i18n";

const app = createApp(App);
app.use(i18nPlugin, {
  zhCN,
  enUS,
});
```

## 4. 语言切换组件

```typescript
<!-- components/ChangeLanguage.vue -->
<template>
  <a-select
    :value="language"
    @change="changeLanguage"
  >
    <a-select-option value="zhCN">中文</a-select-option>
    <a-select-option value="enUS">English</a-select-option>
  </a-select>
</template>

<script lang="ts"setup>
import {ref} from "vue";

// 将当前选择的语言存到localStorage中
const language = ref(localStorage.getItem("language") || "zhCN");
const changeLanguage = (value: string) => {
  language.value = value;
  localStorage.setItem("language", value);
  window.location.reload();
};
</script>
```

## 5. 使用插件(ts中使用全局需注意点)

```typescript
<template>
	<ChangeLanguage />
</template>
<!-- component.vue -->
<script lang="ts" setup>
import { getCurrentInstance } from "vue";
import SelectLanguage from "@/components/SelectLanguage.vue";


// 通过getCurrentInstance()来获取当前组件实例
const instance = getCurrentInstance();
// 从当前组件实例中获取全局的 $t 函数
const $t = instance?.appContext.app.config.globalProperties.$t;

// 调用全局的 $t 函数进行文本翻译
const translatedText = $t('project.projectName');
console.log(translatedText);
</script>
```















