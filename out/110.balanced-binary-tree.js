"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
 */
// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function getHeight(root) {
    if (root === null)
        return 0;
    if (root.left === null && root.right === null)
        return 1;
    else {
        var leftHeight = getHeight(root === null || root === void 0 ? void 0 : root.left);
        var rightHeight = getHeight(root === null || root === void 0 ? void 0 : root.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}
function isBalanced(root) {
    if (root === null)
        return true;
    if (Math.abs(getHeight(root === null || root === void 0 ? void 0 : root.left) - getHeight(root === null || root === void 0 ? void 0 : root.right)) > 1)
        return false;
    if (!isBalanced(root === null || root === void 0 ? void 0 : root.left) || !isBalanced(root === null || root === void 0 ? void 0 : root.right))
        return false;
    else
        return true;
}
;
// @lc code=end
console.log(isBalanced(new classes_1.TreeNode(1, new classes_1.TreeNode(2, new classes_1.TreeNode(3, new classes_1.TreeNode(4, null, null), new classes_1.TreeNode(4, null, null)), new classes_1.TreeNode(3, null, null)), new classes_1.TreeNode(2, null, null))));
//# sourceMappingURL=110.balanced-binary-tree.js.map