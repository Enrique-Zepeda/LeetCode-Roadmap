// ** https://leetcode.com/problems/contains-duplicate/description/
/*
Problem: Contains Duplicate
Category: Hashing
Pattern: Hash Set lookup
Time Complexity: O(n)
Space Complexity: O(n)

Key Idea: Use a hash set to track seen numbers. If a number is already in the set,
a duplicate exists, allowing early termination.
*/

function containsDuplicate(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) return true; // duplicate found
    seen.add(num); // store number for future checks
  }

  return false; // no duplicates after full scan
}
