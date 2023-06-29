

/*

*/

// 1. 导入 fs 模块
const fs = require('fs');

fs.writeFile('./座右铭.txt', '我是你大爷', err => {
    // 执行失败，err为错误对象，
    // 写入成功，err = null
    if (err) {
        console.log('写入失败！！！');
        return;
    } else {
        console.log('写入成功！！！');
    }
})


