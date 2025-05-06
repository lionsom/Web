# 6. 跳转下载

https://segmentfault.com/q/1010000010493203

https://www.zhangxinxu.com/wordpress/2017/07/js-text-string-download-as-html-json-file/

- 张鑫旭-[JS前端创建html或json文件并浏览器导出下载](https://link.segmentfault.com/?enc=bDtl%2B6jmP8S7I78vLlCRiA%3D%3D.sgtUNh2Uthp9w3yGQh3FQ3bUAw3FD9omZWyEzNsxKXVl6t8HgShBP3Ba7JCFE0aNmE%2Bi04MjNd3KqUMIJ7TuuhXuA6xDl7GDib6%2F2%2BhQuR6Qb1ypCx2dTD%2BXTGdWocdU)
- yugasun-[前端js下载文件方案探索](https://yugasun.com/post/optimize-download-files-in-frontend.html)



https://blog.csdn.net/u012848304/article/details/135282481

https://blog.csdn.net/qq_47657875/article/details/130204023

https://blog.csdn.net/ZuoZuoDangerou/article/details/109801105

https://juejin.cn/post/7261788614744260669









```vue
<template>
  <div class="download-demo-container">
    <h1 class="title">文件下载示例</h1>

    <div class="download-cards">
      <div class="download-card">
        <h3>方式一：HTML原生链接</h3>
        <p>使用HTML的a标签download属性直接下载文件</p>
        <a
          class="download-link"
          href="/public/AllFiles/工作随笔/2023年度套餐方案.xlsx"
          download="download.xlsx"
        >
          <span class="icon">📥</span>下载Excel文件
        </a>
      </div>

      <div class="download-card">
        <h3>方式二：JS创建临时链接</h3>
        <p>通过JavaScript动态创建链接并触发点击事件下载</p>
        <button class="download-btn" @click="downloadFile" :disabled="isDownloading">
          <span class="icon">📥</span>
          <span v-if="isDownloading">下载中...</span>
          <span v-else>下载文件</span>
        </button>
      </div>

      <div class="download-card">
        <h3>方式三：新窗口打开</h3>
        <p>在新标签页中打开文件，由浏览器决定是显示还是下载</p>
        <button class="download-btn" @click="openFileInNewTab">
          <span class="icon">🔗</span>在新窗口打开
        </button>
      </div>

      <div class="download-card">
        <h3>方式四：下载Blob文件</h3>
        <p>通过Blob对象下载文件</p>
        <button class="download-btn" @click="downloadBlob">
          <span class="icon">📥</span>下载文件
        </button>
      </div>

      <div class="download-card">
        <h3>方式五：下载URL文件</h3>
        <p>通过URL下载文件</p>
        <button class="download-btn" @click="downloadFromUrl">
          <span class="icon">📥</span>下载文件
        </button>
      </div>

      <div class="download-card">
        <h3>方式六：下载Base64文件</h3>
        <p>通过Base64下载文件</p>
        <button class="download-btn" @click="downloadBase64">
          <span class="icon">📥</span>下载文件
        </button>
      </div>

      <div class="download-card">
        <h3>方式七：使用axios下载</h3>
        <p>通过axios下载文件</p>
        <button class="download-btn" @click="downloadFromUrl_Axios">
          <span class="icon">📥</span>下载文件
        </button>
      </div>

      <div class="download-card">
        <h3>方式八：使用form表单下载</h3>
        <p>通过form表单下载文件</p>
        <button class="download-btn" @click="downloadFile_Form">
          <span class="icon">📥</span>下载文件
        </button>
      </div>
    </div>
    <div v-if="downloadMessage" :class="['download-message', downloadStatus]">
      {{ downloadMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
const isDownloading = ref(false);
const downloadMessage = ref('');
const downloadStatus = ref('');

// 方式二：JS创建临时链接下载
const downloadFile = () => {
  try {
    isDownloading.value = true;
    downloadMessage.value = '文件下载中...';
    downloadStatus.value = 'info';

    const url = '/public/AllFiles/工作随笔/2023年度套餐方案.xlsx';
    const a = document.createElement('a');
    a.href = url;
    a.download = '2023年度套餐方案.xlsx';
    a.click();

    // 模拟下载完成
    setTimeout(() => {
      downloadMessage.value = '文件下载成功！';
      downloadStatus.value = 'success';
      isDownloading.value = false;

      // 3秒后清除消息
      setTimeout(() => {
        downloadMessage.value = '';
      }, 3000);
    }, 1500);
  } catch (error) {
    downloadMessage.value = '下载失败，请重试';
    downloadStatus.value = 'error';
    isDownloading.value = false;
  }
};

// 方式三：新窗口打开文件
const openFileInNewTab = () => {
  const url = '/public/AllFiles/工作随笔/2023年度套餐方案.xlsx';
  window.open(url, '_blank');

  downloadMessage.value = '文件已在新窗口打开';
  downloadStatus.value = 'info';

  // 3秒后清除消息
  setTimeout(() => {
    downloadMessage.value = '';
  }, 3000);
};

// 下载Blob文件的核心函数
function downloadBlob_Core(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || 'downloaded-file';
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    // 释放创建的URL对象,避免内存泄漏
    URL.revokeObjectURL(url);
  }, 100);
}

// 下载Blob文件
const downloadBlob = () => {
  // 使用示例：下载文本文件
  const text = 'Hello, world!';
  const blob = new Blob([text], { type: 'text/plain' });
  downloadBlob_Core(blob, 'example.txt');
};

// 下载URL文件的核心函数
async function downloadFromUrl_Core(url: string, filename: string) {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    downloadBlob_Core(blob, filename);
  } catch (error) {
    console.error('Download failed:', error);
  }
}

// 下载URL文件
const downloadFromUrl = async () => {
  // 使用示例
  downloadFromUrl_Core('/public/AllFiles/工作随笔/2023年度套餐方案.xlsx', 'my-xxx.xlsx');
};

// 下载Base64文件的核心函数
function downloadBase64_Core(base64Data: string, filename: string, mimeType: string) {
  const byteCharacters = atob(base64Data.split(',')[1]);
  const byteNumbers = new Array(byteCharacters.length);

  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }

  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], { type: mimeType });
  downloadBlob_Core(blob, filename);
}

// 下载Base64文件
const downloadBase64 = () => {
  // 使用示例
  const base64Data =
    'data:image/png;base64,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';
  downloadBase64_Core(base64Data, 'image.png', 'image/png');
};

function frontDownload_Core(fileUrl: string, fileName: string) {
  // 发送Ajax请求获取文件二进制数据
  axios({
    url: fileUrl,
    method: 'GET',
    responseType: 'blob',
    data: {},
  }).then(response => {
    //此处返回的blob对象
    var fileURL = window.URL.createObjectURL(new Blob([response.data]));
    console.log(fileURL, 'fileURL');
    var fileLink = document.createElement('a');
    fileLink.href = fileURL;
    fileLink.setAttribute('download', fileName);
    document.body.appendChild(fileLink);
    fileLink.click();
  });
}

const downloadFromUrl_Axios = () => {
  frontDownload_Core('/public/AllFiles/工作随笔/2023年度套餐方案.xlsx', 'my-xxx.xlsx');
};

// 方式八：使用form表单下载
function downloadFile_Form() {
  var form = document.createElement('form');
  form.setAttribute('action', '/public/AllFiles/工作随笔/2023年度套餐方案.xlsx');
  form.setAttribute('method', 'get');
  form.setAttribute('target', '_blank');
  form.setAttribute('style', 'display:none');
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}

</script>

<style scoped lang="scss">
.download-demo-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'PingFang SC', Arial, sans-serif;
}

.title {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
  font-weight: 600;
}

.download-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.download-card {
  background: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  h3 {
    color: #2c3e50;
    margin-top: 0;
    margin-bottom: 10px;
  }

  p {
    color: #606266;
    margin-bottom: 20px;
    flex-grow: 1;
  }
}

.download-link,
.download-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background: #409eff;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #66b1ff;
  }

  &:active {
    background: #3a8ee6;
  }

  &:disabled {
    background: #a0cfff;
    cursor: not-allowed;
  }
}

.icon {
  margin-right: 8px;
  font-size: 18px;
}

.download-message {
  padding: 12px 20px;
  border-radius: 4px;
  margin-top: 20px;
  text-align: center;

  &.info {
    background: #e1f3ff;
    color: #1890ff;
  }

  &.success {
    background: #f0f9eb;
    color: #67c23a;
  }

  &.error {
    background: #fef0f0;
    color: #f56c6c;
  }
}
</style>

```

