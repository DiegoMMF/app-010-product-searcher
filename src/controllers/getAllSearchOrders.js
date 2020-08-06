const SearchOrder = require("../models/SearchOrder");

/**
 * @fileoverview simplemente devolvemos la Colección completa de
 * órdenes de búsquedas.
 */

exports.getAllSearchOrders = () => {

    const todas = await SearchOrder.find();
    // errores
    return todas;

};