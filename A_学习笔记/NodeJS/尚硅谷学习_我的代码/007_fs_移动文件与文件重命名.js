//导入 fs 模块
const fs = require("fs");

fs.rename("./观书有感.txt", "./论语/观书有感.txt", (err) => {
  if (err) throw err;
  console.log("移动完成");
});

fs.renameSync("./座右铭.txt", "./论语/我的座右铭.txt");
