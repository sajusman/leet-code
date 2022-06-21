/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numMap = new Map();
  for (var i = 0; i < nums.length; i++) {
    numMap.set(nums[i], i);
  }

  for (var i = 0; i < nums.length; i++) {
    if (numMap.has(target - nums[i]) && i != numMap.get(target - nums[i])) {
      return [i, numMap.get(target - nums[i])];
    }
  }
};
