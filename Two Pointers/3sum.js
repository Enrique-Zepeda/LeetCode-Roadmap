//** https://leetcode.com/problems/3sum/description/
/*
Problem: 3Sum
Category: Two Pointers
Pattern: Sorting + Fixed Pointer + Two Pointers
Time Complexity: O(n²)
Space Complexity: O(1) extra (output not counted)

Key Idea:
Fix one number, then use two pointers to find pairs
that sum with it to zero while skipping duplicates.
*/

var threeSum = function (nums) {
  nums.sort((a, b) => a - b); // sorting enables two pointers logic
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break; // no triplet can sum to 0 after positives

    // skip duplicate base values
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1; // second element must be after i
    let r = nums.length - 1; // third element starts from the end

    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (sum > 0) {
        r--; // need smaller sum → move right left
      } else if (sum < 0) {
        l++; // need larger sum → move left right
      } else {
        res.push([nums[i], nums[l], nums[r]]); // valid triplet found

        l++;
        r--;

        // skip duplicate second values to avoid repeated triplets
        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }
      }
    }
  }

  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
