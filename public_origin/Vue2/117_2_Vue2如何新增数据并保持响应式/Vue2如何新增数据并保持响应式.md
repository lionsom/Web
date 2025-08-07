# Vue2 如何新增数据并保持响应式

在 Vue2 中，直接给对象添加新属性或通过索引修改数组元素不会自动具有响应式特性，需要使用特定的 API 来确保响应式。以下是几种实现方式：

## 一、对象新增响应式属性

### 1. 使用 `Vue.set` 或 `this.$set`

```javascript
// 全局方法
Vue.set(target, propertyName, value)

// 实例方法
this.$set(target, propertyName, value)
```

**示例**：
```javascript
data() {
  return {
    user: {
      name: '张三'
    }
  }
},
methods: {
  addAge() {
    // 错误方式：不是响应式的
    // this.user.age = 25
    
    // 正确方式
    this.$set(this.user, 'age', 25)
  }
}
```

### 2. 使用 `Object.assign()`

创建一个新对象合并原对象和新属性：

```javascript
this.user = Object.assign({}, this.user, { age: 25 })
```

## 二、数组的响应式更新

### 1. 使用 `Vue.set` 或 `this.$set`

```javascript
// 修改数组指定索引
this.$set(this.items, index, newValue)
```

**示例**：
```javascript
data() {
  return {
    items: ['a', 'b', 'c']
  }
},
methods: {
  updateItem() {
    // 错误方式：不是响应式的
    // this.items[1] = 'x'
    
    // 正确方式
    this.$set(this.items, 1, 'x')
  }
}
```

### 2. 使用数组变异方法

Vue 重写了以下数组方法，使用它们会自动触发视图更新：
- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`

**示例**：
```javascript
// 添加新元素
this.items.push('d')

// 删除元素
this.items.splice(index, 1)
```

## 三、初始化时声明所有属性

最佳实践是在 data 中预先声明所有可能用到的属性：

```javascript
data() {
  return {
    user: {
      name: '',
      age: null // 预先声明，即使初始值为null
    }
  }
}
```

## 四、原理说明

Vue2 使用 `Object.defineProperty` 实现响应式，它有以下限制：
1. **无法检测对象属性的添加/删除**：因为只能在初始化时对现有属性进行劫持
2. **无法检测数组索引变化**：出于性能考虑没有对数组索引进行劫持

`Vue.set` 和数组变异方法内部会：
1. 添加新属性并使其成为响应式
2. 触发依赖通知，更新视图

## 五、注意事项

1. 动态添加嵌套属性时，需要确保父级已经是响应式的
   ```javascript
   // 错误示例
   this.$set(this.someObject.nested, 'newProp', 'value') 
   // 如果 nested 本身不是响应式的，这不会工作
   ```

2. 对于大型对象，考虑重新赋值而不是添加多个属性
   ```javascript
   this.user = {
     ...this.user,
     age: 25,
     gender: 'male'
   }
   ```

掌握这些方法可以确保你在 Vue2 中正确地管理动态数据，保持应用的响应式特性。