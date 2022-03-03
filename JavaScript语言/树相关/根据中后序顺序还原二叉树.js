// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

// 中序遍历：FCGADBE
// 后续遍历：FGCDEBA
// FCG A DBE
// FGC DEB A

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

const LDR = ['F', 'C', 'G', 'A', 'D', 'B', 'E'];
const STR = ['F', 'G', 'C', 'D', 'E', 'B', 'A'];

const restore = (LDR, STR) => {
    if (!LDR || !STR || LDR.length === 0 || STR.length === 0 || LDR.length !== STR.length) return null;
    const root = new BinaryTreeFactory(STR[STR.length - 1]); // 获取根节点
    const index = LDR.indexOf(root.value); 
    const LDRLeft = LDR.slice(0, index);  // 获取左子树中序打印结果
    const LDRRight = LDR.slice(index + 1, LDR.length); // 获取右子树中序打印结果
    const STRLeft = STR.slice(0, index); // 获取左子树后序打印结果
    const STRRight = STR.slice(index, STR.length - 1) // 获取右子树后序打印结果
    root.left = restore(LDRLeft, STRLeft);
    root.right = restore(LDRRight, STRRight);
    return root;
}

const root = restore(LDR, STR);
console.log(root);