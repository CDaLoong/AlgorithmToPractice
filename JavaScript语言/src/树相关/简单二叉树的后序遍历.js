// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

// FGCDEBA

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

const A = new BinaryTreeFactory('A');
const B = new BinaryTreeFactory('B');
const C = new BinaryTreeFactory('C');
const D = new BinaryTreeFactory('D');
const E = new BinaryTreeFactory('E');
const F = new BinaryTreeFactory('F');
const G = new BinaryTreeFactory('G');

A.left = C;
A.right = B;
B.left = D;
B.right = E;
C.left = F;
C.right = G;

// 后序遍历先打印子树右边的节点
const traversal = (node) => {
    if (!node) return
    traversal(node.left);
    traversal(node.right);
    console.log(node.value)
}

traversal(A)