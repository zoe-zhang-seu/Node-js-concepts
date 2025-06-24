// callstack.js
function first() {
  console.log('Entering first()');
  second();
  console.log('Exiting first()');
}

function second() {
  console.log('  ↳ In second()');
}

console.log('Start');   // pushed to stack
first();                // pushed, calls second()
console.log('End');     // pushed after first() completes

// Expected output:
// Start
// Entering first()
//   ↳ In second()
// Exiting first()
// End

