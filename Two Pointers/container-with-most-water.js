// ** https://leetcode.com/problems/container-with-most-water/description/
/*
Problem: Container With Most Water
Category: Two Pointers
Pattern: Opposite-direction two pointers
Time Complexity: O(n)
Space Complexity: O(1)

Key Idea: Start with one pointer at each end. For every pair of lines, compute
the container's area using the shorter height and the distance between them.
Then move the pointer at the shorter line, because only that gives a chance
to find a taller line and improve the area.
*/

var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let res = 0; // stores the maximum area found so far

  while (l < r) {
    // The container height is limited by the shorter line.
    // Even if one line is taller, water would spill over the shorter side.
    const minHeight = Math.min(height[l], height[r]);

    // The width is the horizontal distance between both lines.
    const width = r - l;

    // area = height * width
    // This is the area of the CURRENT container formed by l and r.
    const area = minHeight * width;
    // const area = Math.min(height[l], height[r]) * (r - l); <---- more short
    // Keep the best area seen so far.
    res = Math.max(res, area);

    // Move the pointer at the shorter line.
    // Why?
    // Because the shorter line is the one limiting the area.
    // Moving the taller line would only reduce width,
    // but the height would still be limited by the shorter one.
    if (height[l] <= height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return res; // return the largest area found
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
