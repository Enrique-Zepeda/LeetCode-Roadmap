var maxArea = function (height) {
  let res = 0;
  let l = 0;
  let r = height.length - 1;

  while (l < r) {
    const area = Math.min(height[l], height[r]) * (r - l);
    res = Math.max(area, res);

    if (height[l] <= height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return res;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
