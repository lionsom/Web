
// 创建方式一：Buffer.alloc
// 创建了一个长度为 10 字节的 Buffer，相当于申请了 10 字节的内存空间，每个字节的值为 0 
let buf_1 = Buffer.alloc(10); // 结果为 <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(buf_1)

//创建了一个长度为 10 字节的 Buffer，buffer 中可能存在旧的数据, 可能会影响执行结果，所以叫 unsafe
let buf_2 = Buffer.allocUnsafe(10);
console.log(buf_2)


//通过字符串创建 Buffer 
let buf_3 = Buffer.from('hello'); 
console.log(buf_3)
//通过数组创建 Buffer 
let buf_4 = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
console.log(buf_4)
