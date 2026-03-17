//** https://leetcode.com/problems/group-anagrams/description/
/*
Problem: Group Anagrams
Category: Hashing
Pattern: Sorted String Key
Time Complexity: O(n * k log k)  // sort each word
Space Complexity: O(n * k)

Key Idea: First convert every word to its sorted form.
Then use that sorted string as a key to group original words.
*/

function groupAnagrams(strs) {
  const sorted = strs.map(
    (word) => word.split("").sort().join(""), // canonical anagram form
  );

  const groups = {};

  for (let i = 0; i < strs.length; i++) {
    if (!groups[sorted[i]]) {
      groups[sorted[i]] = []; // create bucket
    }

    groups[sorted[i]].push(strs[i]); // group original word
  }

  return Object.values(groups);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]
