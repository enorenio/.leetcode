import { ListNode } from "./classes";

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

function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return head;
    return reverse(head, null);
};

function reverse(curr: ListNode | null, parent: ListNode | null): ListNode {
    const next = curr.next;
    curr = new ListNode(curr.val, parent);

    if (!next) return curr;
    return reverse(next, curr);
    
}
// @lc code=end

reverseList(
    new ListNode(1,
        new ListNode(2, 
            new ListNode(3,
                new ListNode(4,
                    new ListNode(5)))))
);