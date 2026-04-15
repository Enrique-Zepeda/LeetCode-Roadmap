class EncodeAndDecode {
  // Marcamos los métodos como públicos explícitamente
  public encode(strs: string[]): string {
    const pieces: string[] = [];

    for (const s of strs) {
      // Usamos template strings para mayor legibilidad
      pieces.push(`${s.length}#${s}`);
    }

    // Unir todo al final es más eficiente en memoria que el +=
    return pieces.join("");
  }

  public decode(str: string): string[] {
    const res: string[] = [];
    let i = 0;

    while (i < str.length) {
      let j = i;

      // Buscamos el delimitador '#'
      while (str[j] !== "#") {
        j++;
      }

      // Tipado: TS infiere que length es number gracias a parseInt
      const length = parseInt(str.substring(i, j));

      // Saltamos el '#'
      const start = j + 1;
      const end = start + length;

      res.push(str.substring(start, end));

      // Movemos el puntero al inicio de la siguiente palabra
      i = end;
    }

    return res;
  }
}

const solution = new EncodeAndDecode();
const encode = solution.encode(["Hello", "World"]);
const decode = solution.decode(encode);
console.log(decode);
