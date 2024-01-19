"use strict";
/*
 * @lc app=leetcode id=100 lang=typescript
 *
 * [100] Same Tree
 */
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
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
function isSameTree(p, q) {
    var pArr = [];
    var qArr = [];
    preorderDFS(p, function (num) { return pArr.push(num); });
    preorderDFS(q, function (num) { return qArr.push(num); });
    console.log(pArr);
    console.log(qArr);
    if (pArr.length !== qArr.length)
        return false;
    for (var i = 0; i < pArr.length; i++) {
        if (pArr[i] !== qArr[i])
            return false;
    }
    return true;
}
;
function preorderDFS(root, aggregator) {
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
var p = new classes_1.TreeNode(1, new classes_1.TreeNode(2), new classes_1.TreeNode(3));
var q = new classes_1.TreeNode(1, new classes_1.TreeNode(2), new classes_1.TreeNode(3));
isSameTree(p, q);
//# sourceMappingURL=100.same-tree.js.map