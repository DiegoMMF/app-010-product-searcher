const Product = require("../models/Product");

/**
 * Llamada por el endpoint '/api/product/category/:categoryID'
 * 
 * @param {String} categoryID categoría a la que pertenece la
 * lista de productos que devolveremos.
 */
exports.getProductByCategoryId = (categoryID) => {

    return Product.find(categoryID);

};