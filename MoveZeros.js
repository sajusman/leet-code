/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  let k = 0;
  let fZero = false;
  while (i < nums.length) {
    if (nums[i] === 0 && !fZero) {
      k = i;
      fZero = true;
    }
    if (nums[i] !== 0 && fZero) {
      nums[k] = nums[i];
      nums[i] = 0;
      i = k;
      fZero = false;
    }
    i++;
  }
  return nums;
};
