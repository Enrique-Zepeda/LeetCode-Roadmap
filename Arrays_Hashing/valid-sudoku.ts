const isValidSudoku = (board: string[][]): boolean => {
  // Tipamos explícitamente como arrays de números
  const rows: number[] = new Array(9).fill(0);
  const cols: number[] = new Array(9).fill(0);
  const box: number[] = new Array(9).fill(0);

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      const char = board[r][r]; // Cambié board[r][c] a una constante para legibilidad

      if (char === ".") continue;

      // SOLUCIÓN AL ERROR: Convertimos el string a número explícitamente
      const val = parseInt(char) - 1;

      // Creamos la máscara de bits (ej: si val es 4, mask es 00010000)
      const mask = 1 << val;

      // Calculamos el índice de la sub-caja 3x3
      const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

      // Verificamos si el bit ya está encendido en fila, columna o caja
      if (rows[r] & mask || cols[c] & mask || box[boxIndex] & mask) {
        return false;
      }

      // Encendemos el bit correspondiente
      rows[r] |= mask;
      cols[c] |= mask;
      box[boxIndex] |= mask;
    }
  }

  return true;
};
