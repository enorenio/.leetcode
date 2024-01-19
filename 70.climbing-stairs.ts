/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
    let x = 1, y = 2;
    let temp;

    if (n < 3) return n;

    for (let i = 2; i < n; i++) {
        temp = x;
        x = y;
        y = y + temp;
    }

    return y;
};
// @lc code=end

console.log(climbStairs(3));