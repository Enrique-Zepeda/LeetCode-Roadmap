const maxArea = (height: number[]): number => {
  let maxVolume = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const area = Math.min(height[l], height[r]) * (r - l);
    maxVolume = Math.max(area, maxVolume);

    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return maxVolume;
};
