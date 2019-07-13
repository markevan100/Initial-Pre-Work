// This was my favorite activity so far. We got to do some real coding!
// In real life, I would have likely found a way to not have so many case statements
var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card) {
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count -= 1;
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      break;
  }

  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
