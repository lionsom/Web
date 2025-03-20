[了解 Node.js 中 package.json 和 pnpm-lock.yaml 之间的区别](https://sharonsahadevan.medium.com/understanding-the-difference-between-package-json-and-pnpm-lock-yaml-in-node-js-f9d47a6a2386)



管理依赖项是开发 Node.js 应用程序的关键部分。package.json 和 pnpm-lock.yaml 是管理 Node.js 应用程序中依赖关系所必需的两个文件。这篇文章将解释这两个文件之间的差异以及它们的使用方式。

# package.json

***package.json***是 Node.js 应用程序的主要配置文件。它列出了应用程序所需的所有依赖项以及其他元数据，例如应用程序名称、版本、作者和许可证。***npm、yarn 和 pnpm\***等包管理器使用 package.json 文件来下载和安装必要的依赖项。

package.json 中的依赖项属性列出了应用程序运行所需的所有包。根据项目的配置，这些包通常安装在全局或本地。devDependency 是 package.json 中的另一个属性，它列出了仅出于开发目的（例如测试、linting 和构建应用程序）所需的包。

当包管理器使用 package.json 安装依赖项时，它会在项目的根目录中创建一个包含所有已安装包的 node_modules 目录。

# pnpm-lock.yaml

***pnpm-lock.yaml***是由 pnpm 包管理器生成的锁定文件。它包含所有依赖项及其版本的完整解析列表，包括所有嵌套依赖项。锁定文件可确保在所有环境中安装相同版本的软件包，并防止因安装同一软件包的不同版本而可能出现的冲突。锁定文件还提供更快、更可靠的安装，特别是在处理许多依赖项时。

当您使用 pnpm 安装软件包时，它会在项目的根目录中创建一个 pnpm-lock.yaml 文件，列出所有已安装的软件包及其依赖项。然后，当您运行该应用程序时，pnpm 会读取 pnpm-lock.yaml 文件并安装相同版本的软件包。

每当您使用 pnpm 安装或删除软件包时，pnpm-lock.yaml 文件都会更新。因此，将 pnpm-lock.yaml 文件提交到版本控制系统非常重要，以确保不同环境中安装的一致性。

# package.json 和 pnpm-lock.yaml 之间的差异

package.json 和 pnpm-lock.yaml 之间的主要区别在于它们的用途。*package.json 列出了应用程序所需的所有依赖项和元数据，而 pnpm-lock.yaml 则指定已解析的依赖项及其版本，确保跨不同环境的一致且可靠的安装。*

所有包管理器都使用 package.json 来安装包，而 pnpm-lock.yaml 仅由 pnpm 包管理器使用。

另一个区别是*package.json 可以手动编辑，而 pnpm-lock.yaml 不应该手动编辑*。手动编辑 pnpm-lock.yaml 文件可能会导致已安装的软件包发生冲突和不一致。

# 结论

package.json 和 pnpm-lock.yaml 是管理 Node.js 应用程序中依赖项的重要文件。package.json 列出了应用程序的依赖项和元数据，而 pnpm-lock.yaml 指定了已解析的依赖项及其版本，确保跨不同环境的一致且可靠的安装。通过了解这两个文件之间的差异，您可以有效地管理依赖关系并确保您的应用程序平稳高效地运行。
