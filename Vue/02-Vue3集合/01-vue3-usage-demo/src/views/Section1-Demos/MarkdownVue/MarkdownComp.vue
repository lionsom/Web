<script lang="ts" setup>
// import MarkdownComponent from "/Vue3基础/defineProps/defineProps.md"; // 直接引入 .md 文件

import MarkdownComponent from "@/assets/markdown/Vue3 env.d.ts文件/Vue3中env.d.ts文件.md";
</script>

<template>
  <div class="markdown-content">
    <MarkdownComponent />
  </div>
</template>


<style lang="scss">
.markdown-content {
  /* 自定义 Markdown 样式 */
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;

  .markdown-body {
    background-color: aliceblue;

    h2 {
      color: red !important;
      font-size: 50px;
      font-weight: 900;
    }

    pre {
      border: 2px solid green;
      background-color: aquamarine !important;

      .language-js {
        color: red;
      }
    }

  }
}
</style>
