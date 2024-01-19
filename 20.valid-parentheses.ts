/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    let stack = [];
    let open = "({[";
    let close = ")}]";

    let brackets = {
        "(": ")",
        "{": "}",
        "[": "]",
    };

    for(let i = 0; i < s.length; i++) {
        if (open.includes(s[i])) {
            stack.push(s[i]);
        }
        if (close.includes(s[i])) {
            if (brackets[stack[stack.length - 1]] === s[i]) {
                stack.pop()
            } else {
                return false;
            }
        }
    }

    if (stack.length === 0) return true;
    return false;
};
// @lc code=end

console.log(isValid("()"));
