// 1. 实现一个返回 Promise 的异步函数，能够在1000毫秒后向调用方返回字符串'OK'

/**
 *@return {Promise} 返回值
 * */
const getPromise = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('OK');
        }, 1000)
    })
}
getPromise().then(res => console.log(res))
console.log(123)
