export const data = {
  "key": "v-10b408dc",
  "path": "/intro/pre.html",
  "title": "前置知识",
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
  "filePathRelative": "intro/pre.md"
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
