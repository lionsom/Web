function greet(name) {
    if (Array.isArray(name)) {
        return name.map(function (n) { return "Welcome, ".concat(n, "!"); });
    }
    return "Welcome, ".concat(name, "!");
}
// 单个问候语
var greeting = greet('Petter');
console.log(greeting);
// 多个问候语
var greetings = greet(['Petter', 'Tom', 'Jimmy']);
console.log(greetings);
