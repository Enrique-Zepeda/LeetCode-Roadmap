/*
Better solution
Problem: Valid Anagram
Category: Hashing / Frequency Counter
Pattern: Fixed-size frequency array

Time Complexity: O(n)
Space Complexity: O(1)

Key Idea:
If two strings are anagrams, they must have the same letters with the same frequency.

We use an array of 26 positions because the problem only uses lowercase English letters.
For every character in `s`, we add +1.
For every character in `t`, we subtract -1.

At the end, all positions must be 0.
That means both strings used exactly the same letters the same number of times.
*/

function isAnagram(s: string, t: string): boolean {
  // If lengths are different, they cannot be anagrams
  if (s.length !== t.length) return false;

  // Frequency array for letters 'a' to 'z'
  const letters = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    // Count letter from s
    letters[s.charCodeAt(i) - 97]++;

    // Remove/count against letter from t
    letters[t.charCodeAt(i) - 97]--;
  }

  // If every count is 0, both strings have the same letters
  return letters.every((count) => count === 0);
}
