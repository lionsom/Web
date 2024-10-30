function fn() {
  function test() {
    console.trace("这是一个利用trace的测试打印"); 
  }
  test();
}
fn();