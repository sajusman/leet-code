/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let slowPointer = head;
  let fastPointer = head;

  while (slowPointer.next && fastPointer.next && fastPointer.next.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }
  return fastPointer.next ? slowPointer.next : slowPointer;
};
