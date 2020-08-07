/**
 * Traemos el módulo dotenv para ocultar el string del la DB
 * durante desarrollo
 */
require("dotenv").config();

const Koa = require('koa');
const Router = require('@koa/router');
const cors = require("@koa/cors");

const bodyParser = require('koa-bodyparser');

require("./src/database");

const SearchOrder = require("./src/models/SearchOrder");
const KoaLogger = require("koa-logger");

/**
 * Controladores que se encargarán de efectivizar las operaciones de los endpoints
 */
const { newSearchOrder } = require("./src/controllers/newSearchOrder");
const callThemisto = require("./src/controllers/callThemisto");

const app = new Koa();
const router = new Router()

app.use(bodyParser());
app.use(KoaLogger());
app.use(cors());

router.get("/", (ctx, next) => {
  ctx.body = "Bienvenid@ a Ganymede Web Service!";
});

/**
 * endpoint principal, donde se crea la orden solicitada y
 * se delega a Themisto la búsqueda.
 * 
 * Anda todo menos la devolución de Themisto del JSON,
 * que me genera conflicto.
 */
router.post('/api/product/search', async ctx => {

  console.log("ctx.request.body: \n", ctx.request.body);

  const preScrapingOrder = await newSearchOrder(ctx.request.body);

  console.log("preScrapingOrder después de newSearchOrder(ctx.request.body): ", preScrapingOrder) ;

  const postScrapingOrder = /* new SearchOrder();
  postScrapingOrder =  */await callThemisto(preScrapingOrder);

  console.log("postScrapingOrder después de callThemisto(preScrapingOrder): ", postScrapingOrder) ;

  const productsListPostScraping = postScrapingOrder.productList;
  const statusPostScraping = postScrapingOrder.status;

  console.log("preScrapingOrder._id antes de findByIdAndUpdate", preScrapingOrder._id, "\n");

  const finalOrder = await SearchOrder.findByIdAndUpdate(
    preScrapingOrder._id,
    {
      $set:
      // parece que en mongoose no es necesario poner $set
      {
        productList: productsListPostScraping,
        status: statusPostScraping
      }
    },
    {
      new: true
    }
  ); // verificar si reemplaza o no el Doc en la DB.
  
  console.log("finalOrder justo antes de irnos pa'las casa'...", finalOrder);  // El tema es que me devuelve la query y no el documento...

  // console.log(Object.toString(finalOrder)); -->> "function Object() { [native code] }"
  
  ctx.body = "Por lo menos, llegó al final, jajajaja...";
  
  /* ctx.body = JSON.stringify(finalOrder); --> Devuelve lo de abajo.
    TypeError: Converting circular structure to JSON
      --> starting at object with constructor 'NativeTopology'
      |     property 's' -> object with constructor 'Object'
      |     property 'sessionPool' -> object with constructor 'ServerSessionPool'
      --- property 'topology' closes the circle
      
      encontrar el error.

      JavaScript structures that include circular references can't be serialized with a"plain" JSON.stringify. Example:
        a = { name: 'Groucho' };
        b = { name: 'Harpo', sibling: a };
        a.sibling = b;
      Doing a JSON.stringify(a) will throw an error:
        TypeError: Converting circular structure to JSON

*/
});

/**
 * This endpoint receives an order ID, and responds with the order object
 * ...it works!
 */
router.get('/api/product/search-order/:orderID', async (ctx, next) => {

  const order = await SearchOrder.findById(ctx.params.orderID);
  ctx.body = order;

});

/**
 * This endpoint returns the full list of search orders
 * ...it works!
 */
router.get('/api/product/search-orders', async (cxt, next) => {
  const orderList = await SearchOrder.find();
  cxt.body = orderList;
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

app.listen(process.env.PORT, () => {
  console.log("Servidor Arriba.-")
});