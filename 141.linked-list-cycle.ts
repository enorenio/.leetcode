/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
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

function hasCycle(head: ListNode | null): boolean {
    if (head === null) return false;
    
    let p1: ListNode | null = head;
    let p2: ListNode | null = head;
    let counter = 0;

    while (p1.next !== null) {
        // Move p1 one step at a time
        p1 = p1.next;
        
        // Move p2 one step every second move
        if (counter % 2) {
            p2 = p2.next;
        }
        counter++;

        // Credits to rubicstark
        if (p1 === p2) return true;
    }

    return false;
};
// @lc code=end