const groupAnagrams = (strs: string[]): string[][] => {
  // Creamos un objeto donde:
  // clave -> palabra ordenada (ej: "aet")
  // valor -> arreglo de strings que son anagramas
  const group: Record<string, string[]> = {};

  // Recorremos cada palabra del arreglo
  for (const s of strs) {
    // Convertimos la palabra en una "firma":
    // - la separamos en letras
    // - las ordenamos
    // - las volvemos a unir
    // Ej: "eat" -> "aet"
    const word: string = s.split("").sort().join("");

    // Si aún no existe esa clave en el objeto,
    // la inicializamos con un arreglo vacío
    if (!group[word]) {
      group[word] = [];
    }

    // Agregamos la palabra original al grupo correspondiente
    group[word].push(s);
  }

  // Retornamos solo los valores del objeto,
  // es decir, los grupos de anagramas
  return Object.values(group);
};
