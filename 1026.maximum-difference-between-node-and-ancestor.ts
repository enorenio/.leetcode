import { TreeNode } from "./classes";

/*
 * @lc app=leetcode id=1026 lang=typescript
 *
 * [1026] Maximum Difference Between Node and Ancestor
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


function maxAncestorDiff(root: TreeNode | null): number {
    let global_diff = 0;

    function goDeep(root: TreeNode | null, minimum: number, maximum: number): [number, number]  {
        if (!root) return [minimum, maximum];
    
        const [left_min, left_max] = goDeep(root?.left, minimum, maximum);
        const [right_min, right_max] = goDeep(root?.right, minimum, maximum);
    
        const min = Math.min(Math.min(Math.min(left_min, right_min), root.val), minimum);
        const max = Math.max(Math.max(Math.max(left_max, right_max), root.val), maximum);
    
        const diff = Math.max(Math.abs(root.val - min), Math.abs(root.val - max));
        // console.log("===");
        // console.log(`node: ${root.val} diff is max of ${Math.abs(root.val - min)} ${Math.abs(root.val - max)}`);
        // console.log(`global_diff:${global_diff}`)
        if (diff > global_diff) {
            // console.log(`global_diff changed: ${global_diff} to ${diff}`);
            global_diff = diff;
        }
        // console.log("===");
    
        return [min, max];
    }

    goDeep(root, root.val, root.val);

    return global_diff;
};

// @lc code=end

