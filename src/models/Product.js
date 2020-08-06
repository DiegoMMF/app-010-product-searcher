/**
 * @fileoverview definición del esquema principal para la
 * colección de productos que serán indexados por categoría.
 */

 const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
    SKU: { 
        type: String,
        required: true
    },
    productName: { 
        type: String,
        required: true
    },
    actualPrice: { 
        type: Number,
        required: true
    },
    originalPrice: { 
        type: Number,
        required: true
    },
    productCategoryID: { 
        type: String,
        required: true
    },
    productDescription: { 
        type: String,
        required: true
    },
    imagesUrl: [String],
    relatedQueries: [String]
});

module.exports = model("Product", ProductSchema);