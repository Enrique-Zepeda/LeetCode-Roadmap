/*
https://leetcode.com/problems/daily-temperatures/description/
Problem: Daily Temperatures
Category: Stack
Pattern: Monotonic Decreasing Stack
Time Complexity: O(n)
Space Complexity: O(n)

Key Idea:
Use a stack to store days that still have not found a warmer temperature.
Each stack entry stores [temperature, index].
When the current temperature is warmer than the top of the stack,
we can resolve that previous day by subtracting indices.
*/

function dailyTemperatures(temperatures) {
  // default answer is 0 because some days may never find a warmer day
  const res = new Array(temperatures.length).fill(0);

  // stack stores unresolved days as: [temperature, index]
  // unresolved = this day has not yet found a warmer future temperature
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    const currentTemp = temperatures[i];

    // while current day is warmer than the last unresolved day,
    // we can now solve that previous day
    while (stack.length > 0 && currentTemp > stack[stack.length - 1][0]) {
      const [prevTemp, prevIndex] = stack.pop();

      // number of days waited = current index - previous index
      res[prevIndex] = i - prevIndex;
    }

    // current day becomes unresolved until we find a warmer day later
    stack.push([currentTemp, i]);
  }

  return res;
}
