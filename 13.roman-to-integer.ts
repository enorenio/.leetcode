/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(str: string): number {
    let sum = 0;

    const symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };

    const deductables = ["I", "X", "C"];
    const minuend = {
        "I": ["V", "X"],
        "X": ["L", "C"],
        "C": ["D", "M"]
    };

    for (let i = 0; i < str.length;) {
        const s = str[i];

        if (symbols[s]) {
            if (deductables.includes(s)) {
                if (minuend[s].includes(str[i+1])) {
                    sum += symbols[str[i+1]];
                    sum -= symbols[s];

                    i += 2;
                } else {
                    sum += symbols[s];
                    i += 1;
                }
            } else {
                sum += symbols[s];
                i += 1;
            }
        }

    }

    return sum;
};
// @lc code=end

console.log(romanToInt("DCXXI"));