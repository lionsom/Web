/**
 * 金融计算中的精度问题解决方案
 */

// 1. 使用 BigInt 处理整数计算
console.log('\n方案1：使用 BigInt 处理大整数:');
const bigNumber1 = BigInt('9007199254740991');
const bigNumber2 = BigInt('9007199254740992');
console.log('大数相加:', (bigNumber1 + bigNumber2).toString());

// 2. 使用乘法转换为整数处理
console.log('\n方案2：使用乘法转换为整数处理:');
function accurateCalc(num1, num2) {
    // 将小数转换为整数
    const multiplier = 100; // 假设保留2位小数
    const n1 = Math.round(num1 * multiplier);
    const n2 = Math.round(num2 * multiplier);
    return (n1 + n2) / multiplier;
}
console.log('0.1 + 0.2 =', accurateCalc(0.1, 0.2));

// 3. 使用 Decimal.js 库处理（推荐在实际项目中使用）
console.log('\n方案3：使用 Decimal.js（示例代码）:');
console.log(`
// 首先安装：npm install decimal.js

import { Decimal } from 'decimal.js';

const amount1 = new Decimal('0.1');
const amount2 = new Decimal('0.2');
const result = amount1.plus(amount2);
console.log(result.toString()); // '0.3'
`);

// 4. 金额展示的格式化
console.log('\n方案4：金额展示的格式化:');
function formatCurrency(amount) {
    return new Intl.NumberFormat('zh-CN', {
        style: 'currency',
        currency: 'CNY', // CNY 、USD
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);
}
console.log('金额格式化:', formatCurrency(1234567.89));

// 5. 处理货币计算的工具类
class MoneyCalculator {
    constructor(amount) {
        // 将金额转换为以分为单位的整数
        this.cents = Math.round(amount * 100);
    }

    add(amount) {
        const other = new MoneyCalculator(amount);
        return new MoneyCalculator(this.cents / 100 + other.cents / 100);
    }

    subtract(amount) {
        const other = new MoneyCalculator(amount);
        return new MoneyCalculator(this.cents / 100 - other.cents / 100);
    }

    multiply(number) {
        return new MoneyCalculator((this.cents * number) / 100);
    }

    divide(number) {
        return new MoneyCalculator((this.cents / 100) / number);
    }

    toString() {
        return formatCurrency(this.cents / 100);
    }
}

// 使用 MoneyCalculator 进行计算
console.log('\n方案5：使用 MoneyCalculator 进行计算:');
const money = new MoneyCalculator(100.56);
console.log('原始金额:', money.toString());
console.log('加法:', money.add(200.33).toString());
console.log('减法:', money.subtract(50.22).toString());
console.log('乘法:', money.multiply(1.1).toString());
console.log('除法:', money.divide(2).toString()); 