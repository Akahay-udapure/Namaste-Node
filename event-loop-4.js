const fs = require("fs");

setImmediate(() => console.log("Setimmediate"));

setTimeout(() => console.log("Timer settimeout"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("file.txt", "utf-8", () => {
    console.log("Reading file CB");
});

// next tick callback have the highest priority if there are nested nextTick then it will excute all nested
//nextTick first and then go further
process.nextTick(() => {
    process.nextTick(() => console.log("inner nexttick"));
    console.log("proccess nexxttick");
});
console.log("last line of the file");

// output
