const dayjs = require("dayjs");
console.log(dayjs().format());


const a = require("aaa");
console.log(`From package a: ${a.getMessage()}`);


const b = require("bbb");
console.log(`From package b: ${b.getMessage()}`);
