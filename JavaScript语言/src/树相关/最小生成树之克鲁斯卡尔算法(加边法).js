// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

// A、B、C、D、E 是五个村庄，现希望所有的村庄都联通修路，但是要求花费最少
// 1. 选择最短的边进行连接
// 2. 要保证连接的两端至少有一个点是新的点
// 3. 或者 这个边是将两个部落连接到一起(部落：已经连接的一部分顶点； 部落连接：将散落的部落连接在一块形成大部落)
// 4. 重复1-3直到所有的点都连接到一起

const max = 1000000;
const pointSet = [];
const distance = [
    [0, 4, 7, max, max],
    [4, 0, 8, 6, max],
    [7, 8, 0, 5, max],
    [max, 6, 5, 0, 7],
    [max, max, max, 7, 0]
];

class Node {
    constructor(value) {
        this.value = value;
        this.neighbor = [];
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
pointSet.push(a);
pointSet.push(b);
pointSet.push(c);
pointSet.push(d);
pointSet.push(e);

const canLink = (resultList, tempBegin, tempEnd) => {
    let beginIn = null;
    let endIn = null;
    for(let i = 0; i < resultList.length; i ++) {
        if(resultList[i].indexOf(tempBegin) > -1) {
            beginIn = resultList[i];
        }
        if(resultList[i].indexOf(tempEnd) > -1) {
            endIn = resultList[i];
        }
    }
    if (beginIn !== null && endIn !== null && beginIn === endIn) {
        return false;
    }
    return true;
}
const Link = (resultList, tempBegin, tempEnd) => {
    let beginIn = null;
    let endIn = null;
    for(let i = 0; i < resultList.length; i ++) {
        if(resultList[i].indexOf(tempBegin) > -1) {
            beginIn = resultList[i];
        }
        if(resultList[i].indexOf(tempEnd) > -1) {
            endIn = resultList[i];
        }
    }
    if(beginIn === null && endIn === null) { //两个点都是新的点，都不在任何部落里，可以连接，产生新的部落
        const newArr = [];
        newArr.push(tempBegin);
        newArr.push(tempEnd);
        resultList.push(newArr);
    } else if(beginIn !== null && endIn === null) { // end有部落，begin没有，end扩张
        beginIn.push(tempEnd);
    } else if(beginIn === null && endIn !== null) { // begin有部落，end没有，begin扩张
        endIn.push(tempBegin);
    } else if(beginIn !== null && endIn !== null && beginIn !== endIn){ // 两个不同的部落，进行合并
        const allIn = beginIn.concat(endIn);
        let needRemove = resultList.indexOf(endIn);
        resultList.splice(needRemove, 1);
        needRemove = resultList.indexOf(beginIn);
        resultList.splice(needRemove, 1);
        resultList.push(allIn);

    }
    tempBegin.neighbor.push(tempEnd);
    tempEnd.neighbor.push(tempBegin);
}
const kruskall = (pointSet, distance) => {
    const resultList = []; // 二维数组，此数组代表有多少个部落
    while (true) {
        let minDis = max;
        let begin = null;
        let end = null;
        for (let i = 0; i < distance.length; i++) {
            for (let j = 0; j < distance[i].length; j++) {
                let tempBegin = pointSet[i];
                let tempEnd = pointSet[j];
                if(i != j && distance[i][j] < minDis && canLink(resultList, tempBegin, tempEnd)) { // 去掉自己到自己的距离，因为都为0
                    minDis = distance[i][j];
                    begin = tempBegin;
                    end = tempEnd;
                }
            }
        }
        Link(resultList, begin, end);
        if(resultList.length === 1 && resultList[0].length === pointSet.length) { // 只存在一个部落
            break;
        }
    }
}
kruskall(pointSet, distance);
console.log(pointSet);
