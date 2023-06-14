
import md5 from "md5"

console.log(md5('Hello World'))


function getFirstWord(msg: string) {
    console.log(msg.split(' ')[0])
  }
  
  getFirstWord('Hello World')