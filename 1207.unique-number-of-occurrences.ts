/*
 * @lc app=leetcode id=1207 lang=typescript
 *
 * [1207] Unique Number of Occurrences
 */

// @lc code=start
function uniqueOccurrences(arr: number[]): boolean {
    const hs = new Map<number, number>();
    
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if (hs.get(el)) hs.set(el, hs.get(el) + 1);
        else hs.set(el, 1);
    }
    
    const entries = Array.from(hs.values());
    const set = new Set(entries);

    return entries.length === set.size;
};
// @lc code=end

console.log(uniqueOccurrences([1,2]));
