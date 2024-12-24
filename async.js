const fs = require("fs");
const https = require("https");

console.log("Hello world");

var a = 232323;
var b = 2323243;

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetched Data Successfully");
});

setTimeout(() => {
    console.log("Settimout call  after 5 seconds");
}, 5000);

fs.readFile("./file.txt", "utf-8", (err, data) => {
    console.log("File Data : ", data);
});

function multiply(x, y) {
    const result = x * y;
    return result;
}

const c = multiply(a, b);

console.log(c,"ccc")
