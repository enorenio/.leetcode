"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
 */
// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function reverseList(head) {
    if (!head)
        return head;
    return reverse(head, null);
}
;
function reverse(curr, parent) {
    var next = curr.next;
    curr = new classes_1.ListNode(curr.val, parent);
    if (!next)
        return curr;
    return reverse(next, curr);
}
// @lc code=end
reverseList(new classes_1.ListNode(1, new classes_1.ListNode(2, new classes_1.ListNode(3, new classes_1.ListNode(4, new classes_1.ListNode(5))))));
//# sourceMappingURL=206.reverse-linked-list.js.map