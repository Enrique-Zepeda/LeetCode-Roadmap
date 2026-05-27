/*
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
Problem: Find Minimum in Rotated Sorted Array
Category: Binary Search
Pattern: Binary Search on Rotated Sorted Array
Time Complexity: O(log n)
Space Complexity: O(1)

Key Idea:
The array was originally sorted in ascending order, but then rotated.

Example:
Original:
[0, 1, 2, 4, 5, 6, 7]

Rotated:
[4, 5, 6, 7, 0, 1, 2]

The minimum value is where the rotation "breaks" the sorted order.

How we decide where to search:
We compare nums[mid] with nums[right].

1. If nums[mid] < nums[right]:
   The right side is sorted.
   The minimum could be nums[mid] or somewhere to the left.
   So we move right to mid.

2. If nums[mid] >= nums[right]:
   nums[mid] is in the left rotated part.
   The minimum must be to the right of mid.
   So we move left to mid + 1.

Important:
We use while (left < right) because we are narrowing the search
until left and right point to the same index.

At the end:
left === right, and that index contains the minimum value.
*/

function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < nums[right]) {
      // nums[mid] is smaller than nums[right],
      // so the minimum is at mid or on the left side.
      //
      // We do right = mid instead of mid - 1
      // because nums[mid] could be the minimum.
      right = mid;
    } else {
      // nums[mid] is greater than or equal to nums[right],
      // so the minimum must be to the right of mid.
      //
      // We can safely remove mid because it cannot be the minimum.
      left = mid + 1;
    }
  }

  // When the loop ends, left and right point to the minimum.
  return nums[left];
}
