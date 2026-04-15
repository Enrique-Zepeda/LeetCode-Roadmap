/*
https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
Problem: Evaluate Reverse Polish Notation
Category: Stack
Pattern: Stack Evaluation
Time Complexity: O(n)
Space Complexity: O(n)

Key Idea:
Push numbers into a stack.
When an operator appears, pop the last two numbers, apply the operation,
and push the result back into the stack.
*/

var evalRPN = function (tokens) {
  const stack = [];

  for (const token of tokens) {
    if (token === "+") {
      stack.push(stack.pop() + stack.pop()); // add last two values
    } else if (token === "-") {
      const a = stack.pop(); // right operand
      const b = stack.pop(); // left operand
      stack.push(b - a);
    } else if (token === "*") {
      stack.push(stack.pop() * stack.pop()); // multiply last two values
    } else if (token === "/") {
      const a = stack.pop(); // right operand
      const b = stack.pop(); // left operand
      stack.push(Math.trunc(b / a)); // truncate toward zero
    } else {
      stack.push(parseInt(token)); // convert string to number
    }
  }

  return stack.pop(); // final result
};

console.log(evalRPN(["2", "1", "+", "3", "*"])); // ((2 + 1) * 3) = 9
