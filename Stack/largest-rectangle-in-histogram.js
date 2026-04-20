/*
https://leetcode.com/problems/largest-rectangle-in-histogram/description/
Problem: Largest Rectangle in Histogram
Category: Stack
Pattern: Monotonic Increasing Stack
Time Complexity: O(n)
Space Complexity: O(n)

Key Idea:
Use a stack to store bars in increasing height order.
Each bar stores the earliest index where its rectangle can start.
When a smaller bar appears, taller bars cannot extend further,
so we pop them and calculate their max possible area.
*/

var largestRectangleArea = function (heights) {
  let maxArea = 0;
  const stack = []; // stores [startIndex, height]

  for (let i = 0; i <= heights.length; i++) {
    // use a final height 0 to force all remaining bars to be processed
    const currentHeight = i === heights.length ? 0 : heights[i];

    // current bar starts at i, but may extend left after popping taller bars
    let startIndex = i;

    // taller bars end here because currentHeight is smaller
    while (stack.length > 0 && stack[stack.length - 1][1] > currentHeight) {
      const [prevStartIndex, prevHeight] = stack.pop();

      const width = i - prevStartIndex; // rectangle spans until i - 1
      const area = prevHeight * width;

      maxArea = Math.max(maxArea, area);

      // current smaller bar can start where the popped bar started
      startIndex = prevStartIndex;
    }

    stack.push([startIndex, currentHeight]);
  }

  return maxArea;
};
