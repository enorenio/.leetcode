/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */
// @lc code=start
function majorityElement(nums) {
    // Moore Voting algorithm
    var candidate;
    var count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (!count) {
            candidate = nums[i];
            count++;
        }
        else {
            if (candidate === nums[i])
                count++;
            else
                count--;
        }
    }
    return candidate;
}
;
// @lc code=end
console.log(majorityElement([6, 5, 5]));
//# sourceMappingURL=169.majority-element.js.map