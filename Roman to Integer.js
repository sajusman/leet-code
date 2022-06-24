/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let value = 0;

  let romanMap = new Map();
  romanMap.set("I", 1);
  romanMap.set("IV", 4);
  romanMap.set("V", 5);
  romanMap.set("IX", 9);
  romanMap.set("X", 10);
  romanMap.set("XL", 40);
  romanMap.set("L", 50);
  romanMap.set("XC", 90);
  romanMap.set("C", 100);
  romanMap.set("CD", 400);
  romanMap.set("D", 500);
  romanMap.set("CM", 900);
  romanMap.set("M", 1000);

  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    let nextCh = s[i + 1];
    if (nextCh && romanMap.has(ch + nextCh)) {
      value += romanMap.get(ch + nextCh);
      i++;
    } else {
      value += romanMap.get(ch);
    }
  }
  return value;
};
