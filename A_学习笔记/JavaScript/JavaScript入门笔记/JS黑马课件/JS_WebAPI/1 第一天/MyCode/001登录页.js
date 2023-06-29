
// 1.获取元素
let eye = document.getElementById('eye_img')
let pwd = document.getElementById('pwd_input')

// 2.注册事件，响应事件
let flag = 0
eye.onclick = function() {
    console.log("click");
    if (flag == 0) {
        flag = 1
        pwd.type = 'text'
        eye.src="../code/images/open.png"
    } else {
        flag = 0
        pwd.type = 'password'
        eye.src="../code/images/close.png"
    }
}

