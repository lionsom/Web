/**
 * @description: 基本数据类型
 */
let a: number = 10;
console.log('number = ', a);

let name22: string = 'LBJ' 
console.log('string = ', name22);

const isTrue: boolean = true
console.log('boolean = ', isTrue);

let n1: null = null
let u1: undefined = undefined
console.log('null = ', n1);
console.log('undefined = ', u1);

const symbol1: Symbol = Symbol('相关描述')
console.log('Symbol = ', symbol1);


// bigint数值可以在数字后面加字母n
let b1: bigint = 999999999999999999n
// 也可以使用BigInt构造函数来表示
const b2: bigint = BigInt('9999999999999')
console.log('bigint = ', b1, b2);


/**
 * @description: 数组 
 */
const numbers: number[] = [1, 2, 3, 4, 5];
const names: string[] = ["Alice", "Bob", "Charlie"];
console.log('numbers = ', numbers);
console.log('names = ', names);


/**
 * @description: 元组 
 */
const person: [string, number, boolean] = ["Alice", 30, false];
const coordinates: [number, number] = [10, 20];
person[1] = 110;
console.log('person = ', person);
console.log('person[0] = ', person[0]);
console.log('person[1] = ', person[1]);
console.log('coordinates = ', coordinates);


/**
 * @description: 枚举
 */
enum Color1 {Red, Green, Blue}
let c1: Color1 = Color1.Green;
console.log('c1 = ', c1);

enum Color2 {Red = 5, Green, Blue}
let c2: Color2 = Color2.Green;
console.log('c2 = ', c2);

enum Color3 {Red = 1, Green = 15, Blue = 4}
let c3: Color3 = Color3.Green;
console.log('c3 = ', c3);


enum Color4 {Red = 10, Green, Blue}
let colorName1: string = Color4[12];
let colorName2: string = Color4[13];
console.log('colorName = ', colorName1, colorName2);  // 显示'Blue'因为上面代码里它的值是12


/**
 * 任意类型
 */
let value: any; // 定义了一个可以保存任意类型数据的变量
value = 123;
value = "abc";
value = true;
value = [1, 3, 5];
console.log('value = ', value);

// 数组
let list: any[] = [1, true, "free"];
console.log('list = ', list);


/**
 * Void类型
 */
function test(): void {
  console.log("hello world");
}
test();

let value1: void; // 定义了一个不可以保存任意类型数据的变量, 只能保存null和undefined
// value1 = 123; // 报错
// value1 = "abc";// 报错
// value1 = true;// 报错
// 注意点: null和undefined是所有类型的子类型, 所以我们可以将null和undefined赋值给任意类型
// value1 = null; // 不会报错
value1 = undefined;// 不会报错





abstract class Animal {
  public name: string;
  public constructor(name: string) {
    this.name = name;
  }
  printName(): void {
    console.log('Department name: ' + this.name);
  }
  public abstract sayHi(): void;
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
    this.name = name + ' cat';
    console.log('Cat constructor = ', this.name);
  }

  public sayHi(): void {
      console.log(`Meow, I am ${this.name}`);
  }

  public eat() {
    console.log(`${this.name} is eating.`);
  }
}

let cat = new Cat('Tom');
cat.sayHi();
cat.printName();


let animal: Animal; // 允许创建一个对抽象类型的引用
// animal = new Animal(); // 错误: 不能创建一个抽象类的实例
animal = new Cat('Jack'); // 允许对一个抽象子类进行实例化和赋值
animal.printName();
animal.sayHi();
// animal.eat();   //




/**
 * 单例模式
 */
class Single{
  private static instance:Single; 
  private constructor(){}

  static getInstance(){
    if(!this.instance){
      this.instance = new Single();
    }
    return this.instance;
  }
}
// const single1 = new Single();
// const single2 = new Single();

const single3 = Single.getInstance();
const single4 = Single.getInstance();

console.log(single3 === single4); //true






interface A {
  name: string;
  age: number;
}

interface B {
  sex: string;
}

interface C extends A, B {
  height: number;
}

const uuser: C = {
  name: 'LBJ',
  age: 18,
  sex: 'male',
  height: 1.88
}
console.log('uuser = ', uuser);





class Flyable {
  fly() {
    console.log("Flying...");
  }
}

class Animal2 {
  name: string = '222';
}

class Bird2 extends Animal2 {
  // ...

  // 使用 Flyable mixin
  fly() {
    console.log("Flying...");
  }
}

let bird = new Bird2();
bird.fly();