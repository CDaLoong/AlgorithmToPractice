// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

class BinaryTreeFactory {
    constructor(value) {
        this._value = value;
        this._neighbor = [];
    }
    get value() { return this._value }
    get neighbor() { return this._neighbor }
    set addNeighbor(neighbor) { this._neighbor.push(neighbor)}
}

const A = new BinaryTreeFactory('A');
const B = new BinaryTreeFactory('B');
const C = new BinaryTreeFactory('C');
const D = new BinaryTreeFactory('D');
const E = new BinaryTreeFactory('E');
const F = new BinaryTreeFactory('F');

A.addNeighbor = B;
A.addNeighbor = C;
B.addNeighbor = A;
B.addNeighbor = C;
B.addNeighbor = D;
C.addNeighbor = A;
C.addNeighbor = B;
C.addNeighbor = D;
D.addNeighbor = B;
D.addNeighbor = C;
D.addNeighbor = E;
E.addNeighbor = D;


// [
//     [B, C], [A, C, D], [A, B, D], [B, C, E], [D]
// ]

// 队列
const bfs = (root, target, already) => {
    if (!root) return false;
    already.push(root);
    if (root.value === target) return true;
    const queue = [];
    if (Array.isArray(root.neighbor) && root.neighbor.length > 0) {
        queue.push(...root.neighbor.filter(item => !already.includes(item)));
        for (let i = 0; i < queue.length; i++) {
            already.push(queue[i]);
            console.log(queue[i].value)
            if (queue[i].value === target) return true;
            if (Array.isArray(queue[i].neighbor) && queue[i].neighbor.length > 0) queue.push(...queue[i].neighbor.filter(item => !already.includes(item) && !queue.includes(item)));
        }
        return false;
    } else return false;
}
console.log(bfs(A, 'E', []))

// 递归
// const bfs = (nodes, target, already) => {
//     if (!Array.isArray(nodes) || nodes.length === 0) return false;
//     const nextNodes = [];
//     for (let i = 0 ; i < nodes.length ; i ++) {
//         if (already.indexOf(nodes[i]) > -1) continue;
//         already.push(nodes[i]);
//         console.log(nodes[i].value);
//         if (nodes[i].value === target) return true;
//         else nextNodes.push(...nodes[i].neighbor);
//     }
//     return bfs(nextNodes, target, already);
// }
//
// console.log(bfs([A], "F", []));