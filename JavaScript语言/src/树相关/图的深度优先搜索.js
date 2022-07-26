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

const deepSearch = (root, target, already) => {
    if (!root || already.includes(root)) return false;
    console.log(root.value)
    already.push(root)
    if (root.value === target) return true;
    if (Array.isArray(root.neighbor) && root.neighbor.length > 0) {
        for (let i = 0; i < root.neighbor.length; i++) {
            if (deepSearch(root.neighbor[i], target, already)) return true;
        }
        return false;
    } else return false;
}

console.log(deepSearch(A, 'X', []))
