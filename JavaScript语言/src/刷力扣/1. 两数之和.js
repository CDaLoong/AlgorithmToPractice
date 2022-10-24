// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那两个整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。

// 示例 1：
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]

// 示例 2：
// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]

// 示例 3：
// 输入：nums = [3,3], target = 6
// 输出：[0,1]

/**
 * @param {number[]} nums 数据
 * @param {number} target 和
 * @param {number} num 几数之和
 * @return {number[]}
 */
// const twoSum = function(nums, target) {
//     if(!Array.isArray(nums) || nums.length === 0 || isNaN(target)) return [];
//     for(let i = 0; i < nums.length - 1; i++) {
//         for(let j = nums.length - 1; j > i; j-- ) {
//             if (nums[i] + nums[j] === target) return [i, j]
//         }
//     }
// };

const sumNum = (nums, target, num) => {
    if(!Array.isArray(nums) || target <= 0 || num <= 0 || nums.length < num) return [];
    const results = []
    const length = num
    const numsClone = JSON.parse(JSON.stringify(nums))
    let indexNums = 0
    const sum = (nums, target, num) => {
        if(!Array.isArray(nums) || target <= 0 || num <= 0 || nums.length < num) return;
        const n = nums[0]
        if (target - n < 0) return;
        if (target - n === 0 && num === 1) {
            const index = numsClone.findIndex(item => item === n)
            return [ index + indexNums ]
        }
        if (target - n > 0 && num > 1) {
            nums.shift()
            const arr = sum(nums, target - n, num - 1)
            if (Array.isArray(arr)) {
                const index = numsClone.findIndex(item => item === n)
                arr.push(index + indexNums)
                if (arr.length === length) {
                    results.push(arr)
                    numsClone.shift()
                    if (numsClone.length >= length) {
                        indexNums++
                        sum(numsClone, target, length)
                    }
                } else {
                    return arr
                }
            }
        }
    }
    sum(nums, target, num)
    return results
}

console.log(sumNum([2,7,11,15, 2], 9, 2))


