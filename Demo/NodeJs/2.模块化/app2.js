/**
 * 文件模块：通过路径引入
 */
const http = require('http');
const { calculate, getUrl } = require('./custom_module/tools');
const host = '127.0.0.1';
const port = 3100;

const server = http.createServer((req,res) => {
    const num = calculate(20);
    const url = getUrl('https');
    res.statusCode = 200;
    res.end(`${num}-${url}-test2`);
})

server.listen(port, host, () => {
    console.log(`服务器运行在 http://${host}:${port}/`)
})
