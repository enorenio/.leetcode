/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    // Moore Voting algorithm
    let candidate: number;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!count) {
            candidate = nums[i];
            count++;
        } else {
            if (candidate === nums[i]) count++;
            else count--;
        }
    }

    return candidate;
};
// @lc code=end

console.log(majorityElement([6,5,5]))