# 搭建npm私有仓库的方案整理

搭建一个私有的 npm 仓库可以帮助团队管理内部的 npm 包，提供更快、更安全的包分发。以下是几种常见的私有 npm 仓库解决方案以及搭建的详细步骤。

------

## 1. **使用 Verdaccio 搭建私有 npm 仓库**

**Verdaccio** 是一个轻量级的私有 npm 仓库，易于安装和配置。

### **步骤 1：安装 Verdaccio**

1. 确保已安装 Node.js 和 npm。

2. 使用 npm 安装 Verdaccio：

    ```bash
    npm install -g verdaccio
    ```

### **步骤 2：启动 Verdaccio**

1. 直接运行以下命令启动 Verdaccio：

    ```bash
    verdaccio
    ```

2. 默认情况下，Verdaccio 会启动在 `http://localhost:4873`。

### **步骤 3：配置 Verdaccio**

- Verdaccio 的配置文件默认位于 `~/.config/verdaccio/config.yaml`。

- 关键配置项：

    ```yaml
    storage: ./storage  # 存储包的本地目录
    auth:
      htpasswd:
        file: ./htpasswd  # 用户认证文件
    uplinks:
      npmjs:
        url: https://registry.npmjs.org/  # 默认上游 npm 注册表
    packages:
      '@*/*':
        access: $all
        publish: $authenticated  # 仅认证用户可以发布
        proxy: npmjs
      '**':
        access: $all
        publish: $authenticated
        proxy: npmjs
    ```

### **步骤 4：配置用户认证**

- 使用 

    ```
    npm adduser
    ```

     在 Verdaccio 中注册用户：

    ```bash
    npm set registry http://localhost:4873/
    npm adduser
    ```

    按提示输入用户名、密码和邮箱。

### **步骤 5：发布和安装私有包**

- 发布包：

    ```bash
    npm publish
    ```

- 安装私有包：

    ```bash
    npm install <package-name>
    ```

------

## 2. **使用 Nexus Repository 搭建私有 npm 仓库**

**Nexus Repository** 是一款强大的包仓库管理工具，支持 npm、Maven、Docker 等多种格式。

### **步骤 1：安装 Nexus Repository**

1. 下载 Nexus Repository：

    - [下载地址](https://www.sonatype.com/products/repository-oss)

2. 解压并启动 Nexus：

    ```bash
    ./nexus run
    ```

    默认管理界面地址为 

    ```
    http://localhost:8081/
    ```

    。

### **步骤 2：创建 npm 仓库**

1. 登录 Nexus 管理界面。
2. 选择 `Repositories > Create Repository`。
3. 选择 `npm (hosted)`，配置仓库名称和存储路径。
4. 保存配置。

### **步骤 3：配置 npm 客户端**

- 在 

    ```
    .npmrc
    ```

     文件中添加 Nexus 仓库地址：

    ```plaintext
    registry=http://localhost:8081/repository/npm-hosted/
    ```

### **步骤 4：发布和安装私有包**

- 发布包：

    ```bash
    npm publish
    ```

- 安装包：

    ```bash
    npm install <package-name>
    ```

------

## 3. **使用 GitHub Packages 搭建私有 npm 仓库**

**GitHub Packages** 提供私有和公共包管理服务，直接集成到 GitHub 项目中。

### **步骤 1：配置 GitHub Packages**

1. 确保项目已托管在 GitHub。

2. 在 

    ```
    .npmrc
    ```

     文件中配置 GitHub Packages：

    ```plaintext
    @OWNER:registry=https://npm.pkg.github.com
    //npm.pkg.github.com/:_authToken=YOUR_PERSONAL_ACCESS_TOKEN
    ```

    - `OWNER` 替换为 GitHub 用户名或组织名。
    - `YOUR_PERSONAL_ACCESS_TOKEN` 是 GitHub 生成的个人访问令牌。

### **步骤 2：发布和安装包**

- 发布包：

    ```bash
    npm publish --registry=https://npm.pkg.github.com
    ```

- 安装包：

    ```bash
    npm install @OWNER/package-name
    ```

------

## **对比三种方案**

| 特性           | Verdaccio            | Nexus Repository                 | GitHub Packages       |
| -------------- | -------------------- | -------------------------------- | --------------------- |
| **易用性**     | 简单易用             | 功能强大，配置稍复杂             | 集成 GitHub，简单配置 |
| **支持包类型** | 仅 npm               | 多种包类型（Maven、Docker、npm） | npm、Docker 等        |
| **认证方式**   | 自定义用户           | 内置用户管理                     | GitHub OAuth          |
| **适合场景**   | 小团队、本地私有仓库 | 大团队、多格式仓库               | GitHub 项目依赖管理   |

根据团队规模和需求选择合适的私有 npm 仓库方案。



## 4. cnpm方案

**cnpm（China npm）** 是阿里巴巴团队开发的一个 npm 私有仓库解决方案，基于 [Cnpmjs.org](https://github.com/cnpm/cnpmjs.org) 开源项目，可以轻松搭建企业内部的 npm 私有仓库，同时支持与官方 npm 仓库同步。

以下是使用 **cnpm** 搭建 npm 私有仓库的详细步骤。

------

### **1. 环境准备**

#### **必要条件**

- **Node.js** 和 **npm**。
- **MySQL** 数据库（用于存储包信息）。
- **Redis**（可选，用于缓存优化）。
- **Linux 或 macOS 系统**（推荐）。

------

### **2. 安装和配置 cnpm**

#### **步骤 1：安装 cnpmjs.org**

1. 克隆 cnpmjs.org 仓库：

    ```bash
    git clone https://github.com/cnpm/cnpmjs.org.git
    cd cnpmjs.org
    ```

2. 安装依赖：

    ```bash
    npm install
    ```

#### **步骤 2：配置 cnpm**

修改 `config/index.js` 文件，配置私有仓库的相关选项：

##### **基本配置**

```javascript
module.exports = {
  // 私有仓库模式
  enablePrivate: true,

  // 数据库配置（MySQL）
  mysql: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'your_password',
    database: 'cnpm',
  },

  // Redis 配置（可选，用于缓存）
  redis: {
    host: '127.0.0.1',
    port: 6379,
  },

  // 私有仓库名称
  scopes: ['@your-company'],

  // npm 官方仓库镜像同步配置
  registry: 'https://registry.npmjs.org',
  syncModel: 'all', // 同步所有包
};
```

##### **其他配置**

- **`enablePrivate`**：启用私有模式，仅允许特定作用域发布包。
- **`scopes`**：定义作用域范围（例如 `@your-company`）。
- **`syncModel`**：选择同步模式，可选 `none`、`exist`（仅同步存在的包）、`all`。

#### **步骤 3：初始化数据库**

确保 MySQL 数据库已启动，然后运行：

```bash
node scripts/init
```

#### **步骤 4：启动服务**

运行以下命令启动 cnpm 服务：

```bash
npm start
```

默认情况下，cnpm 服务运行在 `http://localhost:7001`。

------

### **3. 配置客户端**

#### **步骤 1：安装 cnpm 客户端**

使用 npm 全局安装 cnpm 客户端：

```bash
npm install -g cnpm
```

#### **步骤 2：设置私有仓库地址**

在项目中，使用以下命令将 npm 配置指向私有仓库：

```bash
cnpm set registry http://localhost:7001
```

或者直接在 `.npmrc` 中配置：

```plaintext
registry=http://localhost:7001/
```

#### **步骤 3：发布和安装包**

##### **发布私有包**

确保包名以定义的作用域开头，例如 `@your-company/package-name`：

```bash
npm publish --registry=http://localhost:7001
```

##### **安装私有包**

```bash
npm install @your-company/package-name
```

------

### **4. 数据同步（与官方 npm 同步）**

如果需要与官方 npm 仓库同步公共包：

1. 在 cnpmjs.org 配置文件中设置 `syncModel` 为 `all`。

2. 使用以下命令手动同步包：

    ```bash
    npx cnpm sync <package-name>
    ```

3. 也可以配置自动同步任务，通过定时任务或脚本定期同步。

------

### **5. 监控与管理**

- **查看同步状态** 在浏览器中访问 `http://localhost:7001/sync/<package-name>`，查看包的同步状态。

- **管理用户** 通过命令行管理用户权限，例如添加管理员：

    ```bash
    npx cnpm adduser
    npx cnpm admin add <username>
    ```

------

### **6. 常见问题**

#### **1. 如何设置外网访问？**

在生产环境中，可以使用 Nginx 或其他反向代理工具将 cnpm 服务暴露到公网：

```nginx
server {
    listen 80;
    server_name npm.yourdomain.com;

    location / {
        proxy_pass http://localhost:7001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

#### **2. 无法同步包**

- 检查网络连接是否可以访问官方 npm。
- 确认同步模式和包名称是否正确。

------

### **总结**

**cnpm** 是一款强大、灵活的私有 npm 仓库解决方案，适合中大型企业团队。它支持私有包管理、与官方 npm 仓库同步以及多用户权限管理。