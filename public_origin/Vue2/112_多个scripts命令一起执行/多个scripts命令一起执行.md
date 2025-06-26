在 Vue2 项目的 `package.json` 中合并执行多个 script 命令，有以下几种常用方法：

### 方法 1：使用 `&&` 顺序执行（串行）
```json
{
  "scripts": {
    "command1": "echo '命令1'",
    "command2": "echo '命令2'",
    "combined": "npm run command1 && npm run command2"
  }
}
```
**特点**：顺序执行，前一个命令成功后才执行下一个

---

### 方法 2：使用 `&` 并行执行（仅 Unix 系统）
```json
{
  "scripts": {
    "parallel": "npm run command1 & npm run command2"
  }
}
```
**注意**：Windows 系统不支持此语法

---

### 方法 3：跨平台并行工具（推荐）
#### 3.1 使用 `concurrently`（最常用）
1. 安装：
```bash
npm install concurrently --save-dev
```

2. 配置：
```json
{
  "scripts": {
    "dev": "concurrently \"npm:command1\" \"npm:command2\""
    // 或简写： "dev": "concurrently \"npm run command1\" \"npm run command2\""
  }
}
```

#### 3.2 使用 `npm-run-all`
1. 安装：
```bash
npm install npm-run-all --save-dev
```

2. 配置：
```json
{
  "scripts": {
    "parallel": "run-p command1 command2",  // 并行
    "sequence": "run-s command1 command2"   // 串行
  }
}
```

---

### 完整示例
```json
{
  "name": "vue2-project",
  "scripts": {
    "lint": "eslint src",
    "build": "vue-cli-service build",
    "serve": "vue-cli-service serve",
    
    // 合并命令示例
    "dev": "concurrently \"npm:serve\" \"npm:lint\"",
    "deploy": "run-s lint build"
  },
  "devDependencies": {
    "concurrently": "^8.0.1",
    "npm-run-all": "^4.1.5"
  }
}
```

### 执行方式
```bash
# 并行执行
npm run dev

# 串行执行
npm run deploy
```

### 最佳实践建议
1. **跨平台需求**：优先使用 `concurrently` 或 `npm-run-all`
2. **简单串行**：原生 `&&` 即可满足
3. **错误处理**：
   - `&&` 会在失败时停止后续命令
   - `concurrently` 默认会关闭所有命令（可通过 `--kill-others-on-fail` 控制）
4. **输出管理**：
   - `concurrently` 会用不同颜色区分命令输出
   - 添加 `-p` 参数可显示进程名：`concurrently -p "[{name}]" ...`

> **提示**：在 Vue CLI 项目中，通常会将 `serve`/`build` 与代码检查、Mock 服务等命令组合使用，实现高效开发工作流。