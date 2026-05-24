/*
https://leetcode.com/problems/binary-search/
Problem: Binary Search
Category: Binary Search
Pattern: Classic Binary Search
Time Complexity: O(log n)
Space Complexity: O(1)

Key Idea:
The array is sorted, so we can eliminate half of the search space
on every iteration.

Rules:
- If nums[mid] is the target, return mid.
- If nums[mid] is smaller than target, search the right half.
- If nums[mid] is greater than target, search the left half.
*/

function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
}
