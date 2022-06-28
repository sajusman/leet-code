/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var p = "";
  for (var i = 0; i < strs[0].length; i++) {
    var isMatching = true;
    var wentInLoop = false;
    var ch = strs[0][i];
    for (var j = 0; j < strs.length; j++) {
      wentInLoop = true;
      if (ch !== strs[j][i]) {
        isMatching = false;
        break;
      }
    }
    if (isMatching === false || wentInLoop == false) break;
    else {
      p += ch;
    }
  }
  return p;
};
