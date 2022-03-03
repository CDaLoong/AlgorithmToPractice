// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

class BinaryTreeFactory {
    constructor(value) {
        this._value = value;
        this._left = null;
        this._right = null;
    }
    get value() { return this._value }
    get left() { return this._left }
    get right() { return this._right }
    set left(val) { this._left = val; }
    set right(val) { this._right = val; }
}

const A1 = new BinaryTreeFactory('A');
const B1 = new BinaryTreeFactory('B');
const C1 = new BinaryTreeFactory('C');
const D1 = new BinaryTreeFactory('D');
const E1 = new BinaryTreeFactory('E');
const F1 = new BinaryTreeFactory('F');
const G1 = new BinaryTreeFactory('G');

A1.left = C1;
A1.right = B1;
B1.left = D1;
B1.right = E1;
C1.left = F1;
C1.right = G1;

const A2 = new BinaryTreeFactory('A');
const B2 = new BinaryTreeFactory('S');
const C2 = new BinaryTreeFactory('C');
const D2 = new BinaryTreeFactory('D');
const E2 = new BinaryTreeFactory('J');
const F2 = new BinaryTreeFactory('F');
const G2 = new BinaryTreeFactory('G');
const H2 = new BinaryTreeFactory('H');

A2.left = C2;
A2.right = B2;
B2.left = D2;
B2.right = E2;
C2.left = null;
C2.right = G2;
D2.left = H2;

// const root = {
//     value: 'A',
//     left: {
//         value: 'C',
//         left: {
//             value: 'F',
//             left: null,
//             right: null
//         },
//         right: {
//             value: 'G',
//             left: null,
//             right: null
//         }
//     },
//     right: {
//         value: 'B',
//         left: {
//             value: 'D',
//             left: null,
//             right: null
//         },
//         right: {
//             value: 'E',
//             left: null,
//             right: null
//         }
//     }
// }

// 二叉树的 diff 算法，需要知道新增了什么、修改了什么、删除了什么，dom 的 diff 算法是同一思想
// { type: 增/删/改, origin: 原来的, now: 现在的 }
const diffTree = (node1, node2, diffList) => {
    switch (true) {
        case node1 === node2:
            return diffList;
        case !node1 && !!node2: // 第一个 ! 先转换为布尔，第二个 ! 做判断
            diffList.push({ type: '新增', origin: null, now: node2});
            break;
        case node1 && node2 && node1.value !== node2.value:
            diffList.push({ type: '修改', origin: node1, now: node2});
            diffTree(node1.left, node2.left, diffList);
            diffTree(node1.right, node2.right, diffList);
            break;
        case node1 && !node2:
            diffList.push({ type: '删除', origin: node1, now: null});
            break;
        default:
            diffTree(node1.left, node2.left, diffList);
            diffTree(node1.right, node2.right, diffList);
            break;
    }
}
const diffList = [];
diffTree(A1, A2, diffList);
console.log(diffList)