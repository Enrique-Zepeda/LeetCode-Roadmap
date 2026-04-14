/*
https://leetcode.com/problems/min-stack/
Problem: Min Stack
Category: Stack
Pattern: Auxiliary Stack
Time Complexity:
  push: O(1)
  pop: O(1)
  top: O(1)
  getMin: O(1)
Space Complexity: O(n)

Key Idea:
Use a second stack to track the minimum value at each level.
This allows retrieving the current minimum in constant time.
*/

class MinStack {
  constructor() {
    this.stack = []; // stores all pushed values
    this.minStack = []; // stores the minimum so far at each position
  }

  push(val) {
    this.stack.push(val); // normal stack push

    if (this.minStack.length === 0) {
      this.minStack.push(val); // first value is automatically the minimum
    } else {
      const currentMin = this.minStack[this.minStack.length - 1];
      this.minStack.push(Math.min(val, currentMin)); // store min up to this point
    }
  }

  pop() {
    this.stack.pop(); // remove top value
    this.minStack.pop(); // remove matching min entry to keep stacks aligned
  }

  top() {
    return this.stack[this.stack.length - 1]; // last inserted value
  }

  getMin() {
    return this.minStack[this.minStack.length - 1]; // current minimum
  }
}
