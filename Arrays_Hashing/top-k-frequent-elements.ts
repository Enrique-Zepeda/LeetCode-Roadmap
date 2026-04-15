function topKFrequent(nums: number[], k: number): number[] {
  // Aquí la llave es number y el valor (frecuencia) es number
  const counter = new Map<number, number>();

  for (const n of nums) {
    counter.set(n, (counter.get(n) ?? 0) + 1);
  }

  // Convertimos el Map a Array para poder ordenar
  // [ [número, frecuencia], [número, frecuencia] ]
  return Array.from(counter.entries())
    .sort((a, b) => b[1] - a[1]) // Ordenamos por frecuencia (valor)
    .slice(0, k) // Tomamos los K primeros
    .map((entry) => entry[0]); // Retornamos solo el número (llave)
}
