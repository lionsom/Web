function processLargeData() {
  console.time("time112");
  // 模拟耗时操作
  for (let i = 0; i < 1000000; i++) {
      Math.sqrt(i);
  }
  console.timeEnd("time112");  // key对应
}

processLargeData();