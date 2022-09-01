/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return arrayToBST(nums, 0, nums.length - 1);
};

const arrayToBST = (nums, start, end) => {
  if (start > end) return NULL;
  const mid = (start + end) / 2;
  const root = new TreeNode(nums[mid]);
  root.left = arrayToBST(nums, start, mid - 1);
  root.right = arrayToBST(nums, mid + 1, end);
  return root;
};
