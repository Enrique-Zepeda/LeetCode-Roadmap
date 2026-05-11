/*
https://leetcode.com/problems/longest-repeating-character-replacement/
Problem: Longest Repeating Character Replacement
Category: Sliding Window
Pattern: Dynamic Sliding Window
Time Complexity: O(n)
Space Complexity: O(1)

Key Idea:
Use a sliding window to track the longest valid substring.

A window is valid if:
window size - most frequent character count <= k

Why?
Because all other characters can be replaced to match
the most frequent character.

Example:
"AABAB"
Most frequent = 'A' (3 times)

Window size = 5
Replacements needed = 5 - 3 = 2
*/

function characterReplacement(s: string, k: number): number {
  let l = 0; // left pointer
  let res = 0; // longest valid window found

  // highest frequency character inside current window
  let maxFreq = 0;

  // character frequency map
  const count = new Map<string, number>();

  for (let r = 0; r < s.length; r++) {
    // add current character to window
    count.set(s[r], (count.get(s[r]) || 0) + 1);

    // update highest frequency in window
    maxFreq = Math.max(maxFreq, count.get(s[r])!);

    /*
    If replacements needed exceed k,
    shrink the window from the left.

    replacements needed = window size - most frequent character
    */
    while (r - l + 1 - maxFreq > k) {
      count.set(s[l], count.get(s[l])! - 1);
      l++;
    }

    // update longest valid window
    res = Math.max(res, r - l + 1);
  }

  return res;
}
