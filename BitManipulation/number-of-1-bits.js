//** https://leetcode.com/problems/number-of-1-bits/description/
/*
Problem: Number of 1 Bits
Category: Bit Manipulation
Pattern: Brian Kernighan Algorithm
Time Complexity: O(k)   // k = número de bits en 1
Space Complexity: O(1)

Key Idea:
Cada operación n & (n - 1) elimina el bit 1 menos significativo.
Así contamos solo los bits encendidos en lugar de recorrer los 32 bits.
*/

var hammingWeight = function (n) {
  let count = 0; // contador de bits en 1

  while (n !== 0) {
    n &= n - 1; // elimina el bit 1 más a la derecha
    count++; // contamos ese bit eliminado
  }

  return count;
};

console.log(hammingWeight(11)); // 3
console.log(hammingWeight(128)); // 1
console.log(hammingWeight(2147483645)); // 30

/*
La idea de esta parte es entender por qué n & (n - 1) elimina un bit en 1.

Primero, el operador AND (&) compara bit por bit.
Solo devuelve 1 cuando los dos bits son 1.
Si no, devuelve 0.

Ejemplo:
1 & 1 = 1
1 & 0 = 0
0 & 1 = 0
0 & 0 = 0

Ahora, lo importante está en qué pasa cuando restamos 1 a un número binario:

- el primer bit en 1 empezando desde la derecha cambia a 0
- todos los bits que estaban a su derecha cambian

Entonces, cuando hacemos n & (n - 1),
el bit en 1 más a la derecha del número original se apaga.

Ejemplo con 11:

11 en binario es 1011
10 en binario es 1010

1011
1010
----
1010

Aquí se apagó el último 1.

Siguiente paso:

10 en binario es 1010
9 en binario es 1001

1010
1001
----
1000

Otra vez se apagó el bit en 1 más a la derecha.

Siguiente paso:

8 en binario es 1000
7 en binario es 0111

1000
0111
----
0000

Se apagó el último 1 que quedaba.

Por eso esta técnica sirve para contar bits en 1:
cada vez que hacemos n & (n - 1), eliminamos exactamente un bit encendido.
Entonces, el número de veces que podemos repetir esa operación
antes de que n llegue a 0
es igual a la cantidad de bits en 1 que tenía el número al inicio.
*/
