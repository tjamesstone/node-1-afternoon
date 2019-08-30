const express = require('express');
const products = require('../products.json')
const productsController = require('./getProducts')

const app = express();
const port = 3001;


app.get('/api/products', productsController.getProducts)

app.get('/api/products/:id', productsController.getProductsByID)


app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});