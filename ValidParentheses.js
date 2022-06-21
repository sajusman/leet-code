/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stack = [];

  var peekElements = ["(", "{", "["];
  var closeElements = [")", "}", "]"];

  for (var i = 0; i < s.length; i++) {
    if (peekElements.includes(s[i])) stack.push(s[i]);
    else {
      var index = closeElements.indexOf[s[i]];
      if (index >= 0) {
        if (stack[stack.length - 1] === peekElements[index]) stack.pop();
        else return false;
      }
    }
  }

  if (stack.length !== 0) return false;
  return true;
};
