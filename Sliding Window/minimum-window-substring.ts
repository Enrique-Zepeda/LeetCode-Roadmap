/*
https://leetcode.com/problems/minimum-window-substring/
Problem: Minimum Window Substring
Category: Sliding Window
Pattern: Dynamic Sliding Window
Time Complexity: O(n)
Space Complexity: O(n)

Key Idea:
Use a sliding window to find the smallest substring in `s`
that contains all characters from `t`.

Expand the window with `r` until it becomes valid.
When the window is valid, shrink it with `l` to make it smaller.

A window is valid when:
have === need

Where:
- need = number of unique characters required from `t`
- have = number of required characters that currently meet their needed frequency
*/

function minWindow(s: string, t: string): string {
  // Edge case: if t is empty, there is nothing to search for
  if (t === "") return "";

  const countT: Record<string, number> = {}; // Frequency map of characters required from t
  const window: Record<string, number> = {}; // Frequency map of characters inside the current window

  // Count how many times each character appears in t
  for (const c of t) {
    countT[c] = (countT[c] || 0) + 1;
  }

  let have = 0; // how many required characters are fully satisfied
  let need = Object.keys(countT).length; // total unique required characters
  let res = [-1, -1]; // indexes of the best window found: [start, end]
  let resLen = Infinity; // length of the best window found
  let l = 0; // left pointer of the window

  // r expands the window to the right
  for (let r = 0; r < s.length; r++) {
    const c = s[r];
    // Add current character to the window frequency map
    window[c] = (window[c] || 0) + 1;

    /*
    If current character is required
    and its frequency in the window matches the required frequency,
    then one required character is fully satisfied.
    */
    if (countT[c] && countT[c] === window[c]) {
      have++;
    }

    /*
    When have === need, the current window contains all required characters.
    Now we try to shrink it from the left to find the smallest valid window.
    */
    while (have === need) {
      const windowLen = r - l + 1;

      // Save this window if it is smaller than the best one found
      if (windowLen < resLen) {
        resLen = windowLen;
        res = [l, r];
      }
      // Remove the left character from the window
      window[s[l]]--;

      /*
      If the removed character was required
      and now its frequency is below what we need,
      the window is no longer valid.
      */
      if (countT[s[l]] && window[s[l]] < countT[s[l]]) {
        have--;
      }

      // Move the left pointer to shrink the window
      l++;
    }
  }

  // If no valid window was found, return an empty string else Return the best window found
  return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
}
