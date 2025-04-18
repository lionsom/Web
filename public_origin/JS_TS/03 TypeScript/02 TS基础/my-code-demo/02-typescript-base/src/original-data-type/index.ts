// 字符串
const str: string = 'Hello World'
// 数值
const num: number = 1
// 布尔值
const bool: boolean = true

// 这样也不会报错，因为 TS 会推导它们的类型
const str1 = 'Hello World'
const num1 = 1
const bool1 = true


// *******************************************************

// 字符串数组
const strs: string[] = ['Hello World', 'Hi World']
// 数值数组
const nums: number[] = [1, 2, 3]
// 布尔值数组
const bools: boolean[] = [true, true, false]

// 这种有初始项目的数组， TS 也会推导它们的类型
const strs1 = ['Hello World', 'Hi World']
const nums1 = [1, 2, 3]
const bools1 = [true, true, false]

// 这个时候会认为是 any[] 或者 never[] 类型
const nums2 = []
// 这个时候再 push 一个 number 数据进去，也不会使其成为 number[]
nums2.push()
