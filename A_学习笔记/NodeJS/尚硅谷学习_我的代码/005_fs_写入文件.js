/*

*/

// 1. 导入 fs 模块
// require 是 Node.js 环境中的'全局'变量，用来导入模块
const fs = require("fs");

fs.writeFile("./座右铭.txt", "我是你大爷", (err) => {
  //如果写入失败，则回调函数调用时，会传入错误对象，如写入成功，会传入 null
  if (err) {
    console.log("写入失败！！！");
    return;
  } else {
    console.log("写入成功！！！");
  }
});

try {
  fs.writeFileSync("./座右铭.txt", "三人行，必有我师焉。");
} catch (e) {
  console.log(e);
}

fs.appendFile("./座右铭.txt", "择其善者而从之，其不善者而改之。", (err) => {
  if (err) throw err;
  console.log("追加成功");
});

try {
  fs.appendFileSync("./座右铭.txt", "\r\n温故而知新, 可以为师矣");
} catch (e) {
  console.log(e);
}

let ws = fs.createWriteStream("./观书有感.txt");
ws.write("半亩方塘一鉴开\r\n");
ws.write("天光云影共徘徊\r\n");
ws.write("问渠那得清如许\r\n");
ws.write("为有源头活水来\r\n");
ws.end();