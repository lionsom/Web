import { log } from './utils.js';
import os from 'os';

function func(a, b) {
    return a + b;
}
console.log(func(1,2));

console.log(os.cpus());

log('hello');
