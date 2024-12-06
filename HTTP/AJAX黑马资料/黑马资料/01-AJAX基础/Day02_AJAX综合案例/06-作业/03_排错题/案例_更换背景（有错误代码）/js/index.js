// 这个案例中有6处报错，改正后让代码正常完成更换背景图案例吧（刷新背景图也要在）
/**
 * 目标：网站-更换背景
 *  1. 选择图片上传，设置body背景
 *  2. 上传成功时，"保存"图片url网址
 *  3. 网页运行后，"获取"url网址使用
 * */
document.querySelector('.bg-ipt').addEventListener('click', e => {
  // 1. 选择图片上传，设置body背景
  console.log(e.target.files[0])
  const fd = new FormData()
  fd.append('avatar', e.target.files[0])
  axios({
    url: 'http://hmajax.itheima.net/api/uploadimg',
    method: 'PUT',
    data: fd
  }).then(result => {
    const imgUrl = result.data.data.url
    document.body.style.backgroundImage = imgUrl

    // 2. 上传成功时，"保存"图片url网址
    localStorage.setItem('bgImg', imgUrl)
  })
})

// 3. 网页运行后，"获取"url网址使用
const bgUrl = localStorage.getItem('bg')
console.log(bgUrl)
bgUrl || (document.body.style.backgroundImage = `url(${bgUrl})`)