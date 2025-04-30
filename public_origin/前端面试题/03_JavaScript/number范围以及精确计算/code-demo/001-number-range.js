/**
 * 问题：JS 中 Number 类型的可以表示的范围是多少
 * 
 * 答案：在 JavaScript 中，Number 类型使用 IEEE 754 双精度浮点数格式。
 * 
 * 详情请参阅 ECMAScript standard, chapter 6.1.6 The Number Type
 */

// 验证最大安全整数
console.log('最大安全整数:', Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log('最大安全整数 + 1:', Number.MAX_SAFE_INTEGER + 1); // 9007199254740992
console.log('最大安全整数 + 2:', Number.MAX_SAFE_INTEGER + 2); // 9007199254740992 (不准确)

// 验证最小安全整数
console.log('最小安全整数:', Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log('最小安全整数 - 1:', Number.MIN_SAFE_INTEGER - 1); // -9007199254740992
console.log('最小安全整数 - 2:', Number.MIN_SAFE_INTEGER - 2); // -9007199254740992 (不准确)

// 验证最大可表示数值
console.log('最大可表示数值:', Number.MAX_VALUE);
console.log('最大可表示数值 + 1:', Number.MAX_VALUE + 1); // 仍然是 Number.MAX_VALUE
console.log('最大可表示数值 * 2:', Number.MAX_VALUE * 2); // Infinity

// 验证最小可表示数值
console.log('最小可表示数值:', Number.MIN_VALUE);
console.log('最小可表示数值 / 2:', Number.MIN_VALUE / 2); // 0

// 验证 Infinity
console.log('正无穷:', Infinity);
console.log('负无穷:', -Infinity);

// 验证 NaN
console.log('NaN:', NaN);
console.log('NaN 的类型:', typeof NaN); // 'number'

// 验证 53 位精度
console.log('\n验证 53 位精度:');
const maxSafeInt = Number.MAX_SAFE_INTEGER;
console.log('2^53 - 1 =', Math.pow(2, 53) - 1); // 9007199254740991
console.log('2^53 =', Math.pow(2, 53)); // 9007199254740992
console.log('2^53 + 1 =', Math.pow(2, 53) + 1); // 9007199254740992 (不准确)

// 验证二进制表示
console.log('\n二进制表示:');
console.log('2^53 - 1 的二进制:', (Math.pow(2, 53) - 1).toString(2));
console.log('2^53 的二进制:', Math.pow(2, 53).toString(2));
console.log('2^53 + 1 的二进制:', (Math.pow(2, 53) + 1).toString(2));

