

# GPT

要将 Vue 项目部署到 GitHub Pages，可以按照以下步骤操作：

------

### **1. 准备工作**

确保你的项目已经初始化了 Git 仓库，并推送到 GitHub。如果没有，执行以下步骤：

1. **初始化 Git 仓库**：

    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2. **将项目推送到 GitHub**：

    ```bash
    git remote add origin https://github.com/yourusername/your-repository.git
    git branch -M main
    git push -u origin main
    ```

------

### **2. 安装 `gh-pages` 依赖**

`gh-pages` 是一个 npm 包，用于将静态文件部署到 GitHub Pages。

```bash
npm install gh-pages --save-dev
```

------

### **3. 修改 `vue.config.js`**

确保项目中的 `vue.config.js` 文件配置正确。若没有此文件，可在项目根目录创建。

```javascript
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/your-repository/'  // 替换为你的仓库名
    : '/'
};
```

------

### **4. 配置 `package.json` 的脚本**

在 `package.json` 文件中，添加如下 `deploy` 脚本：

```json
"scripts": {
  "build": "vue-cli-service build",
  "deploy": "gh-pages -d dist"
}
```

------

### **5. 构建并部署**

运行以下命令，将项目部署到 GitHub Pages：

```bash
npm run build
npm run deploy
```

此操作会将 `dist` 文件夹中的内容推送到仓库的 `gh-pages` 分支。

------

### **6. 启用 GitHub Pages**

1. 打开 GitHub 仓库。
2. 进入 **Settings** > **Pages**。
3. 在 **Source** 中选择 `gh-pages` 分支，保存即可。

------

### **7. 访问项目**

几分钟后，你可以通过 `https://yourusername.github.io/your-repository/` 访问你的项目。

------

### **常见问题**

- **404 错误**：单页面应用需要在 `vue.config.js` 中配置 `publicPath`。
- **页面未加载资源**：确保 `publicPath` 设置与仓库名称匹配。

参考更多详细信息可以查看 [GitHub Pages 官方文档](https://pages.github.com/) 和 [Vue CLI 部署指南](https://cli.vuejs.org/guide/deployment.html#github-pages)。