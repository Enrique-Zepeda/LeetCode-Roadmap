/*
https://leetcode.com/problems/valid-parentheses/
Problem: Valid Parentheses
Category: Stack
Pattern: Matching Pairs with Stack
Time Complexity: O(n)
Space Complexity: O(n)

Key Idea:
Push opening brackets into a stack.
When a closing bracket appears, it must match the most recent opening bracket.
*/

function isValid(s) {
  const stack = [];

  const closeToOpen = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const c of s) {
    if (closeToOpen[c]) {
      // closing bracket must match the latest opening bracket
      if (stack.length > 0 && stack[stack.length - 1] === closeToOpen[c]) {
        stack.pop();
      } else {
        return false; // invalid closing order or missing opening bracket
      }
    } else {
      stack.push(c); // store opening bracket
    }
  }

  return stack.length === 0; // valid only if nothing is left open
}

console.log(isValid("([])"));
