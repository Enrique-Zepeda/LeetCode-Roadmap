/*
https://leetcode.com/problems/time-based-key-value-store/
Problem: Time Based Key-Value Store
Category: Binary Search
Pattern: Hash Map + Binary Search on Sorted Timestamps
Time Complexity:
  set: O(1)
  get: O(log n)
Space Complexity: O(n)

Key Idea:
Each key can have multiple values at different timestamps.

We store each key with an array of pairs:
key -> [[timestamp, value], [timestamp, value], ...]

Example:
set("foo", "bar", 1)
set("foo", "bar2", 4)
set("foo", "bar3", 10)

store:
{
  "foo" => [
    [1, "bar"],
    [4, "bar2"],
    [10, "bar3"]
  ]
}

When we call:
get("foo", 5)

We need the value with the largest timestamp <= 5.

Valid timestamps:
1 <= 5
4 <= 5

Best answer:
[4, "bar2"]

So return:
"bar2"

Why Binary Search?
The problem guarantees that timestamps are added in increasing order.
That means each key's array is already sorted by timestamp.

So instead of scanning linearly, we binary search for:

the rightmost timestamp <= target timestamp
*/

class TimeMap {
  // store maps each key to its history of [timestamp, value] pairs.
  private store: Map<string, Array<[number, string]>>;

  constructor() {
    this.store = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    // If this key does not exist yet, create an empty history for it.
    if (!this.store.has(key)) {
      this.store.set(key, []);
    }

    // Add the new timestamp-value pair.
    // We can push directly because timestamps are given in increasing order.
    this.store.get(key)!.push([timestamp, value]);
  }

  get(key: string, timestamp: number): string {
    // Get the history for this key.
    const values = this.store.get(key);

    // If the key does not exist, there is no valid value.
    if (!values) return "";

    // Binary search pointers.
    let l = 0;
    let r = values.length - 1;

    // Stores the best valid value found so far.
    let result = "";

    while (l <= r) {
      const mid = l + Math.floor((r - l) / 2);

      // values[mid] is a pair: [timestamp, value].
      const [currentTimestamp, currentValue] = values[mid];

      if (currentTimestamp <= timestamp) {
        // This timestamp is valid.
        // It could be the answer, so we save its value.
        result = currentValue;

        // But maybe there is a larger valid timestamp on the right.
        l = mid + 1;
      } else {
        // This timestamp is too large.
        // We need to search smaller timestamps on the left.
        r = mid - 1;
      }
    }

    return result;
  }
}
