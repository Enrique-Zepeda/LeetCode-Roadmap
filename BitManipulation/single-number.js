//** https://leetcode.com/problems/single-number/
/*
Problem: Single Number
Category: Bit Manipulation
Pattern: XOR Cancellation
Time Complexity: O(n)
Space Complexity: O(1)

Key Idea:
XOR cancels equal numbers (a ^ a = 0).
By XOR-ing all elements, duplicate pairs disappear and only the unique number remains.
*/
// a ^ a = 0
// a ^ 0 = a
var singleNumber = function (nums) {
  let xor = 0; // acumulador

  for (const n of nums) {
    xor ^= n; // los repetidos se cancelan
  }

  return xor; // queda el único número sin repetir
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1
