// XOR cancela parejas:
// a ^ a = 0
// a ^ 0 = a
var singleNumber = function (nums) {
  let xor = 0; // acumulador

  for (const n of nums) {
    xor ^= n; // los repetidos se cancelan
  }

  return xor; // queda el único número sin repetir
};

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
console.log(singleNumber([1])); // 1
