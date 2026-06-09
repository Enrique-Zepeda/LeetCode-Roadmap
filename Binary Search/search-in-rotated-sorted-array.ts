/*
https://leetcode.com/problems/search-in-rotated-sorted-array/
Problem: Search in Rotated Sorted Array
Category: Binary Search
Pattern: Binary Search on Rotated Sorted Array
Time Complexity: O(log n)
Space Complexity: O(1)

Key Idea:
The array is sorted but rotated.

Example:
Original: [0, 1, 2, 4, 5, 6, 7]
Rotated:  [4, 5, 6, 7, 0, 1, 2]

Even if the full array is not sorted, one half is always sorted.
At every step:
1. Check which half is sorted.
2. Check if target belongs inside that sorted half.
3. If yes, search there.
4. If not, search the other half.
*/

function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    if (nums[mid] === target) return mid;

    // Left half is sorted.
    if (nums[l] <= nums[mid]) {
      // If target is outside the sorted left half,
      // search the right half.
      if (target > nums[mid] || target < nums[l]) {
        l = mid + 1;
      } else {
        // Target is inside the sorted left half.
        r = mid - 1;
      }
    } else {
      // Right half is sorted.
      // If target is outside the sorted right half,
      // search the left half.
      if (target < nums[mid] || target > nums[r]) {
        r = mid - 1;
      } else {
        // Target is inside the sorted right half.
        l = mid + 1;
      }
    }
  }

  return -1;
}
