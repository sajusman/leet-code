/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1ptr, list2ptr) {
  var merge = null;
  var mergeptr = merge;
  while (list1ptr && list2ptr) {
    if (list1ptr.val < list2ptr.val) {
      if (mergeptr) {
        mergeptr.next = new ListNode(list1ptr);
        mergeptr = mergeptr.next;
      } else {
        mergeptr.next = new ListNode(list1ptr);
        merge = mergeptr;
      }
      list1ptr = list1ptr.next;
    } else {
      if (mergeptr) {
        mergeptr.next = new ListNode(list2ptr);
        mergeptr = mergeptr.next;
      } else {
        mergeptr = new ListNode(list2ptr);
        merge = mergeptr;
      }
      list2ptr = list2ptr.next;
    }
  }

  while (list1ptr) {
    if (mergeptr) {
      mergeptr.next = new ListNode(list1ptr);
      mergeptr = mergeptr.next;
    } else {
      mergeptr = new ListNode(list1ptr);
      merge = mergeptr;
    }
    list1ptr = list1ptr.next;
  }

  while (list2ptr) {
    if (mergeptr) {
      mergeptr.next = new ListNode(list2ptr);
      mergeptr = mergeptr.next;
    } else {
      mergeptr.next = new ListNode(list2ptr);
      merge = mergeptr;
    }
    list2ptr = list2ptr.next;
  }
  return merge;
};
