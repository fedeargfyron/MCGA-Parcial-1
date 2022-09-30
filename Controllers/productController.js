const Product = require('../Models/productSchema');

const getProducts = async () => await Product.find();

module.exports = {
    getProducts
}