/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var applyBackSpace = (s) => {
  var t = [];
  for (var i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      t.pop();
    } else t.push(s[i]);
  }
  return t.join("");
};

var backspaceCompare = function (s, t) {
  var s1 = applyBackSpace(s);
  var s2 = applyBackSpace(t);
  if (s1 === s2) return true;
  return false;
};

console.log(backspaceCompare("ab##", "c#d#"));
