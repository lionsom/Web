在 Vue 2 中，**没有直接通过 `this.$directive` 在组件实例上注册指令的方式**。Vue 2 的指令注册机制分为 **全局注册** 和 **局部注册** 两种，但都不是通过组件实例的 `this` 访问的。

## 1. 全局注册 和 局部注册
1. **全局注册**（在应用启动前）：  
   使用 `Vue.directive()`，注册后可在所有组件中使用。
   ```javascript
   // main.js 或全局入口文件
   import Vue from 'vue';
   
   Vue.directive('my-directive', {
     bind(el, binding) {
       // 指令逻辑
     }
   });
   ```

2. **局部注册**（在组件内部）：  
   在组件的 `directives` 选项中注册，仅在该组件内可用。
   ```javascript
   export default {
     directives: {
       'my-directive': {
         bind(el, binding) {
           // 指令逻辑
         }
       }
     }
   }
   ```

---

## 2. 常见误解澄清：
- **`this.$directive` 不存在**：  
  在组件内通过 `this.$directive` 调用会报错，因为 Vue 2 未在实例上提供此 API。
  
- **`this.$options.directives`**：  
  可通过 `this.$options.directives` 访问当前组件注册的局部指令（只读），但不能用于动态注册。

---

## 3. 动态注册指令的替代方案：
如果需要“动态”注册指令，可考虑以下方法：
1. **全局注册（慎用）**：  
   在运行时调用 `Vue.directive()`，但会影响所有组件。
   ```javascript
   // 在某个方法中动态全局注册（不推荐）
   methods: {
     registerGlobalDirective() {
       Vue.directive('dynamic-dir', { /* ... */ });
     }
   }
   ```

2. **条件渲染指令**：  
   通过 `v-if` 结合局部指令控制使用。
   ```vue
   <template>
     <div v-if="useDirective" v-my-directive>内容</div>
   </template>
   ```

3. **高阶组件**：  
   封装一个接收指令配置的包装组件，在其内部注册局部指令。

---

## 4. 总结：
| 注册方式          | 语法                  | 作用域   | 是否支持 `this` 动态注册 |
| ----------------- | --------------------- | -------- | ------------------------ |
| 全局指令          | `Vue.directive()`     | 所有组件 | ❌                        |
| 局部指令          | 组件选项 `directives` | 当前组件 | ❌                        |
| `this.$directive` | 不存在                | -        | -                        |

**最佳实践**：  
应在应用初始化时（全局）或组件定义时（局部）声明指令，避免运行时动态注册。若需动态行为，可通过数据驱动（如 `v-if`、绑定指令值）实现。