/*
 * @Author: DaLoong
 * @Date: 2022-04-20 11:50:51
 * @LastEditors: DaLoong
 * @LastEditTime: 2022-04-20 11:51:58
 * @FilePath: /AlgorithmToPractice/JavaScript语言/src/链表相关.js
 * @Description: 
 */

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

// 利用链表的后续遍历，使用函数调用栈作为后序遍历栈，来判断是否回文
const isPalindrome = function (head) {
    let left = head;
    function traverse(right) {
        if (right == null) return true;
        let res = traverse(right.next);
        res = res && (right.val === left.val);
        left = left.next;
        return res;
    }
    return traverse(head);
};
