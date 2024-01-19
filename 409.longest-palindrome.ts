/*
 * @lc app=leetcode id=409 lang=typescript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
function longestPalindrome(s: string): number {
    const arr = s.split('');
    let hm: Map<string, number> = new Map();

    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        if (hm.get(curr)) {
            hm.set(curr, hm.get(curr) + 1);
        } else {
            hm.set(curr, 1);
        }
    }

    let letters = 0;
    let flag = 0;
    const entries = Array.from(hm.entries());

    for (const [key, value] of entries) {
        if (!(value % 2)) {
            letters += value;
        } else {
            letters += value - 1;
            flag = 1;
        }
    }

    return letters + flag;
};
// @lc code=end

console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));