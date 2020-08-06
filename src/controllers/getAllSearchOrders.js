const SearchOrder = require("../models/SearchOrder");

/**
 * @fileoverview simplemente devolvemos la Colección completa de
 * órdenes de búsquedas.
 */

exports.getAllSearchOrders = () => {

    return SearchOrder.find();

};