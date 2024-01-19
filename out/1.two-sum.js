/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */
// @lc code=start
function twoSum(nums, target) {
    var hashmap = new Map();
    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i];
        if (hashmap.has(diff))
            return [hashmap.get(diff), i];
        else
            hashmap.set(nums[i], i);
    }
    return [];
}
;
// @lc code=end
twoSum([2, 7, 11, 15], 9);
//# sourceMappingURL=1.two-sum.js.map