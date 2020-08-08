const SearchOrder = require("../models/SearchOrder");

/**
 * Recibimos core-data para un búsqueda que insertamos en 
 * el documento principal que contendrá toda la orden.
 * 
 * @param { Object } requestBodySearchData request body with original
 * order data
 */
exports.newSearchOrder = async (requestBodySearchData) => {

    const searchOrder = new SearchOrder();
    
    searchOrder.searchData = requestBodySearchData;
    searchOrder.status = "received";
    searchOrder.productList = [];

    await searchOrder.save((err) => {
        if (err) console.log(err)
    });
    
    return searchOrder;

};