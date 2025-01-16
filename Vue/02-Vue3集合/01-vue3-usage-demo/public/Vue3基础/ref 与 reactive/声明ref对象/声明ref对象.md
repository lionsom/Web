# 声明ref对象

```typescript
const numbers = ref<number[]>([]); // 定义一个 number 类型的数组

interface Item {
  name: string;
}
const items = ref<Item[]>([]); // 定义一个 { name: string } 类型的数组
```

