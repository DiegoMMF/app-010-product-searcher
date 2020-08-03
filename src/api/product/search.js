const SearchData = require('../../models/SearchData');
const SearchOrder = require('../../models/SearchOrder');

require('../../database');


function searchDataAPI (searchParam, database) {
    const searchData = new SearchData();
    console.log(searchData.path('_id')); // ObjectId { ... }
    const searchOrder = new SearchOrder();
    console.log(searchOrder.path('_id')); // ObjectId { ... }
}

/**
 * 
 * Where:
 * 
 * For each request a Search Order is created and persisted to the database. An order consists of:
 *      A unique ID.
 *      The search data, as received in the request.
 *      An order status. Can be either *received* (default), *processing*, *fulfilled* or *failed*.
 *      The product list result, which sits empty until the order is fulfilled.
 * 
 * Once a search order is placed, the endpoint responds with the newly created order.
 * 
 * Use *semantic HTTP*
 * **Validate** all their parameters.
 */