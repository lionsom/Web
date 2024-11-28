// const { BaseMethods, Validate } = require('verdaccio-demo-source')

const { BaseMethods, Validate } = require('@lxnpm/verdaccio-demo-source-scope')


console.log('test01 = ', BaseMethods.getTypeOf('123'));
console.log('test02 = ', Validate.mobileCheck('123'));
