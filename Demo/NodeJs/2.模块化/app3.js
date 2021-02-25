/**
 * node_modules
 */
const http = require('http');
const { calculate, getUrl } = require('tools');
const host = '127.0.0.1';
const port = 3200;

const server = http.createServer((req,res) => {
    const num = calculate(20);
    const url = getUrl('https');
    res.statusCode = 200;
    res.end(`${num}-${url}-test3`);
})

server.listen(port, host, () => {
    console.log(`服务器运行在 http://${host}:${port}/`)
})
