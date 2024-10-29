function foo() {
  return this;
}

var o = { name: 'Jim', func: foo };

console.log(foo() === globalThis); // 对应第2种情况，输出结果：true

console.log(o.func() === o);  // 对应第3种情况，输出结果：true