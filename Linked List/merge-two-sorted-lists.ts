/*
https://leetcode.com/problems/merge-two-sorted-lists/
Problem: Merge Two Sorted Lists
Category: Linked List
Pattern: Dummy Node + Two Pointers
Time Complexity: O(n + m)
Space Complexity: O(1)

Key Idea:
Both linked lists are already sorted.

We keep one pointer at the current node of each list.
At every step, we compare both values and connect the smaller node
to the end of the merged list.

We use a dummy node to avoid handling the first node as a special case.

Example:
list1 = 1 -> 2 -> 4
list2 = 1 -> 3 -> 4

Process:
Compare 1 and 1 -> connect one 1
Compare 1 and 3 -> connect the other 1
Compare 2 and 3 -> connect 2
Compare 4 and 3 -> connect 3
Compare 4 and 4 -> connect one 4
One list is empty -> connect the remaining nodes

Result:
1 -> 1 -> 2 -> 3 -> 4 -> 4

Pointer Roles:
list1 = current node in the first list
list2 = current node in the second list
dummy = fixed fake node before the merged list
node = current last node of the merged list

Why Dummy Node?
Without a dummy node, we would need special logic to create
and remember the first node of the merged list.

The dummy node gives us a fixed starting point.
At the end, dummy.next is the real head of the merged list.
*/

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  // Fake starting node placed before the real merged list.
  const dummy = new ListNode(0);

  // node always points to the current end of the merged list.
  let node = dummy;

  // Continue while both lists still have nodes to compare.
  while (list1 && list2) {
    if (list1.val < list2.val) {
      // list1 has the smaller value, so connect its current node.
      node.next = list1;

      // Move list1 to its next node.
      list1 = list1.next;
    } else {
      // list2 has the smaller or equal value, so connect its current node.
      node.next = list2;

      // Move list2 to its next node.
      list2 = list2.next;
    }

    // Move node to the new end of the merged list.
    node = node.next;
  }

  // One list is now empty.
  // Connect the remaining sorted nodes from the other list.
  if (list1) {
    node.next = list1;
  } else {
    node.next = list2;
  }

  // Skip the fake dummy node and return the real head.
  return dummy.next;
}
