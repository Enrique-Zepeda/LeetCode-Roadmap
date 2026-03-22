//** https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
/*
Problem: Two Sum II - Input Array Is Sorted
Category: Two Pointers
Pattern: Opposite Direction Two Pointers
Time Complexity: O(n)
Space Complexity: O(1)

Key Idea:
Because the array is sorted, we can compare the sum of the smallest
and largest elements and move pointers inward to shrink the search space.
*/

var twoSum = function (numbers, target) {
  let l = 0; // left pointer (smallest value)
  let r = numbers.length - 1; // right pointer (largest value)

  while (l < r) {
    const sum = numbers[l] + numbers[r]; // current pair sum

    if (sum > target) {
      r--; // sum too big → move right pointer left
    } else if (sum < target) {
      l++; // sum too small → move left pointer right
    } else {
      return [l + 1, r + 1]; // found pair (problem requires 1-based index)
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
