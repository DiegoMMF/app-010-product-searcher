const Koa = require('koa');
const Router = require('@koa/router');

const newSearchOrder = require("./controllers/newSearchOrder");
const getOrderById = require("./controllers/getOrderById");
const getAllSearchOrders = require("./controllers/getAllSearchOrders")
const getProductsByCategoryId = require("./controllers/getProductByCategoryId");

require("./database");

const app = new Koa();
const router = new Router()

// This endpoint receives a JSON object with the search data and responds with the newly created order.
router.post('/api/product/search', async (cxt, next) => {
    try {
        ctx.body = newSearchOrder;
    } catch {
        err => console.error(err);
    }
});

// This endpoint receives an order ID, and responds with the order object
router.get('/api/product/search-order/:orderID', async (cxt, next) => {
    try {
        ctx.body = getOrderById;
    } catch {
        err => console.error(err);
    }
});

// This endpoint returns the full list of search orders
router.get('/api/product/search-orders', async (cxt, next) => {
    try {
        ctx.body = getAllSearchOrders;
    } catch {
        err => console.error(err);
    }
});

// This endpoint returns the list of all products associated with the given product category ID
router.get('/api/product/category/:categoryID', async (cxt, next) => {
    try {
        ctx.body = getProductsByCategoryId;
    } catch {
        err => console.error(err);
    }
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(4000, () => { console.log("Servidor Despierto.-")});