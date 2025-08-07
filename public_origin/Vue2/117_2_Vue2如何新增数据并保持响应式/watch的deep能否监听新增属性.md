# Vue2 中使用 `deep` 监听新增属性的问题

在 Vue2 中，使用 `deep: true` 监听对象变化时，对于**已经存在的属性**可以检测到变化，但对于**新增的属性**仍然存在局限性。

## 一、`deep` 监听的基本行为

### 1. 对已存在属性的监听
```javascript
watch: {
  obj: {
    handler(newVal) {
      console.log('obj changed', newVal);
    },
    deep: true
  }
}
```

- 可以检测到已存在嵌套属性的变化
- **无法检测到新增属性的变化**（首次添加时）

### 2. 新增属性的问题原因
Vue2 的响应式系统在初始化时通过 `Object.defineProperty` 对**已有属性**建立响应式，但：
- 新增属性没有被 `defineProperty` 处理
- `deep` 只是在遍历现有属性时递归监听，不会处理新增属性

## 二、解决方案

### 1. 使用 `Vue.set`/`this.$set` 添加属性
```javascript
this.$set(this.obj, 'newProp', value);
```
- 这样添加的属性会触发 watch

### 2. 先添加属性再改变值（两步操作）
```javascript
// 1. 先添加属性（用空值初始化）
this.obj.newProp = null; 
// 或 this.$set(this.obj, 'newProp', null);

// 2. 再改变值（此时会被 deep 监听到）
this.obj.newProp = 'actual value';
```

### 3. 监听特定键的变化（推荐）
```javascript
watch: {
  'obj.specificKey': {
    handler(newVal) {
      console.log('specificKey changed', newVal);
    }
  }
}
```

### 4. 强制重新创建对象
```javascript
this.obj = { ...this.obj, newProp: value };
```

## 三、实际测试示例

```javascript
data() {
  return {
    user: { name: '张三' }
  }
},
watch: {
  user: {
    handler(val) {
      console.log('user changed:', val);
    },
    deep: true
  }
},
methods: {
  // 不会触发 watch
  addAgeBad() {
    this.user.age = 25;
  },
  
  // 会触发 watch
  addAgeGood() {
    this.$set(this.user, 'age', 25);
  },
  
  // 会触发 watch（两步操作）
  addGender() {
    this.user.gender = null; // 先初始化
    this.user.gender = 'male'; // 再赋值
  }
}
```

## 四、总结

| 方法                  | 能否监听新增属性 | 说明                   |
| --------------------- | ---------------- | ---------------------- |
| `deep: true`          | ❌ 不能           | 只能监听已有属性的变化 |
| `Vue.set`/`this.$set` | ✅ 能             | 推荐方式               |
| 先初始化再赋值        | ✅ 能             | 需要两步操作           |
| 对象替换              | ✅ 能             | 创建新对象             |

**最佳实践**：
1. 尽量在 data 中预先声明所有可能用到的属性
2. 必须动态添加属性时使用 `this.$set`
3. 对于重要新增属性，使用单独的 watch 监听

Vue3 的 Proxy 方案已经解决了这个问题，可以自然监听新增属性。