const Product = require('../Models/productSchema');

const getProducts = async () => await Product.find();

const getById = async (id) => await Product.findById(id);

const getByName = async (name) => await Product.findOne({name: name});

const postProduct = async (body) => new Product(body).save();

module.exports = {
    getProducts,
    getById,
    getByName,
    postProduct
}