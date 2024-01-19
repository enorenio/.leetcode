/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  let min = Number.MAX_VALUE;
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    let price = prices[i];
    let diff = price - min;
    if (price < min) {
      min = price;
    } else if (diff > max) {
      max = diff;
    }
  }

  return max;
};
// @lc code=end

console.log(maxProfit([7,1,5,3,6,4]));

