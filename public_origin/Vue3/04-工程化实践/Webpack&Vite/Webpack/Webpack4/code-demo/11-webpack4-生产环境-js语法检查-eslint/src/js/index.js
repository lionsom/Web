
function add(a, b) {
  const c = '123';
    return a + b;
}


// 下一行eslint所有规则都失效（下一行不进行eslint检查）
// eslint-disable-next-line
console.log(add(2, 5));
