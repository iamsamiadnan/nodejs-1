
const http = require('http')

// function rqListener(req, res) {

// }

const server = http.createServer((req, res) => {
    const url = req.url;
    const headers = req.headers;
    console.log(url)

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>this is a title</title></head>');
        res.write('<body>');
        res.write('<form action="/submission" method="GET">');
        res.write('<input type="text" name="name">');
        res.write('<input type="text" name="age">');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();

    }
    //submission?name=adnan+sami&age=25
    //[0] = submission?
    //[1] = adnan+sami&age=25
    console.log(url.split("name="))
    if(url.split("name=")[0] === '/submission?') {
        
        res.write(`<h1>welcome ${url.split("name=")[1].replace("+", " ")}</h2>`);
        return res.end();
    }

    

    res.write('<h1>404 not found page</h1>')
    res.end();

    
});

server.listen(3000);



// const func = function (req, res) {
//     console.log("Hello ");
// }

// func()


// const func = () => {
//     console.log("Hello")
// }

// func();

// http.createServer(rqListener);


// function func(fruit) {
//     const glass = fruit + " juice";
//     return glass

// }


// console.log(func("orange"))

