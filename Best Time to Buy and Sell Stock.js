/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  var profit = 0;
  var lsf = Number.MAX_VALUE;

  for (var i = 0; i < prices.length; i++) {
    if (prices[i] < lsf) {
      lsf = prices[i];
    }
    const soldToday = prices[i] - lsf;
    if (soldToday > profit) {
      profit = soldToday;
    }
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
