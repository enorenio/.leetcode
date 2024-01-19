/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = clean.split('').reverse().join('');
    
    return clean === reversed;
};
// @lc code=end

console.log(isPalindrome("race a car"));