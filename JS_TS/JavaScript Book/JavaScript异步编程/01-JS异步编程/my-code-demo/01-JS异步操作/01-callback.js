function fetchData(callback) {
  console.log('1');
  // 模拟异步操作
  setTimeout(() => {
      console.log('2');
      const data = '异步数据';
      callback(data);
  }, 2000);
}

console.log('3');

fetchData((data) => {
  console.log('4');
  console.log(data);
});

console.log('5');