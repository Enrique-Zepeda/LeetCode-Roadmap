//** https://leetcode.com/problems/valid-palindrome/
/*
Problem: Valid Palindrome
Category: Two Pointers
Pattern: Opposite Direction Two Pointers
Time Complexity: O(n)
Space Complexity: O(1)

Key Idea: Move two pointers from both ends, skipping non-alphanumeric
characters and comparing lowercase characters.
*/

const isAlphaNumeric = (c) => {
  // check if character is letter or number using ASCII order
  return (c >= "A" && c <= "Z") || (c >= "a" && c <= "z") || (c >= "0" && c <= "9");
};

function isPalindrome(s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    // skip invalid characters from left
    while (l < r && !isAlphaNumeric(s[l])) {
      l++;
    }

    // skip invalid characters from right
    while (l < r && !isAlphaNumeric(s[r])) {
      r--;
    }

    // compare normalized characters
    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }

    l++;
    r--;
  }

  return true;
}
