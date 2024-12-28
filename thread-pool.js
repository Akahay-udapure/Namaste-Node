process.env.UV_THREADPOOL_SIZE = 8;

const crypto = require("crypto");
const fs = require("fs");


crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("1 - cryptoPBKDF2 done");
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512",(err, key) => {
    console.log("2 - cryptoPBKDF2 done");
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("3 - cryptoPBKDF2 done");
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512",(err, key) => {
    console.log("4 - cryptoPBKDF2 done");
})

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512",(err, key) => {
    console.log("5 - cryptoPBKDF2 done");
})

// fs.readFile("file.txt", "utf-8", () => {
//     console.log("Reading file CB");
// });


// in this kind of code lib uv used thread pool