/*
Problem: Car Fleet
Category: Stack
Pattern: Sorting + Monotonic Stack
Time Complexity: O(n log n) // sorting cars by position
Space Complexity: O(n)

Key Idea:
Sort cars from closest to the target to farthest.
For each car, calculate its time to reach the target.
If a car behind reaches the target earlier or at the same time
as the fleet ahead, it joins that fleet.
*/

function carFleet(target, position, speed) {
  const pair = position.map((p, i) => [p, speed[i]]); // [position, speed]

  pair.sort((a, b) => b[0] - a[0]); // process cars from front to back

  const stack = []; // stores arrival times of active fleets

  for (const [p, s] of pair) {
    const time = (target - p) / s; // time for this car to reach target
    stack.push(time); // assume this car forms a new fleet

    // if current car catches the fleet ahead, merge it into that fleet
    if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
      stack.pop(); // remove current fleet because it joined the one ahead
    }
  }

  return stack.length; // remaining times represent total fleets
}
