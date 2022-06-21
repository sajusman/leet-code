/**
 * @param {number} n
 * @return {number}
 */

const arr = Array(45).fill(null);
const dp = [];

var climbStairs = function (n) {
  if (arr[n]) return arr[n];
  arr[n] = reach(0, n);
  return arr[n];
};

const reach = (sp, n) => {
  let saved = dp.find((item) => item.sp === sp && item.n === n);
  if (saved) {
    if (saved.reach) return saved.mem;
    return 0;
  }
  if (sp > n) {
    dp.push({ sp, n, reach: false });
    return 0;
  } else if (sp === n) {
    dp.push({ sp, n, reach: true, mem: 1 });
    return 1;
  }
  let r1 = reach(sp + 1, n);
  let r2 = reach(sp + 2, n);
  if (r1 === 0) dp.push({ sp: sp + 1, n, reach: false });
  else dp.push({ sp: sp + 1, n, reach: true, mem: r1 });
  if (r2 === 0) dp.push({ sp: sp + 2, n, reach: false });
  else dp.push({ sp: sp + 2, n, reach: true, mem: r2 });
  return r1 + r2;
};
