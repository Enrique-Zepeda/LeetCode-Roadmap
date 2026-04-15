const longestConsecutive = (nums: number[]) => {
  const numSet = new Set(nums);
  let longest: number = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let length: number = 1;
      while (numSet.has(num + length)) {
        length++;
      }
      longest = Math.max(length, longest);
    }
  }

  return longest;
};
