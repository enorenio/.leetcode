/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */
// @lc code=start
function maxProfit(prices) {
    var min = Number.MAX_VALUE;
    var max = 0;
    for (var i = 0; i < prices.length; i++) {
        var price = prices[i];
        var diff = price - min;
        if (price < min) {
            min = price;
        }
        else if (diff > max) {
            max = diff;
        }
    }
    return max;
}
;
// @lc code=end
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
//# sourceMappingURL=121.best-time-to-buy-and-sell-stock.js.map