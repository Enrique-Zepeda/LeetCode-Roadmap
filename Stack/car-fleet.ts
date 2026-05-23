/*
https://leetcode.com/problems/car-fleet/description/
Problem: Car Fleet
Category: Stack / Sorting
Pattern: Sort by Position + Track Slowest Time
Time Complexity: O(n log n)
  - Sorting cars by position costs O(n log n)

Space Complexity: O(n)
  - We create an array of cars

Key Idea:
Cars that are closer to the target should be processed first.

For each car, calculate how long it takes to reach the target:

time = (target - position) / speed

If a car behind takes less or equal time than the fleet in front,
it will catch up and become part of that fleet.

If a car behind takes more time, it cannot catch the fleet in front,
so it becomes a new fleet.
*/

function carFleet(target: number, position: number[], speed: number[]): number {
  const n = position.length;

  if (n === 0) return 0;

  // Create a list of cars with their position and speed
  const cars: { pos: number; speed: number }[] = new Array(n);

  for (let i = 0; i < n; i++) {
    cars[i] = {
      pos: position[i],
      speed: speed[i],
    };
  }

  // Sort cars from closest to target to farthest from target
  cars.sort((a, b) => b.pos - a.pos);

  let fleets = 0;

  // Stores the arrival time of the slowest fleet in front
  let maxTime = 0;

  for (let i = 0; i < n; i++) {
    const time = (target - cars[i].pos) / cars[i].speed;

    // If this car takes more time than the fleet in front,
    // it cannot catch up, so it becomes a new fleet.
    if (time > maxTime) {
      fleets++;
      maxTime = time;
    }

    // If time <= maxTime, this car catches the fleet in front.
    // It does not create a new fleet.
  }

  return fleets;
}
