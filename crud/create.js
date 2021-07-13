require('../connection')

const Product = require('../models/Product')

async function createProduct(){
    const laptopOne = new Product({
        name: 'HP',
        description:'Mi primer laptop'
    }) 
    await laptopOne.save();

    const laptopTwo = new Product({
        name: 'Dell',
        description:'No he tenido'
    }) 
    await laptopTwo.save();
}

createProduct();