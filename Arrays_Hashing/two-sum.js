//** https://leetcode.com/problems/two-sum/
/*
Problem: Two Sum
Category: Hashing
Pattern: Hash Map lookup
Time Complexity: O(n)
Space Complexity: O(n)

Key Idea: Store each number’s index in a hash map.
For every element, check if its complement (target - num) was already seen.
*/

function twoSum(nums, target) {
  const map = new Map(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i]; // pair found
    }

    map.set(nums[i], i); // store current number index
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
