(function () {
  'use strict';

  const PI = 3.14;

  function addPi(x) {
    return x + PI;
  }

  /**
   * 命令：
   * $ rollup main.js --file dist/bundle.js --format iife
   */


  console.log(addPi(10));

})();
