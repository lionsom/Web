/**
 * 目标：网站-更换背景
 *  1. 选择图片上传，设置body背景
 *  2. 上传成功时，"保存"图片url网址
 *  3. 网页运行后，"获取"url网址使用
 * */
document.querySelector('.bg-ipt').addEventListener('change', e => {
  // 1. 选择图片上传，设置body背景
  console.log(e.target.files[0])
  const fd = new FormData()
  fd.append('img', e.target.files[0])
  axios({
    url: 'http://hmajax.itheima.net/api/uploadimg',
    method: 'POST',
    data: fd
  }).then(result => {
    const imgUrl = result.data.data.url
    document.body.style.backgroundImage = `url(${imgUrl})`

    // 2. 上传成功时，"保存"图片url网址
    localStorage.setItem('bgImg', imgUrl)
  })
})

// 3. 网页运行后，"获取"url网址使用
const bgUrl = localStorage.getItem('bgImg')
console.log(bgUrl)
bgUrl && (document.body.style.backgroundImage = `url(${bgUrl})`)