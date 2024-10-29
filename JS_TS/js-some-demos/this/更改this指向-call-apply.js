function method() {
  console.log(this);
  console.log(this.name);
}

method.apply({ name: '张三' });  // 输出结果：张三

method.call({ name: '李四' });    // 输出结果：李四