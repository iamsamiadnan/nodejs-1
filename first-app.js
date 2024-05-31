
const http = require('http')

// function rqListener(req, res) {

// }

const server = http.createServer((req, res) => {
    const url = req.url;
   


    if (url === '/about') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Hello!!</h1>');
        res.end();

    }
    res.write('<h1>this is a default page</h1>')
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

