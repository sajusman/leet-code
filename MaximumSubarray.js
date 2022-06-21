/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var bestSum = Number.NEGATIVE_INFINITY;
  var currentSum = 0;
  for (var i = 0; i < nums.length; i++) {
    currentSum = Math.max(nums[i], nums[i] + currentSum);
    bestSum = Math.max(bestSum, currentSum);
  }
  return bestSum;
};

console.log(maxSubArray([5, 4, -1, 7, 8]));
