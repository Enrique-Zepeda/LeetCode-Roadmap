const twoSum = (numbers: number[], target: number): number[] => {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const suma = numbers[l] + numbers[r];

    if (suma > target) {
      r--;
    } else if (suma < target) {
      l++;
    } else {
      return [l + 1, r + 1];
    }
  }

  return [];
};
