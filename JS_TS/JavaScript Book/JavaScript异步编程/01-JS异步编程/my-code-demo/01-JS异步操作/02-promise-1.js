function fetchData() {
  console.log('1');
  return new Promise((resolve, reject) => {
    console.log('2');
    // 模拟异步操作
    setTimeout(() => {
      console.log('3');
      const data = '异步数据';
      if (0) {
        resolve(data);
      } else {
        reject(new Error('error666666666666'));
      }
    }, 2000);
  });
}

console.log('4');

fetchData()
  .then((data) => {
    console.log('5');
    console.log(data);
  })
  .catch((error) => {
    console.log('6');
    console.error(error);
  });

console.log('7');