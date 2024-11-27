# npm 命名空间

在 npm 中，**命名空间（scope）** 是一种组织和区分包的方式。它以 `@` 开头，通常用于标识包的归属，例如公司、团队或个人。

------

## **1. 什么是命名空间（Scope）？**

命名空间是 npm 包名称的一部分，格式如下：

```plaintext
@scope/package-name
```

- **`@scope`**：命名空间，用于分组或归类包。
- **`package-name`**：实际包名。

例如：

- **`@angular/core`**：`@angular` 是命名空间，`core` 是包名。
- **`@babel/preset-env`**：`@babel` 是命名空间，`preset-env` 是包名。

------

## **2. 命名空间的作用**

1. **组织包**
    - 命名空间将相关包归类在一起，方便管理和查找。例如，一个团队可以将所有工具库放在 `@team/tools` 下。
2. **避免命名冲突**
    - 不同开发者或团队可能会创建相同名称的包，但使用命名空间可以确保唯一性。例如：
        - `@company/button`
        - `@another-company/button`
3. **权限控制**
    - 私有包通常使用命名空间来限定访问权限。只有授权的用户才能访问和安装私有包。
4. **品牌标识**
    - 命名空间可以作为团队、公司或项目的标识。例如，`@nestjs` 标识 NestJS 框架相关的所有包。

------

## **3. 创建命名空间**

### **使用 npm 创建命名空间**

1. 确保 npm 版本为 **2.7.0** 或更高。

2. 在 npm 注册表上登录：

    ```bash
    npm login
    ```

3. 发布带有命名空间的包：

    - 假设包名为 `my-package`，命名空间为 `@my-scope`：

        ```bash
        npm publish --access public
        ```

4. 如果是私有包：

    ```bash
    npm publish --access restricted
    ```

------

## **4. 使用带命名空间的包**

### **安装命名空间包**

使用以下命令安装带命名空间的包：

```bash
npm install @scope/package-name
```

例如：

```bash
npm install @angular/core
```

### **在项目中引入命名空间包**

```javascript
const core = require('@angular/core');
```

或者使用 ES 模块：

```javascript
import core from '@angular/core';
```

### **安装私有包**

如果安装私有包（如 `@company/private-package`），需要在 `.npmrc` 中配置访问令牌：

```plaintext
//registry.npmjs.org/:_authToken=YOUR_AUTH_TOKEN
```

------

## **5. 在 .npmrc 文件中配置命名空间**

可以为不同的命名空间设置自定义的注册表地址。例如：

```plaintext
@my-company:registry=https://my-private-registry.com
```

当安装 `@my-company` 命名空间下的包时，npm 会自动从配置的注册表下载。

------

## **6. 命名空间包的权限管理**

### **公共包**

- 默认情况下，带命名空间的包发布为**公共包**（`--access public`）。
- 任何用户都可以安装此包。

### **私有包**

- 使用 `--access restricted` 发布为私有包：

    ```bash
    npm publish --access restricted
    ```

- 只有授权用户才能访问和安装。

### **团队协作**

- 在 npm 网站上，可以将命名空间的权限分配给团队成员，让他们可以发布或管理命名空间下的包。

------

## **7. 命名空间的优势总结**

- **清晰的包组织结构**：命名空间帮助团队组织代码，明确包的来源。
- **避免命名冲突**：不同组织可以使用相同的包名，而不会发生冲突。
- **私有化支持**：通过命名空间轻松管理私有包。
- **品牌标识**：让用户知道包属于哪个组织或项目。

------

## **8. 示例**

以下是一个使用命名空间包的实际案例：

1. **公共包：`@angular/core`**

    ```bash
    npm install @angular/core
    ```

    - `@angular` 命名空间中，`core` 是 Angular 核心模块。

2. **私有包：`@my-company/utils`**

    ```bash
    npm install @my-company/utils
    ```

    - 需要先配置私有注册表或访问令牌。

3. **.npmrc 文件配置**

    ```plaintext
    @my-company:registry=https://registry.my-company.com
    ```

这使得项目更灵活、安全，同时保持包管理的高效性。