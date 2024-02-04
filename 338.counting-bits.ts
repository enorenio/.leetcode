/*
 * @lc app=leetcode id=338 lang=typescript
 *
 * [338] Counting Bits
 */

// @lc code=start
function countBits(n: number): number[] {
    let arr = Array.from({ length: n + 1 }, (_, index) => {
        const binary = index.toString(2);
        const ones = binary.split('').map(a => parseInt(a)).reduce((acc, curr) => acc += curr);
        return ones;
    });

    return arr;
};
// @lc code=end

