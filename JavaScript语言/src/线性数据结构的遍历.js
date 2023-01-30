// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

// 线性数据结构的遍历
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function bianArr(arr) {
  if (arr == null) return
  for (let i = 0; i < arr.length; i++) {
    // 数组的遍历
    console.log(arr[i])
  }
}

bianArr(arr)

function Node(value) {
  this.value = value
  this.next = null
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

function bianLink(root) {
  // 链表的遍历
  if (root == null) return
  console.log(root.value)
  bianLink(root.next)

  // console.log(root.value)
  // if (root && root.next != null) {
  //     bianLink(root.next)
  // } else return;

  //   while(true) {
  //     if (temp != null) {
  //       console.log(temp.value);
  //     } else {
  //       break;
  //     }
  //     temp = temp.next;
  //   }
}

bianLink(node1)
