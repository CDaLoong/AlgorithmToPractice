// function bar() {
//     console.log(myName)
// }
// function foo() {
//     var myName = "1"
//     bar()
// }
// var myName = "2"
// foo() // '2'


// var uname = "window";
// var object = {
//     uname :"object",
//     fun: function(){
//         console.log(this.uname);
//         return function(){
//             console.log(this.uname);
//         }
//     }
// }
// object.fun()(); // 'object'  undefined

// function testFunc(callback) {
//     const a = 1;
//     const b = 2;
//     const sum = callback(a, b);
//     console.log(sum);
// }
// function sum(a, b) {
//     return a + b;
// }
// testFunc(sum)

// var store = {
//     nextId: 1,
//     cache: {},
//     add: function(func) {
//         if (!func.id) func.id = this.nextId;
//         this.nextId++;
//         this.cache[func.id] = func;
//         return true;
//     }
// }
//
// var testFunc = function () {
//     console.log('test')
// }
// store.add(testFunc);
// console.log(store.cache)

function isPrime(value) { // 判断是否是素数
    if (!isPrime.answers) {
        isPrime.answers = {};
    }
    if (isPrime.answers[value] !== undefined) return isPrime.answers[value];
    var prime = value !== 0 && value !== 1;
    for (var i = 0; i < value; i++) {
        if (value % i === 0) {
            prime = false;
            break;
        }
    }
    return isPrime.answers[value] = prime;
}

isPrime(5)

console.log(isPrime.answers)

