// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

// 0, 1, 1, 2, 3, 5, 8, 13, 21 ……
// 给出第n位，问第n位值为几？
// 斐波那契数列

// const fibonacci = (n) => {
//     if (n <= 0) return -1;
//     if (n == 1) return 0;
//     if (n == 2) return 1;
//     let a = 0;
//     let b = 1;
//     let c;
//     for (let i = 3 ; i <= n ; i ++) {
//         c = a + b;
//         a = b;
//         b = c;
//     }
//     return c;
// }


// f(n) = f(n-1) + f(n-2);
const fibonacci = (n) => {
    if (n <= 0) return -1;
    if (n === 1) return 0;
    if (n === 2) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(99));