//** https://leetcode.com/problems/longest-consecutive-sequence/description/
/*
Problem: Longest Consecutive Sequence
Category: Hashing
Pattern: Sequence Start Expansion (Hash Set)
Time Complexity: O(n)
Space Complexity: O(n)

Key Idea: Only start counting when the current number is the
beginning of a sequence (num - 1 not in set). Then expand forward.
This guarantees each number is processed at most once.
*/

function longestConsecutive(nums) {
  const set = new Set(nums);
  let longest = 0;

  for (const num of set) {
    // start only at the beginning of a sequence
    if (!set.has(num - 1)) {
      let length = 1;

      // expand forward while consecutive numbers exist
      while (set.has(num + length)) {
        length++;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
