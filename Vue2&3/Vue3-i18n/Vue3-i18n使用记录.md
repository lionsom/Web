* Vue-18n官网：https://vue-i18n.intlify.dev/





## 安装

```sh
$ pnpm add vue-i18n@10
```





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
```

