require('./connection')

const Product = require('./models/Product')

const product = new Product({
    name: 'laptop',
    description: 'Matebook D15 Bonita',
    price: 18000
})

product.save((err, document) => {
    if(err) console.log(err);

    console.log(document);
})

console.log(product);