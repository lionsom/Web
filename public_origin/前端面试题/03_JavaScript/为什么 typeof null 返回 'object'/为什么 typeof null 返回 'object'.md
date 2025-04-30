# 为什么 `typeof null` 返回 `'object'`

`typeof null` 返回 `'object'` 是 JavaScript 语言中一个著名的历史遗留问题（bug），这个行为可以追溯到 JavaScript 最初的实现。

## 原因解析

### 1. 历史原因
- 在 JavaScript 最初的实现中（1995年），值是以 **类型标签** 和实际值表示的
- 对象的类型标签是 `0`，而 `null` 在底层被表示为空指针（通常是全零的机器码 `0x00`）
- 因此当检查 `null` 的类型时，JavaScript 看到类型标签 `0` 就错误地返回了 `'object'`

### 2. 技术实现细节
在底层实现中，JavaScript 引擎使用如下方式判断类型：
```
二进制前三位：
000: 对象
1: 整数
010: 浮点数
100: 字符串
110: 布尔值
```
由于 `null` 的机器码是全零，自然前三位也是 `000`，所以被识别为对象。

### 3. 为什么没有修复
- 这个 bug 在第一个 JavaScript 引擎（Netscape 2.0）中就存在
- 修复它会破坏大量现有网站的运行（web 兼容性原则）
- 最终在 1997 年的 ECMAScript 1.0 标准中被标准化，成为了语言特性

## 如何正确检测 null

如果需要准确判断 `null`，可以使用以下方法：

```javascript
const value = null;

// 方法1：严格相等
value === null;  // true

// 方法2：Object.prototype.toString
Object.prototype.toString.call(value) === '[object Null]';  // true

// 方法3：使用 typeof 结合其他检查
typeof value === 'object' && !value;  // true
```

## 相关有趣事实

1. `null` 是 JavaScript 中**唯一**的 `falsy` 对象（`!!null === false`）
2. 这是 JavaScript 的**官方承认的错误**，但永远不会被修复
3. 在 TypeScript 中，`typeof null` 被特别处理为 `'null'` 类型

这个行为虽然不合理，但已经成为了 JavaScript 的标志性特征之一，也是面试中经常被问到的经典问题。