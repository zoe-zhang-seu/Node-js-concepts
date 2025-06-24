// microtask.js
console.log('Script start');

Promise.resolve()
  .then(() => {
    console.log('→ Promise.then (microtask 1)');
  })
  .then(() => {
    console.log('→ Promise.then (microtask 2)');
  });

queueMicrotask(() => {
  console.log('→ queueMicrotask (microtask 3)');
});

console.log('Script end');

// Expected output:
// Script start
// Script end
// → Promise.then (microtask 1)
// → queueMicrotask (microtask 3)
// → Promise.then (microtask 2)
// Explanation:
// 1. The script starts and logs "Script start".
// 2. A resolved Promise is created, and its first `.then()` callback is scheduled as a microtask.
// 3. The second `.then()` callback is also scheduled as a microtask.
// 4. A `queueMicrotask` callback is scheduled as another microtask.
// 5. The script ends and logs "Script end".
// 6. All microtasks are executed in the order they were scheduled, after the script has finished executing.
// 7. The output shows the order of execution, with microtasks appearing after