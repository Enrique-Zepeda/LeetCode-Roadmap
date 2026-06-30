/*
https://leetcode.com/problems/remove-nth-node-from-end-of-list/
Problem: Remove Nth Node From End of List
Category: Linked List
Pattern: Dummy Node + Two Pointers

Time Complexity: O(n)
Space Complexity: O(1)

Key Idea:
We need to remove the nth node from the end of the linked list.

Instead of calculating the length first, we use two pointers:
left and right.

The trick:
Move right n steps ahead first.
Then move left and right together.

When right reaches null, left will be right before the node we need to remove.

Example:
head = [1, 2, 3, 4, 5], n = 2

Original list:
1 -> 2 -> 3 -> 4 -> 5 -> null

The 2nd node from the end is 4.

Result:
1 -> 2 -> 3 -> 5 -> null

Why Dummy Node?
The dummy node is placed before head.

dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> null

This helps when the node to remove is the head itself.

Example:
head = [1], n = 1

dummy -> 1 -> null

After removing 1:
dummy -> null

return dummy.next

Why left.next = left.next.next?
At the end, left is right before the node to remove.

Example:
1 -> 2 -> 3 -> 4 -> 5 -> null
          ↑
         left

left.next is 4.
left.next.next is 5.

So:
left.next = left.next.next

Means:
3 -> 5

This skips/removes node 4.
*/

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // Dummy node before the real head.
  // This makes it easy to remove the first node if needed.
  const dummy = new ListNode(0, head);

  // left starts before the head.
  let left: ListNode | null = dummy;

  // right starts at the head.
  let right: ListNode | null = head;

  /*
  Step 1:
  Move right n steps ahead.

  Example:
  head = 1 -> 2 -> 3 -> 4 -> 5
  n = 2

  After moving right 2 steps:
  dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> null
    ↑              ↑
   left           right
  */
  while (n > 0) {
    right = right!.next;
    n--;
  }

  /*
  Step 2:
  Move left and right together.

  Because right is n steps ahead,
  when right reaches null, left will be right before
  the node we need to remove.
  */
  while (right) {
    left = left!.next;
    right = right.next;
  }

  /*
  Step 3:
  Remove the node after left.

  Before:
  left -> nodeToRemove -> nodeAfterRemoved

  After:
  left -> nodeAfterRemoved

  In code:
  left.next = left.next.next
  */
  left!.next = left!.next!.next;

  // Return the real head, skipping the dummy node.
  return dummy.next;
}
