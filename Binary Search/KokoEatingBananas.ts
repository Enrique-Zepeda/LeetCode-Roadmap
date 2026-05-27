/*
https://leetcode.com/problems/koko-eating-bananas/
Problem: Koko Eating Bananas
Category: Binary Search
Pattern: Binary Search on Answer
Time Complexity: O(n log(maxPile))
Space Complexity: O(1)

Key Idea:
We are not searching for a value inside an array.
We are searching for the minimum eating speed `k`.

Koko can eat `k` bananas per hour.
For each pile, the time needed is:

  Math.ceil(pile / k)

Why Math.ceil?
Because if a pile has 7 bananas and Koko eats 3 per hour:

  7 / 3 = 2.33...

But Koko still needs 3 full hours:
- Hour 1: eats 3
- Hour 2: eats 3
- Hour 3: eats 1

So we round up.

Search Space:
- Minimum possible speed: 1 banana per hour.
- Maximum necessary speed: max pile size.

Example:
piles = [3, 6, 7, 11]

The biggest pile is 11, so there is no need to try speeds bigger than 11.
If Koko eats 11 bananas per hour, every pile can be finished in at most 1 hour.

Binary Search Logic:
- If speed `k` finishes within `h` hours, then `k` works.
  But we try to find a smaller valid speed.

- If speed `k` takes more than `h` hours, then `k` is too slow.
  We need to search for a bigger speed.
*/

function minEatingSpeed(piles: number[], h: number): number {
  // Smallest possible speed.
  // Koko must eat at least 1 banana per hour.
  let l = 1;

  // Biggest speed we need to test.
  // Eating faster than the biggest pile is unnecessary.
  let r = Math.max(...piles);

  // Stores the best valid answer found so far.
  // We start with the maximum possible speed because it is a safe answer.
  let res = r;

  while (l <= r) {
    // k is the current eating speed we are testing.
    const k = l + Math.floor((r - l) / 2);

    // Total hours Koko needs if she eats k bananas per hour.
    let totalTime = 0;

    for (const pile of piles) {
      // Calculate how many hours this pile takes with speed k.
      //
      // Example:
      // pile = 11, k = 4
      // Math.ceil(11 / 4) = 3 hours
      //
      // Hour 1: eats 4, remaining 7
      // Hour 2: eats 4, remaining 3
      // Hour 3: eats 3, remaining 0
      totalTime += Math.ceil(pile / k);
    }

    if (totalTime <= h) {
      // This speed works because Koko finishes on time.
      //
      // Since we want the minimum speed, we save this answer
      // and try to find an even smaller valid speed.
      res = k;

      // Search the left side: smaller speeds.
      r = k - 1;
    } else {
      // This speed is too slow because Koko needs more than h hours.
      //
      // We need a bigger speed.
      l = k + 1;
    }
  }

  return res;
}
