// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

// 二维数组结构：数组中的每一个数据也是一个数组
// 二位拓扑结构：图、散列数学
const arr = new Array(4);

for (let i = 0 ; i < arr.length ; i ++) {
    arr[i] = new Array(8);
}

function Node(value) {
    this.value = value;
    this.neighbor = [];
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.neighbor.push(b);
a.neighbor.push(c);
a.neighbor.push(f);
b.neighbor.push(a);
b.neighbor.push(d);
b.neighbor.push(e);
c.neighbor.push(a);
d.neighbor.push(b);
e.neighbor.push(b);