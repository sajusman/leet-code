/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const pv = p.val;
  const qv = q.val;
  const rv = root.val;
  if (rv > pv && rv > qv) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (rv < pv && rv < qv) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
};
