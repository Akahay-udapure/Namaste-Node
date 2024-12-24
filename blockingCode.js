const crypto = require("crypto");

console.log("Hello Wolrd");

var a = 1078698;
var b = 20896;
console.log("==");

//pbkdf2Sync - password base key derevative function Synchronous function
// Synchronous function will block main thread dont use it
// key generation is CPU intensive thing
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512")
console.log("first key is genrated");

setTimeout(() => {
    console.log("Call me right now ASAP");
}, 0);

//pbkdf2 - password base key derevative function asynchronous function
crypto.pbkdf2("password", "salt", 500000, 50, "sha512",(err, key) => {
    console.log("second Key is Generated", key);
})

function multiply(x, y) {
    const result = x * y;
    return result;
}

const c = multiply(a, b);

console.log(c,"multiplication result")