const fs = require('fs');
const path = require('path');

// 忽略的文件和目录
const IGNORE_PATTERNS = [
    'node_modules',
    '.git',
    '.DS_Store',
    'index.js',
    'package.json',
    'package-lock.json',
    'images',
    'assets',
    'asset',
    'code-demo',
    '尚硅谷资料-Webpack4-1基础',
    '尚硅谷资料-Webpack4-2高级',
    '尚硅谷Webpack5-代码',
    '尚硅谷Webpack5-课件',
    '01-随堂代码',
    '尚硅谷Vue2+3',
    '官方-代码',
];

// 生成目录树的函数
function generateDirectoryTree(startPath, indent = '') {
    let result = '';
    const files = fs.readdirSync(startPath);

    files.sort((a, b) => {
        // 将目录排在文件前面
        const aIsDir = fs.statSync(path.join(startPath, a)).isDirectory();
        const bIsDir = fs.statSync(path.join(startPath, b)).isDirectory();
        if (aIsDir && !bIsDir) return -1;
        if (!aIsDir && bIsDir) return 1;
        return a.localeCompare(b);
    });

    for (const file of files) {
        if (IGNORE_PATTERNS.includes(file)) continue;

        const filePath = path.join(startPath, file);
        const relativePath = path.relative('.', filePath);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            result += `${indent}- 📁 [${file}](./${relativePath})\n`;
            result += generateDirectoryTree(filePath, indent + '  ');
        } else {
            result += `${indent}- 📄 [${file}](./${relativePath})\n`;
        }
    }

    return result;
}

// 生成markdown内容
function generateMarkdown() {
    const content = `# 项目目录结构

> 生成时间：${new Date().toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}

## 目录树

${generateDirectoryTree('.')}

---
*此文件由脚本自动生成*
`;

    fs.writeFileSync('directory-structure.md', content, 'utf8');
    console.log('目录结构已生成到 directory-structure.md 文件中');
}

// 执行生成
generateMarkdown();
