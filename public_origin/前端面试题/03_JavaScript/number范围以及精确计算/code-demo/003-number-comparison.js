/**
 * Number.MAX_SAFE_INTEGER 和 Number.MAX_VALUE 的对比
 */

// 1. 基本值对比
console.log('Number.MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER);
console.log('Number.MAX_VALUE:', Number.MAX_VALUE);

// 2. 二进制表示对比
console.log('\n二进制表示对比:');
console.log('MAX_SAFE_INTEGER 二进制:', Number.MAX_SAFE_INTEGER.toString(2));
console.log('MAX_VALUE 二进制:', Number.MAX_VALUE.toString(2));

// 3. 精度测试
console.log('\n精度测试:');
console.log('MAX_SAFE_INTEGER + 1:', Number.MAX_SAFE_INTEGER + 1);
console.log('MAX_SAFE_INTEGER + 2:', Number.MAX_SAFE_INTEGER + 2); // 不准确
console.log('MAX_VALUE + 1:', Number.MAX_VALUE + 1); // 仍然是 MAX_VALUE
console.log('MAX_VALUE * 2:', Number.MAX_VALUE * 2); // Infinity

// 4. 实际应用场景对比
console.log('\n实际应用场景对比:');
// 大整数计算
const bigInt = BigInt(Number.MAX_SAFE_INTEGER);
console.log('使用 BigInt 处理 MAX_SAFE_INTEGER:', bigInt + BigInt(1));

// 科学计算
console.log('科学计算示例:');
const scientificNumber = 1.23456789e+308; // 接近 MAX_VALUE
console.log('科学计数法表示:', scientificNumber);
console.log('是否超过 MAX_SAFE_INTEGER:', scientificNumber > Number.MAX_SAFE_INTEGER);
console.log('是否超过 MAX_VALUE:', scientificNumber > Number.MAX_VALUE);

// 5. 类型检查
console.log('\n类型检查:');
console.log('MAX_SAFE_INTEGER 类型:', typeof Number.MAX_SAFE_INTEGER);
console.log('MAX_VALUE 类型:', typeof Number.MAX_VALUE);

// 6. 实际使用建议
console.log('\n使用建议:');
console.log(`
1. MAX_SAFE_INTEGER (2^53 - 1):
   - 用于需要精确整数计算的场景
   - 超过此值后，整数计算可能不准确
   - 适用于：ID生成、计数器、精确整数运算

2. MAX_VALUE (1.7976931348623157e+308):
   - 用于需要表示极大数值的场景
   - 可以表示更大的数，但精度会降低
   - 适用于：科学计算、物理计算、天文数据
`); 