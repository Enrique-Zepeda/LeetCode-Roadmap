/*
https://leetcode.com/problems/permutation-in-string/
Problem: Permutation in String
Category: Sliding Window
Pattern: Fixed Size Sliding Window
Time Complexity: O(n)
Space Complexity: O(1)

Key Idea:
A permutation of s1 exists in s2 if there is a window in s2
with the same character frequency as s1.

Since s1 contains lowercase English letters, we use arrays of size 26.

matches:
Counts how many character frequencies match between s1Count and s2Count.
If matches === 26, both frequency arrays are equal.
*/

function checkInclusion(s1: string, s2: string): boolean {
  // If s1 is longer than s2, it cannot fit inside s2
  if (s1.length > s2.length) return false;

  const s1Count = new Array(26).fill(0);
  const s2Count = new Array(26).fill(0);

  // Build frequency counts for s1 and the first window of s2
  for (let i = 0; i < s1.length; i++) {
    s1Count[s1.charCodeAt(i) - 97]++;
    s2Count[s2.charCodeAt(i) - 97]++;
  }

  let matches = 0;

  // Count how many character frequencies are already equal
  for (let i = 0; i < 26; i++) {
    if (s1Count[i] === s2Count[i]) matches++;
  }

  let l = 0;

  // Slide the fixed-size window through s2
  for (let r = s1.length; r < s2.length; r++) {
    // If all 26 frequencies match, we found a permutation
    if (matches === 26) return true;

    // Add the new character from the right side of the window
    let index = s2.charCodeAt(r) - 97;
    s2Count[index]++;

    // Update matches after adding the character
    if (s1Count[index] === s2Count[index]) matches++;
    else if (s1Count[index] + 1 === s2Count[index]) matches--;

    // Remove the old character from the left side of the window
    index = s2.charCodeAt(l) - 97;
    s2Count[index]--;

    // Update matches after removing the character
    if (s1Count[index] === s2Count[index]) matches++;
    else if (s1Count[index] - 1 === s2Count[index]) matches--;

    l++;
  }

  // Check the last window
  return matches === 26;
}
