//** https://leetcode.com/problems/top-k-frequent-elements/solutions/669782/javascript-no-sorting-on-time-by-control-gry2/
/*
Problem: Top K Frequent Elements
Category: Hashing
Pattern: Frequency Counter + Sorting
Time Complexity: O(n log n)
Space Complexity: O(n)
Key Idea: Count frequency with a hash map, then sort entries by frequency
descending and take the first k elements.
*/

function topKFrequent(nums, k) {
  const freq = new Map();

  // build frequency map
  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  return Array.from(freq)
    .sort((a, b) => b[1] - a[1]) // sort by frequency DESC
    .slice(0, k) // take top k
    .map((entry) => entry[0]); // extract numbers only
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
console.log(topKFrequent([1], 1)); // [1]
console.log(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2)); // [1,2]
