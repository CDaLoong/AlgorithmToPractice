
// 输入：hello nowcoder
// 输出：8
// 说明：最后一个单词为nowcoder，长度为8   

const str = 'HEHWJSD shdju kajdi fsd wd w';

function getLastStr (str) {
    const strArray = str.match(/\b\w+/g)
    const lastNum = strArray[strArray.length - 1].length
    return lastNum
}
console.log(getLastStr(str))