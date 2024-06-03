const http = require('http');
const { parse } = require('path');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.write('<html>');
        res.write('<head>');
        res.write('<title>Hello</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<form action="/add-product" method="POST">');
        res.write('<input type="text" name="title">');
        res.write('<button type="submit" >Send</button>');

        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/add-product' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })

        // title=mango&price=100
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const title = parsedBody.split('=')[1];
            console.log(title);
        });
        return res.end();
    }
});

server.listen(3000);