//Definition for singly-linked list.
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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
function mergeTwoLists(list1, list2) {
    if (!list1)
        return list2;
    if (!list2)
        return list1;
    var merged;
    if (list1.val < list2.val) {
        merged = new ListNode(list1.val, mergeTwoLists(list1.next, list2));
    }
    else {
        merged = new ListNode(list2.val, mergeTwoLists(list1, list2.next));
    }
    return merged;
}
;
// @lc code=end
console.log(mergeTwoLists(new ListNode(1, new ListNode(2, new ListNode(3))), new ListNode(1, new ListNode(3, new ListNode(4)))));
//# sourceMappingURL=21.merge-two-sorted-lists.js.map