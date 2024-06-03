const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));




app.post('/add-product', (req, res, next) => {
    const data = req.body;
    console.log(data)
     const format = `fruit name: ${data.title} price: ${data.price}`; // fruit name: apple price: 100
    fs.writeFile('data.txt', format, (err) => {})
    res.send(format);

    // res.send('Hello');
    //next();
})



app.post('/price', (req, res, next) => {
    // const data = req.body;
    // console.log(data)
    // res.send('your order is ' + data.title + ' price is ' + data.price);

    // res.send('Hello');
    //next();
})

app.get('/', (req, res, next) => {

    res.sendFile(path.join(__dirname, 'views', 'form.html'));
    //next();
})






// app.use((req, res, next) => {
//     console.log("in the second middleware");
// })

app.listen(3000);