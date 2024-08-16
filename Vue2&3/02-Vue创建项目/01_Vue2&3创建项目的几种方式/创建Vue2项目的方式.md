在 Vue 2 中创建项目的常见方式有以下几种：

### 1. 使用 Vue CLI
这是最常用和推荐的方法，Vue CLI 提供了一个交互式命令行工具，可以快速生成 Vue 项目的模板。

#### 步骤：
1. 安装 Vue CLI (如果未安装)：
   ```bash
   npm install -g @vue/cli
   ```

2. 创建一个新项目：
   ```bash
   vue create my-project
   ```

3. 选择你需要的配置，Vue CLI 将会自动生成一个 Vue 2 项目。

4. 进入项目目录并运行项目：
   ```bash
   cd my-project
   npm run serve
   ```

### 2. 使用 Vue CLI GUI
Vue CLI 还提供了一个图形化用户界面 (GUI) 来管理和创建项目。

#### 步骤：
1. 启动 Vue CLI GUI：
   ```bash
   vue ui
   ```

2. 在浏览器中打开的界面上，你可以通过点击 "Create" 按钮来创建一个新项目，并且可以选择各种配置选项。

### 3. 手动创建项目
如果你想更灵活地配置项目，或者在没有安装 Vue CLI 的情况下，可以手动创建一个 Vue 2 项目。

#### 步骤：
1. 创建一个新的项目目录并进入该目录：
   ```bash
   mkdir my-project
   cd my-project
   ```

2. 初始化一个新的 npm 项目：
   ```bash
   npm init -y
   ```

3. 安装 Vue 2：
   ```bash
   npm install vue@2
   ```

4. 手动创建以下文件：
   - `index.html`: 用于包含你的 Vue 应用的 HTML 文件。
   - `main.js`: 你的 Vue 入口文件。
   - `App.vue`: 主 Vue 组件。

5. 使用简单的 Web 服务器（例如 `http-server`）或直接打开 `index.html` 文件来查看项目。

### 4. 使用 Vue 模板
Vue 社区和第三方开发者提供了一些预先配置好的项目模板，可以使用这些模板快速启动一个 Vue 2 项目。

#### 步骤：
1. 查找你需要的模板，例如：
   ```bash
   vue init webpack my-project
   ```
   
2. 该命令将使用 Webpack 模板创建一个 Vue 2 项目。你也可以选择其他模板，比如 `simple` 或 `pwa`。

3. 进入项目目录并安装依赖：
   ```bash
   cd my-project
   npm install
   ```

4. 运行项目：
   ```bash
   npm run dev
   ```

### 5. 使用第三方脚手架工具
除了 Vue CLI，其他工具如 `Vite` 也可以用来创建 Vue 2 项目，但需要手动指定 Vue 2 的版本。

#### 步骤：
1. 创建项目目录并初始化 npm：
   ```bash
   npm init vite@latest my-project
   ```

2. 在选择框中，选择 Vue 项目，然后手动安装 Vue 2 依赖：
   ```bash
   npm install vue@2
   ```

3. 根据需要调整项目配置。

---

这些方法都可以帮助你创建一个 Vue 2 项目，根据具体需求选择合适的方法。