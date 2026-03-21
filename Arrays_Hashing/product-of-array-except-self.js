//** https://leetcode.com/problems/product-of-array-except-self/description/
/*
Problem: Product of Array Except Self
Category: Arrays
Pattern: Prefix & Suffix Products
Time Complexity: O(n)
Space Complexity: O(1)  // output array does NOT count

Key Idea:
Store prefix products in the result array in the first pass.
Then multiply by suffix products in a backward pass.
Avoids division and uses constant extra space.
*/
var productExceptSelf = function (nums) {
  const answer = new Array(nums.length).fill(1); // output array

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    answer[i] = prefix; // product of all elements to the left
    prefix *= nums[i]; // update running prefix
  }

  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= suffix; // multiply by right side product
    suffix *= nums[i]; // update running suffix
  }

  return answer;
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
