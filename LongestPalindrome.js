/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  const f = new Map();
  for (var i = 0; i < s.length; i++) {
    if (f.has(s[i])) {
      f.set(s[i], f.get(s[i]) + 1);
    } else {
      f.set(s[i], 1);
    }
  }
  let maxOddCount = 0;
  let evenCount = 0;
  let oddCount = 0;
  for (var [key, value] of f) {
    if (value % 2 === 0) {
      evenCount += value;
    } else {
      if (value > maxOddCount) {
        if (maxOddCount !== 0) oddCount += maxOddCount - 1;
        maxOddCount = value;
      } else {
        oddCount += value - 1;
      }
    }
  }
  return maxOddCount + evenCount + oddCount;
};
