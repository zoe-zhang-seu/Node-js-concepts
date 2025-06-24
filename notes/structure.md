1. JavaScript Runtime & V8
V8 Engine

Google’s high-performance JS engine that compiles JS to native machine code.

libuv

C-library providing cross-platform asynchronous I/O and the event loop implementation. ????

2. Event Loop & Asynchronous I/O
Call Stack

Executes your synchronous JS functions in LIFO order.

Microtask Queue

Holds Promise callbacks (.then/.catch) and queueMicrotask; drained immediately after each stack frame.

Task (Macro) Queue

Holds timers (setTimeout, setInterval), I/O callbacks, and UI events; processed one at a time after microtasks.

3. Modules & Package Management
CommonJS (CJS)

const foo = require('foo'); synchronous module loading.

ES Modules (ESM)

import foo from 'foo'; supports static analysis and asynchronous loading.

npm / yarn / pnpm

CLI package managers for installing, versioning, and publishing modules.

4. Core Modules
fs

File system operations (sync and async).

http / https

Building HTTP servers and clients.

path

Utilities for file paths.

stream

Efficient processing of large data via readable, writable, duplex, and transform streams.

buffer

Handling raw binary data.

5. Callback vs. Promise vs. async/await
Callback Pattern

Traditional Node style: fs.readFile(path, (err, data) => { … }).

Promises

.then/.catch; avoid “callback hell.”

async/await

Syntactic sugar around Promises; write asynchronous code in a synchronous style.

6. Error Handling
Callbacks

Error-first signature: callback(err, result).

Promises/async

.catch() or try { await … } catch (err) { … }.

7. Streams & Backpressure
Readable & Writable Streams

Handle data piece by piece (e.g., file downloads).

Piping

readable.pipe(writable).

Backpressure

Mechanism to prevent fast sources from overwhelming slow consumers.

8. Global Objects & Timers
Global Scope

global, process, Buffer, __dirname, __filename.

Timers

setTimeout(), setInterval(), setImmediate(), process.nextTick().

9. Clustering & Scaling
Cluster Module

Fork multiple worker processes to utilize multi-core CPUs.

PM2 / Docker

Process managers and containerization for production deployments.

10. Security & Best Practices
Input Validation & Sanitization

Prevent injection attacks.

Use Helmet / rate-limiting

Protect Express apps from common vulnerabilities.

Keep Dependencies Updated

Regularly audit (npm audit) and patch.

