
const { BaseMethods, Validate } = require('./index')

console.log('test01 = ', BaseMethods.getTypeOf('123'));
console.log('test02 = ', Validate.mobileCheck('123'));
