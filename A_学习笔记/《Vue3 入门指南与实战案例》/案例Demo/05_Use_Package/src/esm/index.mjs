
import md5 from "md5"

const before = 'hello world'
const after = md5(before)
console.log({ before, after })
