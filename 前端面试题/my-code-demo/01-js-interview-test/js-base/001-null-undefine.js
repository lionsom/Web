/**
 * @Author: linxiang
 * @Date: 2024/7/17 16:58:49
 * @LastEditors: linxiang
 * @LastEditTime: 2024/7/17 16:58:49
 * Description: null 和 undefined 比较
 * Copyright: Copyright (©)}) 2024 LinXiang. All rights reserved.
 */

let a;
console.log(a); // 输出：undefined

let obj = {};
console.log(obj.nonExistentProperty); // 输出：undefined




let b = null;
console.log(b); // 输出：null

let objb = { key: null };
console.log(objb.key); // 输出：null




console.log('typeof null =', typeof null);  // 输出：object，对象
console.log('typeof undefined =', typeof undefined); // 输出：undefined，原始值


console.log(null == undefined); // 输出：true , 因为它们都被认为是相等的非值。
console.log(null === undefined); // 输出：false , 因为它们类型不同。
