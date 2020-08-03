const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    SKU: String,
    productName: String,
    actualPrice: Number,
    originalPrice: Number,
    productCategoryID: String,
    productDescription: String,
    imagesUrl: [String],
    relatedQueries: [String]
});

module.exports = model("Product", ProductSchema);