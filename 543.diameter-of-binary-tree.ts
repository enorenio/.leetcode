/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
 */

import { TreeNode } from "./classes";

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

function getHeight(root: TreeNode | null, height = 0): number {
    if (root === null) return height;
    return Math.max(getHeight(root?.left, height + 1), getHeight(root?.right, height + 1));
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    let maxPath = 0;
    function getMaxDiff(root: TreeNode | null) {
        if (root === null) return; 
        const leftHeight = getHeight(root.left);
        const rightHeight = getHeight(root.right);

        console.log(`root: ${root.val}, l:${leftHeight}, r:${rightHeight}`);

        maxPath = Math.max(maxPath, leftHeight + rightHeight);
        if (leftHeight >= maxPath) getMaxDiff(root.left);
        if (rightHeight >= maxPath) getMaxDiff(root.right);
    }

    getMaxDiff(root);

    return maxPath;
};
// @lc code=end

