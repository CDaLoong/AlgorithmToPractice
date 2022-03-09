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

const A = new BinaryTreeFactory('A');
const B = new BinaryTreeFactory('B');
const C = new BinaryTreeFactory('C');
const D = new BinaryTreeFactory('D');
const E = new BinaryTreeFactory('E');
const F = new BinaryTreeFactory('F');
const G = new BinaryTreeFactory('G');
const H = new BinaryTreeFactory('H');
const I = new BinaryTreeFactory('I');

A.left = B;
A.right = C;
B.left = D;
// B.right = E;
C.left = F;
C.right = G;
D.right = H;
E.right = I;

// 判断是否是平衡二叉树，要遵循后续遍历
// 首先要获取二叉树每个节点的左右子树的深度
// 然后再看每个节点的左右子树深度差是否大于1

// 获取一个节点的深度
const getDeep = (root) => {
    if (!root) return 0;
    const leftDeep = getDeep(root.left);
    const rightDeep = getDeep(root.right);
    // 返回左右子树最深的深度加上自身的层数
    return Math.max(leftDeep, rightDeep) + 1;
}

const isBalanceTree = (root) => {
    if (!root) return true;
    const leftDeep = getDeep(root.left);
    const rightDeep = getDeep(root.right);
    // 比较左右子树和和左右节点的子树深度是否相差大于1
    return Math.abs(leftDeep - rightDeep) > 1 ? false : isBalanceTree(root.left) && isBalanceTree(root.right)
}

console.log(isBalanceTree(B))












