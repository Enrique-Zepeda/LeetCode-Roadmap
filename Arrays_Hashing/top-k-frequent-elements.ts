/*
https://leetcode.com/problems/top-k-frequent-elements/description/
Problem: Top K Frequent Elements
Category: Hashing / Bucket Sort
Pattern: Frequency Map + Bucket Sort
Time Complexity: O(n)
Space Complexity: O(n)

Key Idea:
First count how many times each number appears using a Map.

Then use buckets where the index represents the frequency.
For example:
buckets[3] = numbers that appear 3 times

Finally, scan the buckets from highest frequency to lowest frequency
until we collect k elements.
*/

function topKFrequent(nums: number[], k: number): number[] {
  // Count the frequency of each number
  // Key: number
  // Value: how many times it appears
  const count = new Map<number, number>();

  for (const num of nums) {
    count.set(num, (count.get(num) ?? 0) + 1);
  }

  // buckets[freq] stores all numbers that appear exactly "freq" times
  // Max possible frequency is nums.length
  // nums = [1, 1, 1, 2, 2, 3]
  //bucket = [
  //   [], // índice 0
  //   [], // índice 1
  //   [], // índice 2
  //   [], // índice 3
  //   [], // índice 4
  //   [], // índice 5
  //   []  // índice 6
  // ]
  const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);

  // Place each number inside the bucket that matches its frequency
  for (const [num, freq] of count) {
    buckets[freq].push(num);
  }

  const result: number[] = [];

  // Start from the highest frequency because we want the most frequent numbers
  for (let freq = buckets.length - 1; freq >= 0; freq--) {
    for (const num of buckets[freq]) {
      result.push(num);

      // Stop as soon as we have k frequent elements
      if (result.length === k) {
        return result;
      }
    }
  }

  return result;
}
