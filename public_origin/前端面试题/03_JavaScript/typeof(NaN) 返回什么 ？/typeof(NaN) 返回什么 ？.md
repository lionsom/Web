# typeof(NaN) 返回什么 ？

在 JavaScript 中，`typeof(NaN)` 返回 `"number"`。

1. **NaN 的本质**：
   - NaN（Not a Number）是 JavaScript 中表示"非数字"的特殊值
   - 但它实际上是 Number 类型的一个特殊值

2. **typeof 行为**：
   ```javascript
   typeof(NaN);  // "number"
   typeof NaN;   // "number" (括号是可选的)
   ```

3. **为什么是 "number"**：
   - NaN 是 IEEE 754 浮点数标准中定义的特殊数值
   - 在 JavaScript 中，NaN 是 Number 类型的成员
   - 它与 Infinity、-Infinity 一样都属于特殊的数字值

4. **检测 NaN 的正确方法**：
   由于 NaN 是唯一一个不等于自身的值：
   ```javascript
   const x = NaN;
   x === NaN;  // false (不可靠)
   
   // 可靠方法：
   Number.isNaN(x);     // true (ES6+)
   Object.is(x, NaN);   // true (ES6+)
   isNaN(x);           // true (注意全局isNaN会先尝试转换为数字)
   ```

5. **有趣的事实**：
   ```javascript
   NaN === NaN;         // false
   NaN == NaN;          // false
   typeof NaN === 'number';  // true
   ```

因此，虽然 NaN 表示"不是一个数字"，但从技术上讲它确实是 Number 类型的一个特殊值。