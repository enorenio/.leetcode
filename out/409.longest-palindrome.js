/*
 * @lc app=leetcode id=409 lang=typescript
 *
 * [409] Longest Palindrome
 */
// @lc code=start
function longestPalindrome(s) {
    var arr = s.split('');
    var hm = new Map();
    for (var i = 0; i < arr.length; i++) {
        var curr = arr[i];
        if (hm.get(curr)) {
            hm.set(curr, hm.get(curr) + 1);
        }
        else {
            hm.set(curr, 1);
        }
    }
    var letters = 0;
    var flag = 0;
    var entries = Array.from(hm.entries());
    for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
        var _a = entries_1[_i], key = _a[0], value = _a[1];
        if (!(value % 2)) {
            letters += value;
        }
        else {
            letters += value - 1;
            flag = 1;
        }
    }
    return letters + flag;
}
;
// @lc code=end
console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
//# sourceMappingURL=409.longest-palindrome.js.map