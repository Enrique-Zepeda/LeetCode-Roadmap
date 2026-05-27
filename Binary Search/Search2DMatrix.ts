/*
https://leetcode.com/problems/search-a-2d-matrix/
Problem: Search a 2D Matrix
Category: Binary Search
Pattern: Treat 2D Matrix as a Sorted 1D Array
Time Complexity: O(log(m * n))
Space Complexity: O(1)

Key Idea:
The matrix is sorted, so we can imagine it as one big sorted array.

ROWS = total number of rows in the matrix.
COLS = total number of columns in each row.

Example:
matrix = [
  [1,  3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
]

ROWS = 3
COLS = 4

Virtual 1D Array:
[1, 3, 5, 7, 10, 11, 16, 20, 23, 30, 34, 60]

Index Conversion:
row = Math.floor(mid / COLS)
col = mid % COLS
*/

function searchMatrix(matrix: number[][], target: number): boolean {
  // ROWS = how many arrays/rows the matrix has.
  const ROWS = matrix.length;

  // COLS = how many numbers/elements each row has.
  const COLS = matrix[0].length;

  // l and r are pointers for the virtual 1D array.
  let l = 0;
  let r = ROWS * COLS - 1;

  while (l <= r) {
    // Middle index in the virtual 1D array.
    const mid = l + Math.floor((r - l) / 2);

    // Convert virtual 1D index into 2D matrix coordinates.
    const row = Math.floor(mid / COLS);
    const col = mid % COLS;

    // Actual value inside the matrix.
    const value = matrix[row][col];

    if (value === target) return true;

    if (value < target) {
      // Target is bigger, so search the right half.
      l = mid + 1;
    } else {
      // Target is smaller, so search the left half.
      r = mid - 1;
    }
  }

  return false;
}
