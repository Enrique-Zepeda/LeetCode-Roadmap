/*
https://leetcode.com/problems/reorder-list/description/
Problem: Reorder List
Category: Linked List
Pattern: Find Middle + Reverse Second Half + Merge Two Halves

Time Complexity: O(n)
Space Complexity: O(1)

Key Idea:
We need to reorder the list from:

L0 -> L1 -> L2 -> ... -> Ln

Into:

L0 -> Ln -> L1 -> Ln-1 -> L2 -> Ln-2 -> ...

We cannot modify node values.
We must change the next pointers.

To do this in O(1) extra space:

1. Find the middle of the list.
2. Split the list into two halves.
3. Reverse the second half.
4. Merge the first half and the reversed second half.

Example:
Input:
1 -> 2 -> 3 -> 4 -> 5 -> null

Step 1: Find the middle.
middle = 3

Step 2: Split.
first half:
1 -> 2 -> 3 -> null

second half:
4 -> 5 -> null

Step 3: Reverse second half.
5 -> 4 -> null

Step 4: Merge.
1 -> 5 -> 2 -> 4 -> 3 -> null

Why slow and fast pointers?
slow moves 1 step.
fast moves 2 steps.

When fast reaches the end, slow is at the middle.

Why reverse the second half?
The final order needs nodes from the end:
Ln, Ln-1, Ln-2...

Since singly linked lists only move forward,
we reverse the second half so we can access those nodes in order.

Why use temporary pointers while merging?
Before changing next pointers, we save the next nodes.
Otherwise, we would lose access to the rest of the list.
*/

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reorderList(head: ListNode | null): void {
  // Edge case: empty list or one-node list does not need reordering.
  if (!head || !head.next) return;

  /*
  Step 1:
  Find the middle of the linked list.

  For even-length lists, slow stops at the end of the first half.

  Example:
  1 -> 2 -> 3 -> 4

  slow stops at 2.
  first half:  1 -> 2
  second half: 3 -> 4
  */
  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  /*
  Step 2:
  Split the list into two halves.

  second starts at the node after slow.
  Then we cut the connection by setting slow.next = null.
  */
  let second: ListNode | null = slow!.next;
  slow!.next = null;

  /*
  Step 3:
  Reverse the second half.

  Before:
  4 -> 5 -> null

  After:
  5 -> 4 -> null
  */
  let prev: ListNode | null = null;

  while (second !== null) {
    // Save the next node before reversing the pointer.
    const next = second.next;

    // Reverse the connection.
    second.next = prev;

    // Move prev and second forward.
    prev = second;
    second = next;
  }

  /*
  After reversing:
  prev is the head of the reversed second half.

  first:
  1 -> 2 -> 3 -> null

  second:
  5 -> 4 -> null
  */
  let first: ListNode | null = head;
  second = prev;

  /*
  Step 4:
  Merge the two halves.

  first:
  1 -> 2 -> 3

  second:
  5 -> 4

  Result:
  1 -> 5 -> 2 -> 4 -> 3
  */
  while (second !== null) {
    // Save next nodes before changing connections.
    const nextFirst: ListNode | null = first!.next;
    const nextSecond: ListNode | null = second.next;

    // Insert second node after first node.
    first!.next = second;
    second.next = nextFirst;

    // Move both pointers forward.
    first = nextFirst;
    second = nextSecond;
  }
}
