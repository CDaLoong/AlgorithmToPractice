// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

// 双指向的链表，即包含下一个引用，也包含上一个引用，但是双向链表所有能实现的功能单向链表都能实现
// 优点：无论给出哪个节点，都可以对整个链表进行遍历
// 缺点：多耗费一个引用的空间，而且构建双向链表比较复杂，所以很少使用双向链表

function Node(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)
node1.next = node2
node2.prev = node1
node2.next = node3
node3.prev = node2
node3.next = node4
node4.prev = node3
node4.next = node5
node5.prev = node4