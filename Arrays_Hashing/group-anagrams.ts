/*
https://leetcode.com/problems/group-anagrams/description/
Problem: Group Anagrams
Category: Hashing
Pattern: Frequency Array as Key
Time Complexity: O(n * k)
  - n = number of strings
  - k = average length of each string

Space Complexity: O(n * k)

Key Idea:
Anagrams have the same letter frequencies.

Example:
"eat", "tea", "ate"

All have:
a:1, e:1, t:1

So instead of sorting each word, we count how many times each letter appears
and use that frequency array as a unique key.
*/

function groupAnagrams(strs: string[]): string[][] {
  // Stores groups of anagrams.
  // Key: frequency count of letters
  // Value: words that match that frequency
  const groups: Record<string, string[]> = {};

  for (const word of strs) {
    // Array of 26 positions, one for each lowercase letter a-z
    const count = new Array(26).fill(0);

    // Count frequency of each character in the current word
    for (const char of word) {
      count[char.charCodeAt(0) - 97]++;
    }

    // Convert the frequency array into a string key
    // Example: [1,0,0,0,1,...,1,...] -> "1,0,0,0,1,..."
    const key = count.join(",");

    // If this key does not exist yet, create a new group
    if (!groups[key]) {
      groups[key] = [];
    }

    // Add the word to its anagram group
    groups[key].push(word);
  }

  // Return only the grouped values
  return Object.values(groups);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
