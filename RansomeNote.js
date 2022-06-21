/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const fm = new Map();
  for (var i = 0; i < magazine.length; i++) {
    if (fm.has(magazine[i])) {
      fm.set(magazine[i], fm.get(magazine[i]) + 1);
    } else {
      fm.set(magazine[i], 1);
    }
  }

  for (var i = 0; i < ransomNote.length; i++) {
    if (fm.has(ransomNote[i])) {
      if (fm.get(ransomNote[i]) === 0) return false;
      fm.set(ransomNote[i], fm.get(ransomNote[i]) - 1);
    } else {
      return false;
    }
  }
  return true;
};
