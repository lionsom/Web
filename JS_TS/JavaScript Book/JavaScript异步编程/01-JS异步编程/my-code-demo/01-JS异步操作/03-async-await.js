async function fetchData() {
  console.log('1');
  return new Promise((resolve, reject) => {
    console.log('2');
    // 模拟异步操作
    setTimeout(() => {
      console.log('3');
      const data = '异步数据';
      if (1) {
        resolve(data);
      } else {
        reject(new Error('error666'));
      }
    }, 2000);
  });
}

async function handleData() {
  console.log('4');
  const data = await fetchData();
  console.log(data);
}

console.log('5');

handleData();

console.log('6');
