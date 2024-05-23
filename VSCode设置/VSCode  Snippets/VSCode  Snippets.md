* [Snippets in Visual Studio Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets)



# 一、内置的Snippets

![](images/009.png)





# 二、插件

![](images/001.png)

![](images/002.png)

![](images/003.png)

![](images/010.png)



## 1. 使用代码片段插件

![](images/004.png)





# 三、自定义Snippets

## 1. 入口

### a. Code -> 首选项 -> Configure User Snippets

![](images/005.png)



### b. 快捷框 CMD + shit + p

![](images/006.png)



## 2. 全局代码片段

全局代码片段（每种语言环境下都能触发代码块）

* 新建全局代码片段会在 `snippets` 目录下生成 `.code-snippets` 为后缀的配置文件。



###a. 打开 Configure User Snippets

![](images/011.png)

![](images/012.png)



### b. 新建一个全局Snippets

```js
{
	// Place your 全局 snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
	// description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
	// is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
	// used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
	// Placeholders with the same ids are connected.
	// Examplec:
	"Print to console": {
		"scope": "javascript,typescript",
		"prefix": "lxlog",
		"body": [
			"console.log('$1');",
			"$2"
		],
		"description": "Log output to console"
	}
}
```



### c. 文件路径

![](images/007.png)



## 3. 局部代码片段

对应语言的局部代码片段（只能在对应语言环境下才能触发）。

* 而新建对应语言的代码片段会生成 `对应语言 + .json` 的配置文件。



###a. 打开 Configure User Snippets

![](images/011.png)

![](images/012.png)

### b. 新建一个局部代码片段

![](images/013.png)

![](images/015.png)

### c. 文件路径

项目工作区中 .vscode 文件夹中：

![](images/016.png)

### d. 验证

![](images/014.png)







































