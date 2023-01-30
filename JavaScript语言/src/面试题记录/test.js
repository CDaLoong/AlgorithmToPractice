/*
 * @Author: DaLoong
 * @Date: 2022-04-22 20:01:17
 * @LastEditors: DaLoong
 * @LastEditTime: 2022-04-22 20:24:11
 * @FilePath: /AlgorithmToPractice/JavaScript语言/src/面试题记录/test.js
 * @Description:
 */
// class myCalc {
//     constructor(value) {
//         this._value = value
//     }
//     get value() {
//         return this._value
//     }
//     // 加法
//     add(newValue) {
//         this._value = this._value + newValue
//         return this
//     }
//     // 减法
//     reduce(newValue) {
//         this._value = this._value - newValue
//         return this
//     }
//     // 乘法
//     multi(newValue) {
//         this._value = this._value * newValue
//         return this
//     }
//     // 除法
//     division(newValue) {
//         this._value = this._value / newValue
//         return this
//     }
//     // 其他的类似
// }
// const obj = new myCalc(100)
// obj.add(1).reduce(10).multi(10).division(10)
// console.log(obj.value);

// const arr1 = [3, 2, 1, 2, 2, 1, 4, 5];
// const arr2 = [1, 2, 5];
// function getRemoveSort(arr1, arr2) {
//     let newArr = new Set([...arr1, ...arr2]);
//     newArr = Array.from(newArr).sort();
//     console.log(newArr)
//     return newArr;
// }
// getRemoveSort(arr1, arr2)

// 得到一个数内的勾股数
function getPyNum(num) {
    const numArr = []
    for (let m = 2; m < 10; m++) {      
        for (let n = 1; n < m; n++) {
            const a = m * m - n * n;
            const b = 2 * m * n;
            const c = m * m + n * n;
            if (c > num) return numArr.join('; ')
            numArr.push(`${a}, ${b}, ${c}`)
        }
    }
}
console.log(getPyNum(10))