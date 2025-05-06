由i18n引入

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



