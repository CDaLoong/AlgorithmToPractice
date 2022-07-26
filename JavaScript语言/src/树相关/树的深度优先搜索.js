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

const deepSearch = (root, target) => {
    if (!root) return false;
    console.log(root.value)
    if (root.value === target) return true;
    if (Array.isArray(root.children) && root.children.length > 0) {
        for (let i = 0; i < root.children.length; i++) {
            if (deepSearch(root.children[i], target)) return true;
        }
        return false;
    } else return false;
}

console.log(deepSearch(A, 'X'))
