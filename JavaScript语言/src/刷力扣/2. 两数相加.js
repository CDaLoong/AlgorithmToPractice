// 放在开始
// 1. 严谨性判断，不允许任何报错
// 2. 任何递归程序，先写出口
// 3. 任何一种算法，都没有优劣之分，只有是否适合的场景

// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。
// 请你将两个数相加，并以相同形式返回一个表示和的链表。
// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
// 示例 1：
// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807.

// 示例 2：
// 输入：l1 = [0], l2 = [0]
// 输出：[0]

// 示例 3：
// 输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// 输出：[8,9,9,9,0,0,0,1]

// const l1 = [2, 4, 3], l2 = [5, 6, 4]
const l1 = [9, 9, 9, 9, 9, 9, 9],
  l2 = [9, 9, 9, 9];

// 数组化想法解题
// const func = (l1, l2) => {
//   if (
//     !l1 instanceof Array ||
//     !l2 instanceof Array ||
//     l1.length <= 0 ||
//     l2.length <= 0
//   )
//     return l1 || l2 || [];
//   const computed = (arr1, arr2) => {
//     let a = 0,
//       b = 0;
//     const arr = [];
//     console.log(arr1, arr2);
//     for (let i = 0; i < arr2.length; i++) {
//       const num = arr1[arr1.length - 1 - i] + arr2[arr2.length - 1 - i] + a;
//       if (num >= 10) {
//         a = 1;
//         b = num % 10;
//       } else {
//         a = 0;
//         b = num;
//       }
//       arr.push(b);
//     }
//     for (let i = arr1.length - arr2.length - 1; i >= 0; i--) {
//       const num = arr1[i] + a;
//       console.log(arr1[i]);
//       if (num >= 10) {
//         a = 1;
//         b = num % 10;
//       } else {
//         a = 0;
//         b = num;
//       }
//       arr.push(b);
//     }
//     if (a === 1) arr.push(a);
//     return arr;
//   };
//   const numArr = l1.length > l2.length ? computed(l1, l2) : computed(l2, l1);
//   return numArr;
//   // const reversedArr = (arr) => {
//   //   if (!arr instanceof Array) return [];
//   //   const res = [];
//   //   for (let i = 0; i < arr.length; i++) {
//   //     res.unshift(arr[i]);
//   //   }
//   //   return res;
//   // };
//   // console.log((Number(reversedArr(l1).join("")) + 465).toString());
//   // return reversedArr(
//   //   (Number(reversedArr(l1).join("")) + Number(reversedArr(l2).join("")))
//   //     .toString()
//   //     .split("")
//   //     .map((i) => Number(i))
//   // );
// };

// 链表想法
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 伪链表解法
// const func = (l1, l2) => {
//   const getNum = (node) => {
//     if (!node) return 0;
//     let curNode = node;
//     const arr = [curNode.val];
//     while (curNode.next) {
//       curNode = curNode.next;
//       arr.unshift(curNode.val);
//     }
//     return arr;
//   };
//   const computed = (arr1, arr2) => {
//     let a = 0,
//       b = 0;
//     const arr = [];
//     for (let i = 0; i < arr2.length; i++) {
//       const num = arr1[arr1.length - 1 - i] + arr2[arr2.length - 1 - i] + a;
//       if (num >= 10) {
//         a = 1;
//         b = num % 10;
//       } else {
//         a = 0;
//         b = num;
//       }
//       arr.push(b);
//     }
//     for (let i = arr1.length - arr2.length - 1; i >= 0; i--) {
//       const num = arr1[i] + a;
//       console.log(arr1[i]);
//       if (num >= 10) {
//         a = 1;
//         b = num % 10;
//       } else {
//         a = 0;
//         b = num;
//       }
//       arr.push(b);
//     }
//     if (a === 1) arr.push(a);
//     return arr;
//   };
//   const arr1 = getNum(l1),
//     arr2 = getNum(l2);
//   const numArr =
//     arr1.length > arr2.length ? computed(arr1, arr2) : computed(arr2, arr1);

//   //   const numArr = (getNum(l1) + getNum(l2)).toString().split("").reverse();
//   const node = new ListNode(numArr.shift(), null);
//   const getNodeList = (arr, node) => {
//     if (arr.length > 0) {
//       const n = new ListNode(arr.shift(), null);
//       node.next = n;
//       getNodeList(arr, n);
//     }
//   };
//   getNodeList(numArr, node);
//   return node;
// };
// 真链表解法
const func = (l1, l2) => {
  const node = new ListNode();
  let nodeT = node;
  let n = 0;
  while (l1 || l2) {
    const num = ((l1 && l1.val) || 0) + ((l2 && l2.val) || 0) + n;
    if (num >= 10) {
      nodeT.val = num % 10;
      n = 1;
    } else {
      nodeT.val = num;
      n = 0;
    }
    if ((l1 && l1.next) || (l2 && l2.next)) {
      const node = new ListNode();
      nodeT.next = node;
      nodeT = node;
      l1 = (l1 && l1.next) || null;
      l2 = (l2 && l2.next) || null;
    } else {
      l1 = l2 = null;
      if (n) {
        nodeT.next = new ListNode(n);
      }
    }
  }
  return node;
};
console.log(func(l1, l2));
