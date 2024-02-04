/*
 * @lc app=leetcode id=844 lang=typescript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
function backspaceCompare(s: string, t: string): boolean {
    let qS = [];
    let qT = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "#") qS.pop();
        else qS.push(s[i]);
    }
    for (let i = 0; i < t.length; i++) {
        if (t[i] === "#") qT.pop();
        else qT.push(t[i]);
    }
    
    console.log(qS);
    console.log(qT);

    const areEqual = qS.length === qT.length && qS.every((value, index) => value === qT[index]);

    return areEqual;
};
// @lc code=end

