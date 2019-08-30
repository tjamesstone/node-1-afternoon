const express = require('express');
const products = require('../products.json')
const getProducts = require('./getProducts')
const getProductsByID = require('./getProducts')
const app = express();
const port = 3001;


app.get('/api/products', getProducts)

app.get('/api/products/:id', getProductsByID)

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});