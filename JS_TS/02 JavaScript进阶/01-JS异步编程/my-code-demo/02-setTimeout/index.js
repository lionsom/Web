/**
 * setTimeout弊端：主线程被阻塞，即使定时器到了，也无法执行。
 */
setTimeout(() => {
  console.log('hello');
}, 1000)

sleep(5000);


// JS没有sleep函数，自己实现一个
function sleep(time) {
  var timeStamp = new Date().getTime();
  var endTime = timeStamp + time;
  while (true) {
    if (new Date().getTime() > endTime) {
      return;
    }
  }
}
