# Vue2使用ESLint

我来帮您了解如何在Vue2项目中使用ESLint。从您的`package.json`文件可以看到，项目已经安装了相关的ESLint依赖：

1. `eslint`: ESLint核心包
2. `@typescript-eslint/eslint-plugin` 和 `@typescript-eslint/parser`: TypeScript支持
3. `eslint-plugin-vue`: Vue.js特定的lint规则
4. `@vue/eslint-config-typescript`: Vue + TypeScript的ESLint配置


现在我来详细解释如何使用ESLint：

1. **现有配置说明**：
   - `root: true`: 表示这是项目的根配置文件
   - `extends`: 继承了以下配置：
     - `plugin:vue/essential`: Vue.js必要的规则
     - `eslint:recommended`: ESLint推荐的规则
     - `@vue/typescript/recommended`: Vue + TypeScript推荐规则
     - `plugin:prettier/recommended`: Prettier集成

2. **使用方法**：

   a. **命令行使用**：
   ```bash
   # 检查并修复所有文件
   npm run lint
   
   # 只检查不修复
   npx eslint "src/**/*.{js,ts,vue}"
   
   # 检查并自动修复
   npx eslint "src/**/*.{js,ts,vue}" --fix
   ```

   b. **VS Code集成**：
   1. 安装 "ESLint" 插件
   2. 在设置中启用 "ESLint: Auto Fix On Save"

3. **常用规则配置**：
让我们添加一些常用的规则配置：
4. **ESLint配置建议**：
   - 对于TypeScript文件：
     - 使用`@typescript-eslint`的规则来检查类型问题
     - 建议开启严格模式规则
   - 对于Vue文件：
     - 使用`plugin:vue/recommended`获取更严格的Vue规则
     - 可以配置组件命名规则
   - 对于测试文件：
     - 可以在`overrides`中为测试文件配置特殊规则

5. **常见问题解决**：
   - 如果遇到ESLint和Prettier冲突，检查是否正确配置了`plugin:prettier/recommended`
   - 如果某些规则太严格，可以在`.eslintrc.js`的`rules`中设置：
     ```js
     rules: {
       "规则名": "off" // 或 "warn" 或 "error"
     }
     ```

6. **VS Code设置建议**：
   创建或编辑`.vscode/settings.json`：
   ```json
   {
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     },
     "eslint.validate": [
       "javascript",
       "typescript",
       "vue"
     ]
   }
   ```





# package.json

```json
{
  //......
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^5.4.0",
    "@typescript-eslint/parser": "^5.4.0",
    "@vue/cli-plugin-babel": "~5.0.0",
    "@vue/cli-plugin-eslint": "~5.0.0",
    "@vue/cli-plugin-router": "~5.0.0",
    "@vue/cli-plugin-typescript": "~5.0.0",
    "@vue/cli-plugin-vuex": "~5.0.0",
    "@vue/cli-service": "~5.0.0",
    "@vue/eslint-config-typescript": "^9.1.0",
    "eslint": "^7.32.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-vue": "^8.0.3",
    "prettier": "^2.4.1",
    "mockjs": "^1.1.0",
    "nodemon": "^3.0.1",
    "sass": "^1.32.7",
    "sass-loader": "^12.0.0",
    "typescript": "~4.5.5",
    "vue-template-compiler": "^2.6.14"
  }
}
```

