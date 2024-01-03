// 定义接口
export interface PersonInfo {
  name: string,
  age: number,
  gender: string,
}

// 暴露一个数组接口
export type Persons = Array<PersonInfo>
export type Persons1 = PersonInfo[]

// 暴露一个常量
export const a = 10;
