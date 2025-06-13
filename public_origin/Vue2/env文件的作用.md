# Vue 2 中 .env 文件的作用详解

在 Vue 2 项目中，`.env` 文件是**环境变量配置文件**，用于管理不同环境（开发、测试、生产等）下的配置参数。它使您能够在不修改代码的情况下切换不同环境的配置。

## 核心作用

### 1. 环境配置管理
- 为不同环境设置特定变量（开发、测试、生产等）
- 避免硬编码敏感信息（API密钥、服务地址等）

### 2. 安全保护
- 将敏感信息（API密钥、数据库密码）与代码分离
- 防止将机密信息提交到代码仓库（通过.gitignore排除）

### 3. 多环境支持
- 使用不同文件区分环境：`.env.development`, `.env.production`等
- 简化环境切换流程

### 4. 构建时配置
- 变量在构建时被静态嵌入到客户端包中
- 可通过process.env访问这些变量

## 文件命名规则

| 文件名              | 作用                                 | 加载时机       |
| ------------------- | ------------------------------------ | -------------- |
| `.env`              | 所有环境的默认配置                   | 始终加载       |
| `.env.local`        | 本地覆盖配置（不提交到仓库）         | 所有环境       |
| `.env.[mode]`       | 特定模式配置（如：.env.development） | 指定模式运行时 |
| `.env.[mode].local` | 特定模式的本地覆盖配置               | 指定模式运行时 |

## 使用方式

### 1. 创建环境文件
在项目根目录创建：
```
.env                # 全局默认
.env.development    # 开发环境
.env.production     # 生产环境
```

### 2. 定义环境变量
在文件中使用键值对格式：
```ini
# .env.development
VUE_APP_API_BASE_URL=http://localhost:3000/api
VUE_APP_DEBUG=true
VUE_APP_VERSION=1.0.0-dev
```

### 3. 在代码中使用
通过 `process.env` 访问变量：
```javascript
// src/api.js
export default {
  baseURL: process.env.VUE_APP_API_BASE_URL,
  
  // 使用默认值
  timeout: process.env.VUE_APP_TIMEOUT || 5000
}
```

### 4. 在 Vue 组件中使用
```javascript
export default {
  data() {
    return {
      apiUrl: process.env.VUE_APP_API_URL
    }
  },
  created() {
    if (process.env.VUE_APP_DEBUG === 'true') {
      console.log('Debug mode enabled')
    }
  }
}
```

## 重要规则

### 1. 变量命名要求
- **必须以 `VUE_APP_` 开头**：只有以 `VUE_APP_` 开头的变量会被嵌入客户端包
- 其他变量（如 `NODE_ENV`）是特殊变量，由 Vue CLI 自动设置

### 2. 变量类型
- 所有值都会被转换为字符串
- 布尔值应使用字符串表示：`VUE_APP_FEATURE_ENABLED="true"`

### 3. 优先级顺序
当存在多个环境文件时，优先级从高到低：
1. `.env.[mode].local`
2. `.env.[mode]`
3. `.env.local`
4. `.env`

## 实际应用示例

### 不同环境的 API 配置
```ini
# .env.development
VUE_APP_API_BASE_URL=http://dev-api.example.com
VUE_APP_GOOGLE_MAPS_KEY=dev_123456

# .env.staging
VUE_APP_API_BASE_URL=https://staging-api.example.com
VUE_APP_GOOGLE_MAPS_KEY=staging_123456

# .env.production
VUE_APP_API_BASE_URL=https://api.example.com
VUE_APP_GOOGLE_MAPS_KEY=prod_123456
```

### 在 vue.config.js 中使用
```javascript
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_BASE_URL,
        changeOrigin: true
      }
    }
  },
  
  // 根据环境设置 publicPath
  publicPath: process.env.NODE_ENV === 'production'
    ? '/production-sub-path/'
    : '/'
}
```

## 使用环境变量的最佳实践

### 1. 安全注意事项
- **永远不要**将 `.env` 文件提交到版本控制
- 在 `.gitignore` 中添加：
  ```
  .env
  .env.local
  .env.*.local
  ```

### 2. 默认值设置
在代码中为重要变量提供默认值：
```javascript
const apiKey = process.env.VUE_APP_API_KEY || 'default-key'
```

### 3. 类型转换
```javascript
// 将字符串转换为布尔值
const isDebug = process.env.VUE_APP_DEBUG === 'true'

// 转换为数字
const maxItems = Number(process.env.VUE_APP_MAX_ITEMS) || 10
```

### 4. 自定义环境模式
在 `package.json` 中添加自定义脚本：
```json
{
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "build:staging": "vue-cli-service build --mode staging",
    "test:e2e": "vue-cli-service test:e2e --mode testing"
  }
}
```

## 环境变量与 CI/CD 集成

### 在构建服务器中设置
```bash
# Linux/macOS
export VUE_APP_API_KEY="your_production_key"
npm run build

# Windows
set VUE_APP_API_KEY="your_production_key"
npm run build
```

### 在 GitHub Actions 中使用
```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Build project
      env:
        VUE_APP_API_KEY: ${{ secrets.PROD_API_KEY }}
        VUE_APP_COMMIT_SHA: ${{ github.sha }}
      run: npm run build
```

## 常见问题解决

### 1. 变量未生效？
- 检查变量名是否以 `VUE_APP_` 开头
- 重新启动开发服务器（修改.env文件需要重启）
- 确认文件位于项目根目录

### 2. 如何在 HTML 中使用？
在 `public/index.html` 中使用：
```html
<title><%= process.env.VUE_APP_TITLE %></title>
```

### 3. 如何访问系统环境变量？
在 `vue.config.js` 中可以访问所有环境变量：
```javascript
// vue.config.js
const systemVar = process.env.SYSTEM_VAR
```

## 与传统配置方式对比

| 方式               | 优点                   | 缺点                       |
| ------------------ | ---------------------- | -------------------------- |
| **.env 文件**      | 环境隔离、安全、易管理 | 需要重启开发服务器         |
| **config.js 文件** | 无需重启、动态加载     | 敏感信息暴露、环境切换复杂 |
| **构建参数**       | 适合 CI/CD 集成        | 命令行过长、维护困难       |

## 总结

在 Vue 2 项目中，`.env` 文件是管理环境配置的首选方案：
1. 为不同环境提供隔离配置
2. 保护敏感信息不进入代码仓库
3. 通过 `VUE_APP_` 前缀标识客户端可用变量
4. 与 Vue CLI 深度集成，简化构建过程

合理使用环境变量可以显著提高项目的可维护性、安全性和部署灵活性。