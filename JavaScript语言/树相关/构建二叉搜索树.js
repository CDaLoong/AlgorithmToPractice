// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

const arr = [];

for (let i = 0 ; i < 1000 ; i ++) {
    arr[i] = Math.floor(Math.random() * 10000);
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// var num = 0;
// function search(arr, target) {
//     for (var i = 0 ; i < arr.length ; i ++) {
//         num += 1;
//         if (arr[i] == target) return true;
//     }
//     return false;
// }
// console.log(search(arr, 1000));
// console.log(num);

// 向搜索树中添加节点
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

const root = buildSearchTree(arr);
console.log(root);

const searchByTree = (root, target) => {
    if (!root || !target) return false;
    if (root.value === target) return true;
    if (root.value < target) return searchByTree(root.right, target);
    return searchByTree(root.left, target);
}
console.log(searchByTree(root, 1567))
