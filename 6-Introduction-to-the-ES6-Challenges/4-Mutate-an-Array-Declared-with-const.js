//The pointer of an array declared with constant cannot be moved
// but the elements of that array can be changed. Here, I change
// them by popping the two and adding it to the front.

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
  let x = s.pop()
  s.unshift(x)
  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace(); 
