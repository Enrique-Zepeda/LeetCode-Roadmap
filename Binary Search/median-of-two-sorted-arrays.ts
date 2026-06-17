/*
https://leetcode.com/problems/median-of-two-sorted-arrays/description/
Problem: Median of Two Sorted Arrays
Category: Binary Search
Pattern: Binary Search on Partition
Time Complexity: O(log(min(m, n)))
Space Complexity: O(1)

Key Idea:
Use binary search on the smaller array to find a partition where:

Aleft <= Bright
Bleft <= Aright

When this happens, every value on the left side is smaller than or equal
to every value on the right side, so the median can be calculated from
the values surrounding the partition.
*/

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let A = nums1;
  let B = nums2;

  const total = A.length + B.length;

  // Number of elements that must stay on the combined left side.
  const half = Math.floor((total + 1) / 2);

  // Binary search must be performed on the smaller array.
  if (B.length < A.length) {
    [A, B] = [B, A];
  }

  // We search for a partition position, so r can be A.length.
  let l = 0;
  let r = A.length;

  while (l <= r) {
    // i = elements taken from A for the left side.
    const i = Math.floor((l + r) / 2);

    // j = remaining elements needed from B.
    const j = half - i;

    // Values surrounding the partition in A.
    const Aleft = i > 0 ? A[i - 1] : Number.MIN_SAFE_INTEGER;

    const Aright = i < A.length ? A[i] : Number.MAX_SAFE_INTEGER;

    // Values surrounding the partition in B.
    const Bleft = j > 0 ? B[j - 1] : Number.MIN_SAFE_INTEGER;

    const Bright = j < B.length ? B[j] : Number.MAX_SAFE_INTEGER;

    // Correct partition:
    // every left-side value is <= every right-side value.
    if (Aleft <= Bright && Bleft <= Aright) {
      // Odd total: the left side contains the middle element.
      if (total % 2 !== 0) {
        return Math.max(Aleft, Bleft);
      }

      // Even total: average of the two middle elements.
      return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
    }

    if (Aleft > Bright) {
      // We took too many elements from A.
      r = i - 1;
    } else {
      // We took too few elements from A.
      l = i + 1;
    }
  }

  // The input guarantees that a valid partition exists.
  return -1;
}
