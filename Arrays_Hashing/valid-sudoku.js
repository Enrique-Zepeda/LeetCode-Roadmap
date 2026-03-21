//** https://leetcode.com/problems/valid-sudoku/
/*
Idea:
- Usamos 3 arreglos de bits:
  rows, cols, box
- Cada bit representa un número del 1 al 9
- Si un bit ya estaba encendido, significa que ese número ya apareció
- Revisamos fila, columna y subcuadro
- Si hay repetido, return false
- Si no, marcamos el número como visto

Tips
- &  Revisar si ya estaba
- |= Marcar como visto
- 1 << val Bit del número actual
*/

var isValidSudoku = function (board) {
  // Cada posición guarda en bits qué números ya vimos
  let rows = new Array(9).fill(0);
  let cols = new Array(9).fill(0);
  let squares = new Array(9).fill(0);

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      // Ignoramos celdas vacías
      if (board[r][c] === ".") continue;

      // Convertimos "1"..."9" en 0...8
      let val = board[r][c] - "1";

      // Calculamos a qué bloque 3x3 pertenece esta celda
      let squareIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      // Creamos la máscara del número actual
      let mask = 1 << val;

      // Si ya estaba en la fila, columna o bloque, no es válido
      if (rows[r] & mask || cols[c] & mask || squares[squareIndex] & mask) {
        return false;
      }

      // Marcamos el número como visto
      rows[r] |= mask;
      cols[c] |= mask;
      squares[squareIndex] |= mask;
    }
  }

  return true;
};

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
); // true

console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
); // false
