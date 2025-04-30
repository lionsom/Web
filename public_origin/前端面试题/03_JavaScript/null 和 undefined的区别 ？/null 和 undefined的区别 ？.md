* ./JS_TS/02 JavaScript进阶/JS中undefined与null



# JavaScript 中 `null` 和 `undefined` 的区别

`null` 和 `undefined` 都表示"无"的概念，但它们在 JavaScript 中有重要区别：

## 1. 本质区别

| 特性         | `null`                  | `undefined`                      |
| ------------ | ----------------------- | -------------------------------- |
| **类型**     | `object` (历史遗留问题) | `undefined`                      |
| **含义**     | 表示"故意赋值的空值"    | 表示"未定义"或"变量声明但未赋值" |
| **产生场景** | 需要显式赋值            | 由 JavaScript 引擎自动赋值       |

## 2. 常见产生场景

### `undefined` 出现的情况：
```javascript
let a;                // 声明但未赋值
console.log(a);       // undefined

function foo(b) {     
  console.log(b);     // 参数未传递时为 undefined
}
foo();

const obj = {};
console.log(obj.prop); // 访问不存在的属性

let arr = [1, , 3];   
console.log(arr[1]);   // 数组空位返回 undefined
```

### `null` 出现的情况：
```javascript
let a = null;         // 显式赋值为 null

document.getElementById('nonexistent'); // 获取不存在的DOM元素返回null

JSON.parse('{"a": null}'); // JSON中的null值

// 通常用于表示空值或重置变量
let data = fetchData();
data = null; // 清除数据引用
```

## 3. 使用建议

- **`undefined`**：
  - 让 JavaScript 自动产生即可
  - 不要显式赋值为 `undefined`（使用 `null` 更明确）

- **`null`**：
  - 当需要表示"有意的空值"时使用
  - 用于释放对象引用（帮助垃圾回收）

## 4. 相等性比较

```javascript
null == undefined;   // true (抽象相等)
null === undefined; // false (严格相等)

Number(null);      // 0
Number(undefined); // NaN
```

## 5. 实际应用示例

```javascript
// 初始化时不赋值（自动undefined）
let userAge;  

// 显式表示"没有年龄信息"
userAge = null;  

function getUser(id) {
  // 返回null表示明确找不到用户
  // 返回undefined表示未处理这种情况
  if (!db.has(id)) return null;
  return db.get(id);
}

// 检查时区分两种情况
const result = getUser(123);
if (result === null) {
  console.log('用户不存在');
} else if (result === undefined) {
  console.log('查询出错');
}
```

## 6. 现代 JavaScript 的最佳实践

1. 优先使用 `null` 表示有意为之的空值
2. 让 `undefined` 保持其原始语义（未定义）
3. 使用 TypeScript 时可以更明确地区分：
   ```typescript
   let a: null = null;
   let b: undefined = undefined;
   ```
4. 可选链操作符 (`?.`) 和 空值合并运算符 (`??`) 可以更好地处理这两种情况：
   ```javascript
   const value = obj.prop ?? 'default'; // 当null/undefined时使用默认值
   ```

理解这两者的区别有助于编写更清晰、意图更明确的 JavaScript 代码。