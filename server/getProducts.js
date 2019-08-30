
const products = require('../products.json')




module.exports = { 
    
getProducts : (req, res) => {
    
    if(!req.query.price){
    res.status(200).send(products)
    } else {
        console.log('hello')
    const enteredPrice = parseInt(req.query.price)
    console.log(enteredPrice)
    const moreThan = products.filter( (product) => product.price >= enteredPrice)
    res.status(200).send(moreThan)
    }
}

,
 getProductsByID : (req, res) => {
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
}