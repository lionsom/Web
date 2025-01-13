import sum from "./js/sum.js";
import count from "./js/count.js";
// 需要引入css，才能被webpack识别到
import "./css/first.css";
import "./css/second.less";
import "./css/third.scss";
import "./css/fourth.styl";
// iconfont
import "./asset/iconfont/iconfont.css";

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));