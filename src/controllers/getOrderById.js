const SearchOrder = require("../models/SearchOrder");

/**
 * Llamada por el endpoint '/api/product/search-order/:searchOrderID'
 * 
 * @param {String} orderID devolvemos la orden solicitada
 */

exports.getOrderById = (orderID) => {

    return SearchOrder.findById(orderID);
    
};