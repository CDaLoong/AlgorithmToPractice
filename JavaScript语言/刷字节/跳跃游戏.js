/*
 * @Author: DaLoong
 * @Date: 2022-04-20 13:31:48
 * @LastEditors: DaLoong
 * @LastEditTime: 2022-04-20 14:09:57
 * @FilePath: /AlgorithmToPractice/JavaScript语言/刷字节/跳跃游戏.js
 * @Description: 
 */
// 难度级别：中等

// 题目：

// 给定一个非负整数数组，你最初位于数组的第一个位置。 数组中的每个元素代表你在该位置可以跳跃的最大长度。 判断你是否能够到达最后一个位置。

// 示例1：

// 输入: [2,3,1,1,4] 输出: true 解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。

// 示例2:

// 输入: [3,2,1,0,4] 输出: false 解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。

const test = (arr) => {
    if (!Array.isArray(arr) || !arr.length) return false
    const begin = arr[0];
    const length = arr.length;
    if (begin <= 0) return false
    const newArr = [];
    let state = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            if (begin > i) continue;
            for (let j = 0; j < begin; j++) {
                if (j + arr[j] > i) { }
            }
            if (num > i) state = true;
            else {
                state = false;
                return state
            };
        }
        newArr.push(arr[i])
    }
    return state;
}
const arr = [3, 2, 1, 0, 4];
console.log(test(arr));