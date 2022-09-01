/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  console.log(n);
  const binary = getBinary(n);
  console.log(binary);
};

const getBinary = (n) => {
  let binary = "";
  while (n > 0) {
    const bit = n % 2;
    n = Math.ceil(n / 2);
    binary += bit;
  }
  return binary;
};

reverseBits(00000010100101000001111010011100);
