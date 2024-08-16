// 对象的类型定义有两个语法支持： type 和 interface 。
type UserItemAA = {
  // ...
}

interface UserItemBB {
  // ...
}



// *************************************************
// **************** 定义用户对象 *********************
// *************************************************

interface UserItem {
  name: string
  age: number
  address?: string   // 可选属性
  // 这个属性引用了本身的类型，俗称：套娃
  friendList: UserItem[]
}

// 在声明变量的时候将其关联到类型上
const petter22: UserItem = {
  name: 'Petter',
  age: 20,
  friendList: [
    {
      name: 'Marry',
      age: 16,
      friendList: [],
    },
    {
      name: 'Tom',
      age: 20,
      friendList: [],
    }
  ],
}

// *************************************************
// ***************** 继承 **************************
// *************************************************

// 这里继承了 UserItem 的所有属性类型，并追加了一个权限等级属性
interface Admin extends UserItem {
  permissionLevel: number
}

const admin: Admin = {
  name: 'Petter',
  age: 18,
  friendList: [
    {
      name: 'Marry',
      age: 16,
      friendList: [],
    },
    {
      name: 'Tom',
      age: 20,
      friendList: [],
    }
  ],
  permissionLevel: 1,
}




// *************************************************
// ***************** 继承 过滤 ********************
// *************************************************

// 这里在继承 UserItem 类型的时候，删除了两个多余的属性
interface Admin1 extends Omit<UserItem, 'enjoyFoods' | 'friendList'> {
  permissionLevel: number
}

// 现在的 admin 就非常精简了
const admin1: Admin1 = {
  name: 'Petter',
  age: 18,
  permissionLevel: 1,
}