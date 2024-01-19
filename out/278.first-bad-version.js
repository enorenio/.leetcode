/*
 * @lc app=leetcode id=278 lang=typescript
 *
 * [278] First Bad Version
 */
// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
var solution = function (isBadVersion) {
    var check = function (bottom, top) {
        if (top - bottom <= 1) {
            if (isBadVersion(bottom))
                return bottom;
            else
                return top;
        }
        var middle = bottom + Math.floor((top - bottom) / 2);
        if (!isBadVersion(middle)) {
            // Go right
            return check(middle, top);
        }
        else {
            // Go left
            return check(bottom, middle);
        }
    };
    return function (n) {
        return check(1, n);
    };
};
// @lc code=end
//# sourceMappingURL=278.first-bad-version.js.map