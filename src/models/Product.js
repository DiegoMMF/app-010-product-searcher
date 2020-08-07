/**
 * @fileoverview definición del esquema principal para la
 * colección de productos que serán indexados por categoría.
 * 
 * La intención es crear una colección paralela a la de órdenes
 * de búsqueda, que contenga los productos que las búsquedas
 * van devolviendo, indexados por categoría.
 */

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

/*
 * Hay que ver si es dable usar "required" o genera conflictos
 * ya que algunos providers pueden no ofrecer todos los datos.
 * 
 *   const ProductSchema = new Schema({
 *   SKU: { 
 *       type: String,
 *       required: true
 *   },
 *   productName: { 
 *       type: String,
 *       required: true
 *   },
 *   actualPrice: { 
 *       type: Number,
 *       required: true
 *   },
 *   originalPrice: { 
 *       type: Number,
 *       required: true
 *   },
 *   productCategoryID: { 
 *       type: String,
 *       required: true
 *   },
 *   productDescription: { 
 *       type: String,
 *       required: true
 *   },
 *   imagesUrl: [String],
 *   relatedQueries: [String]
}); */