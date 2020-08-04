const Koa = require('koa');
const Router = require('@koa/router');
const bodyParser = require('koa-bodyparser');
const newSearchOrder = require("./controllers/newSearchOrder");
const getOrderById = require("./controllers/getOrderById");
const getAllSearchOrders = require("./controllers/getAllSearchOrders");
const getProductsByCategoryId = require("./controllers/getProductsByCategoryId");

const app = new Koa();
const router = new Router();

require("./database");

app.use(bodyParser());

// This endpoint receives a JSON object with the search data and responds with the newly created order.
router.post(
    '/api/product/search',
    app.use(async ctx => {
        ctx.body = 'Hello World';
    })
);

/* async (app.use()) => {
    await newSearchOrder.save((err) => {
        if (err) console.log(err)
    });
} */

// This endpoint receives an order ID, and responds with the order object
router.get('/api/product/search-order/:orderID', getOrderById);

// This endpoint returns the full list of search orders
router.get('/api/product/search-orders', getAllSearchOrders);

// This endpoint returns the list of all products associated with the given product category ID
router.get('/api/product/category/:categoryID}', getProductsByCategoryId);

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(4000, () => { console.log("Servidor Despierto.-")});