export const data = {
  "key": "v-7d0ce4de",
  "path": "/intro/learn.html",
  "title": "我能学到什么",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "contributors": [
      {
        "name": "linxiang",
        "email": "lionsom.linx@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "intro/learn.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
