// microtask-order.js
console.log('Script start');

const p1 = Promise.resolve().then(() => {
  console.log('→ Promise.then (microtask 1)');
});
const p2 = Promise.resolve().then(() => {
  console.log('→ Promise.then (microtask 2)');
});

queueMicrotask(() => {
  console.log('→ queueMicrotask (microtask 3)');
});

console.log('Script end');