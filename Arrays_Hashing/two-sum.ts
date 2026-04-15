const twoSum = (nums: number[], target: number): number[] => {
  // Creamos un Map para guardar:
  // clave -> valor del número
  // valor -> índice de ese número en el arreglo
  const map = new Map<number, number>();

  // Recorremos el arreglo una sola vez
  for (let i = 0; i < nums.length; i++) {
    const complemento: number = target - nums[i];

    if (map.has(complemento)) {
      // `map.get(complemento)` puede devolver `undefined`, pero como ya validamos con `map.has(complemento)`,
      // usamos `!` para decirle a TypeScript: "confía en mí, este valor sí existe"
      return [map.get(complemento)!, i];
    }

    // Si no encontramos el complemento,
    // guardamos el número actual con su índice
    map.set(nums[i], i);
  }

  // Si no se encuentra ninguna pareja que sume el target,
  // retornamos un arreglo vacío
  return [];
};
