// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

// 快速排序，越换乱性能越好
// 两两比较，小的在左边，大的在右边
// 左闭右开区间，左边能取到，右边取不到

const arr = [3, 5, 6, 1, 2, 8, 9, 7, 4]

// 简单性能差的快排，需要创建多个数组
// const quickSort = arr => {
//   if (!arr || !Array.isArray(arr) || arr.length === 0) return [];
//
//   const leader = arr[0]
//   let leftArr = []
//   let rightArr = []
//
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < leader) leftArr.push(arr[i])
//     else rightArr.push(arr[i])
//   }
//
//   leftArr = quickSort(leftArr)
//   rightArr = quickSort(rightArr)
//   leftArr.push(leader)
//   return [...leftArr, ...rightArr]
// }
// const newArr = quickSort(arr)
// console.log(newArr)

// 标准快排
const interchange = (arr, a, b) => { // 位置进行交换
    if (!Array.isArray(arr) || !arr[a] || !arr[b]) return;
    const c = arr[a];
    arr[a] = arr[b];
    arr[b] = c;
}

const quickSort = (arr, begin, end) => {
    if (begin >= end -1 || !arr || !Array.isArray(arr) || arr.length === 0) return;
    let left = begin;
    let right = end;
    do {
        do left++; while (left < right && arr[left] < arr[begin]); // 左指针递增，当大于等于右指针或左指针所指数据大于等于开始指针数据时停止
        do right--; while (right > left && arr[right] > arr[begin]) // 右指针递减，当小于等于左指针或右指针所指数据小于等于开始指针数据时停止
        if (left < right) interchange(arr, left, right) // 如果左右指针并未交错，则代表左指针所指数据大于等于begin所指数据，右指针所指数据小于等于begin所指数据，所以交换左右指针所指数据
    } while (left < right)
    const swapPoint = left === right ? right - 1 : right; // 当左指针大于等于右指针时，根据左闭右开原则获取中间位置，此时中间位置左边数据都比begin所指数据小，右边数据都比begin所指数据大
    interchange(arr, begin, swapPoint); // 交换begin位置所指数据和中间位置所指数据
    quickSort(arr, begin, swapPoint);
    quickSort(arr, swapPoint + 1, end)
}
quickSort(arr, 0, arr.length);
console.log(arr)
