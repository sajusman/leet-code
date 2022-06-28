/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var xor = 0;
  for (num of nums) {
    xor ^= num;
  }
  return xor;
};
