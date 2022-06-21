/**
 * @param {string} s
 * @return {boolean}
 */

var isAlphaNumeric = (c) => {
  return (
    (c >= "a" && c < "z") || (c >= "A" && c < "Z") || (c >= "0" && c <= "9")
  );
};

var isPalindrome = function (s) {
  var j = s.length - 1;
  for (var i = 0; i < s.length; i++) {
    if (!isAlphaNumeric(s[i])) {
      continue;
    } else if (!isAlphaNumeric(s[j])) {
      j--;
      i--;
      continue;
    }
    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }
    j--;
  }
  return true;
};
