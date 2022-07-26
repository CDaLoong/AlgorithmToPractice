// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

class BinaryTreeFactory {
    constructor(value) {
        this._value = value;
        this._children = [];
    }
    get value() { return this._value }
    get children() { return this._children }
    set addChild(child) { this._children.push(child)}
}

const A = new BinaryTreeFactory('A');
const B = new BinaryTreeFactory('B');
const C = new BinaryTreeFactory('C');
const D = new BinaryTreeFactory('D');
const E = new BinaryTreeFactory('E');
const F = new BinaryTreeFactory('F');

A.addChild = C;
A.addChild = F;
A.addChild = B;
B.addChild = D;
B.addChild = E;

// const root = {
//     value: 'A',
//     children = [
//     { value: 'C', children: [] },
//     { value: 'F', children: [] },
//     { value: 'B', children: [{ value: 'D', children: []}, { value: 'E', children: []}]}
//     ]
// }

// 队列
const bfs = (root, target) => {
    if (!root) return false;
    if (root.value === target) return true;
    const queue = [];
    if (Array.isArray(root.children) && root.children.length > 0) {
        queue.push(...root.children)
        for (let i = 0; i < queue.length; i++) {
            console.log(queue[i].value)
            if (queue[i].value === target) return true;
            if (Array.isArray(queue[i].children) && queue[i].children.length > 0) queue.push(...queue[i].children);
        }
        return false;
    } else return false;
}
console.log(bfs(A, 'X'))

// 递归
// const bfs = (roots, target) => {
//     if (!Array.isArray(roots) || roots.length === 0) return false;
//     const children = [];
//     for (let i = 0 ; i < roots.length ; i ++) {
//         console.log(roots[i].value);
//         if (roots[i].value === target) return true;
//         else children.push(...roots[i].children);
//     }
//     return bfs(children, target);
// }
//
// console.log(bfs([A], "S"));