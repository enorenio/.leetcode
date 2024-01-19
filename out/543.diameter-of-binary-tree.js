"use strict";
/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
function getHeight(root, height) {
    if (height === void 0) { height = 0; }
    if (root === null)
        return height;
    return Math.max(getHeight(root === null || root === void 0 ? void 0 : root.left, height + 1), getHeight(root === null || root === void 0 ? void 0 : root.right, height + 1));
}
function diameterOfBinaryTree(root) {
    var maxPath = 0;
    function getMaxDiff(root) {
        if (root === null)
            return;
        var leftHeight = getHeight(root.left);
        var rightHeight = getHeight(root.right);
        console.log("root: ".concat(root.val, ", l:").concat(leftHeight, ", r:").concat(rightHeight));
        maxPath = Math.max(maxPath, leftHeight + rightHeight);
        if (leftHeight >= maxPath)
            getMaxDiff(root.left);
        if (rightHeight >= maxPath)
            getMaxDiff(root.right);
    }
    getMaxDiff(root);
    return maxPath;
}
;
// @lc code=end
//# sourceMappingURL=543.diameter-of-binary-tree.js.map