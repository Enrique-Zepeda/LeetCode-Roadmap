/*
Problem: Longest Substring Without Repeating Characters
Category: Sliding Window
Pattern: Variable Size Sliding Window + Hash Map
Time Complexity: O(n)
Space Complexity: O(min(n, charset))

Key Idea:
Use a sliding window [l...r].
Move r to expand the window.
If a duplicate appears, move l after the previous occurrence.
*/

var lengthOfLongestSubstring = function (s) {
  const mp = new Map(); // char -> last seen index

  let l = 0; // start of current window
  let res = 0; // longest window found

  for (let r = 0; r < s.length; r++) {
    // if current char was seen before, move l after its last index
    if (mp.has(s[r])) {
      l = Math.max(mp.get(s[r]) + 1, l); // never move l backwards
    }

    mp.set(s[r], r); // update current char last seen index

    res = Math.max(res, r - l + 1); // update max window length
  }

  return res;
};

function longestSubstringWithoutRepeating(s) {
  const mp = new Map(); // char -> last seen index

  let l = 0; // start of current window
  let maxLen = 0;
  let start = 0; // start index of best substring found

  for (let r = 0; r < s.length; r++) {
    if (mp.has(s[r])) {
      l = Math.max(mp.get(s[r]) + 1, l); // move l after duplicate
    }

    mp.set(s[r], r); // update last seen index

    const windowLen = r - l + 1;

    if (windowLen > maxLen) {
      maxLen = windowLen;
      start = l; // save where the best window starts
    }
  }

  return s.substring(start, start + maxLen);
}

console.log(longestSubstringWithoutRepeating("abcabcbb")); // "abc"
console.log(longestSubstringWithoutRepeating("bbbbb")); // "b"
console.log(longestSubstringWithoutRepeating("pwwkew")); // "wke"
