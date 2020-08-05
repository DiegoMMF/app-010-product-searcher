const newSearchOrder = require("./controllers/newSearchOrder");
const getOrderById = require("./controllers/getOrderById");
const getAllSearchOrders = require("./controllers/getAllSearchOrders")
const getProductsByCategoryId = require("./controllers/getProductByCategoryId");

/* import Router from '@koa/router'
const router = new Router()

router.get('/ping',async(ctx)=>{
    try {
        ctx.body = {
            status:'success',
            data:'pong'
        }
    } catch (error) {
        
    }
})

export default router */

// This endpoint receives a JSON object with the search data and responds with the newly created order.
router.post('/api/product/search', newSearchOrder);

// This endpoint receives an order ID, and responds with the order object
router.get('/api/product/search-order/:orderID', getOrderById);

// This endpoint returns the full list of search orders
router.get('/api/product/search-orders', getAllSearchOrders);

// This endpoint returns the list of all products associated with the given product category ID
router.get('/api/product/category/:categoryID}', getProductsByCategoryId);