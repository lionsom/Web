/**
 * @Author: linxiang
 * @Date: 2024/7/17 16:59:42
 * @LastEditors: linxiang
 * @LastEditTime: 2024/7/17 16:59:47
 * Description: js数组去重的几种方式：https://segmentfault.com/a/1190000016418021
 * Copyright: Copyright (©)}) 2024 LinXiang. All rights reserved.
 */



/**
 * 利用 ES6 Set 去重（ES6 中最常用）
 * @param {*} arr 
 * @returns 
 */
function unique1 (arr) {
  return Array.from(new Set(arr))
}

var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique1(arr))
 //[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]



 /**
  * 利用 for 嵌套 for，然后 splice 去重（ES5 中最常用）
  * @param {*} arr 
  * @returns 
  */
 function unique2(arr){            
  for(var i=0; i<arr.length; i++) {
    console.log('AAArrr', arr);
      for(var j=i+1; j<arr.length; j++){
          if(arr[i]==arr[j]){         //第一个等同于第二个，splice方法删除第二个
              arr.splice(j,1);
              j--;
          }
      }
  }
return arr;
}

var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
console.log(unique2(arr))
//[1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", {…}, {…}]     //NaN和{}没有去重，两个null直接消失了
