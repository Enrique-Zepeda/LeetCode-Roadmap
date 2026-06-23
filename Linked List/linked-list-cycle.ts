/*
https://leetcode.com/problems/linked-list-cycle/description/
Problem: Linked List Cycle
Category: Linked List
Pattern: Floyd's Cycle Detection / Slow and Fast Pointers

Time Complexity: O(n)
Space Complexity: O(1)

Key Idea:
Use two pointers moving at different speeds.

slow moves 1 node at a time.
fast moves 2 nodes at a time.

If the linked list has a cycle, fast will eventually catch slow.
If the linked list does not have a cycle, fast will eventually reach null.

Example:
head = [3, 2, 0, -4], pos = 1

pos = 1 means the tail connects back to the node at index 1.

Visual:
node1 -> node2 -> node3 -> node4
  3   ->   2   ->   0   ->  -4
          ↑                 ↓
          ← ← ← ← ← ← ← ← ←

Why compare slow === fast?
We are checking whether both pointers point to the exact same node,
not whether their values are equal.

Why while (fast && fast.next)?
Because fast moves two steps:

fast = fast.next.next

So before moving, we must make sure:
- fast exists
- fast.next exists

If fast reaches null, the list has an end, so there is no cycle.
*/

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function hasCycle(head: ListNode | null): boolean {
  // slow moves one node at a time.
  let slow: ListNode | null = head;

  // fast moves two nodes at a time.
  let fast: ListNode | null = head;

  // Continue only while fast can safely move two steps.
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;

    // If both pointers meet, there is a cycle.
    if (slow === fast) return true;
  }

  // If fast reaches null, the list ends, so there is no cycle.
  return false;
}
