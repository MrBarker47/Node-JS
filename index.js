let http = require('http');
let hostname = '127.0.0.1';
let port = 3000;

let server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('<h1 style="color: red">Hello World!</h1>')
    res.write('<p>I wonder what else we can send...</p>')
    res.end('Hello World!\n');
});
 
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 