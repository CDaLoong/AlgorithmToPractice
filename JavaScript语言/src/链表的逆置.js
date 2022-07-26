// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

// 对链表进行逆序，让最后一个指向倒数第二个，依次更改，突破点在于先找到最后一个节点
function Node(value) {
  this.value = value
  this.next = null
}
const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5


function nizhi (root) {
    if (root.next.next === null) { // 找到最后一个节点
        root.next.next = root; // 最后一个节点指向倒数第二个节点
        return root.next; // 返回最后一个节点
    } else {
        const result = nizhi(root.next); // 进入递归，堆栈，先进后出
        root.next.next = root; // 下一个节点指向当前节点
        root.next = null; // 当前节点指向null
        return result;
    }
}

function bianLink(root) {
    if (root === null) return;
    console.log(root.value);
    bianLink(root.next)
}
bianLink(node1);
const newRoot = nizhi(node1);
bianLink(newRoot);
bianLink(node5);