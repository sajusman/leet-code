const reverseList = function (head) {
  let previous = null;
  let current = head;
  while (current) {
    let next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }
  return previous;
};

var isPalindrome = function (head) {
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  slow = reverseList(slow);
  while (slow) {
    if (slow.val !== head.val) return false;
    slow = slow.next;
    head = head.next;
  }
  return true;
};
