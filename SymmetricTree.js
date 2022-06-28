/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isSameTree = (p, q) => {
  if (!p && !q) return true;
  if ((p && !q) || (!p && q) || p.val !== q.val) return false;
  return true && isSameTree(p.left, q.right) && isSameTree(p.right, q.left);
};
var isSymmetric = function (root) {
  return isSameTree(root.left, root.right);
};
