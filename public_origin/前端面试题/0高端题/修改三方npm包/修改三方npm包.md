* [字节前端大佬教你如何修改第三方npm包！](https://www.bilibili.com/video/BV1qYqAYBE8E/?spm_id_from=333.337.search-card.all.click&vd_source=dc55c355e9f5b6174832aacfb5d8b6aa)





# 方案一：直接修改 node_modules





# 方案二：使用 `patch-package` 

* [手把手教你使用patch-package给npm包打补丁](https://juejin.cn/post/6962554654643191815)
* [使用pnpm的patch命令打补丁（正确修改源码，在外部修改node_modules代码 ）(安全扫描项目是否存在外链)](https://www.cnblogs.com/wang--chao/p/16612248.html)
* [使用pnpm的patch命令打补丁,安装依赖后自动打上修改的内容](https://blog.csdn.net/m0_38004751/article/details/132650077)



npm使用patch-package打补丁，安装依赖后自动打上修改的内容。

但如果你项目使用pnpm的话，patch-package并不能使用，所幸在v7.4.0的版本中，pnpm添加了pnpm patch和pnpm pathc-commit，

支持了给依赖打补丁。

在pnpm7.4（pnpm高效npm版本管理工具）版本以后pnpm添加了pnpm patch和pnpm pathc-commit，支持给依赖打补丁。





# 方案三：把源码拉下来，自己发布





