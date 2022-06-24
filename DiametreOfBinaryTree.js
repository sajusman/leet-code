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
 * @return {number}
 */

var diameterOfBinaryTree = function (root) {
  let maxDiameter = 0;
  let calculateDiamter = (root) => {
    if (root.left) calculateDiamter(root.left);
    if (root.right) calculateDiamter(root.right);
    let leftSum = getHeight(root.left);
    let rightSum = getHeight(root.right);
    if (leftSum + rightSum > maxDiameter) {
      maxDiameter = leftSum + rightSum;
    }
  };
  let getHeight = function (root) {
    if (!root) {
      return 0;
    }
    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
  };
  calculateDiamter(root);
  return maxDiameter;
};
