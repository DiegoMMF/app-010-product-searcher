/**
 * Traemos el módulo para ocultar el string del la DB
 */
require("dotenv").config();

const Koa = require('koa');
const Router = require('@koa/router');

const bodyParser = require('koa-bodyparser');

require("./database");

/**
 * Controladores que se encargarán de efectivizar las operaciones de los endpoints
 */
const newSearchOrder = require("./controllers/newSearchOrder");
const getOrderById = require("./controllers/getOrderById");
const getAllSearchOrders = require("./controllers/getAllSearchOrders")
const getProductsByCategoryId = require("./controllers/getProductByCategoryId");

const app = new Koa();
const router = new Router()

app.use(bodyParser());

/**
 * This endpoint receives a JSON object with the search data and responds with the newly created order.
 */
router.post('/api/product/search', async (ctx, next) => {
  await newSearchOrder(ctx.request.body);
  cxt.body = "estamos en eso, no te apresures..."
})

/**
 * This endpoint receives an order ID, and responds with the order object
 */
router.get('/api/product/search-order/:searchOrderID', async (cxt, next) => {
  await getOrderById(searchOrderID);
  cxt.body = "estamos en eso, no te apresures..."
});

/**
 * This endpoint returns the full list of search orders
 */
router.get('/api/product/search-orders', (cxt, next) => {
  getAllSearchOrders;
  cxt.body = "estamos en eso, no te apresures..."    
});

/**
 * This endpoint returns the list of all products associated with the given product category ID
 */
router.get('/api/product/category/:categoryID', async (cxt, next) => {
  getProductsByCategoryId;
  cxt.body = "estamos en eso, no te apresures..."    
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(4000, () => {
  console.log("Servidor Arriba.-")
});