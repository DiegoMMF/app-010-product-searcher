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
const SearchOrder = require("./models/SearchOrder");
const KoaLogger = require("koa-logger");

const app = new Koa();
const router = new Router()

app.use(bodyParser());
app.use(KoaLogger());

/**
 * This endpoint receives a JSON object with the search data and responds with the newly created order.
 *
 * const resultado = await fetch(
 *     1° ganymede -> nuevaOrden -> themisto
 *     2° nueva Orden -> status -> processing
 *     3° themisto -> nuevaOrden -> ganymede
 *     4° nueva Orden -> status -> fulfilled | failed
 *     5° ganymede -> nuevaOrden -> client
 * );
 */
router.post('/api/product/search', ctx => {
  const searchOrder = new SearchOrder;
   
  searchOrder.searchData = ctx.request.body;
  searchOrder.status = "received";
  searchOrder.productList = [];
  
  searchOrder.save((err) => {
      if (err) console.log(err)
  });
  ctx.body = JSON.stringify(searchOrder);
  }
);



/**
 * This endpoint receives an order ID, and responds with the order object
 */
router.get('/api/product/search-order/', (ctx, next) => { ctx.body = '/api/product/search-order/'; });

router.get('/', (ctx, next) => { ctx.body = 'Hello World!'; })

/**
 * This endpoint returns the full list of search orders
 */
router.get('/api/product/search-orders', (cxt, next) => {
  // getAllSearchOrders;
  const orderList = SearchOrder.find();
  Object.toString(orderList);
  console.log(orderList);
  cxt.body = typeof orderList;
});

/**
 * This endpoint returns the list of all products associated with the given product category ID
 */
router.get('/api/product/category/:categoryID', async (cxt, next) => {
  getProductsByCategoryId;
  cxt.body = `OK!, ya que preguntás, la categoryID es ${categoryID}`;    
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(4000, () => {
  console.log("Servidor Arriba.-")
});