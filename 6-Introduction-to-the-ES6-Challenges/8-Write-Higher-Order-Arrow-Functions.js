// Here, I first filter for the positive integers and then I
// map through them and square each one.

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const integers = realNumberArray.filter((num) => num === Math.floor(num) && num > 0)
  const squaredIntegers = integers.map((num) => num ** 2)
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
