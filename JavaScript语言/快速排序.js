// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

// 快速排序，越换乱性能越好
// 两两比较，小的在左边，大的在右边，目前实现的性能很差，因为要创建多个数组

const arr = [3, 5, 6, 1, 2, 8, 9, 7, 4]

const quickSort = arr => {
  if (!arr || !Array.isArray(arr) || arr.length === 0) return [];

  const leader = arr[0]
  let leftArr = []
  let rightArr = []

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < leader) leftArr.push(arr[i])
    else rightArr.push(arr[i])
  }

  leftArr = quickSort(leftArr)
  rightArr = quickSort(rightArr)
  leftArr.push(leader)
  return [...leftArr, ...rightArr]
}
const newArr = quickSort(arr)
console.log(newArr)
