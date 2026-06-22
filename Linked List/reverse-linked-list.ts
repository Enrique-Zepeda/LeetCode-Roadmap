/*
https://leetcode.com/problems/reverse-linked-list/description/
Problem: Reverse Linked List
Category: Linked List
Pattern: Pointer Reversal

Time Complexity: O(n)
Space Complexity: O(1)

Key Idea:
Traverse the linked list and reverse the direction of every connection.

Before:
1 -> 2 -> 3 -> null

After:
3 -> 2 -> 1 -> null

At each node, we must save the next node before changing curr.next.
Otherwise, we would lose access to the rest of the original list.
*/

/*
ListNode represents one node in a linked list.

Each node contains:
- val: the value stored in the node.
- next: a reference to the next node, or null if it is the last node.

Example:
const node2 = new ListNode(2);
const node1 = new ListNode(1, node2);

Result:
node1 -> node2 -> null
   1  ->   2   -> null
*/
class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    // If no value is provided, use 0.
    this.val = val === undefined ? 0 : val;

    // If no next node is provided, the node points to null.
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  // Previous node.
  // At the beginning, there is no previous node.
  let prev: ListNode | null = null;

  // Current node being visited.
  let curr: ListNode | null = head;

  while (curr !== null) {
    // Save the next node before changing curr.next.
    const next = curr.next;

    // Reverse the current node's connection.
    curr.next = prev;

    // Move prev forward to the current node.
    prev = curr;

    // Move curr forward to the next node from the original list.
    curr = next;
  }

  // prev now points to the new head of the reversed list.
  return prev;
}

/*
Linked list construction:

node1 -> node2 -> node3 -> node4 -> node5 -> null
   1  ->    2  ->    3  ->    4  ->    5  -> null
*/

// Build the linked list from the last node to the first node.
const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

// node1 is the head of the original linked list.
console.log("Original list:", node1);

// reverseList returns the new head: node5.
const reversedHead = reverseList(node1);

console.log("Reversed list:", reversedHead);
