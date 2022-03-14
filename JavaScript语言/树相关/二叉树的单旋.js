// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const A = new Node('A');
const C = new Node('C');
const F = new Node('F');
const G = new Node('G');

A.right = C;
C.left = F;
C.right = G;
// const root = {
//     value: 'A',
//     left: null,
//     right: {
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
//     }
// }

// 获取一棵树的深度
const getDeep = (root) => {
    if (!root) return 0;
    const leftDeep = getDeep(root.left);
    const rightDeep = getDeep(root.right);
    return Math.max(leftDeep, rightDeep) + 1;
}

// 判断是否是平衡二叉树
const isBalance = (root) => {
    if (root == null) return true;
    const leftDeep = getDeep(root.left);
    const rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) > 1) { // 不平衡
        return false;
    } else {
        return isBalance(root.left) && isBalance(root.right);
    }
}

// 左单旋
const leftRotate = (root) => {
    // 找到新根
    const newRoot = root.right;
    // 找到变化分支
    const changeTree = root.right.left;
    // 当前旋转节点的右孩子为变化分支
    root.right = changeTree;
    // 新根的左孩子为旋转节点
    newRoot.left = root;
    // 返回新的根节点
    return newRoot;
}
// 右单旋
const rightRotate = (root) => {
    // 找到新根
    const newRoot = root.left;
    // 找到变化分支
    const changeTree = root.left.right;
    // 当前旋转节点的左孩子为变化分支
    root.left = changeTree;
    // 新根的右孩子为旋转节点
    newRoot.right = root;
    // 返回新的根节点
    return newRoot;
}
// 将不平衡二叉树进行左右单旋转为平衡二叉树
const change = (root) => { // 返回平衡之后的根节点
    if (isBalance(root)) return root;
    if (root.left != null) root.left = change(root.left);
    if (root.right != null) root.right = change(root.right);
    const leftDeep = getDeep(root.left);
    const rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) < 2) {
        return true;
    } else if (leftDeep > rightDeep) { // 不平衡，左边深，需要右旋
        return rightRotate(root);
    } else { // 不平衡，右边深，需要左旋
        return leftRotate(root);
    }
}

console.log(isBalance(A));

const newRoot = change(A);

console.log(isBalance(newRoot));
console.log(newRoot);