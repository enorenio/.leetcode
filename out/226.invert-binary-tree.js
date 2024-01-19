"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @lc app=leetcode id=226 lang=typescript
 *
 * [226] Invert Binary Tree
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
function invertTree(root) {
    if (root !== null) {
        var left = root === null || root === void 0 ? void 0 : root.left;
        var right = root === null || root === void 0 ? void 0 : root.right;
        root.left = invertTree(right);
        root.right = invertTree(left);
    }
    return root;
}
;
// @lc code=end
//# sourceMappingURL=226.invert-binary-tree.js.map