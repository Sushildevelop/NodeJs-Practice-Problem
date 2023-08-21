const { log } = require('console');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/about') {
        res.write('')
    }
    res.end();
})

server.listen(5500);
console.log(`the http server is runnig on port 5500`);