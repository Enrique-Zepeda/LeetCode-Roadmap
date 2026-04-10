//* https://leetcode.com/problems/trapping-rain-water/
/*
Problem: Trapping Rain Water
Category: Two Pointers
Pattern: Opposite Direction Two Pointers
Time Complexity: O(n)
Space Complexity: O(1)

Key Idea: Water at any position depends on the smaller boundary
between the left max and right max. Use two pointers and always
process the side with the smaller max.
*/

var trap = function (height) {
  if (!height || height.length === 0) return 0; // edge case

  let l = 0;
  let r = height.length - 1;

  let leftMax = height[l]; // highest wall seen from the left
  let rightMax = height[r]; // highest wall seen from the right

  let res = 0;

  while (l < r) {
    if (leftMax < rightMax) {
      l++; // move the smaller side inward

      leftMax = Math.max(leftMax, height[l]); // update left boundary
      res += leftMax - height[l]; // trapped water at current left position
    } else {
      r--; // move the smaller side inward

      rightMax = Math.max(rightMax, height[r]); // update right boundary
      res += rightMax - height[r]; // trapped water at current right position
    }
  }

  return res;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
console.log(trap([4, 2, 0, 3, 2, 5])); // 9
