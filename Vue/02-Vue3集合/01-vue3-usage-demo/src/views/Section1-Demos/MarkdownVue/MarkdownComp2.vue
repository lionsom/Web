<script>
import { marked } from 'marked';

export default {
  data() {
    return {
      markdownContent: '', // 用于存储 Markdown 文件内容
    };
  },
  mounted() {
    this.loadMarkdown();
  },
  methods: {
    async loadMarkdown() {
      try {
        const response = await fetch('/Vue3基础/Vue3 env.d.ts文件/Vue3中env.d.ts文件.md'); // 根据 public 下的路径加载文件
        if (response.ok) {
          const text = await response.text();
          this.markdownContent = marked(text); // this.parseMarkdown(text); // 将 Markdown 转换为 HTML
        } else {
          console.error('Failed to load markdown file:', response.status);
        }
      } catch (error) {
        console.error('Error loading markdown file:', error);
      }
    },
    parseMarkdown(md) {
      // 简单示例：可以引入更强大的库（如 marked.js）解析 Markdown
      return md.replace(/\n/g, '<br>').replace(/#/g, '<h1>').replace(/<h1>(.*)<br>/g, '<h1>$1</h1>');
    },
  },
};
</script>


<template>
  <div>
    <h1>Markdown Viewer</h1>
    <div v-html="markdownContent" class="markdown-content"></div>
  </div>
</template>


<style lang="scss">
.markdown-content {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: aliceblue;

  pre {
    border: 2px solid greenyellow;
    margin: 20px;
    background-color: aquamarine;

    code {
      font-family: Consolas, "courier new";
      color: crimson;
      background-color: transparent;
      padding: 2px;
      font-size: 105%;
    }

    .language-js {
      color: orange;
    }
  }

  code {
      font-family: Consolas, "courier new";
      color: crimson;
      background-color: #f1f1f1;
      padding: 2px;
      font-size: 105%;
    }
}
</style>
