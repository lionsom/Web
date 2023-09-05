## Filesystem

1. [點此下載測試頁面檔案](demo.zip)

2. 解壓縮後在資料夾內執行 `npx serve .`

3. 瀏覽器開啟 `localhost:5000`，打開 DevTools > Sources > Filesystem

4. 將下載的資料夾拖入 Filesystem，點擊上方的「Allow」，檔名旁會有綠點

5. 修改有綠點的 `index.html`、`style.css`、`index.js` 並存檔就會同步變化



## 使用 npx http-server 命令快速的开启一个静态服务器

```bash
$ npx serve .

# 默认 8080端口
$ npx http-server

# 当然也可以指定端口号 
$ npx http-server -p 3000
```

