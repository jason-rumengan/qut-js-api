// Copyright 2021 Jason Rumengan, QUT

// Packages
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const product = __dirname + "/data/product.json";
const parser = bodyParser.json();

// APIs
// getProducts
app.get('/product', function (req, res) {
    fs.readFile(product, 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
})

// getDetails(id)
app.get('/product/:id', function (req, res) {
    fs.readFile(product, 'utf8', function (err, data) {
        const users = JSON.parse(data);
        const user = users[req.params.id];
        console.log(user);
        res.end(JSON.stringify(user));
    });
})

// addProduct(name, description, price, cost, stock)
app.post('/product', parser, function (req, res) {
    fs.readFile(product, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var newProduct = req.body;
        data[parseInt(Object.keys(data).sort().pop()) + 1] = newProduct;
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

// sell(quantity)
app.post('/product/sell/:id', parser, function (req, res) {
    fs.readFile(product, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var quantity = req.body['quantity'];
        console.log(quantity);
        data[req.params.id]['stock'] -= quantity;
        data[req.params.id]['salesCount'] += quantity;
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

// restock(quantity)
app.post('/product/restock/:id', parser, function (req, res) {
    fs.readFile(product, 'utf8', function (err, data) {
        data = JSON.parse(data);
        var quantity = req.body['quantity'];
        data[req.params.id]['stock'] += quantity;
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

// Server
const server = app.listen(8080, function () {
    const host = server.address().address
    const port = server.address().port
    console.log("Listening at http://%s:%s", host, port)
})