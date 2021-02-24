/**
 * Hello Nodejs
 */
const http = require('http');
const host = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.end('Hello Nodejs!');
})

server.listen(port, host, () => {
    console.log(`服务器运行在 http://${host}:${port}/`)
})
