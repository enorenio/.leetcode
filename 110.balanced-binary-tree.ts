import { TreeNode } from "./classes";

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
function getHeight(root: TreeNode | null): number {
    if (root === null) return 0;
    if (root.left === null && root.right === null) return 1;
    else {
        const leftHeight = getHeight(root?.left);
        const rightHeight = getHeight(root?.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

function isBalanced(root: TreeNode | null): boolean {
    if (root === null) return true;
    if (Math.abs(getHeight(root?.left) - getHeight(root?.right)) > 1) return false;
    if (!isBalanced(root?.left) || !isBalanced(root?.right)) return false;
    else return true;
};

// @lc code=end

console.log(isBalanced(
    new TreeNode(1, 
        new TreeNode(2, 
            new TreeNode(3,
                new TreeNode(4,
                    null,
                    null),
                new TreeNode(4,
                    null,
                    null)), 
            new TreeNode(3, 
                null,
                null)), 
        new TreeNode(2, 
            null, 
            null))));