/*
 * @lc app=leetcode id=235 lang=typescript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode {
    if (p.val < root.val && q.val < root.val) { 
        return lowestCommonAncestor(root.left, p, q)
    } else if (p.val > root.val && q.val > root.val) { 
        return lowestCommonAncestor(root.right, p, q)
    } else { 
        return root
    }
};
// @lc code=end

