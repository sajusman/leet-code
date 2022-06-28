/**
 * @param {number} n
 * @return {number[]}
 */
const dp = new Map();

var countBits = function (n) {
  var result = [];
  for (var i = 0; i <= n; i++) {
    if (dp.has(i)) result.push(dp.get(i));
    else {
      dp.set(i, getNumberOf1s(i));
      result.push(dp.get(i));
    }
  }
  return result;
};

var getNumberOf1s = (n) => {
  let onesCount = 0;
  while (n > 1) {
    if (n % 2 !== 0) {
      onesCount++;
    }
    n = Math.floor(n / 2);
  }
  return onesCount + n;
};

console.log(getNumberOf1s(11));
