const express = require('express')
const app = express()
const fs = require('fs');
var bodyParser = require('body-parser')
var cors = require('cors')
let products = require('../data.json')

//Settings
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

//GET
app.get('/showProducts', (req, res) =>{
    res.send(products)
});

//POST
app.post('/addProduct', (req,res) =>  {
    console.log(req.body)
    products.push({"name": req.body.name, "price": req.body.price})
    console.log(products)
    fs.writeFileSync('../data.json', JSON.stringify(products))
})


app.listen(3000, () => console.log('Server run on port 3000'))