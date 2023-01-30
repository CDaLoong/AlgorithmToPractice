// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

// 选择排序，内层循环，每一圈选出一个最大放在最后面
// 性能适中
const arr = [3,5,6,1,2,8,9,7,4]
const contrast = (a, b) => { // 比较数字的大小
    if (!isNaN(Number(a)) && !isNaN(Number(b))) return a > b;
}
const interchange = (arr, a, b) => { // 位置进行交换
    if (!Array.isArray(arr) || !arr[a] || !arr[b]) return;
    const c = arr[a];
    arr[a] = arr[b];
    arr[b] = c;
}
const sort = (arr) => {
    if (!arr || !Array.isArray(arr) || arr.length === 0) return;
    for (let i = 0; i < arr.length; i++) {
        let maxIndex = 0;
        for (let j = 0; j < arr.length - i; j++) {
            if (!contrast(arr[maxIndex], arr[j])) maxIndex = j;
        }
        interchange(arr, maxIndex, arr.length - 1 - i)
    }
    return arr;
}
const newArr = sort(arr)
console.log(newArr)