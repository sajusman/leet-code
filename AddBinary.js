/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

var addBinary = (a, b) => {
  var carry = 0;
  var res = "";
  a = [...a].reverse().join("");
  b = [...b].reverse().join("");
  var i = 0,
    sum;
  while (i < a.length || i < b.length) {
    sum = carry;
    if (i < a.length) sum += a[i] - "0";
    if (i < b.length) sum += b[i] - "0";
    if (sum == 0) (carry = 0), (res += "0");
    else if (sum == 1) (carry = 0), (res += "1");
    else if (sum == 2) (carry = 1), (res += "0");
    else (carry = 1), (res += "1");
    i++;
  }
  if (carry == 1) res += "1";
  return [...res].reverse().join("");
};
