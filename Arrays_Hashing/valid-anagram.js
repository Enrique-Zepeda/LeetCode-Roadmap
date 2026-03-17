// ** https://leetcode.com/problems/valid-anagram/solutions/6101148/video-4-solutions-by-niits-x6b2/
/*
Problem: Valid Anagram
Category: Hashing
Pattern: Frequency Counter
Time Complexity: O(n)
Space Complexity: O(1) // fixed alphabet assumption

Key Idea: Count character frequencies separately for both strings
and compare the counts at the end.
*/

function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const countS = {};
  const countT = {};

  for (let i = 0; i < s.length; i++) {
    countS[s[i]] = (countS[s[i]] || 0) + 1; // build freq for s
    countT[t[i]] = (countT[t[i]] || 0) + 1; // build freq for t
  }

  // compare frequencies
  for (const char in countS) {
    if (countS[char] !== countT[char]) return false;
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
