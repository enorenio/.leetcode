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

var solution = function(isBadVersion: any) {

    const check = (bottom: number, top: number): number => {
        if (top - bottom <= 1) {
            if (isBadVersion(bottom)) return bottom;
            else return top;
        }

        const middle = bottom + Math.floor((top - bottom) / 2);

        if (!isBadVersion(middle)) {
            // Go right
            return check(middle, top);
        }
        else {
            // Go left
            return check(bottom, middle);
        }
    }

    return function(n: number): number {
        return check(1, n);
    };
};
// @lc code=end

