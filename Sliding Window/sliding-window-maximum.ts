/*
https://leetcode.com/problems/sliding-window-maximum/
Problem: Sliding Window Maximum
Category: Sliding Window + Monotonic Queue (Deque)
Pattern: Monotonic Decreasing Queue
Time Complexity: O(n)
Space Complexity: O(k)

Key Idea:
Use a deque that stores indices of possible maximum values.

The deque is maintained in decreasing order:
- The front always contains the index of the current maximum.
- Smaller values are removed from the back because they can never
  become the maximum while a larger value exists after them.

Window Rules:
1. Remove smaller candidates from the back.
2. Add current index.
3. Remove indices outside the window from the front.
4. The front of the deque is the maximum of the window.
*/

function maxSlidingWindow(nums: number[], k: number): number[] {
  const output: number[] = [];

  // Stores indices of possible maximum values.
  const q: number[] = [];

  // Points to the valid front of the deque.
  let head = 0;

  for (let r = 0; r < nums.length; r++) {
    // Remove smaller or equal values from the back.
    // They can never become the maximum again.
    while (q.length > head && nums[q[q.length - 1]] <= nums[r]) {
      q.pop();
    }

    // Add current index as a possible maximum.
    q.push(r);

    // Left boundary of the current window.
    const l = r - k + 1;

    // Remove indices that are outside the window.
    if (q[head] < l) {
      head++;
    }

    // Start collecting results once the window size becomes k.
    if (r >= k - 1) {
      // Front of the deque = maximum of current window.
      output.push(nums[q[head]]);
    }
  }

  return output;
}
