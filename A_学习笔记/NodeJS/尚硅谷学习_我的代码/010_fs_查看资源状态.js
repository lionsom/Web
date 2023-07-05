//异步获取状态
fs.stat("./data.txt", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//同步获取状态
let data = fs.statSync("./data.txt");
