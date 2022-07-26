/*
 * @Author: DaLoong
 * @Date: 2022-04-20 13:04:11
 * @LastEditors: DaLoong
 * @LastEditTime: 2022-04-20 13:37:10
 * @FilePath: /AlgorithmToPractice/JavaScript语言/刷字节/买股票的最佳时机.js
 * @Description: 
 */

// 难度级别：简单

// 题目： 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。 如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。 注意：你不能在买入股票前卖出股票。

// 示例1：

// 输入: [7,1,5,3,6,4] 输出: 5 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。 注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格；同时，你不能在买入前卖出股票。

// 示例2:

// 输入: [7,6,4,3,1] 输出: 0 解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。

const getMaxProfit = (arr) => {
    if (!Array.isArray(arr) || !arr.length) return
    class Node {
        constructor(day, value) {
            this.day = day;
            this.value = value;
            this.maxProfit = 0;
        }
        getMax(value) {
            const maxProfit = value - this.value
            if (maxProfit > this.maxProfit) this.maxProfit = maxProfit
        }
    }
    const nodes = [];
    for (let i = 0; i < arr.length; i++) {
        const node = new Node(i, arr[i])
        for (let j = i + 1; j < arr.length; j++) {
            node.getMax(arr[j])
        }
        nodes.push(node)
    }
    nodes.sort((a, b) => b.maxProfit - a.maxProfit)
    console.log(nodes)
    return nodes[0].maxProfit
}
const arr = [7, 6, 4, 4, 1]
console.log(getMaxProfit(arr))