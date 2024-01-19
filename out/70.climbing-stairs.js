/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */
// @lc code=start
function climbStairs(n) {
    var x = 1, y = 2;
    var temp;
    if (n < 3)
        return n;
    for (var i = 2; i < n; i++) {
        temp = x;
        x = y;
        y = y + temp;
    }
    return y;
}
;
// @lc code=end
console.log(climbStairs(3));
//# sourceMappingURL=70.climbing-stairs.js.map