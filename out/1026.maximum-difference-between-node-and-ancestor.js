"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
function maxAncestorDiff(root) {
    var global_diff = 0;
    function goDeep(root, minimum, maximum) {
        if (!root)
            return [minimum, maximum];
        var _a = goDeep(root === null || root === void 0 ? void 0 : root.left, minimum, maximum), left_min = _a[0], left_max = _a[1];
        var _b = goDeep(root === null || root === void 0 ? void 0 : root.right, minimum, maximum), right_min = _b[0], right_max = _b[1];
        var min = Math.min(Math.min(Math.min(left_min, right_min), root.val), minimum);
        var max = Math.max(Math.max(Math.max(left_max, right_max), root.val), maximum);
        var diff = Math.max(Math.abs(root.val - min), Math.abs(root.val - max));
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
}
;
// @lc code=end
//# sourceMappingURL=1026.maximum-difference-between-node-and-ancestor.js.map