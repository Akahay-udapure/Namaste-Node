const fs = require("fs");
const a = 100;

setImmediate(() => console.log("Setimmediate"));

Promise.resolve("Promise").then(console.log);

fs.readFile("file.txt", "utf-8", () => {
    console.log("Reading file CB");
});

setTimeout(() => console.log("Timer settimeout"), 0);

process.nextTick(() => console.log("proccess nexxttick"));

function printA() {
    console.log(a, "====a");
}

printA();
console.log("last line of the file");
