// This was another fun challenge, got to actually insert some logic

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  var exists = myObj.hasOwnProperty(checkProp);
  if (exists) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }

}

// Test your code by modifying these values
checkObj("gift");
