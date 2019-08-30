
const products = require('../products.json')



const getProducts = (req, res) => {
    res.status(200).send(products);
}


const getProductsByID = (req, res) => {
    const id = parseInt(req.params.id)
    if(isNaN(id)){
        res.sendStatus(400)
    } else if (id < products.length){
        const foundProducts = products.filter( product => product.id === id )
        res.status(400).send(foundProducts)
    } else {
        res.status(200).send('Item not in list')
        
    }

}

const filterByPrice = (req, res) =>{
    const price = parseInt(req.params.price)
    const moreThan = prodcuts.filter( price => products.price >= price)
    res.status(200)

}
module.exports = getProducts
module.exports = getProductsByID