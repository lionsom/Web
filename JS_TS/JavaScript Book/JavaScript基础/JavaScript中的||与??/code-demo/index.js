// ??
console.log(undefined ?? 2);  // 2
console.log(null ?? 2);  // 2
console.log(0 ?? 2);  // 0
console.log("" ?? 2);  // ''
console.log(true ?? 2);  // true
console.log(false ?? 2);  // false

// ||
console.log(undefined || 2);  // 2
console.log(null || 2);  // 2
console.log(0 || 2);  // 2
console.log("" || 2);  // 2
console.log(true || 2);  // true
console.log(false || 2);  // 2