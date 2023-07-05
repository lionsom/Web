//导入 fs 模块
const fs = require("fs");
fs.readFile("./座右铭.txt", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.readFile("./座右铭.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//创建读取流对象
let rs = fs.createReadStream("./观书有感.txt");
//每次取出 64k 数据后执行一次 data 回调
rs.on("data", (data) => {
  console.log(data);
  console.log(data.length);
}); 
//读取完毕后, 执行 end 回调
rs.on("end", () => {
  console.log("读取完成");
});
