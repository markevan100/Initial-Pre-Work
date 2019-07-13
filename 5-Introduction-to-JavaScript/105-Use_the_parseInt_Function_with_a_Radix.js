// When parsing, we can provie a base, called a radix

function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
