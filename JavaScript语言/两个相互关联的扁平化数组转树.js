// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

// 有一个根节点和两个数组，第一个数组内的每个对象都有两个端点属性，另一个数组内的对象存储着第一个数组内不同对象之间相连的关系，先要求根据根节点和两个数组生成之间相连的关系树，如图所示'./img/两个扁平化数组转树.png'
const A = 'A'
const dataArr = [
    {
        B1: 'B1',
        B2: 'B2' 
    },{
        C1: 'C1',
        C2: 'C2' 
    },{
        D1: 'D1',
        D2: 'D2' 
    },{
        E1: 'E1',
        E2: 'E2' 
    },{
        F: 'F',
    },{
        G1: 'G1',
        G2: 'G2' 
    },{
        H: 'H',
    }
]

const connArr = [
    {
        A: 'A',
        B: 'B1',
        C: 'C1'
    },{
        B: 'B2',
        D: 'D1',
        F: 'F'
    },{
        C: 'C2',
        E: 'E1',
    },{
        E: 'E2',
        G: 'G1',
        H: 'H'
    }
]

// 查找管理的数据
const findData = (dataArr, data) => {
    if (!dataArr || !Array.isArray(dataArr) || !data) return null;
    const dataObj =  dataArr.find(item => Object.values(item).includes(data))
    if (!dataObj) return null;
    const resultObj = {}
    for (let prop in dataObj) {
        if (dataObj[prop] === data) continue;
        resultObj[prop] = dataObj[prop];
    }
    if (Object.keys(resultObj).length > 0) return { dataObj, resultObj };
    return { dataObj };
}

// 设置节点子节点信息
const traversalSetChildren = (root, rootData) => {
    if (!rootData || !root) return;
    const rootCoonData = findData(connArr, rootData)
    if (!rootCoonData) return;
    if (rootCoonData.resultObj) {
        const connData = rootCoonData.resultObj
        for (let prop in connData) {
            const child = findData(dataArr, connData[prop])
            const childData = child.dataObj ? child.dataObj : null;
            const childConnData = child.resultObj ? child.resultObj : null;
            if (childData && childConnData) {
                for (let prop in childConnData) {
                    traversalSetChildren(childData, childConnData[prop])
                }
            }
            if (!root.children) {
                root.children = []
            }
            root.children.push(childData)
        }
    }
}

const root = {};

traversalSetChildren(root, A)
console.log(root)
