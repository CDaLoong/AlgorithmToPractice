// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

class Node{
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

const A = new Node('A');
const C = new Node('C');
const F = new Node('F');
const G = new Node('G');
const H = new Node('H');

A.left = C;
C.left = F;
F.left = G;
G.left = H;

// const root = {
//     value: 'A',
//     left: {
//         value: 'C',
//         left: {
//             value: 'F',
//             left: {
//                  value: 'G',
//                  left: {
//                      value: 'H',
//                      left: null,
//                      right: null
//                  },
//                 right: null
//             },
//             right: null
//         },
//         right: null
//     },
//     right: null
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

const change = (root) => { // 返回平衡之后的根节点
    if (isBalance(root)) return root;
    if (root.left !== null) root.left = change(root.left);
    if (root.right !== null) root.right = change(root.right);
    const leftDeep = getDeep(root.left);
    const rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) < 2) {
        return root;
    } else if (leftDeep > rightDeep) { // 不平衡，左边深，需要右旋
        const changeTreeDeep = getDeep(root.left.right);
        const noChangeTreeDeep = getDeep(root.left.left);
        if (changeTreeDeep > noChangeTreeDeep) {
            root.left = leftRotate(root.left);
        }
        let newRoot = rightRotate(root);
        newRoot.right = change(newRoot.right); // 判断是否需要右右双旋
        newRoot = change(newRoot);
        return newRoot;
    } else { // 不平衡，右边深，需要左旋
        const changeTreeDeep = getDeep(root.right.left);
        const noChangeTreeDeep = getDeep(root.right.right);
        if (changeTreeDeep > noChangeTreeDeep) {
            root.right = rightRotate(root.right);
        }
        let newRoot = leftRotate(root);
        newRoot.left = change(newRoot.left); // 判断是否需要左左双旋
        newRoot = change(newRoot);
        return newRoot;
    }
    return root;
}

// 添加节点信息
const addNode = (root, num) => {
    if (!root) return;
    if (root.value === num) return;
    if (root.value < num) { // 目标值比当前节点大
        if (!root.right) root.right = new Node(num); // 如果右侧为空，则创建节点
        else addNode(root.right, num); // 如果右侧不为空，则向右侧进行递归
    } else { // 目标值比当前节点小
        if (!root.left) root.left = new Node(num);
        else addNode(root.left, num);
    }
}

// 构建搜索树
const buildSearchTree = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    const root = new Node(arr[0]);
    for (let i = 1 ; i < arr.length ; i ++) {
        addNode(root, arr[i]);
    }
    return root;
}

let num2 = 0;
// 根据树搜索节点
const searchByTree = (root, target) => {
    if (!root) return false;
    num2 += 1;
    if (root.value === target) return true;
    if (root.value > target) return searchByTree(root.left, target);
    else return searchByTree(root.right, target);
}
const arr = [];
for (let i = 0 ; i < 10000 ; i ++) {
    arr.push(Math.floor(Math.random() * 10000));
}

const root = buildSearchTree(arr);
console.log(searchByTree(root, 1000));
console.log(num2);

const newRoot = change(root);
num2 = 0;
console.log(searchByTree(newRoot, 1000));
console.log(num2);
console.log(isBalance(newRoot));






//
// console.log(isBalance(A));
//
// const newRoot = change(A);
//
// console.log(isBalance(newRoot));
// console.log(newRoot);