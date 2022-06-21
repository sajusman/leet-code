/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function createMap(s) {
  const m = new Map();
  for (var i = 0; i < s.length; i++) {
    if (m.has(s[i])) {
      m.set(s[i], m.get(s[i]) + 1);
    } else {
      m.set(s[i], 1);
    }
  }
  return m;
}

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const m1 = createMap(s);
  const m2 = createMap(t);
  for (var i = 0; i < s.length; i++) {
    if (m1.get(s[i]) !== m2.get(s[i])) return false;
  }
  return true;
};

console.log(isAnagram("aacc", "ccac"));
