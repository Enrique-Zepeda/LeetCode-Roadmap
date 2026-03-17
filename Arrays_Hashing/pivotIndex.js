/*
Problem: Find Pivot Index
Category: Arrays
Pattern: Prefix Sum Balance
Time Complexity: O(n)
Space Complexity: O(1)

Key Idea: Keep a running left sum while knowing the total sum.
Right sum can be computed on the fly as total - left - current.
*/

function pivotIndex(nums) {
  const total = nums.reduce((sum, n) => sum + n, 0);

  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    const rightSum = total - leftSum - nums[i]; // remaining right side

    if (leftSum === rightSum) return i; // balance point found

    leftSum += nums[i]; // update prefix sum
  }

  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
