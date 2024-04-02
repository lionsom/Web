const promise = new Promise((resolve, reject) => {
  // 异步操作...
  if (1) {
    resolve("操作成功");
  } else {
    reject("操作失败");
  }
});

promise.then(
  (result) => {
    console.log("操作成功：", result);
  },
  (error) => {
    console.log("操作失败：", error);
  }
);
