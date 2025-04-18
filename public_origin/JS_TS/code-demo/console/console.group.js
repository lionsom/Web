function factorial(n) {
  console.group(`方法开始，长度(${n})`);
  if (n <= 1) {
      console.log("执行 1");
      console.groupEnd();
      return 1;
  } else {
      let result = n * factorial(n - 1);
      console.log(`执行 ${result}`);
      console.groupEnd();
      return result;
  }
}

factorial(5);