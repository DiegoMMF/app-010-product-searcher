/**
 * @fileoverview se integra el body del POST dentro de un nuevo
 * doc "SearchOrder", se le asigna un status de  y se lo guarda
 * en la DB.
 */

const SearchOrder = require("../models/SearchOrder");
const Router = require("koa-router");

/**
 * 
 * @param { Object } searchRequest modelo de SearchDataSchema
 */

 function newSearchOrder(searchRequest) {
    const searchOrder = new SearchOrder;
    searchOrder.searchData = searchRequest;
    searchOrder.status = "received";
    searchOrder.productList = [];
    return searchOrder;
}

const router = new Router();

router.post("/api/product/search", (cxt) => {
    const requestBody = cxt.request.body;

    mongoose.

    newSearchOrder(requestBody);
})

/**
 * An order status. Can be either *received* (default), * processing*, *fulfilled* or *failed*.
 * The product list result, which sits empty until the order is fulfilled.
 * 
 * Once a search order is placed, the endpoint responds with the newly created order.
 * 
 * Use *semantic HTTP*
 * **Validate** all their parameters.
 */