const trap = (height: number[]): number => {
  let l = 0;
  let r = height.length - 1;
  let leftMax: number = height[l];
  let rightMax: number = height[r];
  let res = 0;

  while (l < r) {
    if (height[l] < height[r]) {
      l++;
      leftMax = Math.max(leftMax, height[l]);
      res += leftMax - height[l];
    } else {
      r--;
      rightMax = Math.max(rightMax, height[r]);
      res += rightMax - height[r];
    }
  }

  return res;
};
