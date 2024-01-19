/*
 * @lc app=leetcode id=242 lang=typescript
 *
 * [242] Valid Anagram
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
    let hs = new Map<string, number>();
    for (let i = 0; i < s.length; i++) {
        if (hs.has(s[i])) hs.set(s[i], hs.get(s[i]) + 1);
        else hs.set(s[i], 1);
    }
    for (let i = 0; i < t.length; i++) {
        if (hs.has(t[i])) {
            hs.set(t[i], hs.get(t[i]) - 1);
            if (hs.get(t[i]) < 0) return false;
        }
        else return false;
    }

    let allZeroes = Array.from(hs.entries()).every((v) => v[1] === 0)
    if (!allZeroes) return false;

    return true;
};
// @lc code=end

console.log(isAnagram("anagram", "nagaram"));
