let a = setTimeout(function() {
  console.log('Delayed message');
}, 2000); // 在2秒后打印 'Delayed message'


// 直接取消了定时器
clearTimeout(a);







let count = 0;
let intervalId = setInterval(function() {
  count++;
  console.log('Count: ' + count);
  if (count === 5) {
    clearInterval(intervalId); // 停止定时器
  }
}, 1000); // 每隔1秒打印 'Count: x'，直到达到5次
