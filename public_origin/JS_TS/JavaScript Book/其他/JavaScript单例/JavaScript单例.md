# JavaScript 中创建单例对象的方法

在 JavaScript 中创建单例对象是一种设计模式实现，确保一个类只有一个实例，并提供全局访问点。下面是几种实现单例模式的方法：

## 1. 使用模块模式 (Module Pattern)

```javascript
const Singleton = (function() {
  // 私有变量和私有方法
  let instance;
  
  // 初始化函数
  function init() {
    // 私有方法和属性
    const privateMethod = function() {
      console.log('私有方法');
    };
    const privateVariable = '我是私有变量';
    
    // 公有方法和属性
    return {
      publicMethod: function() {
        console.log('公有方法');
        privateMethod();
      },
      publicProperty: '我是公有属性',
      getPrivateVariable: function() {
        return privateVariable;
      }
    };
  }
  
  // 返回单例对象
  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

// 使用单例
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

console.log(singleton1 === singleton2); // true
```

## 2. ES6 类实现单例

```javascript
class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    
    // 实例属性和方法
    this.data = [];
    this.name = '单例对象';
    
    // 保存实例
    Singleton.instance = this;
  }
  
  add(item) {
    this.data.push(item);
  }
  
  get(id) {
    return this.data.find(item => item.id === id);
  }
}

// 使用
const singleton1 = new Singleton();
const singleton2 = new Singleton();

console.log(singleton1 === singleton2); // true
```

## 3. 使用闭包实现单例

```javascript
function Singleton() {
  // 缓存的实例
  const instance = this;
  
  // 初始化
  this.name = '单例对象';
  this.time = new Date().getTime();
  
  // 重写构造函数
  Singleton = function() {
    return instance;
  };
}

// 使用
const singleton1 = new Singleton();
const singleton2 = new Singleton();

console.log(singleton1 === singleton2); // true
console.log(singleton1.time === singleton2.time); // true
```

## 4. 简单工厂函数实现

```javascript
const SingletonFactory = (function() {
  let instance;
  
  return {
    createInstance: function(options) {
      if (!instance) {
        const config = options || {};
        instance = {
          name: config.name || '默认名称',
          version: config.version || '1.0.0',
          sayHello: function() {
            console.log(`Hello from ${this.name} v${this.version}`);
          }
        };
      }
      return instance;
    }
  };
})();

// 使用
const instance1 = SingletonFactory.createInstance({ name: '实例1', version: '1.1.0' });
const instance2 = SingletonFactory.createInstance({ name: '实例2', version: '2.0.0' });

console.log(instance1 === instance2); // true
instance1.sayHello(); // "Hello from 实例1 v1.1.0"
```

## 5. ES6 模块实现单例

由于 ES6 模块只加载一次，并且是静态的，所以可以用来实现单例：

```javascript
// singleton.js
const singleton = {
  data: [],
  
  addItem(item) {
    this.data.push(item);
  },
  
  getItems() {
    return this.data;
  }
};

export default singleton;

// 在其他文件中使用
import singleton from './singleton.js';
// 任何导入此模块的地方都会获得同一个对象实例
```

## 6. 延迟初始化的单例

```javascript
class LazySingleton {
  static getInstance() {
    if (!this.instance) {
      this.instance = new LazySingleton();
    }
    return this.instance;
  }
  
  constructor() {
    if (LazySingleton.instance) {
      return LazySingleton.instance;
    }
    
    this.settings = {
      api: 'https://api.example.com',
      timeout: 3000
    };
    
    LazySingleton.instance = this;
  }
  
  getSetting(key) {
    return this.settings[key];
  }
}

// 使用
const instance1 = LazySingleton.getInstance();
const instance2 = LazySingleton.getInstance();

console.log(instance1 === instance2); // true
```

## 注意事项

1. 单例模式可能会导致全局状态，使代码变得难以测试
2. 在实际项目中，考虑依赖注入作为单例的替代方案
3. 使用单例时确保线程安全（在浏览器环境中一般不是问题）
4. 当使用单例管理资源时，注意内存泄漏问题

单例模式适用于需要全局协调的场景，如配置管理、连接池、缓存和日志记录等场景。