/*
https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
Problem: Best Time to Buy and Sell Stock
Category: Sliding Window
Pattern: Same Direction Two Pointers
Time Complexity: O(n)
Space Complexity: O(1)

Key Idea:
Use left pointer as the buy day and right pointer as the sell day.
If selling is profitable, update max profit.
If a lower price is found, move the buy pointer to that day.
*/

function maxProfit(prices) {
  let l = 0; // buy pointer
  let r = 1; // sell pointer

  let maxP = 0;

  while (r < prices.length) {
    // Check if the transaction is profitable
    if (prices[l] < prices[r]) {
      const profit = prices[r] - prices[l]; // sell - buy
      maxP = Math.max(maxP, profit); // update best profit
    } else {
      l = r; // found a better day to buy
    }

    r++; // move to next possible sell day
  }

  return maxP;
}
