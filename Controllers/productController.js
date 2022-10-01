const Product = require('../Models/productSchema');

const getProducts = async () => await Product.find();

const getById = async (id) => await Product.findById(id);

const getByName = async (name) => await Product.findOne({name: name});

const postProduct = async (body) => new Product(body).save();

const updateProduct = async (id, body) => await Product.findByIdAndUpdate(id, body);

const deleteProduct = async (id) => await Product.findByIdAndDelete(id);

module.exports = {
    getProducts,
    getById,
    getByName,
    postProduct,
    updateProduct,
    deleteProduct
}