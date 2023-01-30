// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

// 前序遍历：ACFGBDE
// 中序遍历：FCGADBE
// A CFG BDE
// FCG A DBE

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

const DLR = ['A', 'C', 'F', 'G', 'B', 'D', 'E'];
const LDR = ['F', 'C', 'G', 'A', 'D', 'B', 'E'];

const restore = (DLR, LDR) => {
    if (!DLR || !LDR || DLR.length === 0 || LDR.length === 0 || DLR.length !== LDR.length) return null;
    const root = new BinaryTreeFactory(DLR[0]); // 获取根节点
    const index = LDR.indexOf(root.value);
    const DLRLeft = DLR.slice(1, index + 1); // 获取左子树前序打印结果
    const DLRRight = DLR.slice(index + 1, DLR.length); // 获取右子树前序打印结果
    const LDRLeft = LDR.slice(0, index); // 获取左子树中序打印结果
    const LDRRight = LDR.slice(index + 1, LDR.length) // 获取右子树中序打印结果
    root.left = restore(DLRLeft, LDRLeft);
    root.right = restore(DLRRight, LDRRight);
    return root;
}

const root = restore(DLR, LDR);
console.log(root);