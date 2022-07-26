// 实现一个函数，能够将诸如 [5, [[4, 3], 2, 1]] 的数组当作 (5 - ((4 - 3) - 2 - 1)) 进行分组的减法运算，并返回结果。（不能使用 eval，建议使用递归）

const arr = [2, [5, 2, 10], 3, [[4, 3], [], 2, 1]];

/**
 * 获取一个多维数组中的分组减法运算，能够将诸如 [5, [[4, 3], 2, 1]] 的数组当作 (5 - ((4 - 3) - 2 - 1)) 进行分组的减法运算，并返回结果，若包含空数组，则按0计算
 * @result {number} 运算结果
 * @param {array} arr 需要运算的数组
 * */
const getResult = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return 0;
    else {
        let result = !Array.isArray(arr[0]) ? arr[0] : getResult(arr[0])
        for (let i = 1; i < arr.length; i++) {
           result -= !Array.isArray(arr[i]) ? arr[i] : getResult(arr[i]);
        }
        return result;
    }
}
console.log(getResult(arr))
