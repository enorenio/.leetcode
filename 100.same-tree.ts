/*
 * @lc app=leetcode id=100 lang=typescript
 *
 * [100] Same Tree
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    let pArr = [];
    let qArr = [];
    preorderDFS(p, (num) => pArr.push(num));
    preorderDFS(q, (num) => qArr.push(num));

    console.log(pArr);
    console.log(qArr);

    if (pArr.length !== qArr.length) return false;

    for (let i = 0; i < pArr.length; i++) {
        if (pArr[i] !== qArr[i]) return false;
    }

    return true;
};

function preorderDFS(root: TreeNode | null, aggregator: (root: number | null) => void) {
    if (!root) {
        aggregator(null);
        return;
    }

    aggregator(root.val);
    preorderDFS(root.left, aggregator);
    preorderDFS(root.right, aggregator);

    return root.val;
}
// @lc code=end
const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));

isSameTree(p, q);
