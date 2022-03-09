// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

// A、B、C、D、E 是五个村庄，现希望所有的村庄都联通修路，但是要求花费最少

// 1. 任选一个顶点作为起点
// 2. 找到以当前选中点为起点路径最短的边
// 3. 如果这个边的另一端没有被连通，则连接
// 4. 如果这个边的另一端也已经被连接起来了，则看倒数第二短的边
// 5. 重复2-4直到所有的点都连通为止

const max = 1000000;
const pointSet = []; // 点集合
const distance = [ // 点与点之间的距离（边的数据）集合
    [0, 4, 7, max, max],
    [4, 0, 8, 6, max],
    [7, 8, 0, 5, max],
    [max, 6, 5, 0, 7],
    [max, max, max, 7, 0]
];
class Node {
    constructor(value) {
        this.value = value;
        this.neighbor = []; // 当前点能与哪个点相连
    }
}
const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
pointSet.push(A);
pointSet.push(B);
pointSet.push(C);
pointSet.push(D);
pointSet.push(E);

const getIndex = (str) => { // 获取点在点集合中的下标
    for(let i = 0; i < pointSet.length; i ++) {
        if(pointSet[i].value === str) {
            return i;
        }
    }
    return -1
}
// 传入顶点的集合，边的数据集合，当前已经连接的顶点的集合
// 根据当前已有的节点进行判断，获取到距离最短的点
const getMinDisNode = (pointSet, distance, nowPointSet) => {
    let fromNode = null;   // 线段的起点
    let minDisNode = null; // 线段的终点
    let minDis = max;      // 线段的长度，起始为最大值
    for(let i = 0; i < nowPointSet.length; i++) {
        const nowPointIndex = getIndex(nowPointSet[i].value); // 获取当前顶点的索引
        for(let j = 0; j < distance[nowPointIndex].length; j ++) {
            const thisNode = pointSet[j]; // thisNode表示distance中的点，但这个点不是对象，是数据集合
            // 这个点不能是已经接入的点，点之间的距离是最短距离
            if(nowPointSet.indexOf(thisNode) < 0 && distance[nowPointIndex][j] < minDis) {
                fromNode = nowPointSet[i];
                minDisNode = thisNode;
                minDis = distance[nowPointIndex][j];
            }
        }
    }
    fromNode.neighbor.push(minDisNode);
    minDisNode.neighbor.push(fromNode);
    return minDisNode;
}
const prim = (pointSet, distance, start) => {
    const nowPointSet = [];
    nowPointSet.push(start);
    //获取最小代价的边
    while(true) {
        const minDisNode = getMinDisNode(pointSet, distance, nowPointSet);
        nowPointSet.push(minDisNode);
        if(nowPointSet.length === pointSet.length) {
            break;
        }
    }
}
prim(pointSet, distance, pointSet[2]);
console.log(pointSet);
