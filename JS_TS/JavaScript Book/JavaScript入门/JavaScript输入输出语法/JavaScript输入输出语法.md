# JavaScript 输入输出语法

* `document.write('')`
* `alert('我是弹框')`
* `console.log('我是控制台输出')`
* `prompt('请输入：')`
* `innerHTML`

```html
<!DOCTYPE html><html>
<body>
 	 	<h1>我的第一个 Web 页面</h1>
		<p id="demo">我的第一个段落</p>
  
    <script>
        // 1.文档输出语法
        document.write('我是div标签')
        document.write('<h1>我是标题111</h1>')

        // 2.弹框输出语法
        alert('我是弹框')

        // 3.控制台输出
        console.log('我是控制台输出')

        // 4.输入弹框
        prompt('请输入姓名：')
      
      	// 5.innerHTML
	      document.getElementById("demo").innerHTML = "段落已修改。";
    </script>
</body>
</html>
```

**实战案例**

```html
<body>
    <script>
        let uname = prompt('请输入姓名')
        let age = prompt('请输入年龄')
        let gender = prompt('请输入性别')
        document.write(uname, age, gender)
    </script>
</body>
```

