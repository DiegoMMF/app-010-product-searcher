const SearchOrder = require("../models/SearchOrder");

/**
 * Recibimos core-data para un búsqueda que insertamos en 
 * el documento principal que contendrá toda la orden.
 * 
 * @param { Object } receivedSearchData ver sub-esquema de
 * SearchOrderSchema en SearchOrder.js
 */
exports.newSearchOrder = (receivedSearchData) => {

    const searchOrder = new SearchOrder;
    
    searchOrder.searchData = receivedSearchData;
    searchOrder.status = "received";
    searchOrder.productList = [];

    searchOrder.save((err) => {
        if (err) console.log(err)
    });
    
    return searchOrder;
};