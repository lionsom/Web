const Validate = {
  /**
   * 手机号校验
   */
  mobileCheck: (mobile) => {
    let reg = /^[1][3,4,5,7,8][0-9]{9}$/
    return reg.test(mobile)
  }
}

module.exports = Validate
