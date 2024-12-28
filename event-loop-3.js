const fs = require("fs");

setImmediate(() => console.log("Setimmediate"));

setTimeout(() => console.log("Timer settimeout"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("file.txt", "utf-8", () => {
    setTimeout(() => console.log("2nd Timer settimeout"), 0);
    process.nextTick(() => console.log("2nd proccess nexxttick"));
    setImmediate(() => console.log("2nd Setimmediate"));

    console.log("Reading file CB");
});

process.nextTick(() => console.log("proccess nexxttick"));
console.log("last line of the file");


// output
// last line of the file
// proccess nexxttick
// Promise
// Timer settimeout
// Setimmediate
// Reading file CB
// 2nd proccess nexxttick
// 2nd Setimmediate
// 2nd Timer settimeout