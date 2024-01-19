/*
 * @lc app=leetcode id=383 lang=typescript
 *
 * [383] Ransom Note
 */

// @lc code=start
function canConstruct(ransomNote: string, magazine: string): boolean {
    let hashmap: Map<string, number> = new Map<string, number>();

    for (let i = 0; i < magazine.length; i++) {
        if (hashmap.get(magazine[i])) hashmap.set(magazine[i], hashmap.get(magazine[i]) + 1);
        else hashmap.set(magazine[i], 1);
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (hashmap.get(ransomNote[i])) hashmap.set(ransomNote[i], hashmap.get(ransomNote[i]) - 1);
        else return false;

        if (hashmap.get(ransomNote[i]) < 0) return false;
    }

    return true;
};
// @lc code=end

