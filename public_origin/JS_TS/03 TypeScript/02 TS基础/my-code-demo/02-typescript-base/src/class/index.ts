// 定义一个类
class User {
  // constructor 上的数据需要先这样定好类型
  name: string

  // 入参也要定义类型
  constructor(userName: string) {
    this.name = userName
  }

  getName() {
    console.log(this.name)
  }
}

// 通过 new 这个类得到的变量，它的类型就是这个类
const petter: User = new User('Petter')
petter.getName() // Petter






// *************************************************
// ******************* 类 继承 *********************
// *************************************************

// 这是一个基础类
class UserBase1 {
  name: string
  constructor(userName: string) {
    this.name = userName
  }
}

// 这是另外一个类，继承自基础类
class User1 extends UserBase1 {
  getName() {
    console.log(this.name)
  }
}

// 这个变量拥有上面两个类的所有属性和方法
const petter1: User1 = new User1('Petter')
petter1.getName()







// *************************************************
// ******************* 类 接口 继承 *********************
// *************************************************

// 这是一个类
class UserBase2 {
  name: string
  constructor(userName: string) {
    this.name = userName
  }
}

// 这是一个接口，可以继承自类
interface User2 extends UserBase2 {
  age: number
}

// 这样这个变量就必须同时存在两个属性
const petter2: User2 = {
  name: 'Petter',
  age: 18,
}

// *************************************************
// ******************* 类 接口 继承 进阶 *********************
// *************************************************


class UserBase3 {
  name: string
  constructor(userName: string) {
    this.name = userName
  }
  // 这是一个方法
  getName() {
    console.log(this.name)
  }
}

// 接口继承类的时候也可以去掉类上面的方法
interface User3 extends Omit<UserBase3, 'getName'> {
  age: number
}

// 最终只保留数据属性，不带有方法
const petter3: User3 = {
  name: 'Petter',
  age: 18,
}
