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
const B2 = new BinaryTreeFactory('B');
const C2 = new BinaryTreeFactory('C');
const D2 = new BinaryTreeFactory('D');
const E2 = new BinaryTreeFactory('E');
const F2 = new BinaryTreeFactory('F');
const G2 = new BinaryTreeFactory('G');

A2.left = C2;
A2.right = B2;
B2.left = D2;
B2.right = E2;
C2.left = F2;
C2.right = G2;

// 比较两个二叉树是否有差异，左右子树交换则不一致的情况下，一直递归比较，没有 false，就是 true（left && right）
// const diff = (node1, node2) => {
//     if (node1 === node2) return true; // 是同一个颗树
//     if (!node1 && node2 || node1 && !node2 || !node1 && !node2 && node1 !== node2 || node1 && node2 && node1.value !== node2.value) return false;
//     return diff(node1.left, node2.left) && diff(node1.right, node2.right);
// }
// console.log(diff(A1, A2))

// 左右子树交换仍一致的情况下
const diff = (node1, node2) => {
    if (node1 === node2) return true; // 是同一个颗树
    if (!node1 && node2 || node1 && !node2 || !node1 && !node2 && node1 !== node2 || node1 && node2 && node1.value !== node2.value) return false;
    return diff(node1.left, node2.left) && diff(node1.right, node2.right) || diff(node1.right, node2.left) && diff(node1.left, node2.right);
}
console.log(diff(A1, A2))
