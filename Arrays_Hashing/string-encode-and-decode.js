class Solution {
  encode(strs) {
    let res = "";

    for (const s of strs) {
      res += s.length + "#" + s;
    }

    return res;
  }

  decode(str) {
    let res = [];
    // i será nuestro puntero principal para recorrer el string
    let i = 0;

    // Seguimos mientras no lleguemos al final del string
    while (i < str.length) {
      // j se usa para buscar el carácter "#"
      let j = i;

      // Avanzamos j hasta encontrar "#"
      // Todo lo que está antes de "#" representa la longitud
      while (str[j] !== "#") {
        j++;
      }

      // Extraemos la parte numérica y la convertimos a entero
      // Ejemplo: si str entre i y j es "4", length = 4
      let length = parseInt(str.substring(i, j));

      // Movemos i al primer carácter después de "#"
      // Ahí empieza el string real
      i = j + 1;

      // Calculamos dónde termina ese string
      // Si empieza en i y mide length, termina en i + length
      j = i + length;

      // Extraemos el string usando substring y lo agregamos al resultado
      res.push(str.substring(i, j));

      // Movemos i al final del string extraído
      // Así en la siguiente vuelta seguimos con el próximo bloque
      i = j;
    }

    // Devolvemos el arreglo reconstruido
    return res;
  }
}

// -------------------------
// PRUEBA DEL CÓDIGO
// -------------------------

// Creamos una instancia de la clase
const sol = new Solution();

// Arreglo de prueba
const misStrings = ["neet", "code", "love", "you"];

// Codificamos el arreglo
const codificado = sol.encode(misStrings);

// Mostramos el resultado codificado
console.log("Codificado:", codificado);
// Resultado esperado: "4#neet4#code4#love3#you"

// Decodificamos el string anterior
const decodificado = sol.decode(codificado);

// Mostramos el arreglo reconstruido
console.log("Decodificado:", decodificado);
// Resultado esperado: ["neet", "code", "love", "you"]
