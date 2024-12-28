const fs = require("fs");
const a = 100;

setImmediate(() => console.log("Setimmediate"));

fs.readFile("file.txt", "utf-8", () => {
    console.log("Reading file CB");
});

setTimeout(() => console.log("Timer settimeout"), 0);

function printA() {
    console.log(a, "====a");
}

printA();
console.log("last line of the file");
