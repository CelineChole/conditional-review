// Build a robot

// If the number is less than 10, log ‘Too easy for me’ and nothing else.​
// If the number is even, log ‘Even numbers are my favorite’.​
// If the number is more than 100 but less than 9000, log ‘Great, let’s have some fun’.​
// If the number is over 9000, log ‘Sorry, that’s too big for me’ and nothing else.​

let robotNumber = 8004;

if (robotNumber < 10) {
  console.log('Too easy for me');
} else if (robotNumber > 9000) {
  console.log('Sorry, that’s too big for me');
} else {
  console.log('Great, let’s have some fun');
  if (robotNumber % 2 === 0) {
    console.log('Even numbers are my favorite');
  }
}