/*
 * @lc app=leetcode id=704 lang=typescript
 *
 * [704] Binary Search
 */

// @lc code=start
function search(nums: number[], target: number): number {
    return bs(nums, target, 0);
};

function bs(nums: number[], target: number, offset: number): number {
    const middleIndex = Math.floor(nums.length / 2);
    const middleValue = nums[middleIndex];

    if (nums.length <= 1 && middleValue !== target) return -1;
    if (middleValue === target) {
        return offset + middleIndex;
    }
    if (middleValue < target) {
        return bs(nums.slice(middleIndex + 1), target, offset + middleIndex + 1);
    } else {
        return bs(nums.slice(0, middleIndex), target, offset);
    }
}
// @lc code=end

console.log(search([-1,0,3,5,9,12], 13));