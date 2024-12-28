const http = require("http");
const server = http.createServer((req, res)=>{
    res.end("Hello Wolrd");
});

server.listen(7777);
