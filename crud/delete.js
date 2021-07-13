require('../connection')

const Product = require('../models/Product')

async function deleteProduct(){
   //const result = await Product.deleteMany({name: 'Keyboard'});
   //const result = await Product.deleteOne({name: 'Keyboard'});
   //const result = await Product.findOneAndDelete({name: 'Keyboard'});
   const result = await Product.findByIdAndDelete({name: 'Keyboard'});
   
   console.log(result);
}

deleteProduct();