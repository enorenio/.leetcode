/*
 * @lc app=leetcode id=1207 lang=typescript
 *
 * [1207] Unique Number of Occurrences
 */
// @lc code=start
function uniqueOccurrences(arr) {
    var hs = new Map();
    for (var i = 0; i < arr.length; i++) {
        var el = arr[i];
        if (hs.get(el))
            hs.set(el, hs.get(el) + 1);
        else
            hs.set(el, 1);
    }
    var entries = Array.from(hs.values());
    var set = new Set(entries);
    return entries.length === set.size;
}
;
// @lc code=end
console.log(uniqueOccurrences([1, 2]));
//# sourceMappingURL=1207.unique-number-of-occurrences.js.map