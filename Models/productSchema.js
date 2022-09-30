const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    id: { type: Schema.Types.ObjectId },
    name: {
        type: String,
        required: true,
        maxLength: 30
    },
    description: {type: String },
    price: {type: Number, min: 1, required: true },
    stock: {type: Number, min: 0, required: true },
    isDeleted: {type: Boolean, default: false}
});

module.exports = mongoose.model('Product', productSchema);