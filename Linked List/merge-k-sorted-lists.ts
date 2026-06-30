/*
https://leetcode.com/problems/merge-k-sorted-lists/description/
Problem: Merge k Sorted Lists
Category: Linked List
Pattern: Divide and Conquer / Pairwise Merge

Time Complexity: O(N log k)
Space Complexity: O(k)

N = total number of nodes across all lists.
k = number of linked lists.

Key Idea:
We already know how to merge 2 sorted linked lists.

To merge k sorted linked lists efficiently, we merge them in pairs:

Round 1:
list0 + list1
list2 + list3
list4 + list5
...

Round 2:
merged0 + merged1
merged2 + merged3
...

We repeat this process until only one list remains.

This is similar to merge sort.

Example:
lists = [
  1 -> 4 -> 5,
  1 -> 3 -> 4,
  2 -> 6
]

Round 1:
merge(1 -> 4 -> 5, 1 -> 3 -> 4)
=> 1 -> 1 -> 3 -> 4 -> 4 -> 5

merge(2 -> 6, null)
=> 2 -> 6

Now lists becomes:
[
  1 -> 1 -> 3 -> 4 -> 4 -> 5,
  2 -> 6
]

Round 2:
merge(
  1 -> 1 -> 3 -> 4 -> 4 -> 5,
  2 -> 6
)

Final result:
1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

Why pairwise merge?
If we merge lists one by one, the merged list keeps getting larger,
so we may repeatedly scan many nodes.

Pairwise merging keeps the work balanced.

Why while (lists.length > 1)?
Because we keep reducing the number of lists until only one merged list remains.

Why i += 2?
Because we process the lists in pairs:
lists[0] with lists[1]
lists[2] with lists[3]
lists[4] with lists[5]

Why l2 can be null?
If the number of lists is odd, the last list has no pair.
In that case, we merge it with null, which just keeps the same list.
*/

class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  // If there are no lists, there is nothing to merge.
  if (!lists || lists.length === 0) {
    return null;
  }

  // Keep merging lists in pairs until only one list remains.
  while (lists.length > 1) {
    // Stores the merged lists from the current round.
    const mergedLists: Array<ListNode | null> = [];

    // Process lists two at a time.
    for (let i = 0; i < lists.length; i += 2) {
      // First list of the pair.
      const l1 = lists[i];

      // Second list of the pair.
      // If it does not exist, use null.
      const l2 = i + 1 < lists.length ? lists[i + 1] : null;

      // Merge both lists and store the result for the next round.
      mergedLists.push(mergeList(l1, l2));
    }

    // Replace the old lists with the merged results.
    lists = mergedLists;
  }

  // The only remaining list is the final merged list.
  return lists[0];
}

function mergeList(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0);
  let node = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      node.next = l1;
      l1 = l1.next;
    } else {
      node.next = l2;
      l2 = l2.next;
    }

    node = node.next;
  }

  if (l1) {
    node.next = l1;
  } else {
    node.next = l2;
  }

  return dummy.next;
}
