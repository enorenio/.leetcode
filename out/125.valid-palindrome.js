/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */
// @lc code=start
function isPalindrome(s) {
    var clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    var reversed = clean.split('').reverse().join('');
    return clean === reversed;
}
;
// @lc code=end
console.log(isPalindrome("race a car"));
//# sourceMappingURL=125.valid-palindrome.js.map