在 Vue 2 中，由于 JavaScript 的限制，Vue 无法检测到对象属性的添加或删除。这意味着如果你在已经创建的 Vue 实例上动态添加新的属性，Vue 的响应式系统不会自动追踪这些新属性的变化。

### 问题描述
当你直接给一个对象添加新属性时，Vue 无法监听这个新属性的变化。例如：

```javascript
export default {
  data() {
    return {
      user: {
        name: 'John',
        age: 30
      }
    };
  },
  methods: {
    addProperty() {
      this.user.address = 'New York'; // 新属性 address 不会被监听
    }
  },
  watch: {
    'user.address'(newVal, oldVal) {
      console.log('address changed:', newVal, oldVal); // 不会触发
    }
  }
};
```

在上面的例子中，`address` 属性是动态添加到 `user` 对象上的，Vue 无法监听它的变化。

---

### 解决方案

#### 1. 使用 `Vue.set` 或 `this.$set`
Vue 提供了 `Vue.set` 或 `this.$set` 方法，用于向响应式对象添加新属性并确保它是响应式的。

```javascript
export default {
  data() {
    return {
      user: {
        name: 'John',
        age: 30
      }
    };
  },
  methods: {
    addProperty() {
      this.$set(this.user, 'address', 'New York'); // 使用 $set 添加新属性
    }
  },
  watch: {
    'user.address'(newVal, oldVal) {
      console.log('address changed:', newVal, oldVal); // 现在可以触发
    }
  }
};
```

#### 2. 使用 `Object.assign` 创建新对象
如果你需要添加多个属性，可以使用 `Object.assign` 创建一个新的对象，并替换原来的对象。

```javascript
export default {
  data() {
    return {
      user: {
        name: 'John',
        age: 30
      }
    };
  },
  methods: {
    addProperty() {
      this.user = Object.assign({}, this.user, { address: 'New York', phone: '123456' });
    }
  },
  watch: {
    user: {
      handler(newVal, oldVal) {
        console.log('user changed:', newVal, oldVal); // 可以触发
      },
      deep: true
    }
  }
};
```

#### 3. 提前声明属性
如果你知道对象可能会有哪些属性，可以在 `data` 中提前声明这些属性，即使它们的初始值为 `null` 或 `undefined`。

```javascript
export default {
  data() {
    return {
      user: {
        name: 'John',
        age: 30,
        address: null // 提前声明 address 属性
      }
    };
  },
  methods: {
    addProperty() {
      this.user.address = 'New York'; // 现在可以监听
    }
  },
  watch: {
    'user.address'(newVal, oldVal) {
      console.log('address changed:', newVal, oldVal); // 可以触发
    }
  }
};
```

#### 4. 监听整个对象的变化
如果你无法提前知道新属性，可以监听整个对象的变化，并使用 `deep: true` 深度监听。

```javascript
export default {
  data() {
    return {
      user: {
        name: 'John',
        age: 30
      }
    };
  },
  methods: {
    addProperty() {
      this.user.address = 'New York'; // 直接添加新属性
    }
  },
  watch: {
    user: {
      handler(newVal, oldVal) {
        console.log('user changed:', newVal, oldVal); // 可以触发
      },
      deep: true // 深度监听
    }
  }
};
```

---

### 注意事项
- **性能问题**：深度监听（`deep: true`）可能会导致性能问题，尤其是在监听大型对象时。
- **数组监听**：对于数组，Vue 2 无法监听通过索引直接修改元素（如 `this.items[0] = newValue`），需要使用 `Vue.set` 或 `splice` 方法。

---

### 总结
- 使用 `Vue.set` 或 `this.$set` 动态添加响应式属性。
- 使用 `Object.assign` 创建新对象替换旧对象。
- 提前声明可能用到的属性。
- 使用 `deep: true` 深度监听整个对象的变化。

通过这些方法，可以解决 Vue 2 中新属性无法被监听的问题。