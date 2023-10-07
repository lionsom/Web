

# [Vue I18n官网](https://kazupon.github.io/vue-i18n/zh/)



# 安装

```sh
# Vue2指定版本 
$ pnpm install vue-i18n@8
```



# 注册

```js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
//
import { getCurrentLocaleKey } from '@/utils/storage'
//
import myZh from './i18n-detail/zh'
import myEn from './i18n-detail/en'
import myJa from './i18n-detail/ja'

// i18n注册
Vue.use(VueI18n)

// 准备翻译的语言环境信息
const messages = {
  zh: myZh,
  en: myEn,
  ja: myJa
}

const myI18n = new VueI18n({
  locale: getCurrentLocaleKey(),
  messages
})

export default myI18n
```



## 具体词汇文件

```js
// 英文词组列表
const en = {
  message: {
    changeLang: 'Change Language',
    hello: 'hello world'
  }
}

export default en
```



# main.js注册

```js
import myI18n from '@/utils/i18n-usage'

new Vue({
  router,
  store,
  i18n: myI18n,    // 国际化
  render: h => h(App)
}).$mount('#app')
```



# 具体调用

```js
1. template 需要使用 {{}} 将 name包装起来
	{{$t('save')}}

2. js
	this.$t('save')


eg:
	// 1.template
    <button @click="showAlert">{{ $t('message.changeLang') }}</button>

	// 2.绑定值
	<van-action-sheet
    	:description="$t('message.changeLang')"
    />
            
    // 3.js函数
    test () {
        return this.$t('message.changeLang')
    }
```



# 疑惑场景

```js
<van-action-sheet
    :description="$t('message.changeLang')"     // 输出：切换语言
    description="$t('message.changeLang')"		// 输出：$t('message.changeLang')
/>
```

* 属性性前面加冒号":"，就是说明后面的引号里面是变量或者是变量的表达式。
* 不加冒号":"，就是说明后面的引号里面是个字符串。

eg:

```js
<el-radio-group v-model="handle">
    <el-radio :label="true">打开</el-radio>
	<el-radio :label="false">关闭</el-radio>
</el-radio-group>

// 输出：true 或 false   值是Boolean类型

-------------------

<el-radio-group v-model="handle">
 	<el-radio label="true">打开</el-radio>
	<el-radio label="false">关闭</el-radio>
</el-radio-group>

// 输出：”true" 或 “false”  值是String类型
```







