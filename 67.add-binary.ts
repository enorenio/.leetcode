/*
 * @lc app=leetcode id=67 lang=typescript
 *
 * [67] Add Binary
 */

// @lc code=start
function addBinary(a: string, b: string): string {
    const intA = BigInt('0b' + a);
    const intB = BigInt('0b' + b);

    const sum = intA + intB;

    return sum.toString(2);
};
// @lc code=end


const answer = addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011")
const trueAnswer = "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000";

console.log(answer);
console.log(answer === trueAnswer);
    